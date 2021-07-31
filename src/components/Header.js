import React from 'react'

function Header() {
  const menuItens = [{ name: "Home", link: "/"}, { name: "Produtos", link: "/produtos" }];
  const styleItens = { textDecoration: "none", color: "green" };
  const styleList = { display: "block" };
  return (
    <header>
      <ul>
      {menuItens.map(({ name, link }) => <li key={name} style={styleList}><a href={link} style={styleItens}>{name}</a></li>)}
      </ul>
    </header>
  )
}

export default Header;
