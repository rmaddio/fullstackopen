const Filter = ({ handleChange }) => {
  return (
    <>
      <label>find countries&nbsp;</label>
      <input
        type="text"
        onChange={handleChange}
        id="countryName"
        name="countryName"
      />
    </>
  );
};

export default Filter;
