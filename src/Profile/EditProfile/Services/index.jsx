import React, { useState } from "react";
import { Button, Card, CardDeck, Modal } from "react-bootstrap";
import Service from "./Service";
import AddService from "./AddService";

function Services({ services }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editService, setEditService] = useState(null);
  // service state

  const handleAddServiceClick = () => {
    setIsEditing(false);
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  const handleEditModal = service => {
    console.log(service);
    setEditService(service);
    setIsEditing(true);
    setShowAddModal(true);
  };

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Services</Card.Title>
          <CardDeck className="pb-4">
            {services.map(service => {
              return (
                <Service
                  key={`service-${service.id}`}
                  service={service}
                  onEdit={handleEditModal}
                />
              );
            })}
          </CardDeck>
          <Button onClick={handleAddServiceClick}>Add Service</Button>
        </Card.Body>
      </Card>
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <AddService
          onClose={handleCloseAddModal}
          isEditing={isEditing}
          editService={editService}
        />
      </Modal>
    </>
  );
}

export default Services;
