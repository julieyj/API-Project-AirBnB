import { csrfFetch } from "./csrf";

const LOAD_SPOT_REVIEWS = 'reviews/LOAD_SPOT_REVIEWS';
const ADD_REVIEW = 'reviews/ADD_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

const removeReview = (id) => ({
  type: REMOVE_REVIEW,
  id
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

export const deleteReview = (id) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: 'DELETE',
  })

  if (response.ok) {
    const review = await response.json();
    console.log("REDUCER REVIEW", review);
    dispatch(removeReview(id));
    return review;
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

    case REMOVE_REVIEW: {
      delete newState[action.id];
      return newState;
    }

    default:
      return state;
  }
};

export default reviewReducer;
