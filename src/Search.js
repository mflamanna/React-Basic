import './App.css';

function Search() {
    return (
      <div className="container">
          <nav className="header-search_bar">
            <input type="text" name="search" placeholder="Search"></input>
            <button type="submit">GO</button>
          </nav>
      </div>
    );
  }
  
  export default Search;