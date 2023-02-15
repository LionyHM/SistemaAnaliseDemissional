import CabecalhoComponent from "../layout/CabecalhoComponent"
import LayoutComponent from "../layout/LayoutComponent"
import MenuLateralComponent from "../layout/MenuLateralComponent"
import ConteudoInicialComponent from "./components/ConteudoInicialComponente"
import React from 'react';

export default function HomeComponent(){

    return (
        <LayoutComponent>
            <MenuLateralComponent>                
            </MenuLateralComponent>
            <ConteudoInicialComponent />         
        </LayoutComponent>
    )
}