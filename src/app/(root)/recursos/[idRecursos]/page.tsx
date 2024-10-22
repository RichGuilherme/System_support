import { Framer } from "@/components/layout/Frame";
import RecursosInfor from "@/components/root/Recursos/RecursosInfo";

const RecursosPageSlog = ({ params }: { params: { idRecursos: string } }) => {
  const paramsValue = decodeURIComponent(params.idRecursos);
  return (
    <Framer>
      <RecursosInfor paramsValue={paramsValue} />
    </Framer>
  );
};

export default RecursosPageSlog;
