import ProfileDetails from "./ProfileDetails";
import { Container } from "react-bootstrap";
import React from "react";
import AboutMe from "./AboutMe";
import Services from "./Services";

import { services } from "./data";

function EditProfile() {
  return (
    <Container>
      <ProfileDetails />
      <AboutMe />
      <Services services={services} />
    </Container>
  );
}

export default EditProfile;
