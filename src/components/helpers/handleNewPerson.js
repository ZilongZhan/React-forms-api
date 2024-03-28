import { addPerson } from "../../services/person";
import { getPersons } from "../../services/person";

export const handleNewPerson = (newName, newNumber, persons, setPersons) => {
  if (!persons.some((person) => person.name === newName)) {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: Date.now().toString,
    };

    addPerson(newPerson).then(
      getPersons().then((personsData) => setPersons(personsData))
    );
  } else {
    alert(`${newName} is already added to the phonebook`);
  }
};
