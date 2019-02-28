import React from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';


const AccordionRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} children={({match}) => (
      <div>
      </div>
      <AnimateHeight
      duration={ 300 }
      height={  match !== null ? 'auto' : 0 }
    >
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
          unmountOnExit
        >
          <Component />
        </CSSTransition>
      </AnimateHeight>
    )}
    >
    </Route>
  );
}

export default AccordionRoute;
