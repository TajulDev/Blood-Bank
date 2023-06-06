import './App.css';
import GG from './Components/Bla';
import Banner from './Components/Home/Banner/Banner';
import Campaign from './Components/Home/Campaign/Campaign';
import Footer from './Components/Home/Footer/Footer';
import Info from './Components/Home/Form/Info';
import Gallery from './Components/Home/Gallery/Gallery';
import Menu from './Components/Home/Menu/Menu';
import News from './Components/Home/News/News';
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
      <Gallery></Gallery>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;