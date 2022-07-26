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
    <div className="spots-list-container">"Spots Container"
      {spots && (
        spots.map(spot => (
            <SpotCard spot={spot} />
        ))
      )}
    </div>
  )
};

export default SpotsBrowser;
