import { useState } from "react"

export default function ItemConteudoInicialComponent(props){
    let [img, setImg] = useState(props.caminhoImg)

    function changerImg(e){
        setImg(`./${e.title}Hover.png`)
    }
    
    function changeDefaultImg(e){
        setImg(props.caminhoImg)
    }
    
    return(
        <div className="flex justify-center flex-col w-20 h-20 mb-12 lg:mb-0"
        onMouseEnter={(e) => changerImg(e.target)}
        onMouseLeave={(e) => changeDefaultImg(e.target)}>
            <img title={props.tituloImg} src={img} alt="" />
            <label title={props.tituloImg}>{props.tituloMenu}</label>
        </div>
    )
    }