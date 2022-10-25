import { useState } from "react";
import ConteudoComponent from "../Layout/ConteudoComponent";

export default function FormDemissaoComponent(){
    const [titulosCabecalho, setTitulosCabecalho] = useState([
        "Nome","Cpf","Data de Nascimento", "Setor", "Cargo", "Chefia", "Efetuar Demissão"
    ])
    const [exibirBusca,setExibirBusca] = useState("hidden")
    function renderCabecalho(){
        const arr = []

        for(let titulo = 0; titulo < titulosCabecalho.length; titulo++){
            console.log(titulosCabecalho)
            arr.push(
                <th
                className="
                w-1/6
                min-w-[160px]
                text-sm
                font-semibold
                text-white
                border-l border-transparent
                "
                >
                {titulosCabecalho[titulo]}
                </th>
            )

        }
        return arr
    }

    function renderBusca(){
        setExibirBusca("block")
    }

    return(
        <ConteudoComponent>
            <div className="w-full">
                <div className="flex w-full flex-wrap absolute top-40">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Digite o nome do funcionário
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        <button onClick={() => renderBusca()} className="btnSearchDefault text-white font-bold py-2 px-4 rounded">Buscar</button>
                    </div>
                </div>
                <div className={`p-10 ${exibirBusca}`}>
                    <section className="bg-white py-20 lg:py-[120px]">
                        <div className="container">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4">
                                    <div className="max-w-full overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr className="text-center" style={{backgroundColor: "#566981"}}>
                                               {renderCabecalho()}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-l border-[#E8E8E8]
                                                "
                                                >
                                                Alfred
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                111.111.111-11
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                01/01/2000
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                TI
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                Analista de Sistemas
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                Bruce
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-r border-[#E8E8E8]
                                                "
                                                >
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    border border-primary
                                                    py-2
                                                    px-6
                                                    text-white
                                                    inline-block
                                                    rounded
                                                    bg-red-400
                                                    hover:bg-red-800
                                                    "
                                                    >
                                                Confirmar
                                                </a>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </ConteudoComponent>
    )

}