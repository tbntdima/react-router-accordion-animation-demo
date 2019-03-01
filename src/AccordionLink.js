import React from 'react';
import { Link, withRouter } from 'react-router-dom';


// If link is active, change 'to' to '/'
const AccordtionLink = (props) => {
  const currentPath = props.location.pathname;
  const to = props.to;
  return (
    <Link to={to === currentPath  ? '/' : to}>
      {props.children}
    </Link>
  );
}

export default withRouter(AccordtionLink);
