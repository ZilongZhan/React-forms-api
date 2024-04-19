import axios from "axios";
import { FormInput } from "./FormInput";
import { Button, Header, LineBreak } from "./shared";
import { handleNewPerson } from "./helpers";

export const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  handleNewNumber,
  persons,
  setPersons,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewPerson(newName, newNumber, persons, setPersons);
  };

  const resetPersons = (event) => {
    const originalPersons = [
      {
        name: "Arto Hellas",
        number: "040-123456",
        id: "1",
      },
      {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: "2",
      },
      {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: "3",
      },
      {
        name: "Mary Poppendieck",
        number: "39-23-6423122",
        id: "4",
      },
    ];

    event.preventDefault();
    axios.get("http://localhost:3001/persons").then((response) => {
      response.data.forEach((person) => {
        axios.delete(`http://localhost:3001/persons/${person.id}`);
      });
    });

    originalPersons.forEach((originalPerson) => {
      axios.post("http://localhost:3001/persons", originalPerson);
    });

    setPersons([...originalPersons]);
  };

  return (
    <div>
      <Header heading="Add a New Person:" />
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          id="new-Name"
          value={newName}
          action={setNewName}
        />
        <LineBreak />
        <FormInput
          label="Number"
          id="new-Number"
          value={newNumber}
          action={handleNewNumber}
        />
        <LineBreak />
        <Button label={"add"} type={"submit"}/>
      </form>
      <Button label={"reset"} type={"button"} action={resetPersons} />
    </div>
  );
};
