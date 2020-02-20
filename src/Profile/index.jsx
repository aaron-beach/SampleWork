import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Container } from "react-bootstrap";
import React from "react";
import EditProfile from "./EditProfile";

function Profile() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <Switch>
        <Route exact path={`${path}/edit`}>
          <EditProfile />
        </Route>
      </Switch>
    </Container>
  );
}

export default Profile;
