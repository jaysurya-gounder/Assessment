import { createContext, useState } from 'react';
import './App.css';
import Display from './Display';

export const context = createContext()

function App() {
  const [citizen, setCitizen] = useState(false)
  const [overAge, setOverAge] = useState(false)
  return (
    <div className="App">
      <label>Are you a Citizen?</label><input
        type='checkbox'
        value={citizen}
        onChange={(e) => { setCitizen(e.target.checked) }}
      /><br />
      <label>Are you over 21?</label><input
        type='checkbox'
        value={overAge}
        onChange={(e) => { setOverAge(e.target.checked) }}
      />
      <context.Provider value={{ citizen: citizen, overage: overAge }}>
        <Display />
      </context.Provider>
    </div>
  );
}

export default App;
