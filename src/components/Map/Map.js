import "./Map.scss";

export const Map = () => {
	return (
		<div className="map">
			<div className="map__container">
				<h2>Расположение</h2>
				<p>Мы расположены в Астрахани, Кировский район</p>
				<div className="map__widget">
					<iframe
						title="map"
						src="https://yandex.ru/map-widget/v1/?ll=48.064622%2C46.349798&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE3NzI4NxI_0KDQvtGB0YHQuNGPLCDQkNGB0YLRgNCw0YXQsNC90YwsINCa0LjRgNC-0LLRgdC60LjQuSDRgNCw0LnQvtC9IgoNdUFAQhXcZTlC&z=17.25"
						width="100%"
						height="556"
						frameborder="1"
					></iframe>
				</div>
			</div>
		</div>
	);
};
