import React, {useState} from 'react';
import DateBuilder from './components/DateBuilder';
import './index.css';

const api = {
  key: '7f9f09088cb67558d90a11e3922fc482',
  baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [query, setQuery] = useState();
  const [weatherObj, setWeatherObj] = useState({});

  const search = (evt) => {
    if(evt.key === 'Enter') {
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeatherObj(data);
        //setQuery()
      });
    }
  }

  const onSearch = (e) => {
    setQuery(e.target.value);
  }
  debugger;
  const temp = (typeof weatherObj.main !== 'undefined') ? Math.round(weatherObj.main.temp) : '';

  return (
    <div className={(typeof weatherObj.main !== 'undefined' && temp > 15 ) ? 'app warm' : 'app'}>
      <main>
        <div className='searchBox'>
          <input name='search'
            placeholder='search..'
            className='searchInput'
            onChange={onSearch}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weatherObj.main !== 'undefined') ? 
        <div>
          <div className='locationBox'>
            <div className='city'>{weatherObj.name}, {weatherObj.sys.country}</div>
            <div className='date'>{DateBuilder.formatDate(new Date())}</div>
          </div>
          <div className='weatherBox'>
            <div className='temperature'>{temp}°C</div>
            <div className='description'>{weatherObj.weather[0].description}</div>
          </div>
        </div>
        :''}
      </main>
    </div>
  );
}

export default App;
