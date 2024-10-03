import ChatGroupStats from "./components/ChatGroupStats";
import ChatsDepartament from "./components/ChatsDepartament";
import ChatsStartGroup from "./components/ChatsStartGroup";
import PerService from "./components/PerService";

const DashboardChats = () => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <ChatsStartGroup />
      <ChatsDepartament />
      <PerService />
      <ChatGroupStats />
    </div>
  );
};

export default DashboardChats;
