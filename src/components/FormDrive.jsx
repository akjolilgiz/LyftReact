import React from 'react';
import { Link } from 'react-router-dom';

//Color Swatch
//Light Blue: #9be5f3
//Dark Blue: #1850a4

function FormDrive() {
  const linkStyle = {
    marginLeft: '50px',
    color: '#1850a4',
    fontWeight: 'bold'
  };
  return(
    <div>
      <style jsx>{`
        h1 {
          font-size: 76px;
          color: #1850a4;
        }
        input.phone {
          height: 56px;
          text-align: center;
          border-radius: 10px;
          font-size: 18px;
          width: 50%;
        }
        input.check {
          margin: 0 5px 0 15px;
        }
        span.agree {
          color: #1850a4;
          font-weight: bold;
        }
        span a {
          color: #1850a4;
        }
        .row-two {
          margin: 30px 0;
        }
        button {
          height: 56px;
          background-color: #1850a4;
          border: none;
          color: white;
          font-size: 14px;
          font-weight: bold;
          border-radius: 40px;
          padding: 20px 50px;
          box-shadow: 0 4px 0 #78afbe;
        }
      `}</style>
      <h1>Grab the wheel and start earning.</h1>
      <form>
        <div className='row-one'>
          <input className="phone" type="number" placeholder="Enter mobile phone number"/>
          <input className="check" type="checkbox"/><span className="agree">I agree to Lyft's <a href='#'>Terms of Service</a></span>
        </div>
        <div className='row-two'>
          <button type="submit">APPLY TO DRIVE</button>
          <Link to="/ride" style={linkStyle}>SIGN UP TO RIDE</Link>
        </div>
      </form>
    </div>
  );
}

export default FormDrive;