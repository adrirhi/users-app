import { useSelector } from "react-redux";
import Users from "./components/Users";

function App() {
  const store = useSelector((store) => store);
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
