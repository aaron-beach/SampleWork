import "styles.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Footer from "SharedComponents/Footer";
import Nav from "SharedComponents/Nav";
import React from "react";
import styled from "styled-components";
import EditProfile from "./Profile/EditProfile";

const PageContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 2rem;
  min-height: 75vh;
`;

function App() {
  return (
    <Router>
      <Nav />
      <PageContainer>
        <Switch>
          {/* This is a parent route. Typically this might be for a top level 
              path (i.e. "/account"). Components can have their own child 
              routes (i.e. "/account/wallet"). Since we only have one section
              in the demo app, we are just routing all traffic to the Demo
              component. */}
          <Route exact path="/">
            <EditProfile />
          </Route>
        </Switch>
      </PageContainer>
      <Footer />
    </Router>
  );
}

export default App;
