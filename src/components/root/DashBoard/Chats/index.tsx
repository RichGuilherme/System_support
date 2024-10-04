import ChatGroupStats from "./components/ChatGroupStats";
import ChatsDepartament from "./components/ChatsDepartament";
import ChatsInfor from "./components/ChatsInfor";
import PerService from "./components/PerService";

const DashboardChats = () => {
  return (
    <div className="page-container">
      <ChatsInfor />
      <ChatsDepartament />
      <PerService />
      <ChatGroupStats />
    </div>
  );
};

export default DashboardChats;
