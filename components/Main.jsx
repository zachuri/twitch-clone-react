import React from "react";
import LiveChannels from "../components/LiveChannels";
import Hero from "../components/Hero";

const Main = () => {
	return (
		<div className="absolute left-[64px] xl:left-[220px]">
			<Hero />
			<LiveChannels />
		</div>
	);
};

export default Main;
