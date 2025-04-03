import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// src/App.js
import React, { useState } from 'react';
import WorldClock from './components/WorldClock';
import Select from 'react-select';
import moment from 'moment-timezone';

function App() {
    const [pinnedTimezones, setPinnedTimezones] = useState([]);
    const timezones = moment.tz.names().map(tz => ({ value: tz, label: tz }));

    const handleAddClock = (selectedOption) => {
        if (selectedOption && !pinnedTimezones.includes(selectedOption.value)) {
            setPinnedTimezones([...pinnedTimezones, selectedOption.value]);
        }
    };

    const handleRemoveClock = (timezoneToRemove) => {
        setPinnedTimezones(pinnedTimezones.filter(tz => tz !== timezoneToRemove));
    };

    return (
        <div>
            <h1>World Clock</h1>
            <Select
                options={timezones}
                onChange={handleAddClock}
                isClearable={true}
                placeholder="Select a timezone..."
            />
            <div>
                {pinnedTimezones.map(timezone => (
                    <div key={timezone}>
                        <WorldClock timezone={timezone} />
                        <button onClick={() => handleRemoveClock(timezone)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
export default App;
