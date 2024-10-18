import {
  LayoutDashboardIcon,
  TicketsIcon,
  MessageSquareTextIcon,
  UserIcon,
  MonitorCogIcon,
  ReceiptTextIcon,
  ChartNoAxesCombinedIcon,
  CalendarRangeIcon,
  BookMarkedIcon,
  LockKeyholeIcon,
  SettingsIcon,
  UserCog2,
  Trash2Icon,
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
        icon: TicketsIcon,
      },
      {
        title: "Chats",
        name: "dashbord/chats",
        url: "/dashboard/chats",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Recursos",
        name: "dashbord/recursos",
        url: "/dashboard/recursos",
        icon: MonitorCogIcon,
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
        title: "Atentende",
        name: "relatorio/atendente",
        url: "/relatorio/atendente",
        icon: TicketsIcon,
      },
      {
        title: "Faturamento",
        name: "relatorio/faturamento",
        url: "/relatorio/faturamento",
        icon: MessageSquareTextIcon,
      },
      {
        title: "Administrativo",
        name: "relatorio/administrativo",
        url: "/relatorio/administrativo",
        icon: UserCog2,
      },
      {
        title: "Recursos",
        name: "relatorio/recursos",
        url: "/relatorio/recursos",
        icon: MonitorCogIcon,
      },
      {
        title: "Excluídos e bloqueados",
        name: "relatorio/excluidos_bloqueados",
        url: "/relatorio/excluidos_bloqueados",
        icon: Trash2Icon
      }
    ],
  },
  {
    title: "Agenda",
    name: "agenda",
    url: "/agenda",
    icon: CalendarRangeIcon,
  },
  {
    title: "Conhecimentos",
    name: "conhecimentos",
    url: "/conhecimentos",
    icon: BookMarkedIcon,
  },
  {
    title: "Cofre de senha",
    name: "cofre de senha",
    url: "/cofreDeSenha",
    icon: LockKeyholeIcon,
  },
  {
    title: "Configurações",
    name: "configurações",
    url: "/configurações",
    icon: SettingsIcon,
  },
];
