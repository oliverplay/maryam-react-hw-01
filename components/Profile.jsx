import PropTypes from 'prop-types';
import React from 'react';
import {
  ProfileCont,
  AvatarImgCont,
  UserInfo,
  UserName,
  UserTag,
  UserLocation,
  StatItemsCont,
  VisuallyHidden,
} from './Profilestyled';

// Defining a functional component called "Profile"
// It receives a prop called "data", which is an object containing profile information
const Profile = ({ data }) => {
  // Destructuring the "stats" property from the "data" object
  // to obtain "followers," "views," and "likes" variables
  const { followers, views, likes } = data.stats;

  // JSX - rendering the UI for the Profile component
  return (
    <div>
      {/* Container for the entire profile */}
      <ProfileCont>
        {/* Container for the avatar image */}
        <AvatarImgCont>
          {/* Displaying the user's avatar image */}
          <img src={data.avatar} alt={data.username} />
        </AvatarImgCont>
        {/* Container for user information */}
        <UserInfo>
          {/* Displaying the user's username */}
          <UserName>{data.username}</UserName>
          {/* Displaying the user's tag */}
          <UserTag>@{data.tag}</UserTag>
          {/* Displaying the user's location */}
          <UserLocation>{data.location}</UserLocation>
        </UserInfo>

        {/* Creating an unordered list to display stats */}
        <ul>
          {/* VisuallyHidden container for accessibility */}
          <VisuallyHidden>
            {/* Container for stat items */}
            <StatItemsCont>
              {/* Displaying the number of followers */}
              <li>
                <span>Followers</span>
                <span>{followers}</span>
              </li>

              {/* Displaying the number of views */}
              <li>
                <span>Views</span>
                <span>{views}</span>
              </li>

              {/* Displaying the number of likes */}
              <li>
                <span>Likes</span>
                <span>{likes}</span>
              </li>
            </StatItemsCont>
          </VisuallyHidden>
        </ul>
      </ProfileCont>
    </div>
  );
};

// Prop type validation for the Profile component
Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired, // Required username string
    tag: PropTypes.string.isRequired, // Required tag string
    location: PropTypes.string, // Optional location string
    avatar: PropTypes.string, // Optional avatar image URL string
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired, // Required number of followers
      views: PropTypes.number.isRequired, // Required number of views
      likes: PropTypes.number.isRequired, // Required number of likes
    }).isRequired, // Stats object with required properties
  }).isRequired, // Data object with required properties
};

// Exporting the Profile component so that it can be used in other parts of the application
export default Profile;
