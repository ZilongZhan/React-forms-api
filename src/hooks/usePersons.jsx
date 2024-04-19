import { useEffect, useState } from "react";
import { getPersons } from "../services/person";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons().then((personsData) => handleUpdatePersons(personsData));
  }, []);

  const handleUpdatePersons = (newValue) => {
    setPersons(newValue);
  };

  return {
    persons,
    handleUpdatePersons,
  };
};
