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
  justify-content: space-between;
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
  tipo: 'controle remoto',
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

 let ordenaTipo = false
 let brinquedosOrdenadosTipo
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brinquedos: listaDeBrinquedos,
      carrinho: [],
      mostraCarrinho: false,
      filtros: {
        valorMax: null,
        valorMin: null,
      },
      buscarBrinquedo: '',
      ordenacaoSelecionada:""

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
      carrinho: novoCarrinho,
           
      })
      
    }

    mudaSelecao = (event) => {
      let novoValor =  event.target.value
      this.setState({
        ordenacaoSelecionada: novoValor
      })
      
    }

    removeProdutoCarrinho = () => {
      const novoCarrinho = [...this.state.carrinho]
      const itemDoCarrinhoRemover = this.state.carrinho.findIndex((item) => item.id === item.id)
  
      novoCarrinho.splice(itemDoCarrinhoRemover, 1)
  
      this.setState({
        carrinho: novoCarrinho,
      })
    }
  
    ordenaBrinquedos = () => {
      let selecao = this.state.ordenacaoSelecionada
  
      if (selecao === "crescente"){
        ordenaTipo = false
        listaDeBrinquedos.sort(function compare(a, b) {
          return a.valor - b.valor
      })
        }else if (selecao === "decrescente"){
          ordenaTipo = false
          listaDeBrinquedos.sort(function compare(a, b) {
            return b.valor - a.valor
        })
        }
    }
  

  atualizarValorFiltro = (novoFiltroValor) => {
    this.setState({
      filtros: {
        ...this.state.filtros,
        ...novoFiltroValor,
      },
    })
  }

  

  filtrarBrinquedos(listaParaFiltrar) {
    const {filtros, buscarBrinquedo } = this.state
    
    let filtrarBrinquedo = listaParaFiltrar
      .filter((cadabrinquedo) => {
        const nomeBrinquedo = cadabrinquedo.nome.toLowerCase()
        return nomeBrinquedo.indexOf(buscarBrinquedo.toLowerCase()) > -1
      }) 
      .filter((cadabrinquedo) => {
        return cadabrinquedo.valor < (filtros.valorMax || Infinity)})
      .filter((cadabrinquedo) => {
        return cadabrinquedo.valor > (filtros.valorMin || 0)
      })
      
    return filtrarBrinquedo
    
  }

  atualizarValorBusca = (event) => {
    this.setState({
      buscarBrinquedo: event.target.value,
    })
  }


  render() {
    // let brinquedosOrdenados = this.ordenaBrinquedos()

    let filtrarCadaBrinquedo = this.filtrarBrinquedos(listaDeBrinquedos)
    let brinquedosOrdenados = this.ordenaBrinquedos(filtrarCadaBrinquedo)
    const listaTodosBrinquedos = filtrarCadaBrinquedo.map(cadabrinquedo => {
      return <ItemProduto produto={cadabrinquedo} adicionaAoCarrinho={this.adicionaAoCarrinho}/>;

    });
    if (ordenaTipo){
      brinquedosOrdenadosTipo = brinquedosOrdenadosTipo.map(cadabrinquedo => {
      return <ItemProduto ItemProduto={cadabrinquedo} />;
    });
    }else{
      brinquedosOrdenados = listaDeBrinquedos.map(cadabrinquedo => {
        return <ItemProduto ItemProduto={cadabrinquedo} />;
      });
    }
    let quantidade = listaDeBrinquedos.length

    return (
      <Container>
        <Filtro
          novoFiltro={this.atualizarValorFiltro}
          filtroBusca={this.state.buscarBrinquedo}
          filtroValorBusca={this.atualizarValorBusca}
        />

        <div>
          <Selecao>
            <div><p>Quantidade de produtos {quantidade}</p></div>
            <div>
            <select onChange={this.mudaSelecao}>
              <option value="crescente">Preço: Crescente</option>
              <option value="decrescente">Preço: Decrescente</option>
              </select>
            </div>
          </Selecao>

          <AppWrapper>
              {listaTodosBrinquedos}
          </AppWrapper>
          </div>
          <Carrinho conteudoCarrinho={this.state.carrinho} removeProdutoCarrinho={this.removeProdutoCarrinho}/>
        
        </Container>

)
}
}

export default App