import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { updateSpot, deleteSpot } from '../../../store/spot';
import './EditSpotForm.css';

function EditSpotForm() {
  const { id } = useParams();
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spots[id]);
  const dispatch = useDispatch();

  const [spotId, setSpotId] = useState(id);
  const [userId, setUserId] = useState(spot.userId);
  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [lat, setLat] = useState(spot.lat);
  const [lng, setLng] = useState(spot.lng);
  const [name, setName] = useState(spot.name);
  const [description, setDescription] = useState(spot.description);
  const [price, setPrice] = useState(spot.price);
  const [previewImage, setPreviewImage] = useState(spot.previewImage || "");
  const [errors, setErrors] = useState([]);

  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updatePrice = (e) => setPrice(e.target.value);
  const updatePreviewImage = (e) => setPreviewImage(e.target.value);

  useEffect(() => {
    const newErrors = [];

    if (name.length < 0) {
      newErrors.push("Name is required.");
    } else if (name.length > 50) {
      newErrors.push("Name must be 50 characters or less.");
    }
    if (lat < -90 || lat > 90) {
      newErrors.push("Please check your latitude.");
    }
    if (lng < -180 || lng > 180) {
      newErrors.push("Please check your longitude.");
    }
    setErrors(newErrors);
  }, [name, lat, lng]);

  if (!currentUser) {
    return <Redirect to="/" />;
  };

  if (spot.userId && spot.userId !== currentUser.id) {
    return <Redirect to='/' />;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...spot,
      spotId,
      userId,
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImage,
    };

    let updatedSpot = dispatch(updateSpot(payload));

    if (updatedSpot) {
      console.log(`Successfully updated spotId: ${id}`);
      history.push(`/spots/${id}`);
    };
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    let deletedSpot = dispatch(deleteSpot(id));

    if (deletedSpot) {
      console.log(`Successfully deleted spotId: ${id}`);
      history.push(`/`);
    };
  };

  return (
    <section className="edit-spot-form-container">
      <form className="edit-spot-form" onSubmit={handleSubmit}>
        <div className="X">
          <h3>Edit your listing</h3>
        </div>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error.id}>{error}</li>
          ))}
        </ul>
        <div className="XX">
          <button
            className="delete-spot-button"
            onClick={handleDelete}
          >
            Remove Listing
          </button>
          <label className="label-1">
            Address
            <div>
              <input
                className="edit-spot-input"
                type="string"
                placeholder="Address"
                required
                value={address}
                onChange={updateAddress}
              />
            </div>
          </label>
          <label className="label-1">
            City
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={updateCity}
              />
            </div>
          </label>
          <label className="label-1">
            State
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={updateState}
              />
            </div>
          </label>
          <label className="label-1">
            Country
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="Country"
                required
                value={country}
                onChange={updateCountry}
              />
            </div>
          </label>
          <label className="label-1">
            Latitude
            <div>
              <input
                className="edit-spot-input"
                type="decimal"
                placeholder="Latitude"
                required
                value={lat}
                onChange={updateLat}
              />
            </div>
          </label>
          <label className="label-1">
            Longitude
            <div>
              <input
                className="edit-spot-input"
                type="decimal"
                placeholder="Longitude"
                required
                value={lng}
                onChange={updateLng}
              />
            </div>
          </label>
          <label className="label-1">
            Name
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={updateName}
              />
            </div>
          </label>
          <label className="label-1">
            Description
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="Description"
                required
                value={description}
                onChange={updateDescription}
              />
            </div>
          </label>
          <label className="label-1">
            Price
            <div>
              <input
                className="edit-spot-input"
                type="decimal"
                placeholder="Price"
                required
                value={price}
                onChange={updatePrice}
              />
            </div>
          </label>
          <label className="label-1">
            Preview Image
            <div>
              <input
                className="edit-spot-input"
                type="text"
                placeholder="Preview Image URL"
                required
                value={previewImage}
                onChange={updatePreviewImage}
              />
            </div>
          </label>
        </div>
        <button
          className="edit-spot-submit-button"
          type="submit"
          disabled={errors.length ? true : false}
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}

export default EditSpotForm;
