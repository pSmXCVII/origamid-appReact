import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const { id } = useParams();
  const [ dados, setDados ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState(false);
  
  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setDados(json);
      } catch (erro) {
        setError(true);
      } finally {
        setTimeout(setLoading(false), 3000)
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  },[id]);

  if(loading) return <div className="loading"></div>
  if(error) return <p>{error}</p>
  if(dados === null) return null;

  return (
    <div className="produto-individual animeRight">
      <Head title={`Project | ${dados.nome}`} description={`Detalhes sobre ${dados.nome}`} />
      <div className="produto-imagens">
        {dados.fotos.map((foto) => <img src={foto.src} key={foto.titulo} alt={foto.titulo}/>)}
      </div>
      <div className="produto-detalhes">
        <h2>{dados.nome}</h2>
        <span className="preco">R$ {dados.preco}</span>
        <p className="descricao">{dados.descricao}</p>
      </div>
    </div>
  )
}

export default Produto
