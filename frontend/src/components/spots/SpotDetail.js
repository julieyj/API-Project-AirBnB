import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getOneSpot } from "../../store/spot";


function SpotDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneSpot(id));
  }, [dispatch, id]);

  const spot = useSelector(state => (state.spots[id]));
  console.log("spot: ", spot);

  if (!spot) {
    return null;
  }

  return (
    <div className="spots-detail-container">
      {spot && (
        <>
          <div className="spot-detail-name">Name {spot.name}</div>
          <div className="spot-detail-reviews">★ {spot.avgStarRating} {spot.numReviews}</div>
          <div className="spot-detail-location"> {spot.city}, {spot.state}, {spot.country}</div>
          <div className="spot-detail-images"> Images
            <img src={spot.images} />
          </div>
          <div className="spot-detail-owner">Entire location hosted by {spot.Owners.firstName}</div>
          <div className="spot-detail-description"> {spot.description} </div>
          <div className="spot-detail-price"> ${spot.price} night</div>
        </>
      )}
    </div>
  );
};

export default SpotDetail;
