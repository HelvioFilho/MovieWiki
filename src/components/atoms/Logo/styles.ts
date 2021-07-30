import styled from 'styled-components/native';
import { ImageType } from '../../../utils/interface';

export const LogoImage = styled.Image<ImageType>`
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
`;