import './styles.css';
import logoImg from '../../images/logo-sistema-solar.svg';

function Header() {
  return (
    <header>
      {/* <h1>Sistema Solar</h1> */}
      <img src={ logoImg } alt="" />

    </header>
  );
}

export default Header;
