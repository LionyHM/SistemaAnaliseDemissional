import { useState } from "react"
import ConteudoComponent from "../Layout/ConteudoComponent"
import ItemConteudoInicialComponent from "./ItemConteudoInicialComponent"

export default function ConteudoInicialComponent(){

    return (
        <ConteudoComponent titulo="Olá, Usuário">
           <div className="flex flex-col justify-around items-center h-96 lg:h-80 p-10 rounded-lg" style={{boxShadow: "-4px 4px 4px 3px gray", width: "70%"}}>
                <h2 className="text-xl font-semibold text-gray-500 none hidden lg:block">Bem-vindo ao sistema de análise demissional,  o que deseja fazer?</h2>
                <div className="flex flex-col lg:flex-row justify-around items-center w-full h-full">
                    <ItemConteudoInicialComponent
                    tituloImg="out"
                    caminhoImg="./out.png"
                    tituloMenu="Nova Demissão"
                    />
                    <ItemConteudoInicialComponent
                    tituloImg="people"
                    caminhoImg="./people.png"
                    tituloMenu="Novo Profissional"
                    />
                    <ItemConteudoInicialComponent
                    tituloImg="grafic"
                    caminhoImg="./grafic.png"
                    tituloMenu="Relatórios"
                    />
                </div>
            </div>
        </ConteudoComponent>
    )
}