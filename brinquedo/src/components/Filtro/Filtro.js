import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerFiltro = styled.div `
    width: 80%;
    height: 250px;
    border: 1px solid black;
    padding-left: 20px;
    padding-right: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ContainerBusca = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: flex-end;  
`

const Filtro = (props) => {

    const filtroValorMax = (event) => {
        const value = Number(event.target.value)

        const novoFiltroValor = {
            'valorMax': value,
        }

        props.novoFiltro(novoFiltroValor)
    }

    const filtroValorMin = (event) => {
        const value = Number(event.target.value)

        const novoFiltroValor = {
            'valorMin': value,
        }
        props.novoFiltro(novoFiltroValor)
    }

        return (
            <ContainerFiltro>
                <h3>Filtros</h3>

                <ContainerBusca>
                    <label htmlFor="valorMin">Valor Mínimo:</label>

                    <input
                        id="valorMin"
                        name="valorMin"
                        type="number"
                        placeholder="Valor Mínimo"
                        min={0}
                        onChange = {filtroValorMin}
                    />
                </ContainerBusca>

                <ContainerBusca>
                    <label htmlFor="valorMax">Valor Máximo:</label>

                    <input
                        id="valorMax"
                        name="valorMax"
                        type="number"
                        placeholder="Valor Máximo"
                        min = {0}
                        onChange = {filtroValorMax}
                    />
                </ContainerBusca>

                <ContainerBusca>
                    <label htmlFor="busca">Buscar:</label>

                    <input
                        id="busca"
                        name="busca"
                        type="text"
                        placeholder="Buscar Produtos"
                        value = {props.filtroBusca}
                        onChange = {props.filtroValorBusca}
                    />
                </ContainerBusca>

            </ContainerFiltro>
        );
}

Filtro.propTypes = {
    novoFiltro: PropTypes.func.isRequired,
    filtroValorBusca: PropTypes.func.isRequired,
    filtroBusca: PropTypes.string.isRequired,
  }
  

export default Filtro;







