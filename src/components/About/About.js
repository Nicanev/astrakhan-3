import "./About.scss";
import background from "../../assets/img/background-about.png";

export const About = () => {
	return (
		<div className="about">
			<img src={background} alt="background" />
			<div className="about__container">
				<div className="about__main">
					<div className="about__text">
						<h2>О нас</h2>
						<p>
							ЖК комплекс АСТРАХАНЬ-3 - это современный жилой комплекс,
							расположенный в живописном районе Астрахани. Комплекс состоит из
							комфортабельных многоэтажных зданий, которые выполнены в
							современном архитектурном стиле. ЖК Астрахань-3 - это отличный
							выбор для тех, кто ценит современный комфорт и удобство жизни.
						</p>
						<button>Узнать больше</button>
					</div>
				</div>
			</div>
		</div>
	);
};
