# =============================================================================
# # Exercício 1 - Mudar de celsius para fahrenheint
# temc = int(input("Digite a temperatura: "))
# temf = (temc * 9/5) + 32
# print("A temperatura em Fahrenheint é: ",temf)
# # Digite a temperatura: 10
# # A temperatura em Fahrenheint é:  50.0
# =============================================================================

# =============================================================================
# # Para pular uma linha
# print("Oi\nOlá")
# # Oi
# # Olá
# =============================================================================

# =============================================================================
# # Para separar por elemento
# s = "n o m-e"
# lista = s.split(" ")
# print(lista)
# lista1 = s.split("-")
# print(lista1)
# # ['n', 'o', 'm-e']
# # ['n o m', 'e']
# =============================================================================


# =============================================================================
# # Para juntar elementos
# lista = ','.join("abc")
# print(lista)
# lista1 = '-'. join("abc")
# print(lista1)
# # a,b,c
# # a-b-c
# =============================================================================

# =============================================================================
# # Para mostrar só parte de alguma palavra/frase
# s = "python"
# print(s[1:4])
# print(s[2:])
# print(s[:])
# print(s[:3])
# # yth
# # thon
# # python
# # pyt
# =============================================================================

# =============================================================================
# # Para mudar a caixa da frase
# s = 'Python'
# print(s)
# print(s.lower())
# print(s.upper())
# # Python
# # python
# # PYTHON
# =============================================================================

# =============================================================================
# # Exercício 2 - Mostrar as 3 primeiras letras do nome em maiúscula
# nome = input("Insira o seu nome: ")
# print((nome[:3]).upper())
# Insira o seu nome: André
# # AND
# =============================================================================

# =============================================================================
# # Teste - Mostrar E2 com idade
# nome = input("Insira o seu nome: ")
# idade = input("Insira a sua idade: ")
# n3 = nome[:3]
# print(n3.upper(),idade)
# # Insira o seu nome: André
# 
# # Insira a sua idade: 17
# # AND 17
# =============================================================================

# =============================================================================
# # Exercício 3 - Nome completa contar caracteres (sem contar espaços)
# nome = input("Inserir nome completo: ")
# print(nome.title())
# print("Seu nome tem: ", len(nome.replace(" ","")), "caracteres")
# # Inserir nome completo: andre victor
# # Andre Victor
# # Seu nome tem:  11 caracteres
# =============================================================================
