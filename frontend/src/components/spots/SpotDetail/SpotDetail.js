import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { getOneSpot } from "../../../store/spot";
import { getSpotReviews } from "../../../store/review";
import './SpotDetail.css';


function SpotDetail() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector(state => (state.spots[id]));
  const currentUser = useSelector((state) => state.session.user);
  const reviews = useSelector(state => Object.values(state.reviews));
  const spotReviews = reviews.filter(review => review.spotId === parseInt(id));

  useEffect(() => {
    dispatch(getOneSpot(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getSpotReviews(id));
  }, [dispatch, id])

  return (
    <>
      {spot && spotReviews && (
        <div className="spots-detail-container">
          <div>
            <div className="spot-detail-name">Name {spot.name}</div>
            <div className="spot-detail-reviews-stars">
              ★ {spot.avgStarRating}
            </div>
            <div className="spot-detail-reviews-count">
              <b>{spot.numReviews} reviews</b>
            </div>
            <div className="spot-detail-location">
              {" "}
              {spot.city}, {spot.state}, {spot.country}
            </div>
            <div className="spot-detail-images">
              {" "}
              Images
              <img src={spot.images} alt="Current Spot Pics" />
            </div>
            <div className="spot-detail-owner">
              Entire location hosted by {spot?.Owners?.firstName}{" "}
              {spot?.Owners?.lastName}
            </div>
            <div className="spot-detail-description"> {spot.description} </div>
            <div className="spot-detail-price"> ${spot.price} night</div>
          </div>
          {currentUser && currentUser.id === spot.userId && (
            <>
            <div>
              <NavLink to={`/spots/${spot.id}/edit`}>Edit Listing</NavLink>
            </div>
            </>
          )}
          {currentUser && currentUser.id !== spot.userId && (
            <div>
              <NavLink to={`/spots/${spot.id}/review`}>Submit a Review</NavLink>
            </div>
          )}
        </div>
      )}
      {spot && spotReviews && (
      <div className="spot-reviews-container">
        <div className="spot-reviews-stars">
              ★ {spot.avgStarRating}
            </div>
            <div className="spot-reviews-count">
              <b>{spot.numReviews} reviews</b>
            </div>
        <ul className="spot-reviews-unordered-list">
          <li className="spot-reviews-list-item-array">
            {Object.values(spotReviews).map(spotReview => (
              <div className="spot-reviews-list-item">
                {spotReview.review}
              </div>
              )
            )}
          </li>
        </ul>
      </div>
    )}
    </>
  );
};

export default SpotDetail;
