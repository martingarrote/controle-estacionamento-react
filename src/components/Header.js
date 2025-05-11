import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>CONTROLE DE ESTACIONAMENTO</h1>
            <nav>
                <ul>
                    <li><Link to='/vagas'>VAGAS</Link></li>
                    <li><Link to='/reservas'>VAGAS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;