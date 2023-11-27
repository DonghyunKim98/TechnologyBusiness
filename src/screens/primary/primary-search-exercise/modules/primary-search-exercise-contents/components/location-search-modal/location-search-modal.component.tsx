import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';

import { Modal } from '@/atoms';
import { palette } from '@/utils';

type LocationSearchModalProps = {
  isVisibleModal: boolean;
  closeModal: () => void;
};

export const LocationSearchModal = memo<LocationSearchModalProps>(
  ({ isVisibleModal, closeModal }) => {
    return (
      <Modal
        isVisible={isVisibleModal}
        isBottomSheet
        onBackdropPress={() => closeModal()}>
        <Stack
          paddingBottom={32}
          paddingX={24}
          space={12}
          style={{
            borderTopRightRadius: 24,
            borderTopLeftRadius: 24,
            backgroundColor: palette['white'],
          }}>
          <Box style={{ height: 24 }} alignX="center" alignY="center">
            <Box
              style={{
                width: 50,
                height: 3,
                backgroundColor: palette['gray-400'],
                borderRadius: 3,
              }}
            />
          </Box>
        </Stack>
      </Modal>
    );
  },
);
