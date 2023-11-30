import { Box, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';

import { FacilityReservationScreenNavigationProps } from '../../facility-reservation.screen';

import { Icon, ModalHeader, Text } from '@/atoms';
import { $creditState } from '@/state';
import { palette } from '@/utils';

type FacilityReservationHeaderModuleProps = {};

export const FacilityReservationHeaderModule =
  memo<FacilityReservationHeaderModuleProps>(() => {
    const navigation =
      useNavigation<FacilityReservationScreenNavigationProps>();

    const handlePressExit = () => {
      navigation.goBack();
    };

    const { credit } = useRecoilValue($creditState);

    return (
      <Stack space={32}>
        <ModalHeader left={{ type: 'icon' }} onPressExit={handlePressExit} />
        <Box direction="row" alignX="between" alignY="center">
          <Stack horizontal space={4} align="center">
            <Icon name="edit-calendar" size={26} color={palette['gray-900']} />
            <Text fontWeight="700" fontSize="22" color="gray-900">
              시설 예약
            </Text>
          </Stack>
          <Stack horizontal space={8}>
            <Text fontWeight="400" fontSize="14" color="secondary">
              보유 크래딧
            </Text>
            <Box direction="row" alignY="center">
              <Text fontWeight="400" fontSize="14" color="secondary">
                {credit}
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
  });
