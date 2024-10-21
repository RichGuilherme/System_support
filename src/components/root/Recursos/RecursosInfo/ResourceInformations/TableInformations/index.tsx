import React from "react";

const TableInformations = () => {
  return (
    <table className="border-collapse border border-border-100 even:bg-white">
      <tbody>
        <tr className="bg-background">
          <th className="border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Nome
          </th>
          <th className="border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Monitoramento
          </th>
          <th className="border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Cliente
          </th>
          <th className="border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Grupo
          </th>
        </tr>

        <tr>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            Richard
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            Nenhum
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            vestech
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            vestech
          </td>
        </tr>

        <tr className="bg-background">
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Tipo de recursos
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Data da aquisição
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            Data de garantia
          </th>
          <th className="whitespace-nowrap border border-border-100 py-2 pl-2 pr-56 text-left text-base font-medium">
            IP
          </th>
        </tr>

        <tr>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            Richard
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            Nenhum
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            vestech
          </td>
          <td className="border border-border-100 py-2 pl-2 pr-56 text-textSimples-300">
            vestech
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableInformations;
