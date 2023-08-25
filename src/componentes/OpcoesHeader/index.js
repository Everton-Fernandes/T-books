import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcoes>
            {
                // textoOpcoes.map(function (texto) {
                //   return <li className='opcao'><p>{texto}</p></li>
                // })
                // forma acima é uma forma mais completa de se utilizar, para entender
                // map é utilizado bem parecido com foreach, faz um varredura dentro de uma lista
                textoOpcoes.map((texto) => (
                    <Opcoes><p>{texto}</p></Opcoes>
                ))}
        </Opcoes>
    )
}

export default OpcoesHeader