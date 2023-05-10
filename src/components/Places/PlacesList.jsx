import { useEffect, useState } from "react";
import Place from "./Place";
import Loader from "../Loader";

const PlacesList = ({ search }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {places
        .filter(
          (place) =>
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.city.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((place) => (
          <Place key={place.id} place={place} />
        ))}
    </div>
  );
};

PlacesList.propTypes = {
  search: PropTypes.string,
};

export default PlacesList;
