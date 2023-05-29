import './App.css';
import Banner from './Components/Home/Banner/Banner';
import Campaign from './Components/Home/Campaign/Campaign';
import Menu from './Components/Home/Menu/Menu';
import Process from './Components/Home/Process/Process';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Process></Process>
      <Campaign></Campaign>
    </div>
  );
}

export default App;