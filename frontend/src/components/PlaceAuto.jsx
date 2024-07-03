import React, { useState, useEffect } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import '../App.css'

const PlaceAuto = ({ handleSelectAddress, type, initialValue }) => {
  const [address, setAddress] = useState(initialValue || "");
  const [placeId, setPlaceId] = useState("");

  const handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const placeId = results[0].place_id;

    setAddress(address);
    setPlaceId(placeId);

    handleSelectAddress(address, placeId, type);
  };

  useEffect(() => {
    if (initialValue) {
      setAddress(initialValue);
    }
  }, [initialValue]);

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Type address", className: "form-control" })} />
            <div className="suggestion-container">
            {loading ? <div>...loading</div> : null}
            {suggestions.map((suggestion) => {
              const className = suggestion.active ? "suggestion-item active" : "suggestion-item";
              return (
                <div {...getSuggestionItemProps(suggestion, { className })}>
                  {suggestion.description}
                </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default PlaceAuto;



    
