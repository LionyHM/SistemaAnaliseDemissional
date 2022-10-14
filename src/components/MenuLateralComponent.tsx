export default function MenuLateralComponent(props){

    return (
        <div className={"w-40 h-full rounded-tr-full border-r-2"} style={{backgroundColor: "#566981", borderRight: "8px solid #89a7b1"}}>
            {props.children}
        </div>
    )
}