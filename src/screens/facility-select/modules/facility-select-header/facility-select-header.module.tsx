import { Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import { mapIconNameByTitle } from '../../facility-select.const';
import {
  FacilitySelectScreenNavigationProps,
  FacilitySelectScreenNavigationRouteProps,
} from '../../facility-select.screen';

import { Icon, ModalHeader, Text } from '@/atoms';
import { palette } from '@/utils';

type FacilitySelectHeaderModuleProps = {};

export const FacilitySelectHeaderModule = memo<FacilitySelectHeaderModuleProps>(
  () => {
    const navigation = useNavigation<FacilitySelectScreenNavigationProps>();
    const {
      params: { iconName, location },
    } = useRoute<FacilitySelectScreenNavigationRouteProps>();

    return (
      <Stack space={16}>
        <ModalHeader
          left={{
            type: 'back-icon-string',
            title: mapIconNameByTitle[iconName],
            iconName,
          }}
          onPressExit={() => {
            navigation.goBack();
          }}
        />
        <Stack horizontal space={4} align="center">
          <Icon name="place" size={20} color={palette['primary']} />
          <Text fontWeight="700" fontSize="16" color="primary">
            {location}
          </Text>
        </Stack>
      </Stack>
    );
  },
);
