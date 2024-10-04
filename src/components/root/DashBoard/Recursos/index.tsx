import ResourcesInfoGroup from "./components/ResourcesInfoGroup";
import TriggersFired from "./components/TriggersFired";

const DashboardRecursos = () => {
  return (
    <div className="page-container">
      <ResourcesInfoGroup />
      <TriggersFired />
    </div>
  );
};

export default DashboardRecursos;
