export default function CabecalhoComponent(props){

    return (
        <div className={"bg-cyan-100 w-screen h-10 absolute top-0 text-center"}>
            {props.children}
        </div>
    )
}