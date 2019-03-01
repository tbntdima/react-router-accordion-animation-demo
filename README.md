# React Router with Accordion layout

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
