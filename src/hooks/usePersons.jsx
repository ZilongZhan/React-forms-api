import axios from "axios";
import { useEffect, useState } from "react";

export const usePersons = () => {
  const [persons, setPersons] = useState([]);

  const getPersons = () => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => handleChangePersonsValue(response.data));
  };

  useEffect(getPersons, []);

  const handleChangePersonsValue = (newValue) => {
    setPersons(newValue);
  };

  return {
    persons,
    handleChangePersonsValue,
  };
};
