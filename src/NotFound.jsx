import { Card, Container } from "react-bootstrap";

import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled(Container)`
  padding-bottom: 10rem;
  padding-top: 10rem;
`;

function NotFound() {
  const { t } = useTranslation();
  return (
    <Wrapper className="text-center mt-5">
      <Card>
        <Card.Title className="display-2">{t("notFound.title")}</Card.Title>
        <Card.Body>
          <p>{t("notFound.body")}</p>
        </Card.Body>
      </Card>
    </Wrapper>
  );
}

export default NotFound;
