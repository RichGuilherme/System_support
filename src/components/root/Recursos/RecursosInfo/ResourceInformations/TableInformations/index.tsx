import React from "react";

const TableInformations = () => {
  return (
    <table className="w-full border-collapse border border-border-100">
      <tbody>
        <tr className="bg-background">
          <th className="border border-border-100 py-2 pl-2 text-left font-medium">
            Nome
          </th>
          <th className="border border-border-100 py-2 pl-2 text-left font-medium">
            Monitoramento
          </th>
          <th className="border border-border-100 py-2 pl-2 text-left font-medium">
            Cliente
          </th>
          <th className="border border-border-100 py-2 pl-2 text-left font-medium">
            Grupo
          </th>
        </tr>

        <tr>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            Richard
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            Nenhum
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            vestech
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            vestech
          </td>
        </tr>

        <tr className="bg-background">
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 text-left font-medium">
            Tipo de recursos
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 text-left font-medium">
            Data da aquisição
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 text-left font-medium">
            Data de garantia
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 text-left font-medium">
            IP
          </th>
        </tr>

        <tr>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            software
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            02/10/2024
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400">
            30/02/2024
          </td>
          <td className="border border-border-100 py-2 pl-2 text-textSimples-400"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInformations;
