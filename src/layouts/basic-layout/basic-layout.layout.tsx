import { Box } from '@mobily/stacks';
import { PropsWithChildren } from 'react';

import { palette } from '@/utils';

type BasicLayoutProps = PropsWithChildren<{}>;

export const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <Box
      flex="fluid"
      style={{
        width: '100%',
        backgroundColor: palette['white'],
      }}
      paddingX={24}
      paddingY={32}>
      {children}
    </Box>
  );
};
