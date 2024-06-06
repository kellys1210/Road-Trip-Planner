import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const PlaceAuto = ({ handleSelectAddress, type }) => {
    const [address, setAddress] = useState("");
    const [placeId, setPlaceId] = useState("");

    const handleSelect = async (address) => {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        const placeId = results[0].place_id;

        setAddress(address);
        setPlaceId(placeId);

        console.log("Selected Address:", address);
        console.log("Selected Place ID:", placeId);
        console.log("Latitude:", latLng.lat);
        console.log("Longitude:", latLng.lng);

        handleSelectAddress(address, placeId, type);
    };

    return (
        <div>
            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <p>Selected Address: {address}</p>
                        <p>Selected Place ID: {placeId}</p>

                        <input {...getInputProps({ placeholder: "Type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#5fac35" : "#fff"
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
}

export default PlaceAuto;
    
