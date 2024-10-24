"use client";

import ErroIcon from "@/assets/erroIcon";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/atoms/button";
import { useRouter } from "next/navigation";

const Error = () => {
  const router = useRouter();
  const handlePageReset = () => {
    document.cookie = "error=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Layout>
      <div className="absolute left-4 mt-32 flex h-[330px] w-full flex-row items-center justify-center space-y-1 bg-backgroundSecondary shadow-2xl">
        <div className="relative top-3 flex h-[510px] w-[530px]">
          <ErroIcon />
        </div>

        <div className="flex flex-col items-center space-y-6">
          <p className="w-[438px] text-center text-lg font-medium text-textSimples-300">
            Ocorreu algum error no carragamento da página. Reinicie ou retorne
            para página principal
          </p>
          <div className="space-x-7">
            <Button
              onClick={() => handlePageReset()}
              variant="outline"
              className="px-9 py-2 text-lg font-light"
            >
              Reiniciar página
            </Button>
            <Button
              onClick={() => handleGoHome()}
              variant="secondary"
              className="px-9 py-2 text-lg font-light"
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
