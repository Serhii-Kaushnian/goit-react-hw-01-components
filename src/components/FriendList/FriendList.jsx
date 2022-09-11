import PropTypes from 'prop-types';
import {
  FriendsListContainer,
  FriendsName,
  FriendsAvatar,
  Friends,
  FriendsItem,
  FriendsStatus,
} from './FriendList.styled';
export const FriendsList = ({ friends }) => {
  return (
    <FriendsListContainer>
      <Friends>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsItem key={id}>
            <FriendsStatus isOnline={isOnline}></FriendsStatus>
            <FriendsAvatar src={avatar} alt="User avatar" />
            <FriendsName>{name}</FriendsName>
          </FriendsItem>
        ))}
      </Friends>
    </FriendsListContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
