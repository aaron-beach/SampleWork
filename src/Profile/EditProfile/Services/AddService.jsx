import { Form, Button, Modal } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import { renderInvalidMessage } from "SharedComponents/ValidationMessage";

function AddService({ onClose, isEditing, editService }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    onClose();
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEditing ? `Edit ${editService.name}` : "Add Service"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="serviceName">
          <Form.Label className="sr-only">Service Name</Form.Label>
          <Form.Control
            name="serviceName"
            defaultValue={isEditing ? `${editService.name}` : null}
            placeholder="Service Name"
            ref={register({ required: true })}
            type="text"
            isInvalid={Boolean(errors.serviceName)}
          />
          {errors.serviceName && renderInvalidMessage()}
        </Form.Group>

        <Form.Group controlId="type">
          <Form.Label className="sr-only">Service Type</Form.Label>
          <Form.Control
            as="select"
            name="serviceType"
            className="custom-select text-muted"
            placeholder="Service Type"
            ref={register({ required: true })}
            isInvalid={Boolean(errors.serviceType)}
          >
            <option value="">Service Type</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Website Design">Website Design</option>
          </Form.Control>
          {errors.serviceType && renderInvalidMessage()}
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label className="sr-only">Duration</Form.Label>
          <Form.Control
            name="serviceDuration"
            defaultValue={isEditing ? `${editService.duration}` : null}
            placeholder="Duration"
            ref={register({ required: true })}
            type="text"
            isInvalid={Boolean(errors.serviceDuration)}
          />
          {errors.serviceDuration && renderInvalidMessage()}
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control name="image" type="file" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="sr-only">Description</Form.Label>
          <Form.Control
            name="serviceDescription"
            as="textarea"
            defaultValue={isEditing ? `${editService.description}` : null}
            placeholder="Description"
            ref={register({ required: true })}
            rows="2"
            isInvalid={Boolean(errors.serviceDescription)}
          />
          {errors.serviceDescription && renderInvalidMessage()}
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label className="sr-only">Price</Form.Label>
          <Form.Control
            name="servicePrice"
            defaultValue={isEditing ? `${editService.price}` : null}
            placeholder="Price"
            ref={register({ required: true })}
            type="text"
            isInvalid={Boolean(errors.servicePrice)}
          />
          {errors.servicePrice && renderInvalidMessage()}
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default AddService;
