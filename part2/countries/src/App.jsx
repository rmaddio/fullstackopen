import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import serviceCaountries from "./services/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const copy = countries.filter(
    (country) =>
      country.name.common.toLowerCase().indexOf(value.toLowerCase().trim()) >
      -1,
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("effect");
    serviceCaountries.getAll().then((initialCountries) => {
      console.log("promise fulfilled");
      setCountries(initialCountries);
    });
  }, []);
  console.log("get", countries.length, "countries");

  return (
    <>
      <Filter handleChange={handleChange} />

      <Countries countries={copy} />
    </>
  );
}

export default App;
