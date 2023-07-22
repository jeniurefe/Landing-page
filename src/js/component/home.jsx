import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer";

//create your first component
const Home = () => {

	return (
		<>
			<div className="container">
				<Navbar />
				<div className="container">
					<Jumbotron />
				</div>
				<br/>
				<div className="container row">
					<Cards col-3/>
					<Cards col-3 />
					<Cards col-3 />
					<Cards col-3 />
				</div>
               <br/>
				<Footer/>
			</div>

		</>
	);
};

export default Home;
