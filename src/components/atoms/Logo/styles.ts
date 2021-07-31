import styled from 'styled-components/native';
import { ImageType } from '../../../utils/interface';

export const LogoImage = styled.Image<ImageType>`
  position:relative;
  top: ${({ theme }) => theme.metrics.px(15)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  margin-left: ${({ theme }) => theme.metrics.px(16)}px;
  
`;