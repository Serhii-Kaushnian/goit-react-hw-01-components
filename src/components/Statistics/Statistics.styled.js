import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  background-color: ${props => props.theme.colors.white};
  width: 500px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
  border-radius: ${props => props.theme.radii.lg};
  padding: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
export const StatisticsTitle = styled.h2`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.fontSizes.xl};
`;
export const StatisticsList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StatisticsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19%;
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.radii.md};
  box-shadow: ${props => props.theme.shadows.boxShadow.normalInvert};
`;
export const StatisticsInfoLabel = styled.span`
  font-size: ${props => props.theme.fontSizes.lg};
`;
export const StatisticsInfoPercentage = styled.span`
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.black};
`;
