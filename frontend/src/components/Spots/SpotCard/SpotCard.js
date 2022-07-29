import './SpotCard.css';

function SpotCard({ spot }) {

  // let priceCommas = spot.price;

  return (
    <div className="spot-card-container">
      <img
        className="spot-card-image"
        src={spot.previewImage}
        alt={`Spot ${spot.id} preview`}
      />
      <div className="spot-card-text-container">
        <span className="spot-card-location">
          {spot.city}, {spot.state}
        </span>
        <span className="spot-card-review">★{spot.avgStarRating} 5.0</span>
      </div>
      <div className="spot-card-availability">Available Dates</div>
      <div className="spot-card-price">
        <b>${spot.price}</b> night
      </div>
    </div>
  );
}

export default SpotCard;
