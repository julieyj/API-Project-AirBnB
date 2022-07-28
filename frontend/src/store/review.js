import { csrfFetch } from "./csrf";

const LOAD_SPOT_REVIEWS = 'reviews/LOAD_USER_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';

const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

export const getSpotReviews = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/spots/${spotId}`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadSpotReviews(reviews));
    return reviews;
  }
};

export const createReview = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/spots/${payload.spotId}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });
  // console.log("PAYLOAD:", payload)
  if (response.ok) {
    const newReview = await response.json();
    dispatch(addReview(newReview));
    return newReview;
  }
};

const initialState = {}

const reviewReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_SPOT_REVIEWS: {
      action.reviews.forEach(review => {
        newState[review.id] = review
      });
      return newState;
    }

    case ADD_REVIEW: {
      newState[action.result.id] = action.result;
      return newState;
    }

    default:
      return state;
  }
};

export default reviewReducer;
