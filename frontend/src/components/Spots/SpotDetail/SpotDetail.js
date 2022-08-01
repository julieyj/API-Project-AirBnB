import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { getOneSpot } from "../../../store/spot";
import { getSpotReviews, deleteReview } from "../../../store/review";
import "./SpotDetail.css";

function SpotDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots[id]);
  const currentUser = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const spotReviews = reviews.filter(
    (review) => review.spotId === parseInt(id)
  );

  // let spotPriceDetail = spot.price;
  // const spotPriceCommaDetail = new Intl.NumberFormat().format(spotPriceDetail);

  useEffect(() => {
    dispatch(getOneSpot(id));
    dispatch(getSpotReviews(id));
  }, [dispatch, id, spotReviews.length]);

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedReview = await dispatch(deleteReview(e.target.value));

    if (deletedReview) {
      console.log(`Succesfully deleted review.`);
    }
  };

  return (
    <>
      {spot && spotReviews && (
        <div className="spots-detail-page">
          <div className="spots-detail-container">
            <h1 className="spot-name">{spot.name}</h1>
            <div className="spots-detail-header">
              <div className="spot-detail-star">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    height: "14px",
                    width: "14px",
                    fill: "rgb(34, 34, 34)",
                  }}
                >
                  <path
                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="spot-detail-avg-rating">{Number(spot.avgStarRating).toFixed(2)}</div>
              <div className="dot-divider">·</div>
              <div className="spot-detail-reviews-count">
                <b>{spot.numReviews} reviews</b>
              </div>
              <div className="dot-divider">·</div>
              <div className="spot-detail-location">
                {" "}
                {spot.city}, {spot.state}, {spot.country}
              </div>
            </div>
            <div className="spot-detail-image-container">
              <img
                className="spot-detail-main-image"
                src={spot.previewImage}
                alt="Main Spot Pics"
              />
              <div className="spot-small-images-container">
                {spot.images &&
                  spot.images.map((image, index) => (
                    <img
                      id={`image-${index}`}
                      className="spot-small-images-items"
                      src={image.url}
                      alt="Current Spot Pics"
                      key={index}
                    />
                  ))}
              </div>
            </div>
            <div className="spot-detail-owner-price-container">
              <div>
                <h2 className="spot-detail-owner-text">
                  Entire location hosted by {spot?.Owners?.firstName}{" "}
                  {spot?.Owners?.lastName}
                </h2>
              </div>
              <div className="spot-detail-price">
                <div className="spot-detail-dollars"> ${spot.price}</div>
                <div className="spot-detail-night">&nbsp;night</div>
              </div>
            </div>
            <div className="spot-detail-description-container">
              <div className="spot-detail-description">
                {" "}
                {spot.description}{" "}
              </div>
              {currentUser && currentUser.id === spot.userId && (
                <>
                  <div className="spot-detail-edit-container">
                    <NavLink
                      className="spot-detail-edit-button"
                      to={`/spots/${spot.id}/edit`}
                      style={{ textDecoration: "none" }}
                    >
                      Edit Listing
                    </NavLink>
                  </div>
                </>
              )}
            </div>
            {spot && spotReviews && (
              <div className="spot-reviews-container">
                <div className="spot-reviews-header">
                  <div className="spot-reviews-star">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        height: "16px",
                        width: "16px",
                        fill: "rgb(34, 34, 34)",
                      }}
                    >
                      <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="spot-reviews-stars-avg">
                    {Number(spot.avgStarRating).toFixed(2)}
                  </div>
                  <div className="dot-divider-2">·</div>
                  <div className="spot-reviews-count">
                    <b>{spot.numReviews} reviews</b>
                  </div>
                </div>
                  {currentUser && currentUser.id !== spot.userId && (
                    <div className="spot-review-submit-container">
                      <NavLink
                        className="spot-review-submit-button"
                        to={`/spots/${spot.id}/review`}
                        style={{ textDecoration: "none" }}
                      >
                        Submit a Review
                      </NavLink>
                    </div>
                  )}
                <div className="spot-reviews-list-container">
                    {Object.values(spotReviews).map((spotReview, index) => (
                      <div className="spot-reviews-list-item-container" key={index}>
                        <div className="spot-reviews-list-item">
                          <p id="review-user-name">
                            {spotReview.User.firstName} {spotReview.User.lastName}
                          </p>
                          <p id="review-content">
                            {spotReview.review}
                          </p>
                        </div>
                        {spotReview &&
                          currentUser &&
                          spotReview.userId === currentUser.id && (
                            <div className="delete-review-container">
                              <button
                                className="delete-review-button"
                                onClick={handleDelete}
                                value={spotReview.id}
                              >
                                Delete Review
                              </button>
                            </div>
                          )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SpotDetail;
