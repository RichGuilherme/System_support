import { PerServiceData } from "@/components/root/DashBoard/Chats/components/PerService/columns";

export const MEUSCHATS = {
  EMATENDIMENTO: 2,
  AGUARDANDORESPONSE: 1,
  MEDIADAESPERA: "00:05:32",
  MEDIADAATENDIMENTO: "00:12:55",
};

export const TODOSCHATS = {
  TODOS: 31,
  EMATENDIMENTO: 16,
  FILADEESPERA: 2,
  AGUARDANDORESPONSE: 13,
  MEDIADAESPERA: "00:48:11",
  MEDIADAATENDIMENTO: "00:18:47",
};

export const PerService: PerServiceData[] = [
  {
    summaryData: {
      onlineCount: 9,
      offlineCount: 4,
      totalChats: 13,
    },
    attendantData: [
      {
        name: "Abel Liberato",
        status: "online",
        chatsInProgress: 2,
        group: "Técnico",
      },
      {
        name: "Adair",
        status: "offline",
        chatsInProgress: 1,
        group: "Técnico",
      },
      {
        name: "Daniel Jesus",
        status: "online",
        chatsInProgress: 0,
        group: "Técnico",
      },
      {
        name: "Elmo Menezes",
        status: "online",
        chatsInProgress: 0,
        group: "Técnico",
      },
      {
        name: "Igor Baldi",
        status: "online",
        chatsInProgress: 0,
        group: "Técnico",
      },
      {
        name: "Keven",
        status: "online",
        chatsInProgress: 2,
        group: "Técnico",
      },
      {
        name: "Leonardo",
        status: "offline",
        chatsInProgress: 3,
        group: "Técnico",
      },
      {
        name: "Lucas Santos Soares",
        status: "online",
        chatsInProgress: 3,
        group: "Técnico",
      },
      {
        name: "Rafael Costa",
        status: "offline",
        chatsInProgress: 1,
        group: "Técnico",
      },
      {
        name: "Rafael Reis",
        status: "offline",
        chatsInProgress: 1,
        group: "Técnico",
      },
      {
        name: "Misael Ribeiro",
        status: "offline",
        chatsInProgress: 2,
        group: "Técnico",
      },
      {
        name: "Pedro Henrique",
        status: "online",
        chatsInProgress: 0,
        group: "Técnico",
      },
      {
        name: "Richard Guilherme",
        status: "online",
        chatsInProgress: 2,
        group: "Técnico",
      },
    ],
  },
];
