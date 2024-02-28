import { Link } from "react-router-dom";

export function NotFound() {
    return <div className="bg-cyan-950 h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-7xl text-red-300 font-semibold animate-pulse mb-20">
            404 - Página não encontrada
        </h1>
        <Link to={"/home"} className="text-2xl text-white border rounded-full p-5 hover:bg-cyan-900">
            Voltar para Home
        </Link>
    </div>
}