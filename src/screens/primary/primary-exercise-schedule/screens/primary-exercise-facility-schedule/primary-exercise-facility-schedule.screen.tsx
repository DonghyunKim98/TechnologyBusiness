import { Box, Column, Columns, Stack } from '@mobily/stacks';
import dayjs from 'dayjs';
import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDidUpdate } from 'rooks';

import { Dialog, Icon, Text } from '@/atoms';
import { palette } from '@/utils';

const DUMMY_DATA = [
  {
    title: '에이블짐 한양대점',
    iconName: 'fitness-center',
    date: dayjs('2023-11-01 10:00'),
  },
];

export const PrimaryExerciseFacilityScheduleScreen = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedData, setSelectedData] = useState({
    id: -1,
    pressed: 0,
  });
  useDidUpdate(() => {
    setDialogVisible(true);
  }, [selectedData]);

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const handlePressCancelButton = () => {
    closeDialog();
  };

  const handlePressConfirmButton = () => {
    closeDialog();
  };

  return (
    <>
      <Dialog
        dialogVisible={dialogVisible}
        title="예약취소"
        content={`${DUMMY_DATA[selectedData.id]?.title} ${DUMMY_DATA[
          selectedData.id
        ]?.date.format(
          'MM월 DD일 HH:mm',
        )}\n예약 취소하시겠습니까? 1크레딧이 환불됩니다.`}
        cancelButton={{ label: '취소', onPress: handlePressCancelButton }}
        okayButton={{ label: '확인', onPress: handlePressConfirmButton }}
        onBackdropPress={closeDialog}
      />
      <FlatList
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: palette['white'],
        }}
        ListHeaderComponent={() => <Box style={{ height: 32 }} />}
        ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
        data={DUMMY_DATA}
        renderItem={({ item, index }) => {
          const handlePressChangeReservation = () => {};

          const handlePressDeleteReservation = () => {
            setSelectedData(prev => ({
              id: index,
              pressed: prev.pressed + 1,
            }));
          };

          return (
            <Stack
              padding={12}
              space={16}
              style={{ backgroundColor: palette['gray-200'] }}>
              <Stack space={12}>
                <Stack space={4} horizontal align="center">
                  <Icon
                    name={item.iconName}
                    color={palette['gray-900']}
                    size={16}
                  />

                  <Text fontWeight="700" fontSize="16" color="gray-900">
                    {item.title}
                  </Text>
                </Stack>
                <Text fontWeight="400" fontSize="14" color="gray-900">
                  {item.date.format('MM월 DD일 HH:mm')}
                </Text>
              </Stack>
              <Columns space={8}>
                <Column width="fluid">
                  <TouchableOpacity
                    style={{
                      backgroundColor: palette['white'],
                      padding: 8,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Stack horizontal space={4} align="center">
                      <Icon
                        name="edit-calendar"
                        size={16}
                        color={palette['blue-500']}
                      />
                      <Text fontWeight="400" fontSize="14" color="blue-500">
                        에약 변경
                      </Text>
                    </Stack>
                  </TouchableOpacity>
                </Column>
                <Column width="fluid">
                  <TouchableOpacity
                    onPress={handlePressDeleteReservation}
                    style={{
                      backgroundColor: palette['white'],
                      padding: 8,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Stack horizontal space={4} align="center">
                      <Icon name="clear" size={16} color={palette['red-500']} />
                      <Text fontWeight="400" fontSize="14" color="red-500">
                        에약 취소
                      </Text>
                    </Stack>
                  </TouchableOpacity>
                </Column>
              </Columns>
            </Stack>
          );
        }}
      />
    </>
  );
};
