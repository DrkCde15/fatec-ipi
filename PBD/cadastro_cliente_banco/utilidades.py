"""Funcoes auxiliares para entrada e validacao de dados."""
def ler_texto_obrigatorio(mensagem):
    while True:
        valor = input(mensagem).strip()

        if valor:
            return valor

        print("Este campo nao pode ficar vazio.")


def nome_usuario():
    return ler_texto_obrigatorio("Digite seu nome: ")


def obter_cpf():
    while True:
        cpf = input("Digite seu CPF (somente numeros): ").strip()
        digitos = "".join(caractere for caractere in cpf if caractere.isdigit())

        if len(digitos) == 11:
            return f"{digitos[:3]}.{digitos[3:6]}.{digitos[6:9]}-{digitos[9:]}"

        print("CPF invalido. Informe 11 numeros.")

def obter_endereco():
    return ler_texto_obrigatorio("Digite seu endereco: ")

def obter_email():
    while True:
        email = ler_texto_obrigatorio("Digite seu email: ").lower()

        if "@" in email and email.count("@") == 1 and email.split("@")[1].count(".") >= 1:
            return email

        print("Email invalido. Tente novamente.")


def obter_numero_conta():
    return ler_texto_obrigatorio("Digite o numero da conta: ")


def obter_valor_monetario(mensagem, permitir_zero=True):
    while True:
        entrada = input(mensagem).strip().replace("R$", "").replace(" ", "")
        entrada = entrada.replace(",", ".")

        try:
            valor = float(entrada)
        except ValueError:
            print("Digite um valor numerico valido.")
            continue

        if valor < 0 or (valor == 0 and not permitir_zero):
            print("Digite um valor maior que zero.")
            continue

        return valor
