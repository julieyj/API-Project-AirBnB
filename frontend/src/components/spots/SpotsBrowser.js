import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllSpots } from "../../store/spot";
import SpotCard from "./SpotCard";
import './SpotsBrowser.css';

function SpotsBrowser() {
  const dispatch = useDispatch();

  const spots = useSelector(state => Object.values(state.spots));

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  return (
    <div className="spots-list-body">
      <div className="spots-list-container">
        {spots && (
          spots.map(spot => (
              <SpotCard spot={spot} key={spot.id} />
          ))
        )}
      </div>
    </div>
  )
};

export default SpotsBrowser;
