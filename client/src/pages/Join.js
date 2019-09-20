import React from 'react';
import './App.css';
import './Join.css';
import {Animated} from 'react-animated-css';


function Join() {
  
  return (
    <div className="page">
      <Animated
        animationIn="slideInLeft" 
        animationOut="zoomOutDowçn" 
        animationInDelay={0}
        animationInDuration={1400} 
        animationOutDuration={1400} 
        isVisible={true}> 

        <div className="join">
          <div>
              <Animated 
                  animationIn="zoomInRight" 
                  animationOut="zoomOutDowçn" 
                  animationInDuration={1400} 
                  animationOutDuration={1400} 
                  isVisible={true}> 
                <div>      
                  <h1 className="hit-the-floor">Sign up Bitch!</h1>
                  <form method="POST" action="/api/user">
                    <input name="name" type="text" placeholder="new user" />
                    <input name="password" type="text" placeholder="password" />
                        <input type="submit" />
                    </form>
                    <br>
                    </br>
                    <form method="POST" action="/api/login">
                      <input name="username" type="text" placeholder="login" />
                      <input name="password" type="password" placeholder="password" />

                      <input type="submit" />
                    </form>
                </div>
              </Animated>
            </div>
          </div>
     </Animated> 
  </div>
  );
     
}

export default Join;
