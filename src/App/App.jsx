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
  const { avatar, username, tag, location, stats } = user;
  return (
    <Container>
      <Profile username={username} avatar={avatar} tag={tag} location={location} stats={stats} />
      <Statistics data={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
