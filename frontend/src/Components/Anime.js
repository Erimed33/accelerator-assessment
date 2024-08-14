import React, { useState, useEffect } from 'react';

function Anime({name, description}) {
  const API = process.env.REACT_APP_BASE_URL; 
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`${API}/animes`) 
      .then(res => res.json())
      .then(res => setAnime(res))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!anime) return <p>Loading...</p>;

  return (
    <div className="anime">
      <ul>
      <li>{anime.name}</li>
      <li>{anime.description}</li>
      </ul>
      
     
    </div>
  );
}

export default Anime;

