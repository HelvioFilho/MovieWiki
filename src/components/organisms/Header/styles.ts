import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`;

export const HeaderImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeaderGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`;