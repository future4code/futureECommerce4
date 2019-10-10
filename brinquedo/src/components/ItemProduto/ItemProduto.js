import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductImage = styled.img`
  width: 100%;
`

const AddToCartButton = styled.button`
  margin: 0 auto;
  background: black;
  color: white;
  border: unset;
  width: 100%;
  padding: 10px;
  
  :hover {
    background: darkorange;
  }
`

const Card = styled.div`
  padding: 5px;
  border: 1px dashed orange;
`

 export function ItemProduto(props) {
    const { ItemProduto, onAddToCart } = props;
  
    return (
      <Card>
        <ProductImage
          src={ItemProduto.imagem}
          alt="Image picture"
        />
        <p>{ItemProduto.nome}</p>
        <p>R${ItemProduto.valor.toFixed(2)}</p>
        <AddToCartButton onClick={onAddToCart}>Adicionar ao Carrinho</AddToCartButton>
      </Card>
    )
  }
  
  ItemProduto.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  }
  
  export default ItemProduto