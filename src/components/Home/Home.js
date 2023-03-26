import "./Home.scss";
import room from "../../assets/img/Room.png";
import { ReactComponent as Bed } from "../../assets/icons/bedroom.svg";
import { ReactComponent as Bath } from "../../assets/icons/bathroom.svg";

export const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<h2>Наши предложения</h2>
				<ul className="home__list">
					<li className="home__item">
						<img src={room} alt="" />
						<div className="home__des">
							<div className="home__cost">
								<span>5 000 000 ₽</span>
								<button>Подробнее</button>
							</div>
							<div className="home__info">
								<span>
									<Bed /> 1 Спальня
								</span>
								<span>
									<Bath /> 1 Ванная
								</span>
								<span>45 кв.м</span>
							</div>
						</div>
					</li>
					<li className="home__item">
						<img src={room} alt="" />
						<div className="home__des">
							<div className="home__cost">
								<span>5 000 000 ₽</span>
								<button>Подробнее</button>
							</div>
							<div className="home__info">
								<span>
									<Bed /> 1 Спальня
								</span>
								<span>
									<Bath /> 1 Ванная
								</span>
								<span>45 кв.м</span>
							</div>
						</div>
					</li>
					<li className="home__item"></li>
				</ul>
			</div>
		</div>
	);
};
