import React from 'react';
export default function ConteudoComponent(props){

    return (
        <>
            <div className={"w-screen h-full flex items-center justify-center relative"}>
                {props.children}
            </div>
        </>
    )
}