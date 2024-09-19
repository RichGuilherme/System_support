import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sistema de Tickets, atendimento e Service Desk" />
        <title>Suporte-sistema</title>
      </head>

      <Providers >
        {children}
      </Providers>
    </html>
  );
}
