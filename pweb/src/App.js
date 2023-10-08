import React, { useState } from 'react';
import './App.css';
import CardAtleta from './CardAtleta';
import PainelFavorito from './PainelFavorito';
import axios from 'axios';


function App() {
  const [atletas, setAtletas] = useState([]); //Para armazenar os atletas da API
  const [favoritos, setFavoritos] = useState([]); //Para armazenar os atletas favotitos
  const [nomeAtleta, setNomeAtleta] = useState(''); //Para armazenar o nome do atleta a ser pesquisado
 
  //A função abaixo serve para buscar atletas na API
  const buscarAtletas = async () => {
      //const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://thesportsdb.p.rapidapi.com/searchplayers.php',
    params: {p: nomeAtleta }, //Uso da variável 'name' passada como parâmetro
headers: {
  'X-RapidAPI-Key': '9cf0d562f6msh6a08948e7986c12p1a96e1jsna49397603e05',
  'X-RapidAPI-Host': 'thesportsdb.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data); // Imptime a resposta da API no console
  setAtletas(response.data.player); //Atualiza o estado 'atleta' com os resultados
  
} catch (error) {
  console.error(error);
  }
};



// Função para adicionar um Atleta aos favoritos
const adicionarAosFavoritos = (atleta) => {
  setFavoritos([...favoritos, atleta]);
};

return (
  <div className="App">
      <h1>Pesquisa de Atleta</h1>
      <input 
        type="text" 
        placeholder="Nome do atleta"
        value={nomeAtleta}
        onChange={(e) => setNomeAtleta(e.target.value)}
      />
      
      <button onClick={buscarAtletas}>Pesquisar</button>

      <div className="cards">
          {atletas.map((atleta, index) => (
              <CardAtleta
                key={index}
                atleta={atleta}
                onAddToFavorites={adicionarAosFavoritos}
              />
          ))}
      </div>

      <PainelFavorito favoritos={favoritos} />
  </div>
);
}

export default App;

