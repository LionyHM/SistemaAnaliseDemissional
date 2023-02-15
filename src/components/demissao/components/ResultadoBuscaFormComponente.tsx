import React from 'react';
export default function (funcionario, indice, arrFunc)  {

    arrFunc.push(
        <tr key={indice * Math.random()}>
                        <td className="text-center text-dark font-medium text-sm bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">{funcionario.Nome}</td>
                        <td className="text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]">
                            {funcionario.Cpf}
                        </td>
                        <td className="text-center text-dark font-medium text-sm bg-[#F3F6FF] border-b border-[#E8E8E8]">01/01/2000</td>
                        <td
                        className=" text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]">
                            {funcionario.setorResponse.Setor}
                        </td>
                        <td className="text-center text-dark font-medium text-sm bg-[#F3F6FF] border-b border-[#E8E8E8]">
                            {funcionario.cargoResponse.NomeCargo}
                        </td>
                        <td className=" text-center text-dark font-medium text-sm bg-white border-b border-[#E8E8E8]">Bruce</td>
                        <td className="text-center text-dark font-medium text-sm bg-white border-b border-r border-[#E8E8E8]">
                            <a href="#" className="border border-primary py-1 px-3 text-white inline-block rounded bg-red-400 hover:bg-red-800">Confirmar</a>
                        </td>
                    </tr>);
}