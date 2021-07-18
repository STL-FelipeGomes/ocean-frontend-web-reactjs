import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

/* 
  Professor: Paulo Salvatore
  CRUD (Create, Read (Single e Akk), Update, Delete)

  Create -> Formulário de criação
  Read All -> Listagem de itens acadastrados
  Read Single -> Visualização de um item específico
  Update -> Formulário de edição
  Delete -> Remover um item específico

  Read all
  PRecisa dos dados que serão exibidos
  A estrutura desses dados precisa possuir 'Nome' e 'URL das imagens

  As tags HTML que estão dentro da tag " React.StrictMode " são JSX
*/

// Decidir quaç será o tema da aplicação
// O meu será de Raças de Cachorro

const lista = [
  {
    id: 1,
    nome: 'Pinscher ',
    imagemUrl: 'https://pbs.twimg.com/media/Da3FmbSWkAEuwUJ.jpg',
  },

  {
    id: 2,
    nome: 'Labrador',
    imagemUrl:
      'https://www.clubeparacachorros.com.br/wp-content/uploads/2014/07/labrador-amarelo.jpg',
  },
  {
    id: 3,
    nome: 'Yorkshire',
    imagemUrl:
      'http://www.yorkshirefortaleza.com.br/wp-content/uploads/2015/01/Yorkshire-Terrier-Dog.jpg',
  },
  {
    id: 4,
    nome: 'Golden Retriver',
    imagemUrl:
      'https://f.i.uol.com.br/fotografia/2017/10/27/150912457859f369e28eaa5_1509124578_3x2_md.jpg',
  },

  {
    id: 5,
    nome: 'Husky Siberiano ',
    imagemUrl:
      'https://www.petz.com.br/cachorro/racas/husky-siberiano/img/husky-siberiano-caracteristicas-guia-racas.webp',
  },
];

/*
  Vai na posição 0 da lista e pega o " nome ", que é o conteúdo da lista
*/

function Item(props) {
  const indice = props.indice;

  const item = lista[indice];

  return (
    <a href={'visualizar/' + indice}>
      <div className="item">
        <h1 className="item__title">{item.nome}</h1>
        <img src={item.imagemUrl} alt={item.nome} width="200" />
      </div>
    </a>
  );
}

function Lista() {
  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item indice={index} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img
          src="https://www.oceanbrasil.com/img/general/logoOceanI.png"
          alt="Samsung Ocean"
          width="400px"
        />
      </a>
    </header>
  );
}

function Footer() {
  return <div className="footer">&copy; Todos os direitos reservados</div>;
}

function ListarItens() {
  return (
    <div>
      <Lista />
    </div>
  );
}

function VisualizarItem(props) {
  return (
    <div>
      <Item indice={props.match.params.id} />
    </div>
  );
}

/*
  Criamos uma função para as tagas HTMl ficarem dentro dela, o nome da função é App, que terá um return

  Possui a estrutura principas da página
*/

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={ListarItens} />
        <Route path="/visualizar/:id" component={VisualizarItem} />
      </Switch>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
