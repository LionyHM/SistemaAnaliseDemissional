import CabecalhoComponent from "../Layout/CabecalhoComponent"
import LayoutComponent from "../Layout/LayoutComponent"
import MenuLateralComponent from "../Layout/MenuLateralComponent"
import ConteudoInicialComponent from "./ConteudoInicialComponente"

export default function HomeComponent(){

    return (
        <LayoutComponent>
            <MenuLateralComponent>                
            </MenuLateralComponent>
            <ConteudoInicialComponent />         
        </LayoutComponent>
    )
}