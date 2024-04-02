import { deletePerson } from "../../services/person";

export const handleDeletePerson = (id, name, persons, setPersons) => {
  const remainingPersons = (person) => {
    return person.id != id;
  };

  if (confirm(`Delete ${name}?`)) {
    deletePerson(id).then(() => {
      setPersons(persons.filter(remainingPersons));
    });
  }
};
