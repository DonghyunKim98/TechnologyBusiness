import { ComponentProps, FC } from 'react';
import { Trans as NativeTrans } from 'react-i18next';
import { Text as NativeText } from 'react-native';
import { Merge } from 'type-fest';

export type ITransProps = Merge<ComponentProps<typeof NativeTrans>, {}>;

export const Trans: FC<ITransProps> = ({ ...rest }) => {
  return (
    <NativeTrans
      components={{
        b: <NativeText style={{ fontFamily: 'Pretendard-Bold' }} />,
        i: <NativeText style={{ fontStyle: 'italic' }} />,
      }}
      {...rest}
    />
  );
};
