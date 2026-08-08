import Country from "./Country";

const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countries.length === 1) {
    return <Country props={countries[0]} />;
  }
  return (
    <>
      {countries.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </>
  );
};

export default Countries;
