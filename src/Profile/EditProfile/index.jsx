import ProfileDetails from "./ProfileDetails";
import { Container } from "react-bootstrap";
import React from "react";
import AboutMe from "./AboutMe";

function EditProfile() {
  return (
    <Container>
      <ProfileDetails />
      <AboutMe />
    </Container>
  );
}

export default EditProfile;
