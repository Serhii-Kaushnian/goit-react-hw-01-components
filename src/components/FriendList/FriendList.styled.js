import styled from '@emotion/styled';

export const FriendsListContainer = styled.div`
  width: 500px;
  padding: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
`;
export const Friends = styled.ul`
  padding: 0;
  margin: 0;

  list-style: none;
`;
export const FriendsItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.spacing(4)};

  box-shadow: ${props => props.theme.shadows.boxShadow.normalInvert};
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;
export const FriendsAvatar = styled.img`
  width: 180px;
`;
export const FriendsName = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
const setBgColor = ({ isOnline, theme }) => {
  switch (isOnline) {
    case true:
      return theme.colors.green;
    case false:
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};
export const FriendsStatus = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${setBgColor};
  border-radius: ${props => props.theme.radii.half};
`;
