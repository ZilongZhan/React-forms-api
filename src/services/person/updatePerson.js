const baseUrl = "http://localhost:3001/persons";

export const updatePerson = (person) => {
  return fetch(`${baseUrl}/${person.id}`, {
    method: "PUT",
    body: JSON.stringify(person),
  });
};
