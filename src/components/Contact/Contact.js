import "./Contact.scss";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="contact__container">
				<div className="contact__text">
					<h2>
						Вы нашли ваш <span>Дом Мечты?</span>
					</h2>
					<p>Свяжитесь с нами для оформления покупки</p>
				</div>
				<form className="contact__form form">
					<div className="form__inputs">
						<input type="text" placeholder="Ваше имя" />
						<input type="email" placeholder="Ваша почта" />
						<input type="phone" placeholder="Ваш номер телефона" />
						<input type="text" placeholder="Сообщение" />
					</div>
					<div className="form__button">
						<button>Отправить</button>
					</div>
				</form>
			</div>
		</div>
	);
};
