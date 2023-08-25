import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <p><strong>T</strong>Books</p>
        </LogoContainer>
    )
}
// só conseguimos utilizar esse componente em outro lugar por causa do export
export default Logo;