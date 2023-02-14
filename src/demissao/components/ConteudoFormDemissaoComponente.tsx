import React from 'react';

export default function(props){
    return (<div className="w-full">
        <div className="flex w-full flex-wrap absolute top-36">
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Digite o nome do funcionário
                </label>
                <input ref={props.inputElement} onChange={(e) => props.setNome(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-[#89a7b1] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Digite o nome do funcionário" />
                <div className="block uppercase tracking-wide text-xs font-bold mb-2 ml-2 text-red-500">{props.erroMsg}</div>
                <button onClick={() => props.renderBusca()} className="btnSearchDefault text-white font-bold py-2 px-4 rounded">Buscar</button>
            </div>
            <div className={`${props.exibirBusca} w-full pl-10`}>
                <section className="bg-white py-20 lg:py-[120px]">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full px-4">
                                <div className="max-w-full overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="text-center" style={{backgroundColor: "#566981"}}>{props.renderCabecalho()}</tr>
                                    </thead>
                                    <tbody>{props.resultadoBusca}</tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>);
}