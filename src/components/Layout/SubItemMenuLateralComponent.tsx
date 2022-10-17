import { useState } from "react"

export default function SubItemMenuLateralComponent(props){

    return (
       <div className={props.display + ' w-full'}>
            <a href={props.url} className={`
            block mt-4 p-2 lg:mt-0
             ${props.itemSelected == props.tituloItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") ? "text-white underline" : "text-gray-400"}
              hover:text-white items-end4
              `}>
                {
                    props.tituloItem
                }
            </a>
       </div>
    )
}