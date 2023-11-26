import { useBackHandler } from '@react-native-community/hooks';
import isUndefined from 'lodash/isUndefined';
import { ReactNode, memo } from 'react';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type ModalHeaderProps = {
  left:
    | {
        type: 'string';
        title: string | ReactNode;
      }
    | { type: 'icon' };
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
