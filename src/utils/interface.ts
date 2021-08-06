import { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../global/styles/colors';
import { fonts } from '../global/styles/fonts';

export interface ContainerProps {
  children: ReactNode;
  direction?: string;
  align?: string;
  justify?: string;
  bg?: string;
  width?: number;
  height?: number;
  withPadding?: boolean;
}

export interface MetricsProps {
  children?: ReactNode;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  lh?: number;
}

export interface TextProps extends MetricsProps {
  color?: keyof typeof colors;
  fontFamily?: keyof typeof fonts;
  size?: number;
}

export const sizes = {
  small: 28,
  large: 64,
}

export interface LogoProps {
  size?: keyof typeof sizes;
}

export interface ImageType {
  size: number;
}

export interface PlayButtonProps {
  onPress: () => void;
}

export interface IconProps extends PlayButtonProps {
  name: React.ComponentProps<typeof Ionicons>['name'];
  // onPress: () => void;
  label: ReactNode;
}

export interface DataItemProps {
  id: number;
  image_url: string;
  title?: string;
  subtitle?: string;
  description?: string;
  type?: string;
  trailer_url: string;
}

export interface DataProps {
  data: DataItemProps;
  onDetail?: boolean;
}

export interface HomeListProps {
  data: DataItemProps[];
  title: string;
  dataType: string;
}

export interface StorageMovie {
  [id: string]: {
    data: DataItemProps;
  }
}

// interface Props extends ContainerProps {
//   children: ReactNode;
// }