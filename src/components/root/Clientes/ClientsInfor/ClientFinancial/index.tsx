import Email from "./Email";
import Financial from "./Financial";
import Shipping from "./Shipping";

const ClientFinancial = () => {
  return (
    <div className="page-container">
      <Shipping />
      <Email />
      <Financial />
    </div>
  );
};

export default ClientFinancial;
