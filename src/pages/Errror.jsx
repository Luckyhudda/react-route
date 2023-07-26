import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Errror = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [navigate, countdown]);
  return (
    <div className="text-center text-danger">
      <h2>404: NOT FOUND :)</h2>
      <p>Error: Invalid page path, please redirect to home page</p>
      <div>
        <Button variant="primary" onClick={() => navigate("/")}>
          Go to HOME page
        </Button>
      </div>
      <p className="mt-3 text-dark fw-bold">
        You will auto redirect to home page in {countdown} sec
      </p>
    </div>
  );
};

export default Errror;
