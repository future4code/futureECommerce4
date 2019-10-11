import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ImagemBrinquedo = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
`

const AddToCartButton = styled.button`
  margin: 0 auto;
  background: black;
  color: white;
  border: unset;
  width: 100%;
  padding: 10px;
`

const Card = styled.div`
  padding: 5px;
  border: 1px solid black   ;
  display:flex;
  flex-direction:column;
`

 export function ItemProduto(props) {
    const { produto } = props;
  
    const aoClicarNoBotao = () => {
      props.adicionaAoCarrinho(produto)
    }

    return (
      <Card>
        <ImagemBrinquedo
          src={produto.imagem}
          alt="Image picture"
        />
        <p>{produto.nome}</p>
        <p>R${produto.valor.toFixed(2)}</p>
        <p>#{produto.tipo}</p>
        <AddToCartButton onClick= {aoClicarNoBotao}>Adicionar ao Carrinho</AddToCartButton>
      </Card>
    )
  }
  
  ItemProduto.propTypes = {
    product: PropTypes.object.isRequired,
    adicionaAoCarrinho: PropTypes.func.isRequired,
  }
  
  export default ItemProduto