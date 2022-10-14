import { useState } from "react"

export default function SubItemMenuLateralComponent(props){

    return (
       <div className={props.display + ' w-full'}>
            <a href={props.url} className="block mt-4 p-2 lg:mt-0 text-gray-400 hover:text-white mr-4">
                {props.tituloItem}
            </a>
       </div>
    )
}