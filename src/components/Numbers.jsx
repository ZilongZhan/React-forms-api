import { Header } from "./shared";
import { PersonsList } from "./PersonsList";

export const Numbers = ({ persons, newFilter, setPersons }) => {
  return (
    <div>
      <Header heading="Numbers" />
      <PersonsList persons={persons} filter={newFilter} setter={setPersons} />
    </div>
  );
};
