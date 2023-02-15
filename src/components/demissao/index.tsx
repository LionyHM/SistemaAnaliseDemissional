import LayoutComponent from "../layout/LayoutComponent";
import MenuLateralComponent from "../layout/MenuLateralComponent";
import FormDemissaoComponent from "./components/FormDemissaoComponent";
import React from 'react';

export default function DemissaoComponent(){

    return (
        <LayoutComponent>
            <MenuLateralComponent itemSelected="demissao">                
            </MenuLateralComponent>
            <FormDemissaoComponent />      
        </LayoutComponent>
    )
}