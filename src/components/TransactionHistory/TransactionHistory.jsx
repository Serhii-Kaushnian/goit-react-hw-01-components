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
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
