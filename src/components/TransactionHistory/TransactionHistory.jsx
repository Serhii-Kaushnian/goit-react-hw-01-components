import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, TableBody, TableRowCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableRowCell>{type}</TableRowCell>
              <TableRowCell>{amount}</TableRowCell>
              <TableRowCell>{currency}</TableRowCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
