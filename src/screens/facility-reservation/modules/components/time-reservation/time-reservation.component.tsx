import sample from 'lodash/sample';
import { memo, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@/atoms';
import { palette } from '@/utils';

type TimeReservationComponentProps = {
  time: string;
  onPress: () => void;
};

export const TimeReservationComponent = memo<TimeReservationComponentProps>(
  ({ time, onPress }) => {
    const isAvailableByRandom = useMemo(() => sample([true, false]), []);

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={!isAvailableByRandom}
        style={[
          {
            borderRadius: 8,
            paddingHorizontal: 20,
            paddingVertical: 12,
            backgroundColor: palette['primary'],
          },
          !isAvailableByRandom && {
            backgroundColor: palette['gray-200'],
          },
        ]}>
        <Text
          fontWeight="400"
          fontSize="14"
          color={isAvailableByRandom ? 'white' : 'gray-400'}>
          {time}
        </Text>
      </TouchableOpacity>
    );
  },
);
