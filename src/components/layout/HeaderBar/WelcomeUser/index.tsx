import { HeadsetIcon } from "lucide-react";

const WelcomeUser = () => {
  const userOn = { user: "Richard Guilherme" };

  return (
    <div className="flex h-full flex-row items-end gap-2 pb-5">
      <HeadsetIcon size={30} className="text-highlight-azul" />
      <h1 className="font-light">
        Bem vindo,&nbsp;
        <b className="text-highlight-azul text-xl font-semibold">
          {userOn.user}
        </b>
      </h1>
    </div>
  );
};

export default WelcomeUser;
