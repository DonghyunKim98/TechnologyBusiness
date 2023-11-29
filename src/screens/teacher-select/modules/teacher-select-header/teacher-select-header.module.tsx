import { Column, Columns, Stack } from '@mobily/stacks';
import { useNavigation, useRoute } from '@react-navigation/native';
import { memo } from 'react';

import {
  TeacherSelectScreenNavigationProps,
  TeacherSelectScreenNavigationRouteProps,
} from '../../teacher-select.screen';

import { Icon, ModalHeader, Text } from '@/atoms';
import { palette } from '@/utils';

type TeacherSelectHeaderModuleProps = {};

export const TeacherSelectHeaderModule = memo<TeacherSelectHeaderModuleProps>(
  () => {
    const navigation = useNavigation<TeacherSelectScreenNavigationProps>();
    const {
      params: { specificLocation, title },
    } = useRoute<TeacherSelectScreenNavigationRouteProps>();

    return (
      <Stack space={32}>
        <ModalHeader
          left={{ type: 'icon' }}
          onPressExit={() => navigation.goBack()}
        />
        <Columns space={4}>
          <Column width="content">
            <Icon
              name="place"
              size={26}
              color={palette['gray-900']}
              style={{ marginTop: 5 }}
            />
          </Column>
          <Column>
            <Stack space={8}>
              <Text fontWeight="700" fontSize="22" color="gray-900">
                {title}
              </Text>
              <Text fontWeight="400" fontSize="14" color="gray-900">
                {specificLocation}
              </Text>
            </Stack>
          </Column>
        </Columns>
      </Stack>
    );
  },
);
