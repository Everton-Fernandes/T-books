import './estilo.css'
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            { 
            // textoOpcoes.map(function (texto) {
            //   return <li className='opcao'><p>{texto}</p></li>
            // })
            // foma acima é uma forma mais completa de se utilizar, para entender
            // map é utilizado bem parecido com foreach, faz um varredura dentro de uma lista
            textoOpcoes.map ( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default OpcoesHeader