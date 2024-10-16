import { Button } from "@/components/ui/atoms/button";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import { TableSimple } from "@/components/ui/molecules/tableSimples";
import Container from "@/components/ui/organisms/container";
import { MailIcon, PlusIcon } from "lucide-react";
import { column } from "../../ClientRelationship/GroupAttendants/table/column";

const Email = () => {
  return (
    <Container
      title={
        <>
          <MailIcon size={20} />
          E-mails adicionais
        </>
      }
    >
      <div className="flex flex-row items-end gap-6 pb-8">
        <div className="space-y-2">
          <Label className="text-lg">Nome</Label>
          <Input type="text" placeholder="Nome" className="w-[310px]" />
        </div>

        <div className="space-y-2">
          <Label className="text-lg" htmlFor="email">
            E-mail
          </Label>
          <Input
            type="text"
            placeholder="E-mail"
            id="email"
            className="w-[435px]"
          />
        </div>

        <div className="mb-2 flex flex-row gap-x-9">
          <div className="flex items-center space-x-2">
            <Checkbox id="asaas" />

            <label
              htmlFor="asaas"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Asaas
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="contaAzul" />

            <label
              htmlFor="contaAzul"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              ContaAzul
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="relatorios" />

            <label
              htmlFor="relatorios"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Relatórios
            </label>
          </div>
        </div>
        <Button variant="secondary" className="button-action">
          <PlusIcon size={18} /> E-mail
        </Button>
      </div>

      <TableSimple columns={column} data={[]} />
    </Container>
  );
};

export default Email;
