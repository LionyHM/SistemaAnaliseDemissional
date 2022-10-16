import { useState } from "react";
import BtnSairComponent from "./BtnSairComponent";
import ItemMenuLateralComponent from "./ItemMenuLateralComponent";
import SubItemMenuLateralComponent from "./SubItemMenuLateralComponent";

export default function MenuLateralComponent(props){
    let [removeHiddenCadastro, setRemoveHiddenremoveHiddenCadastro] = useState("hidden")
    let [removeHiddenRelatorio, setRemoveHiddenremoveHiddenRelatorio] = useState("hidden") 
    let [removeHiddenGerenciar, setRemoveHiddenremoveHiddenGerenciar] = useState("hidden") 

    function collapseLinkMenu(e){
        
        if(e.target.textContent === "Cadastrar"){
            let display = removeHiddenCadastro == "block" ? "hidden" : "block"
            setRemoveHiddenremoveHiddenCadastro(display)
        }
        else if(e.target.textContent === "Relatórios"){
            let display = removeHiddenRelatorio == "block" ? "hidden" : "block"
            setRemoveHiddenremoveHiddenRelatorio(display)
        }
        else if(e.target.textContent === "Gerenciar"){
            let display = removeHiddenGerenciar == "block" ? "hidden" : "block"
            setRemoveHiddenremoveHiddenGerenciar(display)
            }
    }

    return (
        <>
            <div className="block lg:hidden mt-20">
                <button className="flex items-center px-3 py-2 border rounded ml-10" style={{color: "#566981", border: '1px solid #566981'}}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={"hidden lg:block justify-start items-start w-60 h-full rounded-tr-full border-r-2 relative z-20"} 
                style={{backgroundColor: "#566981", borderRight: "8px solid #89a7b1", minHeight: "40em"}}>
                <nav className="flex items-center justify-between flex-wrap p-6 w-full mt-28">
                    <div className="w-full block flex-grow lg:flex lg:items-start lg:w-auto">
                        <div className="text-md lg:flex-grow">
                            <ItemMenuLateralComponent collapseLinkMenu={collapseLinkMenu} tituloItem="Cadastrar">
                                <SubItemMenuLateralComponent display={removeHiddenCadastro} url="#" tituloItem="Profissional"></SubItemMenuLateralComponent>
                                <SubItemMenuLateralComponent display={removeHiddenCadastro} url="#" tituloItem="Cargo"></SubItemMenuLateralComponent>
                                <SubItemMenuLateralComponent display={removeHiddenCadastro} url="#" tituloItem="Setor"></SubItemMenuLateralComponent>
                                <SubItemMenuLateralComponent display={removeHiddenCadastro} url="/demissao" tituloItem="Demissão"></SubItemMenuLateralComponent>
                            </ItemMenuLateralComponent>

                            <ItemMenuLateralComponent collapseLinkMenu={collapseLinkMenu} tituloItem="Relatórios">
                                <SubItemMenuLateralComponent display={removeHiddenRelatorio} url="#" tituloItem="Relatórios" ></SubItemMenuLateralComponent>
                            </ItemMenuLateralComponent>

                            <ItemMenuLateralComponent collapseLinkMenu={collapseLinkMenu} tituloItem="Gerenciar">
                                <SubItemMenuLateralComponent display={removeHiddenGerenciar} url="#" tituloItem="Gerenciar" ></SubItemMenuLateralComponent>
                            </ItemMenuLateralComponent>

                            <BtnSairComponent></BtnSairComponent>
                        </div>
                    {/*  <div>
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                        </div> */}
                    </div>
                </nav>
            </div>
        </>
    )
}