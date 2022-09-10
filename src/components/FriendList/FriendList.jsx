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
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
