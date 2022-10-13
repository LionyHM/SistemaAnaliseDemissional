import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import CabecalhoComponent from "./CabecalhoComponent";
import ConteudoComponent from "./ConteudoComponent";
import MenuLateralComponent from "./MenuLateralComponent";

export default function LayoutComponent(props){

    return (
        <div className={"h-screen w-screen flex"}>
            {props.children}
        </div>
    )
}