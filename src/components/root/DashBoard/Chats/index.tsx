import ChatsDepartament from "./components/ChatsDepartament";
import ChatsStartGroup from "./components/ChatsStartGroup";

const DashboardChats = () => {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <ChatsStartGroup />
      <ChatsDepartament />
    </div>
  );
};

export default DashboardChats;
