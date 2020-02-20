import React from "react";
import { Form } from "react-bootstrap";

export const renderInvalidMessage = () => (
  <Form.Control.Feedback type="invalid">
    This field is required
  </Form.Control.Feedback>
);
