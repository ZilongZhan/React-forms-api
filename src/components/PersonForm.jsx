import axios from "axios";

export const PersonForm = ({
  newName,
  setNewName,
  newNumber,
  handleNewNumber,
  persons,
  setPersons,
}) => {
  const addNewPerson = (event) => {
    event.preventDefault();
    if (!persons.some((person) => person.name === newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: Date.now().toString,
      };

      axios.post("http://localhost:3001/persons", newPerson);
      setPersons([...persons, newPerson]);
    } else {
      alert(`${newName} is already added to the phonebook`);
    }
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
      <h2>Add a New Person:</h2>
      <form onSubmit={addNewPerson}>
        <div>
          <label htmlFor="new-Name">Name: </label>
          <input id="new-Name" value={newName} onChange={setNewName} />
          <br />
          <br />
          <label htmlFor="new-Number">Number: </label>
          <input id="new-Number" value={newNumber} onChange={handleNewNumber} />
        </div>
        <br />
        <br />
        <div>
          <button type="submit">add</button>
          <button onClick={resetPersons}>reset</button>
        </div>
      </form>
    </div>
  );
};
