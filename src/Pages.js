import React from 'react'
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Service from './Components/Services/service';
import Blog from './Components/Blog/blog';
import Pricing from './Components/Pricing/pricing';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";

const Pages = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Service} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} /> 
        </Switch>
      <Footer/>
    </Router>
  )
}

export default Pages
