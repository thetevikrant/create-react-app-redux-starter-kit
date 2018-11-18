import React from "react";
import Home from "./containers/Home";

export default [
	{
		path: "/home",
		exact: true,
		component: () => <Home />
	},
];
