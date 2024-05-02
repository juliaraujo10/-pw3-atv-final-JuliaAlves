import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [turmas, setTurmas] = useState([]);
  const [nome, setNome] = useState('');
  const [selectedSigla, setSelectedSigla] = useState('');

  useEffect(() => {
    // Buscar turmas do JSON Server
    axios.get('http://localhost:3001/tbl_turma')
      .then(response => setTurmas(response.data))
      .catch(error => console.error('Erro ao buscar turmas:', error));
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
        {turmas.map(turma => (
          <option key={turma.id} value={turma.sigla}>{turma.sigla}</option>
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
