import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Basketball Player Card</h1>
      <BasketballPlayerCard
        name="LeBron James"
        image="https://i2.wp.com/nypost.com/wp-content/uploads/sites/2/2018/01/lebron-2.jpg?quality=90&strip=all&ssl=1"
        position="Forward"
        stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5 }}
      />
    </div>
  );
}

export default App;
