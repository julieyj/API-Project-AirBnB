import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { getOneSpot, deleteSpot } from "../../../store/spot";
import './SpotDetail.css';


function SpotDetail() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector(state => (state.spots[id]));
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getOneSpot(id));
  }, [dispatch, id]);

  return (
    <>
      {spot && (
        <div className="spots-detail-container">
            <div>
              <div className="spot-detail-name">Name {spot.name}</div>
              <div className="spot-detail-reviews">★ {spot.avgStarRating} {spot.numReviews}</div>
              <div className="spot-detail-location"> {spot.city}, {spot.state}, {spot.country}</div>
              <div className="spot-detail-images"> Images
                <img src={spot.images} alt="Current Spot Pics" />
              </div>
              <div className="spot-detail-owner">Entire location hosted by {spot?.Owners?.firstName} {spot?.Owners?.lastName}</div>
              <div className="spot-detail-description"> {spot.description} </div>
              <div className="spot-detail-price"> ${spot.price} night</div>
            </div>
              {currentUser && currentUser.id === spot.userId && (
                <>
                  <NavLink to={`/spots/${spot.id}/edit`}>Edit Listing</NavLink>
                </>
              )}
            </div>
        )}
    </>
  );
};

export default SpotDetail;
