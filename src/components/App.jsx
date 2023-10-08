import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import Input from "./Input/Input";

export const App = () => {
  return (
    <div>
      <Input />
      <p></p>
      <Filter />
      <p></p>
      <ContactsList />
    </div>
  );
};
