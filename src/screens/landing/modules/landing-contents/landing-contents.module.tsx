import { Box, Stack } from '@mobily/stacks';
import { memo } from 'react';
import { Image } from 'react-native';

import { LANDING_LOGO_IMG } from '@/assets';
import { Text } from '@/atoms';

type LandingContentsModuleProps = {};

export const LandingContentsModule = memo<LandingContentsModuleProps>(() => {
  return (
    <Box flex="fluid" alignY="center" alignX="center">
      <Stack space={48} align="center">
        <Text fontWeight="700" fontSize="32" color="primary">
          운동한사발
        </Text>
        <Image
          source={LANDING_LOGO_IMG}
          resizeMode="contain"
          style={{ width: '100%', height: 212 }}
        />
      </Stack>
    </Box>
  );
});
