import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./user/AddUser";
import { Provider } from 'react-redux'
import {store} from "../src/app/store"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<AddUser />}></Route>
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
