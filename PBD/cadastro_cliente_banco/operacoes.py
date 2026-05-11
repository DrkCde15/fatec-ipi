"""Funcoes para operacoes bancarias simples."""
def mostrar_saldo(saldo):
    print(f"Saldo atual: R$ {saldo:.2f}")


def adicionar_saldo(saldo, valor):
    if valor <= 0:
        raise ValueError("O valor do deposito deve ser maior que zero.")

    return saldo + valor


def sacar_saldo(saldo, valor):
    if valor <= 0:
        raise ValueError("O valor do saque deve ser maior que zero.")

    if valor > saldo:
        raise ValueError("Saldo insuficiente para realizar o saque.")

    return saldo - valor
