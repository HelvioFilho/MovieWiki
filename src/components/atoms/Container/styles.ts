import styled from 'styled-components/native';
import { ContainerProps } from '../../../utils/interface';

export const ContainerAll = styled.View<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => bg || theme.colors.dark};
  width: ${({ theme, width }) => (width ? `${theme.metrics.px(width)}px` : '100%')};
  height: ${({ theme, height }) => (height ? `${theme.metrics.px(height)}px` : '100%')};
`;

export const ScreenScrollContainer = styled.ScrollView<ContainerProps>`
  background-color: ${({ bg, theme }) => bg || theme.colors.dark};
`;