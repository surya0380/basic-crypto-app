import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Coinset from './components/Coinset';

function App() {
  const [coinList, setcoinList] = useState([])
  const [searchedName, setsearchedName] = useState("")

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
      .then((response) => {
        setcoinList(response.data.coins);
      })
  })

  const filteredCoins = coinList.filter((coins) => {
    return coins.name.toLowerCase().includes(searchedName.toLowerCase())
  })

  return (
    <div className="App">
      <div className="dispayHeader">
        <img src="../public/logo.webp" style={{"float" : "left"}} alt="" />
        <input type="text" placeholder='enter your coin name...(ex: bitcoin)' onChange={(event) => {setsearchedName(event.target.value)}} />
      </div>
      <div className="displayBody">
        {filteredCoins.map((coins) => {
          return <Coinset
            name={coins.name}
            price={coins.price}
            icon={coins.icon}
            symbol={coins.symbol}
            key={coins.id} />
        })}
      </div>
    </div>
  );
}

export default App;
