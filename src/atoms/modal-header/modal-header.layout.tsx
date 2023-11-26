import { Stack } from '@mobily/stacks';
import { useBackHandler } from '@react-native-community/hooks';
import isUndefined from 'lodash/isUndefined';
import { memo } from 'react';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type ModalHeaderProps = {
  left:
    | {
        type: 'string';
        title: string;
      }
    | { type: 'icon' }
    | {
        type: 'icon-string';
        iconName: string;
        title: string;
      };
  onPressExit?: () => void;
};

export const ModalHeader = memo<ModalHeaderProps>(({ left, onPressExit }) => {
  useBackHandler(() => {
    if (!isUndefined(onPressExit)) {
      onPressExit();
      return true;
    }

    return false;
  });

  if (left.type === 'string') {
    return (
      <Text fontWeight="700" fontSize="22" color="gray-900">
        {left.title}
      </Text>
    );
  }

  if (left.type === 'icon-string') {
    return (
      <Stack horizontal space={4} align="center">
        <Icon name={left.iconName} size={26} color={palette['gray-900']} />
        <Text fontWeight="700" fontSize="22" color="gray-900">
          {left.title}
        </Text>
      </Stack>
    );
  }

  const handlePressBackIcon = () => {
    onPressExit?.();
  };

  return (
    <Icon
      name="arrow-back-ios"
      onPress={handlePressBackIcon}
      size={24}
      color={palette['black']}
    />
  );
});
