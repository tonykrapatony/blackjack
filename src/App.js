import { useState } from 'react';
import './App.scss';
import Game from './componets/Game/Game';
import Greetings from './componets/Greetings/Greetings';
import Header from './componets/Header/Header';
import Loading from './componets/UI/Loading/Loading';

function App() {
  const [begin, setBegin] = useState(false);
  const [loading, setLodaing] = useState(false);
  const beginHandler = () => {
    setLodaing(true);
    setTimeout(() => {
      setLodaing(false);
      setBegin(!begin);
    }, 2000);
  }
  
  return (
    <div className="App">
      <Header />
      {!loading && !begin && <Greetings onclick={beginHandler}/>}
      {loading && <Loading />}
      {begin && <Game loading={loading} setLodaing={setLodaing}/>}
    </div>
  );
}

export default App;
