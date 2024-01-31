
import MovieList from "./Components/MovieList/MovieList";
import CreateNavbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBox from "./Components/SearchBox/SearchBox";

function App() {
  return (
    <div className="App">
      <CreateNavbar/>
      <MovieList/>
    </div>
  );
}

export default App;
