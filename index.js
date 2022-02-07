import React from "react";
import ReactDOM from "react-dom";

// css
import "@src/css/reset.css";
import "@src/css/common.css";
import "@src/css/animation.css";

// routes
import AppRoutes from "@src/components/routes";

ReactDOM.render(<AppRoutes />, document.querySelector("#root"));
