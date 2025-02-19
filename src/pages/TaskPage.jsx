import { ChevronsLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../componentes/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  // função para voltar para a página anterior - usando uma função dentro de outra função
  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={onBackClick} className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronsLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>
      </div>

      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-700">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
