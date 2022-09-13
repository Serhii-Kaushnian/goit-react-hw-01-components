import {
  UserCard,
  ProfileContainer,
  Description,
  UserInfo,
  ProfileImage,
  UserName,
  StatsList,
  StatsListItem,
  StatsTitle,
  StatsValue,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <UserCard>
      <ProfileContainer>
        <Description>
          <ProfileImage src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <UserInfo>@{tag}</UserInfo>
          <UserInfo>{location}</UserInfo>
        </Description>
        <StatsList>
          <StatsListItem>
            <StatsTitle>Followers</StatsTitle>
            <StatsValue>{stats.followers}</StatsValue>
          </StatsListItem>
          <StatsListItem>
            <StatsTitle>Views</StatsTitle>
            <StatsValue>{stats.views}</StatsValue>
          </StatsListItem>
          <StatsListItem>
            <StatsTitle>Likes</StatsTitle>
            <StatsValue>{stats.likes}</StatsValue>
          </StatsListItem>
        </StatsList>
      </ProfileContainer>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
