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

} from "lucide-react";

export const Routers = [
  {
    title: "Dashboard",
    name: "dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon
  },
  {
    title: "Tickets",
    name: "tickets",
    url: "/tickets",
    icon: TicketsIcon
  },
  {
    title: "Chats",
    name: "chats",
    url: "/chats",
    icon: MessageSquareTextIcon
  },
  {
    title: "Clientes",
    name: "clientes",
    url: "/clientes",
    icon: UserIcon
  },
  {
    title: "Recursos",
    name: "recursos",
    url: "/recursos",
    icon: MonitorCogIcon
  },
  {
    title: "Contratos",
    name: "contratos",
    url: "/contratos",
    icon: ReceiptTextIcon
  },
  {
    title: "Relatórios",
    name: "relatórios",
    url: "/relatórios",
    icon: ChartNoAxesCombinedIcon
  },
  {
    title: "Agenda",
    name: "agenda",
    url: "/agenda",
    icon: CalendarRangeIcon
  },
  {
    title: "Conhecimentos",
    name: "conhecimentos",
    url: "/conhecimentos",
    icon: BookMarkedIcon
  },
  {
    title: "Cofre de senha",
    name: "cofre de senha",
    url: "/cofreDeSenha",
    icon: LockKeyholeIcon
  },
  {
    title: "Configurações",
    name: "configurações",
    url: "/configurações",
    icon: SettingsIcon
  }
];