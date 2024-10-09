const Filter = () => {
  const statusFacetedFilter = [
    {
      label: "Ativo",
      value: "Ativo",
    },
    {
      label: "Inativo",
      value: "Inativo",
    },
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