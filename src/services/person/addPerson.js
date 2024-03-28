const baseUrl = "http://localhost:3001/persons";

export const addPerson = (newPerson) => {
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(newPerson),
  });
};
