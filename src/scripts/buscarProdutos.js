async function buscarProdutos() {
  const listaProdutos = await fetch('https://ranekapi.origamid.dev/json/api/produto');
  const produtoJson = await listaProdutos.json();
  return produtoJson;
}

export default buscarProdutos();