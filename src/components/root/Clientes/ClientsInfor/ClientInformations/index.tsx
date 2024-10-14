import AddressInformations from "./AddressInformations";
import ContactsInformations from "./ContactsInformations";
import ProfileInformations from "./ProfileInformations";

const ClientInformations = () => {
  return (
    <div className="page-container">
      <ProfileInformations />
      <AddressInformations />
      <ContactsInformations />
    </div>
  );
};

export default ClientInformations;
