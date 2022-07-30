import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
// import CreateSpotFormModal from ".";
import { createSpot } from '../../../store/spot';

function CreateSpotForm({ setShowModal }) {
  const history = useHistory();
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [previewImage, setPreviewImage] = useState('');
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
      newErrors.push('Please log in or sign up with MuseumBnB to continue.')
    }
    if (name.length <= 0) {
      newErrors.push('Name is required.');
    } else if (name.length > 50) {
      newErrors.push('Name must be 50 characters or less.')
    };
    if (lat < -90 || lat > 90) {
      newErrors.push('Please check your latitude.')
    };
    if (lng < -180 || lng > 180) {
      newErrors.push('Please check your longitude.')
    };
    setErrors(newErrors);
  }, [currentUser, name, lat, lng]);

  // if (!currentUser) {
  //   return (
  //     <Redirect to='/' />
  //   )
  // }

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
  }

  return (
    <>
        <section className="create-spot-form-container">
          <form className="create-spot-form" onSubmit={handleSubmit}>
            <div className="modal-title">
              <h3>Become a host</h3>
            </div>
            <ul className="errors">
              {errors.map((error) => (
                <li key={error.id}>{error}</li>
              ))}
            </ul>
            <div className="modal-body">
              <button
                className="close"
                type="button"
                onClick={() => setShowModal(false)}
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  height="30"
                  width="30"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                    fill="#484848"
                  />
                </svg>
              </button>
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
                    className="create-spot-input"
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
                    className="create-spot-input"
                    type="text"
                    placeholder="Preview Image URL"
                    value={previewImage}
                    onChange={updatePreviewImage}
                  />
                </div>
              </label>
            </div>
            <button
              className="create-spot-submit-button"
              type="submit"
              disabled={errors.length ? true : false}
            >
              Start Hosting
            </button>
          </form>
        </section>
    </>
  );
}

export default CreateSpotForm;
