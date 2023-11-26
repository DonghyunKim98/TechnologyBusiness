import { Column, Columns, Stack } from '@mobily/stacks';
import { useNavigation } from '@react-navigation/native';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { PrimaryNavigatorProps } from '../../../primary.navigator';

import { Icon, ModalHeader, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimarySearchExerciseHeaderModuleProps = {};

export const PrimarySearchExerciseHeaderModule =
  memo<PrimarySearchExerciseHeaderModuleProps>(() => {
    const navigation = useNavigation<PrimaryNavigatorProps>();
    const [isBannerErased, setIsBannerErased] = useState(false);

    const handlePressBanner = () => {
      navigation.navigate('WebViewScreen', {
        url: 'https://imported-table-5bd.notion.site/50-ceee4d25eed14b71a16de8ba01440c67?pvs=4',
      });
    };
    const handlePressEraseIcon = () => {
      setIsBannerErased(true);
    };

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
            onPress={handlePressBanner}
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
                <Icon
                  name="close"
                  size={20}
                  color={palette['secondary']}
                  onPress={handlePressEraseIcon}
                />
              </Column>
            </Columns>
          </TouchableOpacity>
        )}
      </Stack>
    );
  });
