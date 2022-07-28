import { csrfFetch } from "./csrf";

const LOAD_SPOT_REVIEWS = 'reviews/LOAD_USER_REVIEWS';

const loadSpotReviews = (reviews) => ({
  type: LOAD_SPOT_REVIEWS,
  reviews
});

export const getSpotReviews = (spotId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/spots/${spotId}`);

  if (response.ok) {
    const reviews = await response.json();
    dispatch(loadSpotReviews(reviews));
    return reviews;
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
    default:
      return state;
  }
};

export default reviewReducer;
