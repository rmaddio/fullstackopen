const Country = ({ props }) => {
  console.log(Object.values(props.languages));

  return (
    <>
      <h1>{props.name.common}</h1>
      <div>{props.capital}</div>
      <div>Area {props.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(props.languages).map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={props.flags.svg} width={300}></img>
    </>
  );
};

export default Country;
