import logo from "../../assets/logo (5).svg";
import user from '../../assets/avatar.svg'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="logo1" />
        <div className="header__nav-search">
          <button>
            <i className="fa-solid fa-bars"></i>
            Каталог
          </button>
          <div className="search">
            <input type="text" name="seachProduct" placeholder="Найти товар" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="header__nav-option">
          <div className="icon">
            <i className="fa-regular fa-heart"></i>
            <p>Избранное</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-cube"></i>
            <p>Заказы</p>
          </div>
          <div className="icon">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Корзина</p>
          </div>
          <div>
            <img src={user} alt="user" />
            <span>Алексей</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
