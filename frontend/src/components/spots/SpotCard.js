function SpotCard({ spot }) {

  return (
    <div className="spot-card-container">
      <img src={spot.previewImage[0].url} />
      <div className="spot-card-location">
        <h2>{spot.city}, {spot.state}</h2>
      </div>
      <div className="spot-card-review">
        {spot.avgStarRating}
      </div>
      <div className="spot-card-price">
        {spot.price}
      </div>
    </div>
  )
}

export default SpotCard;
