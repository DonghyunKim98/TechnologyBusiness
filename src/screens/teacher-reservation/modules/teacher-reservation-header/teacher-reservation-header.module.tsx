import { Box, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  TeacherReservationScreenNavigationProps,
  TeacherReservationScreenNavigationRouteProps,
} from '../../teacher-reservation.screen';

import { Icon, ModalHeader, Text } from '@/atoms';
import { palette } from '@/utils';

export type TeacherReservationHeaderModule = {};

export const TeacherReservationHeader = memo<TeacherReservationHeaderModule>(
  () => {
    const {
      params: { name },
    } = useRoute<TeacherReservationScreenNavigationRouteProps>();
    const navigation = useNavigation<TeacherReservationScreenNavigationProps>();

    const handlePressExit = () => {
      navigation.goBack();
    };

    return (
      <Stack space={32}>
        <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressExit} />
        <Box direction="row" alignX="between" alignY="center">
          <Stack horizontal space={4} align="center">
            <Icon name="person-outline" size={26} color={palette['gray-900']} />
            <Text fontWeight="700" fontSize="22" color="gray-900">
              {`강사 ${name}`}
            </Text>
          </Stack>
          <Stack horizontal space={8}>
            <Text fontWeight="400" fontSize="14" color="secondary">
              보유 크래딧
            </Text>
            <Box direction="row" alignY="center">
              <Text fontWeight="400" fontSize="14" color="secondary">
                35
              </Text>
              <Icon
                name="monetization-on"
                size={16}
                color={palette['secondary']}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
    );
  },
);
