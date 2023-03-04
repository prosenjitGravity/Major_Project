// import logo from './logo.svg';
import * as React from 'react';
// import './App.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Myappbar from './components/appbar';
import Frontpage from './pages/frontpage'


function App() {
  return (
    <div >
        <Myappbar></Myappbar>
        <Frontpage/>
    </div>
  );
}

export default App;
