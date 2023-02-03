# =============================================================================
# # Pandas parte 2
# =============================================================================

# =============================================================================
# # Exercício 1 - Calcular porcentagem de vivos por Pclass
# import pandas as pd
# titanic = pd.read_csv("titanic.csv", sep=',')
# 
# def porcentagem(numero,total):
#     porcenta = float(numero/total)
#     porcentag = ("%.2f" % (porcenta*100) + "%")
#     return porcentag
# 
# 
# for i in range(1, 4, 1):
#     vivos = titanic[titanic["Survived"] == 1]
#     classe = vivos.Survived[vivos["Pclass"] == i].count()
#     print(f"Sobreviveu da {i}° classe", porcentagem(classe, vivos.Survived.count()))
# # Sobreviveu da 1° classe 39.77%
# # Sobreviveu da 2° classe 25.44%
# # Sobreviveu da 3° classe 34.80%
# =============================================================================

# =============================================================================
# # Exercício 2 - Numero de mulheres e crianças que sobreviveram e morreram e
# # a porcentagem
# import pandas as pd
# titanic = pd.read_csv("titanic.csv", sep=',')
# 
# def faixa_etaria(linhas):
#     idade = linhas["Age"]
#     if idade < 12:
#         return "Criança"
#     elif idade >=12 and idade < 18:
#         return "Adolecente"
#     elif idade >=18 and idade < 65:
#         return "Adulto"
#     elif idade >= 65:
#         return "Idoso"
#     else:
#         return "nada"
# 
# def porcentagem(numero,total):
#     porcenta = float(numero/total)
#     porcentag = ("%.2f" % (porcenta*100) + "%")
#     return porcentag
# 
# titanic["faixa_etaria"] = titanic.apply(faixa_etaria, axis=1)
# 
# mortos = titanic[titanic["Survived"] == 0]
# vivos = titanic[titanic["Survived"] == 1]
# mulheres_vivas = vivos[vivos["Sex"] == "female"].Sex.count()
# crianças_vivas = vivos[vivos["faixa_etaria"] == "Criança"].faixa_etaria.count()
# 
# total_de_mec = titanic.Survived[(titanic["Sex"] == "female") | (titanic["faixa_etaria"] == "Criança")].count()
# mec_vivas = vivos.Survived[(vivos["Sex"] == "female") | (vivos["faixa_etaria"] == "Criança")].count()
# print(f"Sobreviveram {mec_vivas} mulheres e criancas")
# print(f"Morreram {total_de_mec - mec_vivas} mulheres e criancas")
# print(f"Sobreviveram {porcentagem(mec_vivas, vivos.Survived.count())} mulheres e criancas")
# 
# =============================================================================

# =============================================================================
# # Pandas parte 3
# =============================================================================

# =============================================================================
# # Exercício 1 - Lista com a media de idade no lugar do null
# import pandas as pd
# 
# titanic = pd.read_csv("titanic.csv", sep=',')
# idade_sem_null = titanic.Age.fillna(titanic.Age.mean()).round(1)
# titanic.Age = idade_sem_null
# =============================================================================

# =============================================================================
# # Exercício 2 - Agrupamento por cabine somando as idades
# import pandas as pd
# titanic = pd.read_csv("titanic.csv", sep=',')
# 
# def contar_pessoas(registros_agrupados):
#     return registros_agrupados.Age.sum()
# 
# soma_idade_apply_certo = titanic.groupby("Cabin").apply(contar_pessoas)
# soma_idade_apply_certo.describe()
# 
# soma_idade_apply_certo = titanic.groupby("Sex")["PassengerId"].count()
# print(soma_idade_apply_certo)
# #ou
# def count_sex(registros):
#     return registros["Sex"].count()
# 
# titanic.groupby("Sex").apply(count_sex)
# # Sex
# # female    314
# # male      577
# # Name: PassengerId, dtype: int64
# =============================================================================

# =============================================================================
# # Exercício 3 - Substituir nan de mulher pela média de idades das mulheres
# # e dos homens pela média dos homens
# import pandas as pd
# titanic = pd.read_csv("titanic.csv", sep=',')

# def media(idades):
#     return idades["Age"].mean()

# idade_geral = titanic.groupby("Sex").apply(media)

# def preenche_idade(linha):
#     idade=linha["Age"]
#     sexo=linha["Sex"]
#     if pd.isnull(idade):
#         if sexo == "female":
#             return idade_geral[0]
#         else:
#             return idade_geral[1]
#     else:
#         return idade
    
# idades_com_media = titanic.apply(preenche_idade,axis=1)
# titanic["Age"]=idades_com_media
# print("""
# Quantidade de nulos após o preenchimento: {}
# """.format(titanic.Age.isnull().sum()))
# =============================================================================

# =============================================================================
# # Para salvar
# titanic.to_csv("titanic_2_aula.csv", index=False)
# titanic.info()
# =============================================================================
