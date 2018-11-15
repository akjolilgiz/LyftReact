import React from 'react';
import FormDrive from './FormDrive';
import FormRide from './FormRide';
import { Switch, Route } from 'react-router-dom';

//Color Swatch
//Light Blue: #9be5f3
//Dark Blue: #1850a4

function Content() {
  return(
    <div>
      <style jsx>{`
        .wrapper {
          padding: 30vh 0;
          height: 451px;
        }
        .forms {
          float: left;
          padding: 0 0 0 8vw;
          width: 50vw;
        }
        img {
          margin-top: 70px;
          width: 35vw;
          max-height: 388px;
          max-width: 497px;
        }
      `}</style>
      <div className='wrapper'>
        <div className='forms'>
          <Switch>
            <Route exact path='/' component={FormDrive}/>
            <Route path='/ride' component={FormRide}/>
          </Switch>
        </div>
        <img src="https://images.ctfassets.net/oqn5qhpsy9i3/6AIwJ8YmNqkooaswSaCyge/fff7dcffdd921a0a0a33fa0c96a2b669/Car_v3_trimmed.png" alt='building'/>
      </div>
    </div>
  );
}

export default Content;