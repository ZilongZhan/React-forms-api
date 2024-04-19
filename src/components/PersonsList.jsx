import { Person } from "./Person";

export const PersonsList = ({ persons, filter, setter }) => {
  const filterPersons = (person) => {
    return person.name.includes(filter);
  };

  return (
    <ul>
      {persons.filter(filterPersons).map((person, index) => (
        <Person key={index} person={person} persons={persons} setter={setter} />
      ))}
    </ul>
  );
};
