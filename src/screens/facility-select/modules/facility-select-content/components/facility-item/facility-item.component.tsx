import { Columns, Column, Stack, Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import { Icon, Modal, Text } from '@/atoms';
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
        {isVisibleModal && (
          <Modal
            isBottomSheet
            isVisible={isVisibleModal}
            onBackdropPress={closeModal}>
            <Stack space={32}>
              <Stack space={12}>
                <Box style={{ height: 24 }} alignX="center" alignY="center">
                  <Box
                    style={{
                      width: 50,
                      height: 3,
                      backgroundColor: palette['gray-400'],
                      borderRadius: 3,
                    }}
                  />
                </Box>
                <Columns space={12}>
                  <Column width="content">
                    <Icon name="place" size={26} color={palette['gray-900']} />
                  </Column>
                  <Column width="fluid">
                    <Stack space={8}>
                      <Text fontWeight="700" fontSize="22" color="gray-900">
                        {title}
                      </Text>
                      <Text fontWeight="400" fontSize="14" color="gray-900">
                        {specificLocation}
                      </Text>
                    </Stack>
                  </Column>
                </Columns>
              </Stack>
              <Stack space={24}>
                <Stack space={8}>
                  <Stack space={4} horizontal align="center">
                    <Icon name="star" color={palette['primary']} size={20} />
                    <Text color="primary" fontWeight="700" fontSize="16">
                      시설 후기
                    </Text>
                  </Stack>
                  <Stack space={12}>
                    {[
                      {
                        singleRating: 5,
                        content:
                          '강사님 너무 친절하시고, 열심히 가르쳐 주셔서 좋아요',
                      },
                      {
                        singleRating: 4,
                        content:
                          '제가 부족한 부분에 대해서 명쾌하게 설명해주시고, 식단도 철저히 관리해주셔서 너무 만족합니다. ',
                      },
                      {
                        singleRating: 5,
                        content: '친절하시고, 잘 가르쳐 주십니다. 만족합니다.',
                      },
                    ].map(({ singleRating, content }, idx) => {
                      return (
                        <Box
                          padding={12}
                          style={{
                            borderRadius: 8,
                            backgroundColor: palette['gray-200'],
                          }}
                          key={idx}>
                          <Stack space={8}>
                            <Stack horizontal space={16} align="center">
                              <Text
                                fontSize="14"
                                fontWeight="400"
                                color="gray-900">
                                {`익명 ${idx + 1}`}
                              </Text>
                              <Box direction="row">
                                {Array.from({ length: singleRating }).map(
                                  (_, index) => (
                                    <Icon
                                      key={index}
                                      name="star"
                                      color={palette['secondary']}
                                      size={16}
                                    />
                                  ),
                                )}
                              </Box>
                            </Stack>
                            <Text
                              fontWeight="400"
                              fontSize="12"
                              color="gray-700">
                              {content}
                            </Text>
                          </Stack>
                        </Box>
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack space={8}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 8,
                      backgroundColor: palette['primary'],
                      paddingHorizontal: 12,
                      paddingVertical: 14.5,
                    }}>
                    <Columns>
                      <Column width="fluid">
                        <Stack space={4} horizontal>
                          <Icon
                            name="person-search"
                            size={20}
                            color={palette['white']}
                          />
                          <Text fontWeight="700" fontSize="16" color="white">
                            강습 예약
                          </Text>
                        </Stack>
                      </Column>
                      <Column width="content">
                        <Icon
                          name="arrow-forward-ios"
                          size={20}
                          color={palette['white']}
                        />
                      </Column>
                    </Columns>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 8,
                      backgroundColor: palette['primary'],
                      paddingHorizontal: 12,
                      paddingVertical: 14.5,
                    }}>
                    <Columns>
                      <Column width="fluid">
                        <Stack space={4} horizontal>
                          <Icon
                            name="edit-calendar"
                            size={20}
                            color={palette['white']}
                          />
                          <Text fontWeight="700" fontSize="16" color="white">
                            시설 예약
                          </Text>
                        </Stack>
                      </Column>
                      <Column width="content">
                        <Icon
                          name="arrow-forward-ios"
                          size={20}
                          color={palette['white']}
                        />
                      </Column>
                    </Columns>
                  </TouchableOpacity>
                </Stack>
              </Stack>
            </Stack>
          </Modal>
        )}

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
