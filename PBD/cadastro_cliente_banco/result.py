import operacoes
import utilidades

def cadastrar_cliente():
    cliente = {
        "nome": utilidades.nome_usuario(),
        "cpf": utilidades.obter_cpf(),
        "email": utilidades.obter_email(),
        "endereco": utilidades.obter_endereco(),
        "numero_conta": utilidades.obter_numero_conta(),
        "saldo": utilidades.obter_valor_monetario("Digite seu saldo inicial: R$ "),
    }

    print(f"\nOla, {cliente['nome']}! Cadastro realizado com sucesso.")
    return cliente


def mostrar_dados(dados):
    print("\nDados do cliente")
    print(f"Nome: {dados['nome']}")
    print(f"CPF: {dados['cpf']}")
    print(f"Email: {dados['email']}")
    print(f"Endereco: {dados['endereco']}")
    print(f"Numero da conta: {dados['numero_conta']}")
    operacoes.mostrar_saldo(dados["saldo"])


def escolher_opcao():
    while True:
        print("\nMenu")
        print("1 - Ver cadastro")
        print("2 - Ver saldo")
        print("3 - Depositar")
        print("4 - Sacar")
        print("0 - Sair")

        opcao = input("Escolha uma opcao: ").strip()

        if opcao in {"0", "1", "2", "3", "4"}:
            return opcao

        print("Opcao invalida. Tente novamente.")


def executar_menu(cliente):
    while True:
        opcao = escolher_opcao()

        if opcao == "0":
            print("Atendimento encerrado.")
            break

        if opcao == "1":
            mostrar_dados(cliente)
        elif opcao == "2":
            operacoes.mostrar_saldo(cliente["saldo"])
        elif opcao == "3":
            valor = utilidades.obter_valor_monetario(
                "Valor do deposito: R$ ",
                permitir_zero=False,
            )
            cliente["saldo"] = operacoes.adicionar_saldo(cliente["saldo"], valor)
            print("Deposito realizado com sucesso.")
            operacoes.mostrar_saldo(cliente["saldo"])
        elif opcao == "4":
            valor = utilidades.obter_valor_monetario(
                "Valor do saque: R$ ",
                permitir_zero=False,
            )

            try:
                cliente["saldo"] = operacoes.sacar_saldo(cliente["saldo"], valor)
            except ValueError as erro:
                print(erro)
            else:
                print("Saque realizado com sucesso.")
                operacoes.mostrar_saldo(cliente["saldo"])


def main():
    cliente = cadastrar_cliente()
    mostrar_dados(cliente)
    executar_menu(cliente)


if __name__ == "__main__":
    main()
