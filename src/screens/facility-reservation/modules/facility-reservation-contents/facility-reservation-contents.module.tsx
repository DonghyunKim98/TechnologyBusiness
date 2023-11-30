import { Box, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { memo, useState } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { useDidUpdate } from 'rooks';

import {
  FacilityReservationScreenNavigationProps,
  FacilityReservationScreenNavigationRouteProps,
} from '../../facility-reservation.screen';
import { TimeReservationComponent } from '../components';

import {
  AFTERNOON_TIMES,
  MORNING_TIMES,
} from './facility-reservation-contents.const';

import { Dialog, SingleButtonProps, Text } from '@/atoms';
import { palette } from '@/utils';

type FacilityReservationContentsModuleProps = {};

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

export const FacilityReservationContentsModule =
  memo<FacilityReservationContentsModuleProps>(() => {
    const {
      params: { title },
    } = useRoute<FacilityReservationScreenNavigationRouteProps>();
    const navigation =
      useNavigation<FacilityReservationScreenNavigationProps>();

    const [selectedDate, setSelectedDate] = useState<null | string>(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState({
      time: '',
      pressed: 0,
    });
    const [isFirstConfirmButtonPressed, setIsFirstConfirmButtonPressed] =
      useState(false);

    const handlePressDay = (day: DateData) => {
      setSelectedDate(day.dateString);
    };

    useDidUpdate(() => {
      setDialogVisible(true);
    }, [selectedTime]);

    const closeDialog = () => {
      setDialogVisible(false);
    };

    const handlePressCancelButton = () => {
      closeDialog();
    };

    const handlePressFirstConfirmButton = () => {
      setIsFirstConfirmButtonPressed(true);
    };

    const handlePressSecondConfirmButton = () => {
      closeDialog();
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'PrimaryStack',
            params: { screen: 'PrimaryExerciseScheduleScreen' },
          },
        ],
      });
    };

    const mapOkayButton: SingleButtonProps = isFirstConfirmButtonPressed
      ? { label: '일정 확인하기', onPress: handlePressSecondConfirmButton }
      : { label: '확인', onPress: handlePressFirstConfirmButton };

    return (
      <Stack marginTop={16} space={24}>
        <Box
          style={{ backgroundColor: palette['gray-200'], borderRadius: 8 }}
          paddingY={16}>
          <Calendar
            style={{ backgroundColor: palette['gray-200'] }}
            monthFormat={'yyyy년 MM월'}
            onDayPress={handlePressDay}
            hideExtraDays={true}
            maxDate={dayjs().add(1, 'M').format('YYYY-MM-DD')}
            minDate={dayjs().format('YYYY-MM-DD')}
            markedDates={{
              ...(selectedDate && {
                [selectedDate]: {
                  selected: true,
                  disableTouchEvent: true,
                  selectedColor: palette['gray-400'],
                  selectedTextColor: palette['gray-900'],
                },
              }),
            }}
            theme={{
              calendarBackground: palette['gray-200'],
              backgroundColor: palette['gray-200'],
              todayTextColor: palette['gray-800'],
              textDayFontFamily: 'Roboto-Medium',
              textMonthFontFamily: 'Roboto-Medium',
            }}
          />
        </Box>
        {selectedDate && (
          <Stack space={8}>
            <Text fontWeight="700" fontSize="16" color="gray-900">
              오전
            </Text>
            <Box
              direction="row"
              alignX="between"
              wrap="wrap"
              style={{ gap: 8 }}>
              {MORNING_TIMES.map(time => {
                const handlePressTimeReservation = () => {
                  setSelectedTime(prev => ({
                    time: `오전 ${time}`,
                    pressed: prev.pressed + 1,
                  }));
                };

                return (
                  <TimeReservationComponent
                    time={time}
                    onPress={handlePressTimeReservation}
                  />
                );
              })}
            </Box>
          </Stack>
        )}
        {selectedDate && (
          <Stack space={8}>
            <Text fontWeight="700" fontSize="16" color="gray-900">
              오후
            </Text>
            <Box
              direction="row"
              alignX="between"
              wrap="wrap"
              style={{ gap: 8 }}>
              {AFTERNOON_TIMES.map(time => {
                const handlePressTimeReservation = () => {
                  setSelectedTime(prev => ({
                    time: `오전 ${time}`,
                    pressed: prev.pressed + 1,
                  }));
                };

                return (
                  <TimeReservationComponent
                    time={time}
                    onPress={handlePressTimeReservation}
                  />
                );
              })}
            </Box>
          </Stack>
        )}
        <Dialog
          dialogVisible={dialogVisible}
          title={`${title} ${dayjs(selectedDate).format('MM월 DD일')} ${
            selectedTime.time
          } 예약하시겠습니까? 1크레딧이 차감됩니다`}
          cancelButton={
            isFirstConfirmButtonPressed
              ? undefined
              : { label: '취소', onPress: handlePressCancelButton }
          }
          okayButton={mapOkayButton}
          onBackdropPress={closeDialog}
        />
      </Stack>
    );
  });
