import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getAllSpots } from "../../../store/spot";
import SpotCard from "../SpotCard/SpotCard";
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
            <Link to={`/spots/${spot.id}`}>
              <SpotCard spot={spot} key={spot.id} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
};

export default SpotsBrowser;
