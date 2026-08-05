import Button from "./Button";

const Persons = ({ persons, handleDelete }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}&nbsp;
          <Button handleClick={() => handleDelete(person.id)} text="delete" />
        </div>
      ))}
    </>
  );
};

export default Persons;
