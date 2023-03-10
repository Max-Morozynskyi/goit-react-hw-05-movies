import { getMovieReviews } from 'components/Api/MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewCard, ReviewTime } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [rewiewsInfo, setRewiewsInfo] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(result => setRewiewsInfo(result.results));
    return setRewiewsInfo([]);
  }, [movieId]);

  return (
    <ul>
      {rewiewsInfo.length === 0 && (
        <div style={{ marginTop: '15px' }}>No reviews found!</div>
      )}
      {rewiewsInfo.map(({ author, content, created_at, id }) => {
        return (
          <ReviewCard key={id}>
            <h4>Author: {author}</h4>
            <ReviewTime>
              {created_at.slice(0, 16).split('T').reverse().join(' ')}
            </ReviewTime>
            <p>{content}</p>
          </ReviewCard>
        );
      })}
    </ul>
  );
};

export default Reviews;
