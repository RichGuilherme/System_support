import ChatGroupStats from "./components/ChatGroupStats";
import ChatsDepartament from "./components/ChatsDepartament";
import ChatsStartGroup from "./components/ChatsStartGroup";
import PerService from "./components/PerService";

const DashboardChats = () => {
  return (
    <div className="page-container">
      <ChatsStartGroup />
      <ChatsDepartament />
      <PerService />
      <ChatGroupStats />
    </div>
  );
};

export default DashboardChats;
