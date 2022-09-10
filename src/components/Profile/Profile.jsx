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

export const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
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
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
