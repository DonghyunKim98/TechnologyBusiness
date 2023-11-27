import { Column, Columns, Stack } from '@mobily/stacks';
import { TouchableOpacity } from 'react-native';

import { Icon, ModalHeader, Text } from '@/atoms';
import { BasicLayout } from '@/layouts';
import { palette } from '@/utils';

const CREDITS = [
  {
    credit: 5,
    price: '100,000 ￦',
  },
  {
    credit: 10,
    price: '200,000 ￦',
  },
  {
    credit: 20,
    price: '400,000 ￦',
  },
  {
    credit: 25,
    price: '450,000 ￦',
    originalPrice: '500,000 ￦',
  },
  {
    credit: 30,
    price: '540,000 ￦',
    originalPrice: '600,000 ￦',
  },
];

export const PrimaryCreditScreen = () => {
  return (
    <BasicLayout>
      <ModalHeader
        left={{
          type: 'icon-string',
          iconName: 'monetization-on',
          title: '크레딧',
        }}
      />
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
    </BasicLayout>
  );
};
