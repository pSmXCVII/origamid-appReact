import React from 'react'
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [ dados, setDados ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url){
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setDados(json);
      } catch (erro) {
        setError(true);
      } finally {
        setTimeout( setLoading(false), 2000);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto`);
  },[]);

  if(loading) return <div className="loading"></div>
  if(error) return <p>{error}</p>
  if(dados === null) return null;

  return (
    <div className="produtos animeLeft">
      {dados.map(produto => {
        return (
          <section key={produto.id} className="section-produto">
            <Link to={"produto/"+produto.id}>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
              <h2>{produto.nome}</h2>
            </Link>
          </section>
        )
      })}
      {document.scrollTop = 0}
    </div>
  )
}

export default Produtos
