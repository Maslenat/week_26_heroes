import Cart from "./components/Cart";
import { SuperHeroeJson } from "./SuperHeroeJson";

function App() {

  return (
    <div className="wrapper">
      {SuperHeroeJson.map((heroe) => <Cart url={heroe.url} name={heroe.name} abilites={heroe.abilities} character={heroe.character} />
      )}
    </div>

  );
}

export default App;
