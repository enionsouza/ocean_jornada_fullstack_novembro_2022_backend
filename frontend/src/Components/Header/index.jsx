import './style.css';
import brand from '../../assets/brand.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={brand} width={32} height={32} alt="Samsung Ocean Logo" />
      </a>
      <a href="/">Listar</a>
      <a href="/adicionar">Adicionar</a>
    </header>
  )
}

export default Header;