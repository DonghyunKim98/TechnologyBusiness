import { Stack, Columns, Column } from '@mobily/stacks';
import { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import { CREDITS } from './primary-credit-content.const';

import { Icon, Text } from '@/atoms';
import { palette } from '@/utils';

type PrimaryCreditContentsModuleProps = {};

export const PrimaryCreditContentsModule =
  memo<PrimaryCreditContentsModuleProps>(() => {
    return (
      <Stack space={12} paddingTop={48}>
        <Stack horizontal space={8} align="center">
          <Text fontWeight="700" fontSize="16" color="gray-900">
            보유 크래딧
          </Text>
          <Stack horizontal space={4} align="center">
            <Text fontWeight="700" fontSize="16" color="gray-900">
              0
            </Text>
            <Icon
              name="monetization-on"
              color={palette['secondary']}
              size={20}
            />
          </Stack>
        </Stack>
        {CREDITS.map(v => {
          return (
            <TouchableOpacity
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
    );
  });
