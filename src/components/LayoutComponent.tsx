import CabecalhoComponent from "./CabecalhoComponent";
import ConteudoComponent from "./ConteudoComponent";
import MenuLateralComponent from "./MenuLateralComponent";

export default function LayoutComponent(){

    return (
        <div className={"h-screen w-screen flex"}>
            <CabecalhoComponent>
                <h1>Sistema de Análise Demissional</h1>
            </CabecalhoComponent>

            <MenuLateralComponent>
                
            </MenuLateralComponent>

            <ConteudoComponent>
                <div>teste</div>
            </ConteudoComponent>
       
        </div>
    )
}