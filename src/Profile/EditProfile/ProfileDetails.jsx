import { Button, Col, Card, Form, Row } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { renderInvalidMessage } from "SharedComponents/ValidationMessage";

function ProfileDetails() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // form submit function will invoke after successful validation

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>User Details</Card.Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="firstName"
              className="mb-0"
            >
              <Form.Label className="sr-only">First Name</Form.Label>
              <Form.Control
                name="firstName"
                placeholder="First Name"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.firstName)}
              />
              {errors.firstName && renderInvalidMessage()}
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="lastName"
              className="mb-0"
            >
              <Form.Label className="sr-only">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                placeholder="Last Name"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.lastName)}
              />
              {errors.lastName && renderInvalidMessage()}
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="title"
              className="mb-0"
            >
              <Form.Label className="sr-only">Title</Form.Label>
              <Form.Control
                name="title"
                placeholder="Title"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.title)}
              />
              {errors.title && renderInvalidMessage()}
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="company"
              className="mb-0"
            >
              <Form.Label className="sr-only">Company</Form.Label>
              <Form.Control
                name="company"
                placeholder="Company"
                ref={register}
                type="text"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="location"
              className="mb-0"
            >
              <Form.Label className="sr-only">City</Form.Label>
              <Form.Control
                name="city"
                placeholder="City"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.city)}
              />
              {errors.city && renderInvalidMessage()}
            </Form.Group>
            <Form.Group
              as={Col}
              xs="12"
              sm="6"
              controlId="country"
              className="mb-0"
            >
              <Form.Label className="sr-only">Country</Form.Label>
              <Form.Control
                name="country"
                placeholder="Country"
                ref={register({ required: true })}
                type="text"
                isInvalid={Boolean(errors.country)}
              />
              {errors.country && renderInvalidMessage()}
            </Form.Group>
          </Row>
          <Button type="submit">Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProfileDetails;
