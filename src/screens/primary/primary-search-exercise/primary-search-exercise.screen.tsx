import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, ModalHeader, Text } from '@/atoms';
import { BasicLayout, ScrollView } from '@/layouts';
import { palette } from '@/utils';

const DUMMY_EXERCISES = [
  { iconName: 'fitness-center', title: '피트니스', num: 6 },
  { iconName: 'self-improvement', title: '요가', num: 3 },
  { iconName: 'pool', title: '수영', num: 3 },
  { iconName: 'surfing', title: '서핑', num: 1 },
  { iconName: 'snowboarding', title: '스키 & 보드', num: 0 },
  { iconName: 'sports-tennis', title: '테니스', num: 4 },
];

export const PrimarySearchExerciseScreen = () => {
  const [isBannerErased, setIsBannerErased] = useState(false);

  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'search-off',
          title: '운동 찾기',
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 48 }}>
        <Stack space={48}>
          {!isBannerErased && (
            <TouchableOpacity
              style={{
                backgroundColor: palette['gray-200'],
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 8,
              }}>
              <Columns space={8}>
                <Column width="fluid">
                  <Text fontWeight="500" fontSize="14" color="secondary">
                    겨울 스노우보드 특가! 50% 할인! 당장 예약!
                  </Text>
                </Column>
                <Column width="content">
                  <Icon name="close" size={20} color={palette['secondary']} />
                </Column>
              </Columns>
            </TouchableOpacity>
          )}
          <Stack space={8}>
            <Stack space={4} horizontal align="center">
              <Icon name="place" size={20} color={palette['primary']} />
              <Text fontWeight="600" fontSize="16" color="primary">
                지역 설정
              </Text>
            </Stack>
            <TouchableOpacity
              style={{
                backgroundColor: palette['gray-200'],
                padding: 12,
                borderRadius: 8,
              }}>
              <Columns space={8}>
                <Column width="fluid">
                  <Text fontWeight="500" fontSize="14" color="gray-400">
                    어디서 운동을 즐기실 계획인가요?
                  </Text>
                </Column>
                <Column width="content">
                  <Icon name="search" size={20} color={palette['gray-900']} />
                </Column>
              </Columns>
            </TouchableOpacity>
          </Stack>
          <Stack space={8}>
            <Stack space={4} horizontal align="center">
              <Icon name="list-alt" size={20} color={palette['primary']} />
              <Text fontWeight="600" fontSize="16" color="primary">
                종목 선택
              </Text>
            </Stack>
            {DUMMY_EXERCISES.map(v => {
              return (
                <TouchableOpacity
                  key={v.title}
                  style={{
                    backgroundColor: palette['gray-200'],
                    padding: 12,
                    borderRadius: 8,
                  }}>
                  <Columns space={8} alignX="center" alignY="center">
                    <Column width="fluid">
                      <Stack horizontal align="center" space={4}>
                        <Icon
                          name={v.iconName}
                          size={16}
                          color={palette['gray-700']}
                        />
                        <Text fontWeight="500" fontSize="14" color="gray-700">
                          {v.title}
                        </Text>
                      </Stack>
                    </Column>
                    <Column width="content">
                      <Stack horizontal align="center" space={8}>
                        <Box
                          alignX="center"
                          alignY="center"
                          style={{
                            backgroundColor: palette['primary'],
                            borderRadius: 8,
                            width: 24,
                            height: 24,
                          }}>
                          <Text fontWeight="500" fontSize="14" color="white">
                            {v.num}
                          </Text>
                        </Box>
                        <Icon
                          name="arrow-forward-ios"
                          size={16}
                          color={palette['gray-400']}
                        />
                      </Stack>
                    </Column>
                  </Columns>
                </TouchableOpacity>
              );
            })}
          </Stack>
        </Stack>
      </ScrollView>
    </BasicLayout>
  );
};
