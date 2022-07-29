import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserSpots } from "../../../store/spot";
import SpotCard from "../SpotCard/SpotCard";
import "./UserSpots.css";

function UserSpots() {
  const dispatch = useDispatch();
  // const { id } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const spots = useSelector((state) => Object.values(state.spots));

  useEffect(() => {
    dispatch(getUserSpots());
  }, [dispatch]);

  return (
    <>
      <div className="spots-list-body">
        <div className="spots-list-container">
          {currentUser && spots && spots.length > 0 &&
            spots.map((spot) => <SpotCard spot={spot} key={spot.id} />)}
        </div>
      </div>
    </>
  );
}

export default UserSpots;
