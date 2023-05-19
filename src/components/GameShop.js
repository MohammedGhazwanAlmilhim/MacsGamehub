import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNewestGames } from '../lib/services/gameService';
import GameCard from './GameCard';

function GameShop() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);

  const fetchNewestGames = async () => {
    try {
      const data = await getNewestGames();
      
      if (data.games.length === 0) {
        setGames([]);
        setEmpty(true);
      } else if (data) {
        setGames(data.games);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewestGames();
  }, []);

  return (
    <header>
      {error ? (
        <p>Error: Unable to fetch games.</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!!games.length && (
            <section className="indicator">
              <h1>Gameshop</h1>
              <Link to="/mygames">Visit shop</Link>
            </section>
          )}
          {empty ? (
            <p>Gameshop is empty!</p>
          ) : (
            <section className="latest-games">
              {games.map((item) => (
                <GameCard
                  key={item.apiid}
                  slug={item.slug}
                  id={item.apiid}
                  title={item.title}
                  img={item.img}
                  genres={item.genres.map((genres) => genres.name).join(', ')}
                />
              ))}
            </section>
          )}
        </>
      )}
    </header>
  );
}

export default GameShop;