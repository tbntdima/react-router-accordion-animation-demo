import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';
/* Bounce animation is dependent on animate.css library.
Source: https://github.com/daneden/animate.css */
import 'animate.css/source/_base.css';
import 'animate.css/source/bouncing_entrances/bounceInDown.css';


const AccordionRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} children={({match}) => (
      <AnimateHeight
      duration={ 300 }
      height={  match !== null ? 'auto' : 0 }
    >
      <div style={{overflow: 'hidden'}}>
        <CSSTransition
          in={match !== null}
          timeout={{
            enter: 1000,
            exit: 300
          }}
          classNames={{
            appear: 'animated',
            appearActive: 'animated bounceInDown',
            enter: 'animated',
            enterActive: 'animated bounceInDown',
          }}
          appear
        >
          <Component />
        </CSSTransition>
      </div>
      </AnimateHeight>
    )}
    >
    </Route>
  );
}

export default AccordionRoute;
