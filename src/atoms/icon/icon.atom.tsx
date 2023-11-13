import { ComponentProps } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = ComponentProps<typeof MaterialCommunityIcons>;

export const Icon = ({ ...props }: IconProps) => {
  return <MaterialCommunityIcons {...props} />;
};
