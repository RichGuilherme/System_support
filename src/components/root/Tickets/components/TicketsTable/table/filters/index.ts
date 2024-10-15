const Filter = () => {
  const statusFacetedFilter = [
    {
      label: "Aberto",
      value: "Aberto",
    },
    {
      label: "Fechado",
      value: "Fechado",
    },
    {
      label: "Em Progresso",
      value: "Em Progresso"
    },
    {
      label: "Atendimento Remoto",
      value: "Atendimento Remoto"
    },
    {
      label: "Atendimento Interno",
      value: "Atendimento Interno"
    }
  ];

  const filterBar = [
    {
      title: "Status",
      columnId: "status",
      options: statusFacetedFilter,
    },
  ];

  return filterBar;
};

export default Filter;