import styled from 'styled-components/native';
import { TextProps } from 'react-native';

interface TextType extends TextProps {
  color?: string;
}

export const Text = styled.Text<TextType>`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  font-weight: bold;
  color: ${({ color, theme }) => color || theme.colors.white};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
`;