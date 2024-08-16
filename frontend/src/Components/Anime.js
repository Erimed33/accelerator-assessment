import React from 'react';

function Anime({name, description}) {
 

  return (
    <div className="anime">
      <ul>
      <li>{name}</li>
      <li>{description}</li>
      </ul>
      
     
    </div>
  );
}

export default Anime;

