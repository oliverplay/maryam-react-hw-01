// Importing React library and the components needed for the app
import React from 'react';
import Friends from 'components/Friends'; // Importing the Friends component
import Profile from 'components/Profile'; // Importing the Profile component
import Statistics from 'components/Statistics'; // Importing the Statistics component
import Transaction from 'components/Transaction'; // Importing the Transaction component
import user from './data/user.json'; // Importing user data
import transactions from './data/transactions.json'; // Importing transaction data
import friends from './data/friends.json'; // Importing friends data
import statistics from './data/statistics.json'; // Importing statistics data

const App = () => {
  return (
    <div>
      {/* Rendering the Profile component and passing user data as a prop */}
      <Profile data={user} />

      {/* Rendering the Friends component and passing friends data as a prop */}
      <Friends friends={friends} />

      {/* Rendering the Statistics component and passing statistics data as a prop */}
      <Statistics data={statistics} />

      {/* Rendering the Transaction component and passing transactions data as a prop */}
      <Transaction items={transactions} />
    </div>
  );
};

export default App;
