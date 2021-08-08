import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ theme }) => theme.metrics.px(327)}px;
  height: ${({ theme }) => theme.metrics.px(42)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  border-width: ${({ theme }) => theme.metrics.px(1)}px;
  border-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.metrics.px(6)}px;
  margin-bottom: ${({ theme }) => theme.metrics.px(24)}px;;
`;
