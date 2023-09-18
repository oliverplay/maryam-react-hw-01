import React from 'react';

// TransactionHistory component
const TransactionHistory = ({ items }) => {
  return (
    <div>
      {/* Rendering the Transaction component and passing 'items' as a prop */}
      <Transaction items={items} />
    </div>
  );
};

// Transaction component that displays a table of transactions
const Transaction = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping through the 'items' prop and rendering a row for each transaction */}
        {items.map(item => (
          <tr key={item.id}>
            {/* Using 'id' as the key for React */}
            {/* Displaying transaction type */}
            <td>{item.type}</td>
            {/* Displaying transaction amount */}
            <td>{item.amount}</td>
            {/* Displaying transaction currency */}
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
