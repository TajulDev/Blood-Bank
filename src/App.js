import './App.css';
import Banner from './Components/Home/Banner/Banner';
import Campaign from './Components/Home/Campaign/Campaign';
import Info from './Components/Home/Form/Info';
import Menu from './Components/Home/Menu/Menu';
import Process from './Components/Home/Process/Process';
import Sub from './Components/Home/SubBolunter/Sub';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Process></Process>
      <Campaign></Campaign>
      <Info></Info>
      <Sub></Sub>
    </div>
  );
}

export default App;