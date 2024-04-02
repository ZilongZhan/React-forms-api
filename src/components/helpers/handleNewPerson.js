import { addPerson, getPersons, updatePerson } from "../../services/person";

export const handleNewPerson = (newName, newNumber, persons, setPersons) => {
  const existingPersonIndex = persons.findIndex(
    (person) => person.name === newName
  );

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
    const existingPerson = persons[existingPersonIndex];

    if (
      confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const oldPerson = {
        ...existingPerson,
        number: newNumber,
      };

      updatePerson(oldPerson).then(() =>
        getPersons().then((personsData) => setPersons(personsData))
      );
    }
  }
};
