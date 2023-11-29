import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { TeacherItem } from './components';
import { TEACHER_DATA } from './teacher-select-content.const';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type TeacherSelectContentModuleProps = {};

export const TeacherSelectContentModule = memo<TeacherSelectContentModuleProps>(
  () => {
    return (
      <Box flex="fluid" paddingTop={32}>
        <Stack space={8}>
          <Stack space={4} horizontal align="center">
            <Icon name="person-search" size={20} color={palette['primary']} />
            <Text fontWeight="700" fontSize="16" color="primary">
              소속강사
            </Text>
          </Stack>
          <Stack space={12}>
            {TEACHER_DATA.map(v => {
              return <TeacherItem {...v} key={v.name} />;
            })}
          </Stack>
        </Stack>
      </Box>
    );
  },
);
