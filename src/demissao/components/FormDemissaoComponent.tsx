import React from 'react';
import { useEffect, useRef, useState } from "react";
import ConteudoComponent from "../../components/Layout/ConteudoComponent";
import ResultadoBuscaFormComponente from "./ResultadoBuscaFormComponente";
import ConteudoFormDemissaoComponente from "./ConteudoFormDemissaoComponente";
import { getFuncionario } from '../services/getFuncionario';
import { titulosCabecalhoTable } from '../enum/titulosCabecalhoTable';

export default function FormDemissaoComponent(){
    const [erroMsg, setErroMsg] = useState("")
    const [exibirBusca,setExibirBusca] = useState("hidden")
    const [nome, setNome] = useState("")
    const [resultadoBusca, setResultadoBusca] = useState([])
    const inputElement = useRef(null);

    useEffect(() => inputElement.current ? inputElement.current.focus() : null, []);
    useEffect(() => window.addEventListener("keydown", (e) =>  e.key === "Enter" ? renderBusca() : null   ), [nome])

    function renderCabecalho(){
        let arr = []

        for(let titulo = 0; titulo < titulosCabecalhoTable.length; titulo++){
            arr.push(
                <th key={titulo * Math.random()} className="w-1/6 min-w-[160px] text-sm font-semibold text-white border-l border-transparent">
                    {titulosCabecalhoTable[titulo]}
                </th>
            )
        }
        return arr
    }

    async function renderBusca(){
        const funcionario = await getFuncionario(nome)
       
        if(typeof funcionario === "string"){

            setErroMsg(funcionario)
            setResultadoBusca([])
            return;
        }
        setErroMsg("")

        let arrFunc:any = []

        funcionario.funcResponse?.map((f, i) => {
           ResultadoBuscaFormComponente(f,i, arrFunc)
        })

        await setExibirBusca("block")
        setResultadoBusca(arrFunc)
    }
    return(
        <ConteudoComponent>
            <ConteudoFormDemissaoComponente inputElement={inputElement} setNome={setNome} 
                erroMsg={erroMsg} renderBusca={renderBusca} exibirBusca={exibirBusca} renderCabecalho={renderCabecalho} resultadoBusca={resultadoBusca} />
        </ConteudoComponent>
    )
}