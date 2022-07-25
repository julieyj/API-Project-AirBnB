import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spot';

const CreateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price
    }

    let createdSpot = await dispatch(createSpot(payload));

    if (createdSpot) {
      history.push(`/spots/${createdSpot.id}`);
    }
  }

  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   hideForm();
  // }

  return (
    <section className="form-container">
      <form className="create-spot-form" onSubmit={handleSubmit}>
        <input
          type="string"
          placeholder="Address"
          required
          value={address}
          onChange={updateAddress}
        />
        <input
          type="text"
          placeholder="City"
          required
          value={city}
          onChange={updateCity}
        />
        <input
          type="text"
          placeholder="State"
          required
          value={state}
          onChange={updateState}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={updateCountry}
        />
        <input
          type="decimal"
          placeholder="Latitude"
          value={lat}
          onChange={updateLat}
        />
        <input
          type="decimal"
          placeholder="Longitude"
          value={lng}
          onChange={updateLng}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={updateDescription}
        />
        <input
          type="decimal"
          placeholder="Price"
          value={price}
          onChange={updatePrice}
        />
        <button type="submit">Start Hosting</button>
        {/* <button type="button" onClick={handleCancelClick}>
          Cancel
        </button> */}
      </form>
    </section>
  );
}

export default CreateSpotForm;
