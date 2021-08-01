import React from 'react'

const Produto = ({ produto }) => {
  const [ dados, setDados ] = React.useState(null);

  React.useEffect(() => {
    if(produto !== null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`).then((response) => response.json()).then((json) => setDados(json));
    }
  }, [produto]);

  if(dados === null) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>Preço: R$ {dados.preco}</p>
      <p>{dados.descricao}</p>
      {dados.fotos.map((foto) => <img src={foto.src} key={foto.titulo} alt={foto.titulo}/>)}
    </div>
  )
}

export default Produto;
