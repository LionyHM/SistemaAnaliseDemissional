import { useState } from "react"
import React from 'react';

export default function ItemConteudoInicialComponent(props){
    let [img, setImg] = useState(props.caminhoImg)

    function changerImg(e){
        setImg(`./${props.tituloImg}Hover.png`)
    }
    
    function changeDefaultImg(e){
        setImg(props.caminhoImg)
    }
    
    return(
        <div className="flex justify-center flex-col w-20 h-20 mb-12 lg:mb-0 cursor-pointer"
        onMouseEnter={(e) => changerImg(e.target)}
        onMouseLeave={(e) => changeDefaultImg(e.target)}>
            <a href={props.url}>
                <img title={props.tituloImg} src={img} alt="" />
                <label className="cursor-pointer" title={props.tituloImg}>{props.tituloMenu}</label>
            </a>
        </div>
    )
    }