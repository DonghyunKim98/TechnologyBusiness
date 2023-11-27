import { Stack, Columns, Column, Box } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { LocationSearchModal } from './components';

import { Icon, Text } from '@/atoms';
import { ScrollView } from '@/layouts';
import { palette } from '@/utils';

type PrimarySearchExerciseContentsProps = {};

const DUMMY_EXERCISE = {
  '수원/화성': [
    { iconName: 'fitness-center', title: '피트니스', num: 4 },
    { iconName: 'self-improvement', title: '요가', num: 2 },
    { iconName: 'pool', title: '수영', num: 1 },
    { iconName: 'surfing', title: '서핑', num: 2 },
    { iconName: 'snowboarding', title: '스키 & 보드', num: 3 },
    { iconName: 'sports-tennis', title: '테니스', num: 2 },
  ],
  '건대입구/성수/왕십리': [
    { iconName: 'fitness-center', title: '피트니스', num: 3 },
    { iconName: 'self-improvement', title: '요가', num: 3 },
    { iconName: 'pool', title: '수영', num: 3 },
    { iconName: 'surfing', title: '서핑', num: 1 },
    { iconName: 'snowboarding', title: '스키 & 보드', num: 1 },
    { iconName: 'sports-tennis', title: '테니스', num: 4 },
  ],
  'not-selected': [
    { iconName: 'fitness-center', title: '피트니스', num: 0 },
    { iconName: 'self-improvement', title: '요가', num: 0 },
    { iconName: 'pool', title: '수영', num: 0 },
    { iconName: 'surfing', title: '서핑', num: 0 },
    { iconName: 'snowboarding', title: '스키 & 보드', num: 0 },
    { iconName: 'sports-tennis', title: '테니스', num: 0 },
  ],
};

export const PrimarySearchExerciseContents =
  memo<PrimarySearchExerciseContentsProps>(() => {
    const [isLocationSearchModalVisible, setIsSearchModalVisible] =
      useState(false);
    const [currentLocation, setCurrentLocation] = useState<
      '수원/화성' | '건대입구/성수/왕십리' | null
    >(null);

    const updateCurrentLocation = (
      newLocation: '수원/화성' | '건대입구/성수/왕십리',
    ) => {
      setCurrentLocation(newLocation);
    };

    const handlePressLocationSearch = () => {
      setIsSearchModalVisible(true);
    };
    const closeModal = () => {
      setIsSearchModalVisible(false);
    };

    return (
      <>
        <LocationSearchModal
          updateCurrentLocation={updateCurrentLocation}
          isVisibleModal={isLocationSearchModalVisible}
          closeModal={closeModal}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Stack space={48}>
            <Stack space={8}>
              <Stack space={4} horizontal align="center">
                <Icon name="place" size={20} color={palette['primary']} />
                <Text fontWeight="600" fontSize="16" color="primary">
                  지역 설정
                </Text>
              </Stack>
              <TouchableOpacity
                onPress={handlePressLocationSearch}
                style={{
                  backgroundColor: palette['gray-200'],
                  padding: 12,
                  borderRadius: 8,
                }}>
                <Columns space={8}>
                  <Column width="fluid">
                    <Text
                      fontWeight="500"
                      fontSize="14"
                      color={currentLocation ? 'gray-900' : 'gray-400'}>
                      {currentLocation ?? '어디서 운동을 즐기실 계획인가요?'}
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
              {DUMMY_EXERCISE[currentLocation ?? 'not-selected'].map(v => {
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
                            style={[
                              {
                                borderRadius: 8,
                                width: 24,
                                height: 24,
                              },
                              currentLocation !== null && {
                                backgroundColor: palette['primary'],
                              },
                            ]}>
                            <Text
                              fontWeight="500"
                              fontSize="14"
                              color={
                                currentLocation === null ? 'gray-400' : 'white'
                              }>
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
      </>
    );
  });
