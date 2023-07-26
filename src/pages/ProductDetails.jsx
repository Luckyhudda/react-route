import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { pid } = useParams();

  return (
    <>
      <div className="text-center fw-bold">ProductDetails</div>;
      <p className="text-center fw-bold">Product id: {pid}</p>
    </>
  );
};

export default ProductDetails;
