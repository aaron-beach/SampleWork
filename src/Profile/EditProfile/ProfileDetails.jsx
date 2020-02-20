import { Button, Col, Card, Form, Row } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

function ProfileDetails() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // form submit function will invoke after successful validation

  const invalidMsg = (
    <Form.Control.Feedback type="invalid">
      This field is required
    </Form.Control.Feedback>
  );

  return (
    <Card>
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group as={Row} controlId="userName">
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="First Name"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.firstName)}
              />
              {errors.firstName && invalidMsg}
            </Col>
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Last Name"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.lastName)}
              />
              {errors.lastName && invalidMsg}
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="organization">
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">Title</Form.Label>
              <Form.Control
                name="title"
                placeholder="Title"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.title)}
              />
              {errors.title && invalidMsg}
            </Col>
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">Company</Form.Label>
              <Form.Control
                name="company"
                placeholder="Company"
                ref={register}
                type="text"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="location">
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">City</Form.Label>
              <Form.Control
                name="city"
                placeholder="City"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.city)}
              />
              {errors.city && invalidMsg}
            </Col>
            <Col xs="12" sm="6">
              <Form.Label className="sr-only">Country</Form.Label>
              <Form.Control
                name="country"
                placeholder="Country"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.country)}
              />
              {errors.country && invalidMsg}
            </Col>
          </Form.Group>

          <Button type="submit">Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProfileDetails;
