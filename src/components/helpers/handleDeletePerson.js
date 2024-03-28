import { deletePerson } from "../../services/person";

export const handleDeletePerson = (id, persons, setPersons) => {
  const remainingPersons = (person) => {
    return person.id != id;
  };

  deletePerson(id).then(() => {
    setPersons(persons.filter(remainingPersons));
  });
};
