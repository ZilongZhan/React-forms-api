const baseUrl = "http://localhost:3001/persons";

export const deletePerson = (id) => {
  return fetch(`${baseUrl}/${id}`, { method: "DELETE" });
};
