import { Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const ProductsLayoout = () => {
  return (
    <Row>
      <Col sm={2}>
        <div className="bg-info-subtle border border-primary">
          <div className="fw-bold">Product-list</div>
          <div>
            <Link to="help">Product Help</Link>
          </div>
          <div>
            <Link to="1">Product 1</Link>
          </div>
          <div>
            <Link to="2">Product 2</Link>
          </div>
          <div>
            <Link to="3">Product 3</Link>
          </div>
          <div>
            <Link to="4">Product 4</Link>
          </div>
          <div>
            <Link to="5">Product 5</Link>
          </div>
          <div>
            <Link to="6">Product 6</Link>
          </div>
          <div>
            <Link to="7">Product 7</Link>
          </div>
          <div>
            <Link to="8">Product 8</Link>
          </div>
        </div>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default ProductsLayoout;
