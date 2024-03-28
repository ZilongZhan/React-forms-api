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
        <Button label={"add"} type={"submit"} />
      </form>
    </div>
  );
};
