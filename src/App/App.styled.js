import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
