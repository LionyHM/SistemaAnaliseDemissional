export default function CabecalhoComponent(){

    const titulo = "Sistema de Análise Demissional"

    return (
        <div className={"w-screen h-10 absolute top-0 text-start text-xl text-white font-bold"} style={{backgroundColor: "#566981",  borderTop: "8px solid #89a7b1"}}>
            <h1 className="ml-2" style={{letterSpacing: '6px'}}>Sistema de Análise Demissional</h1>
        </div>
    )
}