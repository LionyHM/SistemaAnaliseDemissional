export default function ConteudoComponent(props){

    return (
        <>
            <h2 className="hidden lg:block text-xl ml-10 mt-12">{props.titulo}</h2>
            <div className={"w-screen h-full flex items-center justify-center relative"}>
                {props.children}
            </div>
        </>
    )
}