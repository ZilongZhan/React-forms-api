import { Person } from "./Person";

export const PersonsList = ({ persons, filter, setter }) => {
  return (
    <ul>
      {persons
        .filter((person) => person.name.includes(filter))
        .map((person, index) => (
          <Person
            key={index}
            person={person}
            persons={persons}
            setter={setter}
          />
        ))}
    </ul>
  );
};
