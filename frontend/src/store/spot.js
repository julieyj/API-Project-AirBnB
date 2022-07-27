import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/LOAD_ALL_SPOTS';
const LOAD_ONE_SPOT = 'spots/GET_ONE_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
const EDIT_SPOT = 'spots/EDIT_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';
// const LOAD_USER_SPOTS = 'spots/LOAD_USER_SPOTS';

const loadAllSpots = (spots) => ({
  type: LOAD_ALL_SPOTS,
  spots
});

const loadOneSpot = (spot) => ({
  type: LOAD_ONE_SPOT,
  spot
});

const addSpot = (spot) => ({
  type: ADD_SPOT,
  spot
});

const editSpot = (spot) => ({
  type: EDIT_SPOT,
  spot
})

const removeSpot = (id) => ({
  type: REMOVE_SPOT,
  id
});

// const loadUserSpots = (spots) => ({
//   type: LOAD_USER_SPOTS,
//   spots
// })

export const getAllSpots = () => async dispatch => {
  const response = await csrfFetch('/api/spots');

  if (response.ok) {
    const spots = await response.json();
    dispatch(loadAllSpots(spots));
    return response;
  }
};

export const getOneSpot = (id) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${id}`);

  if (response.ok) {
    const spot = await response.json();
    dispatch(loadOneSpot(spot));
    return response;
  }
};

export const createSpot = (payload) => async dispatch => {
  const response = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const newSpot = await response.json();
    dispatch(addSpot(newSpot));
    return newSpot;
  }
};

export const updateSpot = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${payload.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const updatedSpot = await response.json();
    dispatch(editSpot(updatedSpot));
    return updatedSpot;
  }
};

export const deleteSpot = (id) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: 'DELETE',
  })

  if (response.ok) {
    const spot = await response.json();
    dispatch(removeSpot(id));
    return spot;
  }
};

// export const getUserSpots = (id) => async dispatch => {
//   const response = await csrfFetch(`/api/spots/users/${id}`);

//   if (response.ok) {
//     const userSpots = await response.json();
//     dispatch(loadUserSpots(id));
//     return userSpots;
//   }
// }

const initialState = {}

const spotReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_SPOTS: {
      action.spots.forEach(spot => {
          newState[spot.id] = spot
        });
        return newState;
    }

    case LOAD_ONE_SPOT: {
      newState[action.spot.id] = action.spot;
      return {
        ...state,
        ...newState
      };
    }

    case ADD_SPOT: {
      newState[action.spot.id] = action.spot;
      return newState;
    }

    case EDIT_SPOT: {
      newState[action.spot.id] = action.spot;
      return newState;
    }

    case REMOVE_SPOT: {
      delete newState[action.id];
      return newState;
    }

    default:
      return state;
  }
}

export default spotReducer;
