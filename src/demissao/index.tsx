import LayoutComponent from "../components/Layout/LayoutComponent";
import MenuLateralComponent from "../components/Layout/MenuLateralComponent";
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