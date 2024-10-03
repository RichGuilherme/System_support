import ChatsDepartament from "./components/ChatsDepartament";
import ChatsStartGroup from "./components/ChatsStartGroup";
import PerService from "./components/PerService";

const DashboardChats = () => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <ChatsStartGroup />
      <ChatsDepartament />
      <PerService />
    </div>
  );
};

export default DashboardChats;
