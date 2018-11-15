import React from 'react';

//Color Swatch
//Light Blue: #9be5f3
//Dark Blue: #1850a4

function App(){
  const navStyle={
    height: '20%',
    backgroundColor: '#9be5f3',
    padding: '15px',
    borderBottom: '1px solid #1850a4'
  };
  return (
    <div style={navStyle} >
      <style jsx>{`
        img {
          width: 60px; 
          color: #1850a4;      
        }
        ul {
          float: right;
        }
        li {
          font-family: Helvetica;
          color: #1850a4;
          display: inline-block;
          font-weight: bold;
          margin: 0 30px;
        }
        li:hover {
          cursor: pointer;
          color: black;
        }
      `}</style>
      <img src="https://s3.amazonaws.com/freebiesupply/large/2x/lyft-logo-black-and-white.png"/>
      <ul>
        <li>DRIVER</li>
        <li>RIDER</li>
        <li>LOGIN</li>
      </ul>     
    </div>
 
  );
}

//App.propTypes = {
//};

export default App;
