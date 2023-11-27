import { Box, Column, Columns, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, Modal } from '@/atoms';
import { palette } from '@/utils';

export type SingleButtonProps = {
  label: string;
  onPress: () => void;
};

type DialogProps = {
  dialogVisible: boolean;
  onBackdropPress?: () => void;
  title: string;
  content?: string;
  okayButton?: SingleButtonProps;
  cancelButton?: SingleButtonProps;
};

export const Dialog = memo<DialogProps>(
  ({
    dialogVisible,
    onBackdropPress,
    title,
    content,
    okayButton,
    cancelButton,
  }) => {
    return (
      <Modal isVisible={dialogVisible} onBackdropPress={onBackdropPress}>
        <Box
          padding={16}
          style={{
            backgroundColor: palette['white'],
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            width: 327,
          }}>
          <Stack
            space={24}
            paddingBottom={24}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color="black" fontWeight="700" fontSize="16">
              {title}
            </Text>
            {content && (
              <Text
                color="gray-700"
                fontWeight="400"
                fontSize="14"
                textAlignment="center">
                {content}
              </Text>
            )}
          </Stack>
          <Columns space={12}>
            {cancelButton && (
              <Column>
                <TouchableOpacity
                  onPress={cancelButton.onPress}
                  style={{
                    borderRadius: 8,
                    borderColor: palette['primary'],
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                  }}>
                  <Text fontWeight="500" fontSize="14" color="primary">
                    {cancelButton.label}
                  </Text>
                </TouchableOpacity>
              </Column>
            )}
            {okayButton && (
              <Column>
                <TouchableOpacity
                  onPress={okayButton.onPress}
                  style={{
                    borderRadius: 8,
                    borderColor: palette['primary'],
                    backgroundColor: palette['primary'],
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                  }}>
                  <Text fontWeight="500" fontSize="14" color="white">
                    {okayButton.label}
                  </Text>
                </TouchableOpacity>
              </Column>
            )}
          </Columns>
        </Box>
      </Modal>
    );
  },
);
