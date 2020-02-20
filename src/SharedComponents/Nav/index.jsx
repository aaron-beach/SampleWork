import { Container, Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";

import Avatar from "SharedComponents/Avatar";
import ChatIcon from "images/chat.svg";
import { Link } from "react-router-dom";
import SearchIcon from "images/search.svg";
import WalletIcon from "./WalletIcon";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

function RiseNav() {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setExpanded(!expanded);

  const Logo = styled.span`
    font-size: 2em; 
    color: #8184dc;
  `;

  return (
    <header className="header_area header_area_four navbar_fixed">
      <Navbar
        expand="lg"
        expanded={expanded}
        className="navbar navbar-expand-lg menu_one"
      >
        <Container>
          <Navbar.Brand to="/">
            <Logo>
              <i className="fa fa-check-circle" aria-hidden="true"/>Sample
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
            <span className="menu_toggle">
              <span className="hamburger">
                <span />
                <span />
                <span />
              </span>
              <span className="hamburger-cross">
                <span />
                <span />
              </span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu">
              <Nav.Item className="account-nav-item">
                <Nav.Link as={Link} to="/account">
                  <span className="d-lg-none account-user-name">
                    Justin Smith
                  </span>
                  <Avatar
                    name="Justin Smith"
                    size={64}
                    className="account-avatar"
                  />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">{t("nav.home")}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about/">{t("nav.about")}</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/#features">{t("nav.features")}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/invites/">{t("nav.invites")}</Nav.Link>
              </Nav.Item>
              <Nav.Item className="icon-nav-item">
                <Nav.Link as={Link} to="/search">
                  <img
                    src={SearchIcon}
                    alt={t("nav.search")}
                    className="d-none d-lg-inline "
                  />
                  <span className="d-lg-none">{t("nav.search")}</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="icon-nav-item">
                <Nav.Link as={Link} to="/projects">
                  <img
                    src={ChatIcon}
                    alt={t("nav.projects")}
                    className="d-none d-lg-inline"
                  />
                  <span className="d-lg-none">{t("nav.home")}</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="icon-nav-item">
                <Nav.Link as={Link} to="/wallet">
                  <WalletIcon className="d-none d-lg-flex" />
                  <span className="d-lg-none">{t("nav.wallet")}</span>
                </Nav.Link>
              </Nav.Item>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default RiseNav;
