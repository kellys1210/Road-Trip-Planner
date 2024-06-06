import React, { useState, useEffect } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const PlaceAuto = ({ handleSelectAddress, type, initialValue }) => {
  const [address, setAddress] = useState(initialValue || "");
  const [placeId, setPlaceId] = useState("");

  useEffect(() => {
    if (initialValue) {
      setAddress(initialValue);
    }
  }, [initialValue]);

  const handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    const selectedPlaceId = results[0].place_id;

    setAddress(address);
    setPlaceId(selectedPlaceId);

    console.log("Selected Address:", address);
    console.log("Selected Place ID:", selectedPlaceId);
    console.log("Latitude:", latLng.lat);
    console.log("Longitude:", latLng.lng);

    handleSelectAddress(address, selectedPlaceId, type);
  };

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Selected Address: {address}</p>
            <p>Selected Place ID: {placeId}</p>
            <input {...getInputProps({ placeholder: "Type address" })} />
            <div>
              {loading ? <div>...loading</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#5fac35" : "#fff",
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
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


    
