import React from "react";
import LiveChannels from "../components/LiveChannels";
import Hero from "../components/Hero";
import IconBar from "../components/IconBar";

const Main = () => {
	return (
		<div className="absolute left-[64px] xl:left-[220px]">
			<Hero />
			<LiveChannels />
			<IconBar />
		</div>
	);
};

export default Main;
