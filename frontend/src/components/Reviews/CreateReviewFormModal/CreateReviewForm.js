import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { createReview } from "../../../store/review";
// import "./CreateReviewFormPage.css";

function CreateReviewForm({ setShowModal }) {
  const history = useHistory();
  const { id } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[id]);
  const dispatch = useDispatch();

  const [spotId, setSpotId] = useState(id);
  const [userId, setUserId] = useState(currentUser.id);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");
  const [errors, setErrors] = useState([]);

  const updateReview = (e) => setReview(e.target.value);
  const updateStars = (e) => setStars(e.target.value);

  useEffect(() => {
    const newErrors = [];

    if (review.length <= 0) {
      newErrors.push("Please write a review.");
    }
    if (stars < 1 || stars > 5) {
      newErrors.push("Rating must be an integer from 1 to 5.");
    }
    setErrors(newErrors);
  }, [review, stars]);

  if (spot?.Owners?.id === currentUser.id) {
    console.log("Owner cannot add their own review.");
    <Redirect to={`/spots/${spot.id}`} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      spotId,
      userId,
      review,
      stars,
    };

    const createdReview = dispatch(createReview(payload));

    if (createdReview) {
      setShowModal(false);
      history.push(`/spots/${spotId}`);
    }
  };

  const handleClose = async (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/spots/${spot.id}`);
  };

  return (
    <form className="create-review-form-modal" onSubmit={handleSubmit}>
      <div className="create-review-header-container">
        <div className="create-review-close" onClick={() => setShowModal(false)}>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "3",
              overflow: "visible",
            }}
          >
            <path d="m6 6 20 20"></path>
            <path d="m26 6-20 20"></path>
          </svg>
        </div>
        <span className="create-review-title">How was your stay?</span>
      </div>
      <div className="create-review-errors-container">
        {errors.map((error) => (
          <p key={error}>Error: {error}</p>
        ))}
      </div>
      <div className="modal-body">
        <label className="create-review-label">
          Review
          <div className="create-review-input-container">
            <input
              className="create-review-input"
              type="string"
              placeholder="Write your review..."
              required
              value={review}
              onChange={updateReview}
            />
          </div>
        </label>
        <label className="create-review-label">
          Star Rating
          <div>
            <input
              className="create-review-input"
              type="integer"
              placeholder="1 - 5"
              required
              value={stars}
              onChange={updateStars}
            />
          </div>
        </label>
      </div>
      <div className="review-submit-container">
        <button
          className="create-review-submit-button"
          type="submit"
          disabled={errors.length ? true : false}
        >
          Submit Review
        </button>
      </div>
      {/* <div className="review-close-container">
        <button className="close-review-button" onClick={handleClose}>
          Close Review
        </button>
      </div> */}
    </form>
  );
}

export default CreateReviewForm;
