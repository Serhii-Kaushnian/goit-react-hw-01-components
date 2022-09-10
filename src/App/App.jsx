import { Container } from './App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { Profile } from 'components/Profile/Profile';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';

export const App = function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics data={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
