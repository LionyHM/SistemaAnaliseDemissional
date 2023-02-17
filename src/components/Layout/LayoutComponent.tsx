import React from 'react';
import CabecalhoComponent from "./CabecalhoComponent";

export default function LayoutComponent(props){

    return (
        <div className={"h-screen w-screen flex"}>
            <CabecalhoComponent />  
            {/* O conteúdo é recebido pelo componente pai */}
            {props.children}
        </div>
    )
}