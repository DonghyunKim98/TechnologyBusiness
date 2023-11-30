import { Box, Stack } from '@mobily/stacks';
import dayjs from 'dayjs';
import sample from 'lodash/sample';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';

import {
  AFTERNOON_TIMES,
  MORNING_TIMES,
} from './facility-reservation-contents.const';

import { Text } from '@/atoms';
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
    const [selectedDate, setSelectedDate] = useState<null | string>(null);

    const handlePressDay = (day: DateData) => {
      setSelectedDate(day.dateString);
    };

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
              {MORNING_TIMES.map(v => {
                const isAvailableByRandom = sample([true, false]);

                return (
                  <TouchableOpacity
                    key={v}
                    disabled={!isAvailableByRandom}
                    style={[
                      {
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        paddingVertical: 12,
                        backgroundColor: palette['primary'],
                      },
                      !isAvailableByRandom && {
                        backgroundColor: palette['gray-200'],
                      },
                    ]}>
                    <Text
                      fontWeight="400"
                      fontSize="14"
                      color={isAvailableByRandom ? 'white' : 'gray-400'}>
                      {v}
                    </Text>
                  </TouchableOpacity>
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
              {AFTERNOON_TIMES.map(v => {
                const isAvailableByRandom = sample([true, false]);

                return (
                  <TouchableOpacity
                    key={v}
                    disabled={!isAvailableByRandom}
                    style={[
                      {
                        borderRadius: 8,
                        paddingHorizontal: 20,
                        paddingVertical: 12,
                        backgroundColor: palette['primary'],
                      },
                      !isAvailableByRandom && {
                        backgroundColor: palette['gray-200'],
                      },
                    ]}>
                    <Text
                      fontWeight="400"
                      fontSize="14"
                      color={isAvailableByRandom ? 'white' : 'gray-400'}>
                      {v}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </Box>
          </Stack>
        )}
      </Stack>
    );
  });
