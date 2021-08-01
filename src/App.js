import React from 'react';
import Produto from './components/Produto';

const App = ()=> {
  const [ dados, setDados ] = React.useState(null);
  const [ carregando, setCarregando ] = React.useState(null);

  async function fetchProduto(e) {
    setCarregando(true);
    const prod = e.target.innerText.toLowerCase();
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${prod}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false)
  }

  return (
    <div className="App">
      <button onClick={fetchProduto} style={{margin: "5px 10px"}}>
        Notebook
      </button>
      <button onClick={fetchProduto} style={{margin: "5px 10px"}}>
        Tablet
      </button>
      <button onClick={fetchProduto} style={{margin: "5px 10px"}}>
        Smartphone
      </button>
        {carregando && <p>Carregando...</p>}
        {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
