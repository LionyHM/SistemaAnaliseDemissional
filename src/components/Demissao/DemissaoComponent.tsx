import LayoutComponent from "../Layout/LayoutComponent";
import MenuLateralComponent from "../Layout/MenuLateralComponent";
import FormDemissaoComponent from "./FormDemissaoComponent";

export default function DemissaoComponent(){

    return (
        <LayoutComponent>
            <MenuLateralComponent itemSelected="demissao">                
            </MenuLateralComponent>
            <FormDemissaoComponent />      
        </LayoutComponent>
    )
}