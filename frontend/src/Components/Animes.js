import React, { useState, useEffect } from 'react'; 
import Anime from './Anime';

const API = process.env.REACT_APP_BASE_URL; 

function Animes() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`${API}/animes`)
      .then(res => res.json())
      .then(res => {
        setAnimes(res);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <section className="index" id="anime-list">
      {animes.length > 0 ? (
        animes.map(anime => 
        <Anime 
        key={anime.id} 
        anime={anime.name} 
        description={anime.description}
         />)
      ) : (
        <p>No animes to display</p>
      )}
    </section>
  );
}

export default Animes;

