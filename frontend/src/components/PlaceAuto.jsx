import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const PlaceAuto = () => {
    const [address, setAddress] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [selectedAddress, setSelectedAddress] = useState("");
    const [selectedPlaceId, setSelectedPlaceId] = useState("");

    const handleSelect = async (address) => {
        const results = await geocodeByAddress(address);
        const latLng = await getLatLng(results[0]);
        const selectedPlaceId = results[0].place_id;

        setAddress(address);
        setSelectedAddress(address);
        setPlaceId(selectedPlaceId);
        setSelectedPlaceId(selectedPlaceId);

        console.log("Selected Address:", address);
        console.log("Selected Place ID:", selectedPlaceId);
        console.log("Latitude:", latLng.lat);
        console.log("Longitude:", latLng.lng);
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
                        <p>Selected Address: {selectedAddress}</p>
                        <p>Selected Place ID: {selectedPlaceId}</p>

                        <input {...getInputProps({ placeholder: "Type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
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
    
