import { Form, Button, Card } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { renderInvalidMessage } from "SharedComponents/ValidationMessage";

function AboutMe() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // form submit function will invoke after successful validation

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="aboutMe">
            <Form.Label className="sr-only">About Me</Form.Label>
            <Form.Control
              name="headline"
              placeholder="Headline"
              ref={register({ required: true })}
              type="text"
              isInvalid={Boolean(errors.headline)}
            />
            {errors.headline && renderInvalidMessage()}
          </Form.Group>
          <Form.Group>
            <Form.Label className="sr-only">Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Description"
              ref={register({ required: true })}
              rows="2"
              isInvalid={Boolean(errors.description)}
            />
            {errors.description && renderInvalidMessage()}
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
