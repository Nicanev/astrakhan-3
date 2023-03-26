import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Home } from "./components/Home/Home";
import { Map } from "./components/Map/Map";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Hero />
				<Home />
				<Map />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
