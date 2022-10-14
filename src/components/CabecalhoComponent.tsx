export default function CabecalhoComponent(props){

    const titulo = "Sistema de Análise Demissional"

    return (
        <div className={"bg-cyan-100 w-screen h-10 absolute top-0 text-start text-xl text-white font-bold"} style={{backgroundColor: "#566981",  borderTop: "8px solid #89a7b1"}}>
            {props.children}
        </div>
    )
}