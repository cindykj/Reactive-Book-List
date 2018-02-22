import React from 'react';
//receives props and returns h3 (injected where it got called in App.js)

export default ({ name }) => { //destructured, no need props. name has to match name below, can add others (email, id, etc.); 
  // const name = props.name;
  name = name.toUpperCase();
  //can do work here, then return
  return (
    <h3>{ name }</h3> 
    //^This { } js JSX
  );
};

// export default (props) => {
  //   const name = props.name;
  //   return (
    //     <h3>(name)</h3>
    //   );
    // };
    // const NameTag = (props) => { //this is the long way
    // };
    
    // export default NameTag;