import { Button } from "@/components/ui/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/atoms/dialog";

const ButtonFilter = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-6 py-2">
          Filtro
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filtragem avançanda</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <Button variant="secondary" className="px-5 py-2" type="submit">
            Buscar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonFilter;
