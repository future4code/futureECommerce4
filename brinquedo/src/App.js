import React from 'react';
import './App.css';
import {ItemProduto} from './components/ItemProduto/ItemProduto'
import styled from 'styled-components'
import Filtro from './components/Filtro/Filtro';
import { Carrinho } from './components/Carrinho/Carrinho'

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  gap: 20px;
`

const Selecao = styled.div`
  display: flex;
  align-content: space-between;
  align-items:center;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  
`

const listaDeBrinquedos = [{
  id: 1,
  imagem: require('./imagens/clone_trooper.jpg'),
  nome: '#14 clone trooper',
  valor:  50,
  tipo: 'action figure',
 },
 {id: 2,
  imagem: require('./imagens/darth_vader.jpg'),
  nome: 'Darth Vader',
  valor:  70,
  tipo: 'action figure',
 },
 {id: 3,
  imagem: require('./imagens/tie_fighter.jpg'),
  nome: 'TIE Fighter',
  valor:  100,
  tipo: 'espaçonave',
 },
 {id: 4,
  imagem: require('./imagens/BB8.jpeg'),
  nome: 'BB*',
  valor:  150,
  tipo: 'brinquedo de controle remoto',
 },
 {id: 5,
  imagem: require('./imagens/destroyer.jpg'),
  nome: 'Destroyer',
  valor:  250,
  tipo: 'lego',
 },
 {id: 6,
  imagem: require('./imagens/storm_trooper.jpg'),
  nome: 'Storm Strooper',
  valor:  70,
  tipo: 'lego',
 },
 {id: 7,
  imagem: require('./imagens/rebellion_tank.jpg'),
  nome: 'Espaçonave Rebeldes',
  valor:  90,
  tipo: 'lego',
 },
 {id: 8,
  imagem: require('./imagens/hailfire_droid.jpg'),
  nome: 'Hailfare Droid',
  valor:  80,
  tipo: 'lego',
 }]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brinquedos: listaDeBrinquedos,
      carrinho: [],
      mostraCarrinho: false,

     }
    }

    adicionaAoCarrinho = (brinquedos) => {

      const novoCarrinho = [...this.state.carrinho]
  
      const itemDoCarrinho = this.state.carrinho.findIndex((item) => item.brinquedos.id === brinquedos.id)
      
      if (itemDoCarrinho > -1) {

        novoCarrinho[itemDoCarrinho].quantity += 1
        } else {
        novoCarrinho.push({ brinquedos: brinquedos, quantity: 1 })
        }
      
      this.setState({
      carrinho: novoCarrinho
      
      })
      console.log(this.state.carrinho)
    }

    removeProdutoCarrinho = () => {
      const novoCarrinho = [...this.state.carrinho]
      const itemDoCarrinhoRemover = this.state.carrinho.findIndex((item) => item.id === item.id)
  
      novoCarrinho.splice(itemDoCarrinhoRemover, 1)
  
      this.setState({
        carrinho: novoCarrinho,
      })
    }
  
  
  render() {

    const listaTodosBrinquedos = listaDeBrinquedos.map(cadabrinquedo => {
      return <ItemProduto produto={cadabrinquedo}  adicionaAoCarrinho={this.adicionaAoCarrinho} />;
    });

    let quantidade = listaDeBrinquedos.length

    return (
      <Container>
        <Filtro/>

        <div>
          <Selecao>
            <div><p>Quantidade de produtos {quantidade}</p></div>
            <div>
              <select name="" id="">
                <option value="">Crescente</option>
                <option value="">Decrescente</option>
              </select>
            </div>
          </Selecao>

          <AppWrapper>
              {listaTodosBrinquedos}
          </AppWrapper>
          <Carrinho conteudoCarrinho={this.state.carrinho} removeProdutoCarrinho={this.removeProdutoCarrinho}/>
        </div>
  
        
       </Container>

    )
  }
}

export default App
