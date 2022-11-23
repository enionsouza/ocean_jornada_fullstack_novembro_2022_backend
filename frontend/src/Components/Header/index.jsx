import { Link } from 'react-router-dom';
import './style.css';
import brand from '../../assets/brand.svg';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={brand} width={32} height={32} alt="Samsung Ocean Logo" />
      </Link>
      <Link to="/">Listar</Link>
      <Link to="/adicionar">Adicionar</Link>
    </header>
  )
}

export default Header;