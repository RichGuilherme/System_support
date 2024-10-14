import { Label } from "@/components/ui/atoms/label";
import { Switch } from "@/components/ui/atoms/switch";
import Container from "@/components/ui/organisms/container";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/atoms/avatar";

interface ContainerInformationProps {
  urlLogo: string;
  paramsValue: string;
  name: string;
  idUser: string;
}

const ContainerInformation = ({
  urlLogo,
  paramsValue,
  name,
  idUser,
}: ContainerInformationProps) => {
  return (
    <Container
      style="mb-4 space-y-0"
      width="100%"
      rightContent={
        <div className="flex items-center gap-2">
          <Label htmlFor="clientActive-mode">Cliente ativo</Label>
          <Switch id="clientActive-mode" />
        </div>
      }
    >
      <div className="flex flex-row items-center space-x-4">
        <div className="flex h-[83px] w-[83px] items-center justify-center rounded-2xl border bg-background text-sm">
          {!!urlLogo ? (
            <Avatar className="h-full w-full rounded-2xl">
              <AvatarImage
                className="w-full"
                src={urlLogo}
                alt="Logo do client"
              />
              <AvatarFallback>logo</AvatarFallback>
            </Avatar>
          ) : (
            <p>+ Logo</p>
          )}
        </div>

        <div>
          <p className="text-2xl font-medium text-highlight-primary">
            {paramsValue}
          </p>

          <div className="text-textSimples-300">{`${name} ${idUser}`}</div>
        </div>
      </div>
    </Container>
  );
};

export default ContainerInformation;
