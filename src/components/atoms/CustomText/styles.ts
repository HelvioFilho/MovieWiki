import styled from 'styled-components/native';
import { TextProps } from 'react-native';

interface TextType extends TextProps {
  color?: string;
}

export const Text = styled.Text<TextType>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.color || 'white'};
  margin-top: 12px;
`;