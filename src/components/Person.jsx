import { Button } from "./shared";
import { handleDeletePerson } from "./helpers";

export const Person = ({ index, person, persons, setter }) => {
  return (
    <li key={index}>
      {person.name} {person.number}
      <Button
        label="delete"
        action={() => handleDeletePerson(person.id, persons, setter)}
      />
    </li>
  );
};
