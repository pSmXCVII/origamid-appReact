import React from 'react';
import Produto from './components/Produto';

const App = ()=> {
  const [ produto, setProduto ] = React.useState(null);
  
  React.useEffect(() =>{
    const prodLocal = localStorage.getItem("produto");
    if(prodLocal !== "null"){
      setProduto(prodLocal);
    }
  }, []);

  React.useEffect(() =>{
    if(produto !== null){
      localStorage.setItem("produto", produto);
    }
  }, [produto]);

  function handleClick({target}) {
    setProduto(target.innerText.toLowerCase());
  }

  return (
    <div className="App">
      <button onClick={handleClick} style={{margin: "5px 10px"}}>
        Notebook
      </button>
      <button onClick={handleClick} style={{margin: "5px 10px"}}>
        Tablet
      </button>
      <button onClick={handleClick} style={{margin: "5px 10px"}}>
        Smartphone
      </button>
      <Produto produto={produto}/>
    </div>
  );
}

export default App;
