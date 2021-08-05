import styled from 'styled-components/native';

export const Loader = styled.ActivityIndicator.attrs({
  size: "large",
  color: "red",
})`
display: flex;
  flex: 1;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
`;