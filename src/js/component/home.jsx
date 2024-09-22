import React from "react";

//include images into your bundle
import { Footer } from "./Footer4Geeks";
import { NavBar } from "./NavBar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Cards";

//create your first component

const Home = () => {

	return (
		<>
		<NavBar/>
		<Jumbotron/>
		<div className="container-fluid text-center px-4 pb-4">
			<div className="row">
			<Card 
    title="Card title"
	rigoImage="https://picsum.photos/500/325"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae aut voluptates provident repellat, asperiores commodi rem beatae cumque, porro tenetur maiores atque nisi sunt cupiditate id minima accusamus laboriosam."
    buttonLabel="Find Out More!"
    />
	<Card 
    title="Card title"
	rigoImage="https://picsum.photos/500/325"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae aut voluptates provident repellat, asperiores commodi rem beatae cumque, porro tenetur maiores atque nisi sunt cupiditate id minima accusamus laboriosam."
    buttonLabel="Find Out More!"
    />
	<Card 
    title="Card title"
	rigoImage="https://picsum.photos/500/325"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae aut voluptates provident repellat, asperiores commodi rem beatae cumque, porro tenetur maiores atque nisi sunt cupiditate id minima accusamus laboriosam."
    buttonLabel="Find Out More!"
    />
	<Card 
    title="Card title"
	rigoImage="https://picsum.photos/500/325"
    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae aut voluptates provident repellat, asperiores commodi rem beatae cumque, porro tenetur maiores atque nisi sunt cupiditate id minima accusamus laboriosam."
    buttonLabel="Find Out More!"
    />

			</div>
		</div>
		<Footer/>
		</>
	);
};


export default Home;
