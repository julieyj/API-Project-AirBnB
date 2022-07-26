import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SpotCard({ spot }) {
  const dispatch = useDispatch();
  const history = useHistory();



  return (
    <div className="spot-card-container">
      <img src={spot.previewImage} alt={`Spot ${spot.id} preview image`} />
      <div className="spot-card-location">
        <h2>{spot.city}, {spot.state}</h2>
      </div>
      <div className="spot-card-review">{spot.avgStarRating}</div>
      <div className="spot-card-price">{spot.price}</div>
    </div>
  )
}

export default SpotCard;
