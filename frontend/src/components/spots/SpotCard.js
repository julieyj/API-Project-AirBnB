import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SpotCard({ spot }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const spotDetail = (event) => {
    let spotDetailPath = `/spots/${spot.id}`;
    history.push(spotDetailPath);
  }

  return (
    <div className="spot-card-container" onClick={(event) => spotDetail(event)}>
      <img className="spot-card card-image" src={spot.previewImage} alt={`Spot ${spot.id} preview`} />
      <div className="spot-card-location">
        <h3>
          {spot.city}, {spot.state}
        </h3>
      </div>
      <div className="spot-card-block">
        <div className="spot-card-review">★{spot.avgStarRating} 5.0</div>
        <div className="spot-card-availability">Available Dates</div>
        <div className="spot-card-price">
          <b>${spot.price}</b> night
        </div>
      </div>
    </div>
  );
}

export default SpotCard;
