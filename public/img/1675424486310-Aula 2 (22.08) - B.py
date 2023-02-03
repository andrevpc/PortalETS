# =============================================================================
# # Exercício 4 - Criar lista com input, mostrar tamanho dela e ordena-la
# lista = []
# for i in range(10):
#     s = int(input("Escolha um valor da lista: "))
#     lista.append(s)
# print(len(lista))
# lista.sort()
# print(lista)
# # Escolha um valor da lista:
# # 10
# # [1, 2, 3, 4, 6, 8, 9, 10, 15, 718]
# =============================================================================

# =============================================================================
# # Para colocar no texto do input o numero:
# lista = []
# for i in range(10):
#     s = int(input(("Escolha {} valor da lista: ").format(i+1)))
#     lista.append(s)
# print(len(lista))
# lista.sort()
# print(lista)
# =============================================================================

# =============================================================================
# # Exercício 5 - Lista dos mais ricos com tupla
# tupla = ("Jeff Bezos", "Bill Gates", "Warren Buffet",
# 	"Bernard Arnault", "Amâncio Ortega", "Larry Ellison",
# 	 "Mark Zuckerberg", "Miche. Bloomberg",
#          "Larry Page")
# print("Os homems mais ricos são: ",tupla[:3])
# print("O homem mais rico é: ",tupla[0])
# # Os homems mais ricos são:  ('Jeff Bezos', 'Bill Gates', 'Warren Buffet')
# # O homem mais rico é:  Jeff Bezos
# =============================================================================

# =============================================================================
# # Exercício 6 - Cardápio, pergunte a bebida e comida, dar valor total
# car = {"Hamburguer":10, "Hotdog":6.5, "Salada":4,
#        "Suco":4, "Refrigerante":4.5, "Agua":2}
# com = input("Digite a comida que deseja: ")
# beb = input("Digite a bebida que deseja: ")
# print(car[com] + car[beb])
# # Digite a comida que deseja: Hamburguer
# 
# # Digite a bebida que deseja: Suco
# # 14
# =============================================================================

# =============================================================================
# # If, Elif... Else:
# # Exercício 1 - Adivinhe o número
# NumS = 12
# NumU = input("Digite seu palpite: ")
# if NumU.isdigit():
#     if int(NumU) == NumS:
#         print("Você Acertou!")
#     else:
#         print("Você Errou!")
# else:
#     print("Não é um número")
# # Digite seu palpite: 12
# # Você Acertou!
# =============================================================================

# =============================================================================
# # Exercício 2 - Voto de acordo com o ano de nascimento
# ano = int(input("Insira seu ano de nascimento: "))
# ida = 2022 - ano
# print("Sua idade é: ", ida)
# if ida <= 16:
#     print("Não é permitido votar")
# elif ida <= 18:
#     print("Seu voto é facultativo")
# elif ida <= 70:
#     print("Seu voto é obrigatório")
# else:
#     print("Seu voto é facultativo")
# # Insira seu ano de nascimento: 2004
# # Sua idade é:  18
# # Seu voto é facultativo
# =============================================================================

# =============================================================================
# # Exercício 3 - Soma dos números naturais
# ate = int(input("Insira um número: "))
# n = 0
# total = 0
# while n <= ate:
#     total = total + n
#     n= n + 1
# print("A soma é: ",total)
# # Insira um número: 5
# # A soma é:  15
# =============================================================================

# =============================================================================
# # Exercício 4 - Calculadora
# while 1:
#     N1 = int(input("Selecione o primeiro número: "))
#     N2 = int(input("Selecione o segundo número: "))
#     op = int(input("""
#                    1 - Soma
#                    2- Subtração
#                    3- Multiplicação
#                    4- Divisão
#                    0- Sair
#                    Escolha a operação: """))
#                    
#     if op == 0:
#         break
#     elif op == 1:
#         print(N1 +N2)
#     elif op == 2:
#         print(N1 - N2)
#     elif op == 3:
#         print(N1 * N2)
#     elif op == 4:
#         print(N1 / N2)
#     else:
#         print("Insira uma operação válida")
# =============================================================================
