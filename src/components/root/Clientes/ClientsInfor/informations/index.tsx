import AddressInformations from "./AddressInformations";
import ContactsInformations from "./ContactsInformations";
import ProfileInformations from "./ProfileInformations";

const Informations = () => {
  return (
    <div className="page-container">
      <ProfileInformations />
      <AddressInformations />
      <ContactsInformations />
    </div>
  );
};

export default Informations;
