import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App(){
  return (
    <div className="appBody">
      <style jsx>{`
        div.appBody {
          margin: -10px;
          padding: 0;
          font-family: HelveticaNeue;
          background-color: #9be5f3;
        }
      `}</style>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  );
}


export default App;
