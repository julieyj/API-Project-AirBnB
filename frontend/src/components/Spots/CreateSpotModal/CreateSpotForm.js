import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import CreateSpotFormModal from ".";
import { createSpot } from "../../../store/spot";

function CreateSpotForm({ setShowModal }) {
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previewImage, setPreviewImage] = useState("");
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

    if (!currentUser) {
      newErrors.push("Please log in or sign up with MuseumBnB to continue.");
    }
    if (name.length <= 0) {
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
    if (price < 0) {
      newErrors.push("Price per day cannot be less than $0.");
    }
    setErrors(newErrors);
  }, [currentUser, name, lat, lng, price]);

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
      price,
      previewImage,
    };

    const createdSpot = await dispatch(createSpot(payload));

    if (createdSpot) {
      setShowModal(false);
      history.push(`/spots/${createdSpot.id}`);
    }
  };

  return (
    <>
      <form className="create-spot-form" onSubmit={handleSubmit}>
        <div className="modal-title-create-spot">
          <div
            className="create-spot-close"
            onClick={() => setShowModal(false)}
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "currentcolor",
                strokeWidth: "3",
                overflow: "visible",
              }}
            >
              <path d="m6 6 20 20"></path>
              <path d="m26 6-20 20"></path>
            </svg>
          </div>
          <span className="create-spot-title">Become a host</span>
        </div>
        <div className="create-spot-divider">
          <div className="create-spot-title-welcome">
            <span>Welcome to Airbnb</span>
          </div>
          <div className="create-spot-errors">
            {errors.map((error) => (
              <p key={error.id}>Error: {error}</p>
            ))}
          </div>
          <div className="modal-body-create-spot">
            <label className="label-1">
              Address
              <div>
                <input
                  className="create-spot-input"
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
                  className="create-spot-input"
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
                  className="create-spot-input"
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
                  className="create-spot-input"
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
                  className="create-spot-input"
                  type="number"
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
                  className="create-spot-input"
                  type="number"
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
                  className="create-spot-input"
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
                  className="create-spot-input"
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
                  className="create-spot-input"
                  type="number"
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
                  className="create-spot-input"
                  type="text"
                  placeholder="Preview Image URL"
                  value={previewImage}
                  onChange={updatePreviewImage}
                />
              </div>
            </label>
            <button
              className="create-spot-submit-button"
              type="submit"
              disabled={errors.length ? true : false}
            >
              Start Hosting
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateSpotForm;
