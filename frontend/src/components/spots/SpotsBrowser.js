import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSpots } from "../../store/spot";
import SpotCard from "./SpotCard";

const SpotsBrowser = () => {
  const dispatch = useDispatch();

  const spotsList = useSelector((state) => state.spots.spotsList);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  return (
    <div>
      {spotsList.map(spot => (
        <Link to={`/spots/${spot.id}`}>
          <SpotCard spot={spot} />
        </Link>
      ))}
    </div>
  )
};

export default SpotsBrowser;
