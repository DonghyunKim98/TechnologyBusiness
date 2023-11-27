import { Box, Stack, Columns, Column } from '@mobily/stacks';
import dayjs from 'dayjs';
import { FlatList, TouchableOpacity } from 'react-native';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

export const PrimaryExerciseClassScheduleScreen = () => {
  return (
    <FlatList
      contentContainerStyle={{ flexGrow: 1, backgroundColor: palette['white'] }}
      ListHeaderComponent={() => <Box style={{ height: 32 }} />}
      ItemSeparatorComponent={() => <Box style={{ height: 20 }} />}
      data={[
        {
          title: '강사 젬젬',
          facility: '에이블짐 한양대점',
          date: dayjs('2023-11-01 10:00'),
        },
      ]}
      renderItem={({ item }) => {
        return (
          <Stack
            padding={12}
            space={16}
            style={{ backgroundColor: palette['gray-200'] }}>
            <Stack space={12}>
              <Stack space={12} horizontal align="center">
                <Stack space={4} horizontal align="center">
                  <Icon
                    name="person-outline"
                    color={palette['gray-900']}
                    size={16}
                  />
                  <Text fontWeight="700" fontSize="16" color="gray-900">
                    {item.title}
                  </Text>
                </Stack>
                <Stack space={4} horizontal align="center">
                  <Icon name="place" color={palette['gray-700']} size={14} />
                  <Text fontWeight="400" fontSize="12" color="gray-700">
                    {item.facility}
                  </Text>
                </Stack>
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
  );
};
