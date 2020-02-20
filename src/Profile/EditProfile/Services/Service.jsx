import React from "react";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  min-width: 260px;
`;

const StyledTitle = styled(Card.Title)`
  display: grid;
  grid-template-columns: 180px 1fr;
`;

const StyledImage = styled(Image)`
  max-width: 150px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  display: none;
  position: absolute;
  width: fit-content;
  padding: 0.5rem;
  margin: 0.75rem;
  top: 0;
  right: ${props => (props.edit ? "40px" : 0)};

  ${StyledCard}:hover & {
    display: inline;
  }
`;

function Service({ service, onEdit }) {
  const handleDelete = () => {
    alert("Delete Button Clicked!");
  };

  const handleEdit = () => {
    console.log(service);

    onEdit(service);
  };

  return (
    <StyledCard className="p-0">
      <Card.Body>
        <StyledTitle>
          {service.name}
          <StyledButton onClick={handleEdit} variant="link" edit="true">
            <i className="far fa-edit fa-2x" />
          </StyledButton>
          <StyledButton variant="link" onClick={handleDelete}>
            <i className="far fa-trash-alt fa-2x" />
          </StyledButton>
        </StyledTitle>
        <Container className="p-0">
          <Row>
            <Col xs={4}>
              <StyledImage className="" src={service.image} rounded />
            </Col>
            <Col xs={8}>
              <span className="d-block font-weight-bold">Type</span>
              <span className="d-block text-muted">{service.type}</span>

              <span className="d-block font-weight-bold">Duration</span>
              <span className="d-block text-muted">
                {service.duration} {service.duration > 1 ? "days" : "day"}
              </span>

              <span className="d-block font-weight-bold">Description</span>
              <span className="d-block text-muted">{service.description}</span>

              <span className="d-block font-weight-bold">Price</span>
              <span className="d-block text-muted">{service.price}</span>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </StyledCard>
  );
}

export default Service;
