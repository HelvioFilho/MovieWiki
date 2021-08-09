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
  margin-bottom: ${({ theme }) => theme.metrics.px(24)}px;
`;

export const SearchInput = styled(TextInput)`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
`;