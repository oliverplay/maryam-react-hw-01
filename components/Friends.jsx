import React from 'react';
import PropTypes from 'prop-types';

// Individual FriendListItem component
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      {/* Displaying the online/offline status based on the 'isOnline' prop */}
      <span>{`status ${isOnline ? 'online' : 'offline'}`}</span>

      {/* Displaying the friend's avatar */}
      <img srcSet={avatar} alt={name} />

      {/* Displaying the friend's name */}
      <p>{name}</p>
    </li>
  );
};

// Prop type validation for the FriendListItem component
FriendListItem.propTypes = {
  isOnline: PropTypes.bool, // Boolean prop indicating online or offline status
  avatar: PropTypes.string, // URL of the friend's avatar image
  name: PropTypes.string.isRequired, // Required prop for the friend's name
};

// FriendList component that renders a list of FriendListItem components
const FriendList = ({ friends }) => {
  return (
    <ul>
      {/* Mapping through the 'friends' prop and rendering a FriendListItem for each friend */}
      {friends.map(friend => (
        <FriendListItem
          key={friend.id} // Using 'id' as the key for React
          isOnline={friend.isOnline} // Passing the online/offline status as a prop
          avatar={friend.avatar} // Passing the friend's avatar URL as a prop
          name={friend.name} // Passing the friend's name as a prop
        />
      ))}
    </ul>
  );
};

// Prop type validation for the FriendList component
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    // 'friends' prop is an array of objects
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Each friend object has an 'id'
      isOnline: PropTypes.bool, // Each friend object has an 'isOnline' status
      avatar: PropTypes.string, // Each friend object has an 'avatar' URL
      name: PropTypes.string.isRequired, // Each friend object has a required 'name'
    })
  ).isRequired,
};

export default FriendList;
