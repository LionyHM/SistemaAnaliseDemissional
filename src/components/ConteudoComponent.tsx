export default function ConteudoComponent(props){

    return (
        <div className={"w-screen h-full flex items-center justify-center"}>
            {props.children}
        </div>
    )
}