import { getMovieCredits } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard, ActorList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(result =>
      setCastInfo(result.cast.slice(0, 15))
    );
    return setCastInfo([]);
  }, [movieId]);

  return (
    <ActorList>
      {castInfo.map(({ character, name, profile_path, id }) => {
        return (
          <ActorCard key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9556d16312333.5691dd2255721.jpg'
              }
              alt={name}
              width="200px"
            />
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </ActorCard>
        );
      })}
    </ActorList>
  );
};
