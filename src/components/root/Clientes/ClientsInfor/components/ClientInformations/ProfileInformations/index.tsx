import { Button } from "@/components/ui/atoms/button";
import { Label } from "@/components/ui/atoms/label";
import { Switch } from "@/components/ui/atoms/switch";
import { Textarea } from "@/components/ui/atoms/textarea";
import Container from "@/components/ui/organisms/container";
import { Edit2Icon } from "lucide-react";
import React from "react";
import { PatternFormat } from "react-number-format";

const ProfileInformations = () => {
  const razaoSocial = {
    name: "Richard Guilherme Afonso Silva",
    idUser: "086442413997",
  };

  const nomeFantasia = "Azapfy";
  const inscricaoEstadual = "";
  const inscricaoMunicial = "";
  const pastaDeTrabalho = "";
  const agentes = "";

  return (
    <Container
      width="100%"
      style="pt-5"
      rightContent={
        <>
          <Button variant="ghost" className="flex gap-2">
            <Edit2Icon size={20} />
            Editar
          </Button>
        </>
      }
    >
      <div className="flex flex-row gap-x-32">
        <div className="space-y-6">
          <div className="flex flex-col gap-y-2">
            <Label>Nome fantasia:</Label>
            {!!nomeFantasia ? <span>{nomeFantasia}</span> : <div>_ _</div>}
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Inscrição estadual:</Label>
            {!!inscricaoEstadual ? (
              <span>{inscricaoEstadual}</span>
            ) : (
              <div>_ _</div>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Pasta de trabalho:</Label>
            {!!pastaDeTrabalho ? (
              <span>{pastaDeTrabalho}</span>
            ) : (
              <div>_ _</div>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-8">
            <Label htmlFor="billingSwitch">Faturamento quarterizado</Label>
            <Switch id="billingSwitch" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-y-2">
            <Label>Razão social:</Label>
            {!!razaoSocial ? (
              <span>{`${razaoSocial.name} ${razaoSocial.idUser}`}</span>
            ) : (
              <div>_ _</div>
            )}
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Inscrição municipal:</Label>
            {!!inscricaoMunicial ? (
              <span>{inscricaoMunicial}</span>
            ) : (
              <div>_ _</div>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-8">
            <Label htmlFor="visibleClientSwitch">Visível para clientes:</Label>
            <Switch id="visibleClientSwitch" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-y-2">
            <Label>CPF/CNPJ:</Label>
            <PatternFormat
              format="
                ##.###.###/####-##"
              displayType="text"
              allowEmptyFormatting
              value={"15838266/0434-50"}
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Agentes:</Label>
            {!!agentes ? <span>{agentes}</span> : <div>_ _</div>}
          </div>
        </div>

        <div className="flex w-1/4 flex-col gap-y-2">
          <Label>Anotações:</Label>
          <Textarea />
        </div>
      </div>
    </Container>
  );
};

export default ProfileInformations;
