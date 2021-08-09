import styled from 'styled-components/native';

export const PlayButtonContainer = styled.TouchableOpacity`
   display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: space-around;
  padding: ${({ theme }) => theme.metrics.px(12)}px ${({ theme }) => theme.metrics.px(12)}px;
  width: ${({ theme }) => theme.metrics.px(100)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;
