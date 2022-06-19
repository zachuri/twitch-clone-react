import React from "react";
import LiveChannels from "../components/LiveChannels";
import Hero from "../components/Hero";
import IconBar from "../components/IconBar";
import Categories from "../components/Categories";

const Main = () => {
	return (
		<div className="absolute left-[64px] xl:left-[220px]">
			<Hero />
			<LiveChannels />
			<IconBar />
			<Categories />
		</div>
	);
};

export default Main;
