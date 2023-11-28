import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { FlatList, Image, TouchableOpacity } from 'react-native';

import { Able_GYM_IMG } from '@/assets';
import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type FacilitySelectContentModuleProps = {};

export const FacilitySelectContentModule =
  memo<FacilitySelectContentModuleProps>(() => {
    return (
      <FlatList
        data={[
          {
            title: '에이블짐 한양대점',
            rating: '4.4',
            specificLocation: '성동구 마조로 30 지하1층',
            img: Able_GYM_IMG,
          },
        ]}
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
        ListEmptyComponent={<Box style={{ height: 12 }} />}
        ListFooterComponent={<Box style={{ height: 40 }} />}
      />
    );
  });
