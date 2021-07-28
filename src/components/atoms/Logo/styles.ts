import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

interface ImageType extends ImageProps {
  size: number;
}

export const LogoImage = styled.Image<ImageType>`
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
`;