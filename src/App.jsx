import React from "react";
import Client from "./Client";
import About from "./About";
import Feature from "./Feature";
import Header from "./Header";
import Home from "./Home";
import Pricing from "./Pricing";
import Team from "./Team";
import Blog from "./Blog";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Feature></Feature>
      <About></About>
      <Client></Client>
      <Pricing></Pricing>
      <Team></Team>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
