import {
  LayoutDashboardIcon,
  TicketsIcon,
  MessageSquareTextIcon,
  UserIcon,
  MonitorCogIcon,
  ReceiptTextIcon,
  ChartNoAxesCombinedIcon,
  SettingsIcon,
} from "lucide-react";

export const Routers = [
  {
    title: "Dashboard",
    name: "dashboard",
    icon: LayoutDashboardIcon,
    children: [
      {
        title: "Tickets",
        name: "dashboard/tickets",
        url: "/dashboard/tickets",
      },
      {
        title: "Chats",
        name: "dashbord/chats",
        url: "/dashboard/chats",
      },
      {
        title: "Recursos",
        name: "dashbord/recursos",
        url: "/dashboard/recursos",
      },
    ],
  },
  {
    title: "Tickets",
    name: "tickets",
    url: "/tickets",
    icon: TicketsIcon,
  },
  {
    title: "Chats",
    name: "chats",
    url: "/chats",
    icon: MessageSquareTextIcon,
  },
  {
    title: "Clientes",
    name: "clientes",
    url: "/clientes",
    icon: UserIcon,
  },
  {
    title: "Recursos",
    name: "recursos",
    url: "/recursos",
    icon: MonitorCogIcon,
  },
  {
    title: "Contratos",
    name: "contratos",
    url: "/contratos",
    icon: ReceiptTextIcon,
  },
  {
    title: "Relatórios",
    name: "relatorio",
    icon: ChartNoAxesCombinedIcon,
    children: [
      {
        title: "Atendente",
        name: "relatorio/atendente",
        url: "/relatorio/atendente",
      },
      {
        title: "Faturamento",
        name: "relatorio/faturamento",
        url: "/relatorio/faturamento",
      },
      {
        title: "Administrativo",
        name: "relatorio/administrativo",
        url: "/relatorio/administrativo",
      },
      {
        title: "Recursos",
        name: "relatorio/recursos",
        url: "/relatorio/recursos",
      },
      {
        title: "Excluídos e bloqueados",
        name: "relatorio/excluidos_bloqueados",
        url: "/relatorio/excluidos_bloqueados",
      }
    ],
  },
  {
    title: "Configurações",
    name: "configurações",
    url: "/configurações",
    icon: SettingsIcon,
  },
];
