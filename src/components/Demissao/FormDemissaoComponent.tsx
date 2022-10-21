import ConteudoComponent from "../Layout/ConteudoComponent";

export default function FormDemissaoComponent(){

    return(
        <ConteudoComponent>
            <form className="w-full">
                <div className="flex w-full flex-wrap absolute top-40">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Digite o nome do funcionário
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                        <button className="btnSearchDefault text-white font-bold py-2 px-4 rounded">Buscar</button>
                    </div>
                </div>
                <div className="p-10">
                    <section className="bg-white py-20 lg:py-[120px]">
                        <div className="container">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full px-4">
                                    <div className="max-w-full overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead>
                                            <tr className="text-center" style={{backgroundColor: "#566981"}}>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white
                                                border-l border-transparent
                                                "
                                                >
                                                TLD
                                                </th>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white
                                                "
                                                >
                                                Duration
                                                </th>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white
                                                "
                                                >
                                                Registration
                                                </th>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white
                                                "
                                                >
                                                Renewal
                                                </th>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white
                                                "
                                                >
                                                Transfer
                                                </th>
                                                <th
                                                className="
                                                w-1/6
                                                min-w-[160px]
                                                text-sm
                                                font-semibold
                                                text-white                                               
                                                border-r border-transparent
                                                "
                                                >
                                                Register
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-l border-[#E8E8E8]
                                                "
                                                >
                                                .com
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                1 Year
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                $75.00
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                $5.00
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-[#F3F6FF]
                                                border-b border-[#E8E8E8]
                                                "
                                                >
                                                $10.00
                                                </td>
                                                <td
                                                className="
                                                text-center text-dark
                                                font-medium
                                                text-sm
                                                bg-white
                                                border-b border-r border-[#E8E8E8]
                                                "
                                                >
                                                <a
                                                    href="javascript:void(0)"
                                                    className="
                                                    border border-primary
                                                    py-2
                                                    px-6
                                                    text-primary
                                                    inline-block
                                                    rounded
                                                    hover:bg-primary hover:text-white
                                                    "
                                                    >
                                                Sign Up
                                                </a>
                                                </td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </form>

        </ConteudoComponent>
    )

}