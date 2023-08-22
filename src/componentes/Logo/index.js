import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo(){
    return(
        <div className='logo'>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>T</strong>Books</p>
        </div>
    )
}

// só conseguimos utilizar esse componente em algum lugar por causa do export
export default Logo;