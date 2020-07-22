import React from 'react';
import Person from './components/person';
import HeartRate from './components/HeartRate';

// Variables
const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40
const MIN_HEART = 80
const MAX_HEART = 180
const MIN_STEPS = 0
const MAX_STEPS = 50000

// Return App to html
function App() {
  return (
    <div className="container-fluid">
      <main className="row">
        <Person />
        <HeartRate heart={MIN_HEART} />
      </main>
    </div>
  );
}

export default App;