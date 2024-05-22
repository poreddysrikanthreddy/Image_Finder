import 'bootstrap/dist/css/bootstrap.min.css';

import AddUserForm from "./user/AddUser";
import ListUser from "./user/ListUSer";

function App() {
  return (
    <main className="App">
      <AddUserForm />
      <ListUser />
    </main>
  );
}

export default App;
