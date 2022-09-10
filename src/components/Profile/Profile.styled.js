import styled from '@emotion/styled';

export const UserCard = styled.div`
  padding: ${props => props.theme.spacing(4)};
  width: 500px;
  border-radius: ${props => props.theme.radii.xl};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Description = styled.div`
  padding: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(2)};
`;
export const ProfileImage = styled.img`
  display: block;
  border-radius: ${props => props.theme.radii.half};
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing(6)};
  box-shadow: ${props => props.theme.shadows.boxShadow.normalInvert};

  width: 300px;
`;
export const UserName = styled.p`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
export const UserInfo = styled.p`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.fontSizes.md};
`;
export const StatsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.spacing(2)};
  justify-content: space-between;
  list-style: none;
  display: flex;
  flex-direction: row;
`;
export const StatsListItem = styled.li`
  display: flex;
  cursor: default;
  flex-direction: column;
  padding: 0;
  width: 30%;
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.radii.md};

  box-shadow: ${props => props.theme.shadows.boxShadow.normalInvert};
`;
export const StatsTitle = styled.span`
  font-size: ${props => props.theme.fontSizes.md};
  color: ${props => props.theme.colors.gray};
`;
export const StatsValue = styled.span`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
