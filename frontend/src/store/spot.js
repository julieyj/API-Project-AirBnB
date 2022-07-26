// import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/LOAD_ALL_SPOTS';
const LOAD_ONE_SPOT = 'spots/GET_ONE_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
// const REMOVE_SPOT = 'spots/REMOVE_SPOT';

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

// const removeSpot = (id) => ({
//   type: REMOVE_SPOT,
//   id
// });

export const getAllSpots = () => async dispatch => {
  const response = await fetch('/api/spots');

  if (response.ok) {
    const spots = await response.json();
    dispatch(loadAllSpots(spots));
  }
};

export const getOneSpot = (id) => async dispatch => {
  const response = await fetch(`/api/spots/${id})`);

  if (response.ok) {
    const spot = await response.json();
    dispatch(loadOneSpot(spot));
  }
};

export const createSpot = (payload) => async dispatch => {
  const response = await fetch('/api/spots', {
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

export const editSpot = (payload, id) => async dispatch => {
  const response = await fetch(`/api/spots/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const updatedSpot = await response.json();
    dispatch(addSpot(updatedSpot));
    return updatedSpot;
  }
};

// export const deleteSpot = (id) => async dispatch => {
//   const response = await fetch(`/spots/${id}`, {
//     method: 'DELETE',
//   })

//   if (response.ok) {
//     const spot = await response.json();
//     dispatch(removeSpot(spot));
//     console.log(`Successfully deleted spotId: ${id}`);
//   }
// };


const spotReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_SPOTS:
      newState = Object.assign({}, state);
      action.spots.map(spot => newState[spot.id] = spot);
      return newState;

    case LOAD_ONE_SPOT:
      newState = Object.assign({}, state);
      newState[action.spot.id] = action.spot;
      return newState;

    case ADD_SPOT:


    // case ADD_SPOT:
    //   if (!state[action.spot.id]) {
    //     const newState = {
    //       ...state,
    //       [action.spot.id]: action.spot
    //     };
    //     const spotsList = newState.spots.map(id => newState[id]);
    //     spotsList.push(action.spot);
    //     return newState;
    //   }
    //   return {
    //     ...state,
    //     [action.spot.id]: {
    //       ...state[action.spot.id],
    //       ...action.spot
    //     }
    //   };

    // case REMOVE_SPOT:
    //   const newState = {...state};
    //   delete newState[action.id];
    //   return newState;

    default:
      return state;
  }
}

export default spotReducer;
