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
    const { ItemProduto, onAddToCart } = props;
  
    return (
      <Card>
        <ImagemBrinquedo
          src={ItemProduto.imagem}
          alt="Image picture"
        />
        <p>{ItemProduto.nome}</p>
        <p>R${ItemProduto.valor.toFixed(2)}</p>
        <p>#{ItemProduto.tipo}</p>
        <AddToCartButton onClick={onAddToCart}>Adicionar ao Carrinho</AddToCartButton>
      </Card>
    )
  }
  
  ItemProduto.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  }
  
  export default ItemProduto