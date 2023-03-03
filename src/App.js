import { useState } from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  const [pageStatus, setPageStatus] = useState('Home');
  return (
    <Provider store={store}>
      <Navbar setPageStatus={setPageStatus} />
      <Main pageStatus={pageStatus} />
    </Provider>
  );
}

export default App;
