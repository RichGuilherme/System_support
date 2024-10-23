const useCloseAllCollapsibles = (
  collapsibleRefs: React.MutableRefObject<{
    [key: string]: HTMLDivElement | null;
  }>,
) => {
  const closeAll = () => {
    if (!collapsibleRefs.current) return;

    Object.values(collapsibleRefs.current).forEach((collapsible) => {
      if (collapsible?.getAttribute("data-state") === "open") {
        collapsible.querySelector("button")?.click();
      }
    });
  };

  return closeAll;
};

export default useCloseAllCollapsibles;
