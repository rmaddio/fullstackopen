import { useState, useEffect } from "react";
import personService from "./services/persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPersons) => {
      console.log("promise fulfilled");
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const updatePerson = (person) => {
    const changedPerson = { ...person, number: newNumber };
    personService.update(person.id, changedPerson).then((response) => {
      setPersons(
        persons.map((p) => (p.id !== changedPerson.id ? p : response)),
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    console.log(persons.length + 1);

    const person = persons.find(({ name }) => name === newName);

    if (person) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        updatePerson(person);
      }
    } else {
      personService.create(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleDelete = (id) => {
    personService.deleteItem(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const copy = persons.filter(
    (person) =>
      person.name.toLowerCase().indexOf(value.toLowerCase().trim()) > -1,
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={value} handleValueChange={handleValueChange} />

      <h3>add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={copy} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
