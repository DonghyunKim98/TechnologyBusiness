import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type TeacherItemProps = {
  name: string;
  star: string;
  minNumOfReserve: number;
};

export const TeacherItem = memo<TeacherItemProps>(
  ({ name, star, minNumOfReserve }) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const handlePressItem = () => {
      setIsVisibleModal(true);
    };

    return (
      <TouchableOpacity
        style={{
          backgroundColor: palette['gray-200'],
          borderRadius: 8,
          padding: 12,
        }}>
        <Columns alignY="center" space={12}>
          <Column width="fluid">
            <Stack horizontal align="center" space={12}>
              <Box
                padding={18}
                style={{
                  borderRadius: 8,
                  backgroundColor: palette['gray-400'],
                }}>
                <Icon
                  name="person-outline"
                  size={24}
                  color={palette['white']}
                />
              </Box>
              <Text fontWeight="400" fontSize="16" color="gray-900">
                {`강사 ${name}`}
              </Text>
              <Box direction="row" alignY="center">
                <Icon name="star" size={16} color={palette['secondary']} />
                <Text fontWeight="400" fontSize="14" color="secondary">
                  {`${star}점`}
                </Text>
              </Box>
            </Stack>
          </Column>
          <Column width="content">
            <Icon
              name="arrow-forward-ios"
              size={20}
              color={palette['primary']}
            />
          </Column>
        </Columns>
      </TouchableOpacity>
    );
  },
);
