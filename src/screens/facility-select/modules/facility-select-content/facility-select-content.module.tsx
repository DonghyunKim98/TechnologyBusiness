import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import { FACILITY_DATA } from '../../facility-select.const';
import { FacilitySelectScreenNavigationRouteProps } from '../../facility-select.screen';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type FacilitySelectContentModuleProps = {};

export const FacilitySelectContentModule =
  memo<FacilitySelectContentModuleProps>(() => {
    const {
      params: { iconName, location },
    } = useRoute<FacilitySelectScreenNavigationRouteProps>();

    const data = FACILITY_DATA[location][iconName];

    return (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const { title, rating, specificLocation, img } = item;

          return (
            <TouchableOpacity
              style={{
                backgroundColor: palette['gray-200'],
                padding: 12,
                borderRadius: 8,
              }}>
              <Columns space={12} alignY="center">
                <Column width="fluid">
                  <Stack space={8} horizontal align="center">
                    <Image
                      source={img}
                      style={{ width: 60, height: 60, borderRadius: 8 }}
                    />
                    <Stack space={12}>
                      <Stack space={8} align="center" horizontal>
                        <Text fontWeight="700" fontSize="14" color="gray-900">
                          {title}
                        </Text>
                        <Box direction="row" alignY="center">
                          <Icon
                            name="star"
                            color={palette['secondary']}
                            size={16}
                          />
                          <Text
                            fontWeight="700"
                            fontSize="14"
                            color="secondary">
                            {rating}
                          </Text>
                        </Box>
                      </Stack>
                      <Text fontWeight="400" fontSize="12" color="gray-700">
                        {specificLocation}
                      </Text>
                    </Stack>
                  </Stack>
                </Column>
                <Column width="content">
                  <Icon
                    name="arrow-forward-ios"
                    size={20}
                    color={palette['primary']}
                  />
                </Column>
              </Columns>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={<Box style={{ height: 32 }} />}
        ItemSeparatorComponent={() => <Box style={{ height: 12 }} />}
        ListEmptyComponent={<Box style={{ height: 12 }} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
