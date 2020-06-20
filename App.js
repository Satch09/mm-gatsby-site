/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { Router } from "@reach/router";
import Home from "pages/Home";
import Services from "pages/servicess";
import Projects from "pages/projectss";
import Training from "pages/trainings";
import Contact from "pages/contacts";
import About from "pages/abouts";
import NotFound from "pages/NotFound";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import "./App.css";
import globalTheme from "./util/theme";
import { MuiThemeProvider } from "@material-ui/core";
// import Header from "components/Header";

// import SocialLinks from "components/SocialLinks";
import services from "data/services";
import training from "data/training";
import about from "data/about";
import contacts from "data/contacts";
import home from "data/home";
import projects from "data/projects";
import notFound from "data/notFound";
import Footer from "components/Footer/Footer";
import Component from "components/MessageBoxFluid";
import ContactOperatingHours from "components/ContactOperatingHours";

const theme = createMuiTheme(globalTheme);

const App = () => {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />

          <Route exact path="/about">
            <About {...about} />
          </Route>
          <Route exact path="/projects">
            <Projects {...projects} />
          </Route>
          <Route exact path="/Services">
            <Services {...services} />
          </Route>
          <Route exact path="/training">
            <Training {...training} />
          </Route>
          <Route exact path="/contact">
            <Contact {...contacts} />
            <Footer>
              <ContactOperatingHours />
            </Footer>
          </Route>
          <Route exact path="/comp">
            <Component
              title="asdfasdfasdf"
              body={["jsadhkjasdfhjkasdhdfjkasdhkjhasdfjkhlskjdlfhskjadlfhjk"]}
            />
          </Route>
          <Route>
            <NotFound {...notFound} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </CssBaseline>
  );
};

export default App;
