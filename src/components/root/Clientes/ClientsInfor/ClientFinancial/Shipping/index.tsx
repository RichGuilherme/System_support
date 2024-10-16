import { Button } from "@/components/ui/atoms/button";
import { Input } from "@/components/ui/atoms/input";
import { Label } from "@/components/ui/atoms/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/atoms/select";
import Container from "@/components/ui/organisms/container";
import { PlusIcon, SendHorizonalIcon } from "lucide-react";

const Shipping = () => {
  return (
    <Container
      title={
        <>
          <SendHorizonalIcon size={20} /> Envio
        </>
      }
    >
      <div className="flex flex-row items-end gap-6">
        <div className="space-y-2">
          <Label className="text-lg">SMS</Label>
          <Input type="text" placeholder="SMS" className="w-[310px]" />
        </div>

        <div className="space-y-2">
          <Label className="text-lg">E-mail principal</Label>
          <Input type="text" placeholder="E-mail" className="w-[435px]" />
        </div>

        <div className="space-y-2">
          <Label className="text-lg">Relatório de fechamento</Label>

          <Select defaultValue="null">
            <SelectTrigger className="w-[310px] border-border-100">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="null">Nenhum</SelectItem>
              <SelectItem value="synthetic">Sintético</SelectItem>
              <SelectItem value="detailed">Detalhado</SelectItem>
              <SelectItem value="detailedNotes">
                Detalhado com apontamento
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="secondary" className="button-action">
          <PlusIcon size={18} /> Salvar
        </Button>
      </div>
    </Container>
  );
};

export default Shipping;
