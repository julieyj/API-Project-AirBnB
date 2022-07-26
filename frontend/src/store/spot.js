import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/LOAD_ALL_SPOTS';
const LOAD_ONE_SPOT = 'spots/GET_ONE_SPOT';
// const ADD_SPOT = 'spots/ADD_SPOT';
// const REMOVE_SPOT = 'spots/REMOVE_SPOT';

const loadAllSpots = (spots) => ({
  type: LOAD_ALL_SPOTS,
  spots
});

const loadOneSpot = (spot) => ({
  type: LOAD_ONE_SPOT,
  spot
});

// const addSpot = (spot) => ({
//   type: ADD_SPOT,
//   payload: spot
// });

// const removeSpot = (id) => ({
//   type: REMOVE_SPOT,
//   payload: id
// });

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
  console.log("response: ", response)

  if (response.ok) {
    const spot = await response.json();
    dispatch(loadOneSpot(spot));
    return response;
  }
};

// export const createSpot = (payload) => async dispatch => {
//   const response = await csrfFetch('/api/spots', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(payload)
//   });

//   if (response.ok) {
//     const newSpot = await response.json();
//     dispatch(addSpot(newSpot));
//     return newSpot;
//   }
// };

// export const editSpot = (payload, id) => async dispatch => {
//   const response = await csrfFetch(`/api/spots/${id}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(payload)
//   });

//   if (response.ok) {
//     const updatedSpot = await response.json();
//     dispatch(addSpot(updatedSpot));
//     return updatedSpot;
//   }
// };

// export const deleteSpot = (id) => async dispatch => {
//   const response = await csrfFetch(`/spots/${id}`, {
//     method: 'DELETE',
//   })

//   if (response.ok) {
//     const spot = await response.json();
//     dispatch(removeSpot(spot));
//     console.log(`Successfully deleted spotId: ${id}`);
//   }
// };

const initialState = {}

const spotReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case LOAD_ALL_SPOTS: {
      // console.log(action.spots);
      action.spots.forEach(spot => {
          newState[spot.id] = spot
        });
        return newState;
    }

    case LOAD_ONE_SPOT: {
      // console.log(action.spot);
      newState[action.spot.id] = action.spot;
      return {
        ...state,
        ...newState
      };
    }

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
