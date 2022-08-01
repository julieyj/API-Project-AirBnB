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
            <div className="spots-list-container-items" key={spot.id}>
              <Link classame="spot-card-link" to={`/spots/${spot.id}`} style={{ textDecoration: "none"}}>
                <SpotCard spot={spot} key={spot.id.toString()} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
};

export default SpotsBrowser;
