import Container from "@/components/ui/organisms/container";
import {
  AudioLinesIcon,
  CpuIcon,
  HardDriveIcon,
  MemoryStickIcon,
  MicrochipIcon,
  MonitorCog,
  MonitorIcon,
  SettingsIcon,
} from "lucide-react";
import DiskTable from "./components/DiskTable";
import NetworkTable from "./components/NetworkTable";
import PrinterTable from "./components/PrinterTable";

const ResourceTechnical = () => {
  return (
    <div className="page-container">
      <Container width="100%">
        <div className="flex flex-row flex-wrap justify-center gap-5">
          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <SettingsIcon className="text-highlight-verdinho" size={20} />
              Sistema Operacional
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Nome
                </label>
                <span></span>
              </div>

              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Versão
                </label>
                <span></span>
              </div>

              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Atuazalição
                </label>
                <span>_ _</span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <CpuIcon className="text-highlight-verdinho" size={20} />
              Processador
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Modelo
                </label>
                <span></span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <MicrochipIcon className="text-highlight-verdinho" size={20} />
              Placa mãe
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Fabricante
                </label>
                <span></span>
              </div>

              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Modelo
                </label>
                <span></span>
              </div>

              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Bios
                </label>
                <span>_ _</span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <MemoryStickIcon className="text-highlight-verdinho" size={20} />
              Memória
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Quantidadee
                </label>
                <span>GB</span>
              </div>

              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Slot
                </label>
                <span></span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <MonitorCog className="text-highlight-verdinho" size={20} /> Vídeo
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Modelo
                </label>
                <span></span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <AudioLinesIcon className="text-highlight-verdinho" size={20} />
              Som
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Nome
                </label>
                <span></span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <MonitorIcon className="text-highlight-verdinho" size={20} />
              Monitor
            </p>

            <div className="space-y-2">
              <div className="flex flex-row gap-28">
                <label htmlFor="" className="text-textSimples-400">
                  Modelo
                </label>
                <span></span>
              </div>
            </div>
          </div>

          <div className="flex w-[460px] flex-col gap-2 rounded-lg border border-border-100 p-4">
            <p className="flex flex-row items-center gap-2 text-highlight-primary">
              <HardDriveIcon className="text-highlight-verdinho" size={20} />
              S.M.A.R.T de disco
            </p>
          </div>

          <DiskTable />
          <NetworkTable />
          <PrinterTable />
        </div>
      </Container>

      <Container>
        <div></div>
      </Container>
    </div>
  );
};

export default ResourceTechnical;
