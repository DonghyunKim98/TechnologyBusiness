import { Columns, Column, Stack, Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import { FacilityModal } from '../facility-modal';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type FacilityItemProps = {
  title: string;
  rating: string;
  specificLocation: string;
  img: ImageSourcePropType;
};

export const FacilityItem = memo<FacilityItemProps>(
  ({ title, rating, specificLocation, img }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const handlePressItem = () => {
      setIsVisibleModal(true);
    };

    const closeModal = () => {
      setIsVisibleModal(false);
    };

    return (
      <>
        <FacilityModal
          isVisibleModal={isVisibleModal}
          closeModal={closeModal}
          title={title}
          specificLocation={specificLocation}
        />
        <TouchableOpacity
          onPress={handlePressItem}
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
                      <Text fontWeight="700" fontSize="14" color="secondary">
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
      </>
    );
  },
);
