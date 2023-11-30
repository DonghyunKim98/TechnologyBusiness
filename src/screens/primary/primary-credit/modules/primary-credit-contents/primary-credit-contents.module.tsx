import { Stack, Columns, Column } from '@mobily/stacks';
import { memo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { useDidUpdate } from 'rooks';

import { CREDITS } from './primary-credit-content.const';

import { Dialog, Icon, Text } from '@/atoms';
import { $creditState } from '@/state';
import { palette } from '@/utils';

type PrimaryCreditContentsModuleProps = {};

export const PrimaryCreditContentsModule =
  memo<PrimaryCreditContentsModuleProps>(() => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedCredit, setSelectedCredit] = useState({
      credit: 0,
      price: '0',
    });

    const [{ credit }, setCreditState] = useRecoilState($creditState);

    const closeModal = () => {
      setDialogVisible(false);
    };

    const handlePressCancelButton = () => {
      closeModal();
    };
    const handlePressOkayButton = () => {
      setCreditState(prev => ({ credit: prev.credit + selectedCredit.credit }));
      closeModal();
    };

    useDidUpdate(() => {
      setDialogVisible(true);
    }, [selectedCredit]);

    return (
      <>
        <Dialog
          dialogVisible={dialogVisible}
          title="크레딧 결제"
          content={`${selectedCredit.credit} 크레딧 - ${selectedCredit.price} 결제하시겠습니까?`}
          cancelButton={{ label: '취소', onPress: handlePressCancelButton }}
          okayButton={{ label: '확인', onPress: handlePressOkayButton }}
          onBackdropPress={closeModal}
        />
        <Stack space={12} paddingTop={48}>
          <Stack horizontal space={8} align="center">
            <Text fontWeight="700" fontSize="16" color="gray-900">
              보유 크래딧
            </Text>
            <Stack horizontal space={4} align="center">
              <Text fontWeight="700" fontSize="16" color="gray-900">
                {credit}
              </Text>
              <Icon
                name="monetization-on"
                color={palette['secondary']}
                size={20}
              />
            </Stack>
          </Stack>
          {CREDITS.map(v => {
            const handlePressCreditItem = () => {
              setSelectedCredit({
                credit: v.credit,
                price: v.price,
              });
            };

            return (
              <TouchableOpacity
                onPress={handlePressCreditItem}
                style={{
                  padding: 12,
                  borderRadius: 4,
                  backgroundColor: palette['gray-200'],
                }}
                key={v.credit}>
                <Columns>
                  <Column width="fluid">
                    <Stack horizontal space={4} align="center">
                      <Text fontWeight="400" fontSize="16" color="secondary">
                        {v.credit}
                      </Text>
                      <Icon
                        name="monetization-on"
                        color={palette['secondary']}
                        size={20}
                      />
                    </Stack>
                  </Column>
                  <Column width="content">
                    <Stack horizontal space={8} align="center">
                      {v.originalPrice && (
                        <Text
                          fontWeight="400"
                          fontSize="16"
                          color="gray-900"
                          style={{ textDecorationLine: 'line-through' }}>
                          {v.originalPrice}
                        </Text>
                      )}
                      <Text fontWeight="400" fontSize="16" color="gray-900">
                        {v.price}
                      </Text>
                    </Stack>
                  </Column>
                </Columns>
              </TouchableOpacity>
            );
          })}
        </Stack>
      </>
    );
  });
