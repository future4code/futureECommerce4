import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const CarrinhoContainer = styled.div`
  
  border: black 1px solid;

`
const CarrinhoTitulo = styled.h2`

`
const CarrinhoProdutos = styled.ul`

`
const CarrinhoValorTotal = styled.p`

`
// const botaoParaRemover = styled.button``



export class Carrinho extends Component {
 
  

  formarListaDeProdutos () {
    const produtosSelecionados = this.props.conteudoCarrinho.map((item) => {
            
      return (<div> {item.brinquedos.nome} {item.brinquedos.valor}  <button onClick={() => this.props.removeProdutoCarrinho(item.id)}>X</button> </div>); 
      });
    
    return produtosSelecionados;
  }

  
    render() {
    const produtosSelecionados = this.formarListaDeProdutos()

      return (
      <CarrinhoContainer>
        <CarrinhoTitulo>Carrinho</CarrinhoTitulo>
        <CarrinhoProdutos>
          {produtosSelecionados}
        </CarrinhoProdutos>
        <CarrinhoValorTotal>Valor Total: </CarrinhoValorTotal>
      </CarrinhoContainer>
  
      
    )
  }
}

Carrinho.propTypes = {
  removeProdutoCarrinho:PropTypes.func.isRequired,
}
  


