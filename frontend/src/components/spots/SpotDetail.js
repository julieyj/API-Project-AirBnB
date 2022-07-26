import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getAllSpots, getOneSpot } from "../../store/spot";

const SpotsDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const currentSpot = useSelector((state) => state.spots[id]);

  useEffect(() => {
    dispatch(getOneSpot(id));
  }, [dispatch]);

  if (!spot) {
    return null;
  }

  return <div></div>;
};

export default SpotsDetail;
