import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [siglas, setSiglas] = useState([]);
  const [nome, setNome] = useState('');
  const [selectedSigla, setSelectedSigla] = useState('');

  useEffect(() => {
    // Buscar siglas do JSON Server
    axios.get('http://localhost:3001/siglas')
      .then(response => setSiglas(response.data))
      .catch(error => console.error('Erro ao buscar siglas:', error));
  }, []);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSiglaChange = (event) => {
    setSelectedSigla(event.target.value);
  };

  return (
    <div className="container">
      <h1>Formulário</h1>
      <select value={selectedSigla} onChange={handleSiglaChange}>
        <option value="" disabled>Selecione uma sigla</option>
        {siglas.map(sigla => (
          <option key={sigla.id} value={sigla.nome}>{sigla.nome}</option>
        ))}
      </select>
      <input 
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={handleNomeChange}
      />
      <button onClick={() => alert(`Nome: ${nome}, Sigla: ${selectedSigla}`)}>
        Enviar
      </button>
    </div>
  );
}

export default App;
