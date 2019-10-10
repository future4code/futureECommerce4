import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div `
    width: 300px;
    height: 400px;
    border: 1px solid black;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`


class Filtro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtroValorMax: '',
            filtroValorMin: '',
            filtroBusca: '',
        };
    }

    onChangeValorMax = (event) => {
        this.setState ({
            filtroValorMax: event.target.value
        })
    }

    onChangeValorMin = (event) => {
        this.setState({
            filtroValorMin: event.target.value
        })
    }

    onChangeBuscar = (event) => {
        this.setState ({
            filtroBusca: event.target.value
        })
    }

    render() {
        return (
            <ContainerFiltro>
                <h3>Filtros</h3>

                <label>Valor Mínimo:</label>

                <input
                    id="valorMinimo"
                    type="number"
                    placeholder="Valor Mínimo"
                    value = {this.state.filtroValorMin}
                    onChange = {this.onChangeValorMin}
                />
                
                <label>Valor Máximo:</label>

                <input
                    id="valorMaximo"
                    type="number"
                    placeholder="Valor Máximo"
                    value = {this.state.filtroValorMax}
                    onChange = {this.onChangeValorMax}
                />

                <label>Buscar Produtos:</label>

                <input
                    id="buscarProdutos"
                    type="text"
                    placeholder="Buscar Produtos"
                    value = {this.state.filtroBusca}
                    onChange = {this.onChangeBuscar}
                />
            </ContainerFiltro>
        );
    }
}

export default Filtro;







