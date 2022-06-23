import './App.css';

function App({image, name, type}) {
  return (
      <main className="list-pokemons">
        <article className="list-pokemons-item">
          <div className="list-pokemons-item-content">
            <img
              src={image}
              alt="pokemon-1"
            ></img>
            <h3>
              {name}
              <span>{type}</span>
            </h3>
          </div>
        </article>
      </main>
  );
}

export default App;

