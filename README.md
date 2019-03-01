# React Router with Accordion layout
## Problem
I was rebuilding [my website](https://dmitriyaa.github.io) with React and faced a problem with combining react router and react transition group.<br>
On [react router documentation there](https://reacttraining.com/react-router/web/example/animated-transitions) is a guide how to create animated transitions. But it's attached to a certain layout:
```
* nav
  - link a
  - link b
  - link c
* container
  - route a
  - route b
  - route c
```
As I understood from the documentation, the key point is to wrap all the bodies with TransitionGroup => CSSTransition => Swtich.<br>
I've got how it works more or less. Transition Group keeps previous route body and transition it out.<br>
But as I already stated this solution is attached to this layout.<br>
While my website I have layout like this:
```
- link a
- body a (slides down on link click)
- link b
- body b (slides down on link click)
- link c
- body c (slides down on link click)
```
## Solution
After a lot of trials and fails, I've got a working solution. The key point is in Router documentation => Route render methods => [children](https://reacttraining.com/react-router/web/api/Route/children-func).
```
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
        unmountOnExit
      >
        <Component />
      </CSSTransition>
    </div>
  </AnimateHeight>
)}
>
</Route>
```
I'll describe the logic of each level starting from Router.
```Route``` detects a url change, but does not immediately mount/unmount inner component.
Instead it always renders ```CSSTransition``` component and the ```match``` prop there.<br>
```CSSTransition``` triggers enter/exit on ```in``` prop change and handles mounting/unmounting.

## Demo
https://dmitriyaa.github.io/react-router-accordion/
