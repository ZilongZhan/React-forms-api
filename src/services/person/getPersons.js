const baseUrl = "http://localhost:3001/persons";

export const getPersons = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((persons) => persons);
};
