import { useSelector } from "react-redux";
import Users from "./components/Users";
import Header from "./components/header";


function App() {
  const store = useSelector((store) => store);
  return (
    <div className="App">
      <Header />
      <Users />
    </div>
  );
}

export default App;
