import { Box, Column, Columns } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '@/atoms';
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
        <Columns>
          <Column width="fluid">
            <Box
              padding={18}
              style={{
                borderRadius: 8,
                backgroundColor: palette['gray-400'],
              }}>
              <Icon name="person-outline" size={24} color={palette['white']} />
            </Box>
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
