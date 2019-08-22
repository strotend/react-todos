import "regenerator-runtime/runtime";

import React from "react";
import { hot } from "react-hot-loader/root";

import Index from "./pages/index";

const App: React.FunctionComponent = () => <Index />;

export default hot(App);
