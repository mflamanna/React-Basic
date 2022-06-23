import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Search from './Search';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Search />
    <App name = "Bulbasaur" type="Gras" image= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
    <App name = "Ivysaur" type="Gras" image= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
    <App name = "Venusaur" type="Gras" image= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
    <App name = "Charmander" type="Fire" image= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" />
  </React.StrictMode>
);
