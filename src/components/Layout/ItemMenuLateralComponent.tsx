import React from 'react';
export default function ItemMenuLateralComponent(props){

    return (
        <>
            <div onClick={(e) => props.collapseLinkMenu(e)} className="block mt-4 p-2 lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer">
                {props.tituloItem}
            </div>
           <div className="pl-4">
                {props.children}
           </div>
        </>
    )
}