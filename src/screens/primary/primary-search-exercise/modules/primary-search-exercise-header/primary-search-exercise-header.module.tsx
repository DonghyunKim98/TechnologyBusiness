import { Column, Columns, Stack } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, ModalHeader, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimarySearchExerciseHeaderModuleProps = {};

export const PrimarySearchExerciseHeaderModule =
  memo<PrimarySearchExerciseHeaderModuleProps>(() => {
    const [isBannerErased, setIsBannerErased] = useState(false);

    return (
      <Stack space={48} paddingBottom={48}>
        <ModalHeader
          left={{
            type: 'icon-string',
            iconName: 'search-off',
            title: '운동 찾기',
          }}
        />
        {!isBannerErased && (
          <TouchableOpacity
            style={{
              backgroundColor: palette['gray-200'],
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 8,
            }}>
            <Columns space={8}>
              <Column width="fluid">
                <Text fontWeight="500" fontSize="14" color="secondary">
                  겨울 스노우보드 특가! 50% 할인! 당장 예약!
                </Text>
              </Column>
              <Column width="content">
                <Icon name="close" size={20} color={palette['secondary']} />
              </Column>
            </Columns>
          </TouchableOpacity>
        )}
      </Stack>
    );
  });
