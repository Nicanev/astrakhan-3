import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

export const Header = () => {
	return (
		<div className="header">
			<div className="header__container">
				<Logo className="header__logo" />
				<ul className="header__menu">
					<li>Главная</li>
					<li>О нас</li>
					<li>Связь с нами</li>
					<li>
						<button>Войти</button>
					</li>
				</ul>
			</div>
		</div>
	);
};
