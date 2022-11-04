const database = {
    funcionario : [
        {
            IdFuncionario : 1,
            Nome : "Paulo Souza",
            Cpf: "11111111111",
            Salario : 2500.00,
            InicioVigencia : Date.now("27/05/2021 00:00:00.000"),
            Fim_Vigencia : null,
            FK_IdCargo : 2,
            FK_IdSetor : 1,

        },
        {
            IdFuncionario : 2,
            Nome : "Paulo Junior",
            Cpf: "222222222222",
            Salario : 1500.00,
            InicioVigencia : Date.now("01/06/2022 00:00:00.000"),
            Fim_Vigencia : null,
            FK_IdCargo : 1,
            FK_IdSetor : 4,
        },
        {
            IdFuncionario : 3,
            Nome : "Jorge Paulo",
            Cpf: "11111111111",
            Salario : 5500.00,
            InicioVigencia : Date.now("11/01/2020 00:00:00.000"),
            Fim_Vigencia : null,
            FK_IdCargo : 3,
            FK_IdSetor : 3,
        },
        {
            IdFuncionario : 4,
            Nome : "Gabriel Barbosa",
            Cpf: "11111111111",
            Salario : 10500.00,
            InicioVigencia : Date.now("02/02/2015 00:00:00.000"),
            Fim_Vigencia : null,
            FK_IdCargo : 4,
            FK_IdSetor : 4,
        },
    ] 
}
export default database;
