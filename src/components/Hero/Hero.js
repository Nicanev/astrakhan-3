import background from "../../assets/img/Background-hero.png";
import "./Hero.scss";

export const Hero = () => {
	return (
		<div className="hero">
			<img src={background} alt="background" className="hero__background" />
			<div className="hero__container">
				<h1>
					Найдите <span> Дом Вашей Мечты</span> в ЖК комплексе АСТРАХАНЬ-3
				</h1>
			</div>
		</div>
	);
};
