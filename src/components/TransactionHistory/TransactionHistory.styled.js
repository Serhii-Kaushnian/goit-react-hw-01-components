import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  padding: ${props => props.theme.spacing(4)};
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
`;
export const TableHead = styled.thead`
  width: 100%;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
`;
export const TableBody = styled.tbody`
  width: 100%;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.boxShadow.normal};
`;
export const TableRow = styled.tr`
  height: 60px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
export const TableRowCell = styled.td`
  text-transform: capitalize;
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
