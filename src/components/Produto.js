import React from 'react'

const Produto = ({ dados }) => {
  const precoFormatado = dados.preco.replace(".", ",");
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>Preço: R$ {precoFormatado}</p>
      <p>{dados.descricao}</p>
      {dados.fotos.map((foto) => <img src={foto.src} key={foto.titulo} alt={foto.titulo}/>)}
    </div>
  )
}

export default Produto
