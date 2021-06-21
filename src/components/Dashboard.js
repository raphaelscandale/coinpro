import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Coin from './Coin';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const [darkMode, setDarkMode] = useState(true)
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
          )
        .then(res => {
          setCoins(res.data);
        })
        .catch(error => console.log(error));
    }, [])
  
    const handleChange = e => {
      setSearch(e.target.value);
    };
  
   
  
    const searchedCurrency = coins.filter(coin =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    ); 
    
   
    return ( 
    
   
       <div className={darkMode ? 'dark-mode': 'light-mode'}>
      <div className="container">
         <span style={{color: darkMode ? 'grey' : 'yellow'}}></span>
         <div className="switch-checkbox">
           <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)}/>
              <span className="slider round"> </span>
            </label>
         </div>
         <span style={{color: darkMode ? '#c96dfd' : 'grey'}}></span>
      
      <div className="profUpdate"><Link to="/update-profile">Update Profile</Link>
      </div>

      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Find a cryptocurrency</h1>
          <form>
            <input
              className='coin-input'
              type='text'
              onChange={handleChange}
              placeholder='Search'
            />
          </form>
        </div>
        {searchedCurrency.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      </div>
      </div> 
      
    );
    }
  
