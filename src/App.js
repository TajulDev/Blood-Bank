import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';

import {Routes, Route} from 'react-router-dom'
import Menu from './Components/Home/Menu/Menu';
import Footer from './Components/Home/Footer/Footer';
import CampaignPage from './Components/CampaignPage/CampaignPage';

import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;