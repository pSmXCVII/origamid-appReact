import React from 'react';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Home from './components/Home';

const App = ()=> {
  const { pathname } = window.location;
  let Pagina;

  if(pathname === "/"){
    Pagina = Home;
  } else if(pathname === "/produtos") {
    Pagina = Produtos;
  } else {
    return (
      <>
        <Header />
        <div className="App">
          <p>Não encontramos a página que está procurando</p>
          <a href="/">Voltar ao início</a>
        </div>
      </>
    )
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )

}

export default App;
