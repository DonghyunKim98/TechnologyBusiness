import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

import { Modal, Text } from '@/atoms';
import { palette } from '@/utils';

type LocationSearchModalProps = {
  isVisibleModal: boolean;
  closeModal: () => void;
};

const BIG_LOCATIONS = [
  '서울',
  '경기',
  '제주',
  '인천',
  '강원',
  '경상',
  '전라',
  '충청',
];

const GYEONGGI_LOCATIONS = [
  '수원/화성',
  '가평/청평/양평',
  '고양/파주/김포',
  '의정부/포천/동두천',
  '용인/동탄',
  '오산/평택',
  '남양주/구리/성남/분당',
  '이천/광주/여주/하남',
  '부천/광명/시흥/안산',
  '안양/의왕/군포',
];

const SEOUL_LOCATIONS = [
  '건대입구/성수/왕십리',
  '강남/역삼/삼성',
  '신사/청담/압구정',
  '서초/교대/사당',
  '종로/인사동',
  '여의도',
  '성북/강북/노원/도봉',
  '잠실/송파/강동',
  '서울역/이태원/용산',
];

const mapLocation = {
  서울: SEOUL_LOCATIONS,
  경기: GYEONGGI_LOCATIONS,
};

export const LocationSearchModal = memo<LocationSearchModalProps>(
  ({ isVisibleModal, closeModal }) => {
    const [currentBigLocation, setCurrentBigLocation] = useState<
      '서울' | '경기'
    >('서울');

    return (
      <Modal
        isVisible={isVisibleModal}
        isBottomSheet
        onBackdropPress={() => closeModal()}>
        <Toast />
        <Stack
          paddingBottom={32}
          paddingX={24}
          space={24}
          style={{
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: palette['white'],
          }}>
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
          <Columns space={32}>
            <Column width="content">
              {BIG_LOCATIONS.map((v, idx) => {
                const isSelected = v === currentBigLocation;
                const handlePressBigLocation = () => {
                  if (v === '서울' || v === '경기') {
                    setCurrentBigLocation(v);
                    return;
                  }
                  Toast.show({
                    type: 'error',
                    text1: '아직 준비중인 서비스 구역입니다',
                  });
                };

                return (
                  <TouchableOpacity key={v} onPress={handlePressBigLocation}>
                    <Box
                      alignX="center"
                      alignY="center"
                      paddingX={16}
                      paddingY={12}
                      style={[
                        {
                          backgroundColor: palette['gray-200'],
                          borderBottomColor: palette['gray-400'],
                          borderBottomWidth: 0.5,
                        },
                        idx === 0 && {
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        },
                        idx === 7 && {
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderBottomWidth: 0,
                        },
                        isSelected && {
                          backgroundColor: palette['black'],
                        },
                      ]}>
                      <Text
                        fontWeight="500"
                        fontSize="12"
                        color={isSelected ? 'white' : 'gray-500'}>
                        {v}
                      </Text>
                    </Box>
                  </TouchableOpacity>
                );
              })}
            </Column>
            <Column width="fluid">
              <Stack space={16}>
                {mapLocation[currentBigLocation].map(v => {
                  const handlePressSmallLocation = () => {
                    if (v === '건대입구/성수/왕십리' || v === '수원/화성') {
                      //   setCurrentBigLocation(v);
                      return;
                    }
                    Toast.show({
                      type: 'error',
                      text1: '아직 준비중인 서비스 구역입니다',
                    });
                  };

                  return (
                    <TouchableOpacity
                      key={v}
                      onPress={handlePressSmallLocation}>
                      <Text fontWeight="600" fontSize="14" color="gray-800">
                        {v}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </Stack>
            </Column>
          </Columns>
        </Stack>
      </Modal>
    );
  },
);
