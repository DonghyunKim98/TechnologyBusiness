import { Stack, Box, Columns, Column } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  TeacherSelectScreenNavigationProps,
  TeacherSelectScreenNavigationRouteProps,
} from '../../../../teacher-select.screen';

import { TEACHER_REVIEW_DATA } from './teacher-modal.const';

import { Icon, Modal, Text } from '@/atoms';
import { palette } from '@/utils';

type TeacherModalProps = {
  isVisibleModal: boolean;
  closeModal: () => void;
  name: string;
  star: string;
  minNumOfReserve: number;
};

export const TeacherModal = memo<TeacherModalProps>(
  ({ isVisibleModal, closeModal, name, star, minNumOfReserve }) => {
    const {
      params: { title },
    } = useRoute<TeacherSelectScreenNavigationRouteProps>();
    const navigation = useNavigation<TeacherSelectScreenNavigationProps>();

    const handlePressClassReserve = () => {
      closeModal();
      navigation.navigate('TeacherReservationScreen', {
        name,
        facility: title,
      });
    };

    return (
      <Modal
        isBottomSheet
        isVisible={isVisibleModal}
        onBackdropPress={closeModal}>
        <Stack
          space={32}
          style={{
            backgroundColor: palette['white'],
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
          }}
          paddingX={24}
          paddingBottom={32}>
          <Stack space={24}>
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
              <Columns space={12} alignX="center">
                <Column width="content">
                  <Box
                    padding={28}
                    style={{
                      borderRadius: 8,
                      backgroundColor: palette['gray-400'],
                    }}>
                    <Icon
                      name="person-outline"
                      size={24}
                      color={palette['white']}
                    />
                  </Box>
                </Column>
                <Column width="fluid">
                  <Stack space={4}>
                    <Stack horizontal align="center" space={12}>
                      <Text fontWeight="700" fontSize="16" color="gray-900">
                        {`강사 ${name}`}
                      </Text>
                      <Box direction="row" alignY="center">
                        <Icon
                          name="star"
                          size={16}
                          color={palette['secondary']}
                        />
                        <Text fontWeight="400" fontSize="14" color="secondary">
                          {`${star}점`}
                        </Text>
                      </Box>
                    </Stack>
                    <Stack space={4}>
                      <Text fontWeight="400" fontSize="14" color="gray-700">
                        {`최소 예약 횟수 : ${minNumOfReserve}회`}
                      </Text>
                      <Text fontWeight="400" fontSize="14" color="gray-700">
                        {`회당 크레딧: 2크레딧`}
                      </Text>
                    </Stack>
                  </Stack>
                </Column>
              </Columns>
            </Stack>
            <Stack space={8}>
              <Stack horizontal space={4} align="center">
                <Icon name="summarize" size={20} color={palette['primary']} />
                <Text fontWeight="700" fontSize="16" color="primary">
                  강사 약력
                </Text>
              </Stack>
              <Box
                padding={12}
                style={{
                  backgroundColor: palette['gray-200'],
                  borderRadius: 8,
                }}>
                <Stack space={4}>
                  <Text fontWeight="400" fontSize="14" color="gray-700">
                    {'· 한양대학교 체육학과 졸업'}
                  </Text>
                  <Text fontWeight="400" fontSize="14" color="gray-700">
                    {'· 2021 올해의 최고 강사 수상'}
                  </Text>
                </Stack>
              </Box>
            </Stack>
            <Stack space={8}>
              <Stack horizontal space={4} align="center">
                <Icon name="star" size={20} color={palette['primary']} />
                <Text fontWeight="700" fontSize="16" color="primary">
                  강사 후기
                </Text>
              </Stack>
              {TEACHER_REVIEW_DATA.map(({ content, singleRating }, idx) => {
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
                        <Text fontSize="14" fontWeight="400" color="gray-900">
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
                      <Text fontWeight="400" fontSize="12" color="gray-700">
                        {content}
                      </Text>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
            <Text
              fontWeight="400"
              fontSize="12"
              color={'gray-700'}
              textAlignment="center">
              후기 더보기
            </Text>
            <TouchableOpacity
              onPress={handlePressClassReserve}
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
          </Stack>
        </Stack>
      </Modal>
    );
  },
);
