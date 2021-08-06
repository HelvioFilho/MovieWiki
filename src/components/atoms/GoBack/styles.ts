import styled from 'styled-components/native';

export const GoBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.metrics.px(60)}px;
  left: ${({ theme }) => theme.metrics.px(20)}px;

`;