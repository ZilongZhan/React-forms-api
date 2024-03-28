import { Filter, Numbers, PersonForm } from "./components";
import { Header } from "./components/shared";
import { useFormFilter, usePersons, useForm } from "./hooks";

const App = () => {
  const { newName, newNumber, handleNewNameValue, handleNewNumberValue } =
    useForm();
  const { newFilter, handleNewFilterValue } = useFormFilter();
  const { persons, handleUpdatePersons } = usePersons();

  return (
    <main>
      <Header heading="Phonebook" />
      <Filter setNewFilter={handleNewFilterValue} />
      <PersonForm
        newName={newName}
        setNewName={handleNewNameValue}
        newNumber={newNumber}
        handleNewNumber={handleNewNumberValue}
        persons={persons}
        setPersons={handleUpdatePersons}
      />
      <Numbers
        newFilter={newFilter}
        persons={persons}
        setPersons={handleUpdatePersons}
      />
    </main>
  );
};

export default App;
