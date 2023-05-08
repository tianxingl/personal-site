import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <p>
          <small className="text-muted">
            {new Date().getFullYear()}. Tianxing Liu. Created using React <i className="fab fa-react" />.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
