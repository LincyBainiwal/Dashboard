import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Header from './screens/Header';
import SideBar from './screens/SideBar';
import Main from './screens/Main';

function App() {
  return (<>
    <Header />
    <SideBar />
    <Main />
  </>
  )
}

export default App;
