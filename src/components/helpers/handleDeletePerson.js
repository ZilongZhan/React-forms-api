import { deletePerson } from "../../services/person";

export const handleDeletePerson = (id, persons, setPersons) => {
  deletePerson(id).then(() => {
    setPersons(persons.filter((person) => person.id != id));
  });
};
