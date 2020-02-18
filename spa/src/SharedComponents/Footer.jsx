import { Container } from "react-bootstrap";
import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer_area f_bg pt_60">
      <div className="footer_bottom">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5 col-sm-6">
              <p className="mb-0 f_400">
                Copyright © 2020 <a href="/">Rise Works Inc.</a>
              </p>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-6">
              <div className="f_social_icon_two text-center">
                <a href="https://medium.com/rise-works">
                  <i className="fab fa-medium-m"></i>
                </a>
                <a href="https://www.facebook.com/risefreelance/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/rise_freelance">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/rise_works/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://t.me/riseworks">
                  <i className="fab fa-telegram-plane"></i>
                </a>
                <a href="https://www.linkedin.com/company/riseworks/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="list-unstyled f_menu text-right">
                <li>
                  <a href="/terms">{t("footer.terms")}</a>
                </li>
                <li>
                  <a href="/cookies">{t("footer.cookies")}</a>
                </li>
                <li>
                  <a href="/privacy">{t("footer.privacy")}</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
