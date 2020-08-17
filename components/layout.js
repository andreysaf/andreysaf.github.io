import React, { useEffect } from "react";
import { initGA, logPageView } from "./googleAnalytics.js";

const Layout = (props) => {

    useEffect(() => {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    });
  
    return (
      <div>{props.children}</div>
    );
  
  };
  
  export default Layout;