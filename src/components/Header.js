import './Header.css';

const Header = () => {
  return <header>
            <h1>CONTROLE DE ESTACIONAMENTO</h1>
            <nav>
                <ul id="nav-links">
                    <li><a href="vagas">VAGAS</a></li>
                    <li><a href="reservas">RESERVAS</a></li>
                </ul>
            </nav>
        </header>
};

export default Header;