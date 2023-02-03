# =============================================================================
# # Exercício 1 - Moeda falsa com peso diferente, achar com duas pesagens
# import math
# import random
# 
# moedas = [1,1,1,1,1,1,1,1,1,1,1]
# moedas.insert(random.randint(0, 11),2)
# 
# print(moedas)
# for i in range(1):
#     
#     moedas6_1 = moedas[0:6]
#     moedas6_2 = moedas[6:12]
#     
#     if (math.fsum(moedas6_1)) > (math.fsum(moedas6_2)):
#         print(moedas6_1)
#         moedas3_1 = moedas6_1[0:3]
#         moedas3_2 = moedas6_1[3:6]
#       
#         if (math.fsum(moedas3_1)) > (math.fsum(moedas3_2)):
#             print(moedas3_1)
#             moedas2_1 = moedas3_1[0:2]
#             moedaFora = moedas3_1[2:3]
#             print(moedas2_1)
#            
#             if (math.fsum(moedas2_1)) > (math.fsum(moedaFora)):
#                 
#                 moedas1_1 = moedas2_1[0:1]
#                 moedas1_1_2 = moedas2_1[1:2]
#                 if (math.fsum(moedas1_1)) > (math.fsum(moedas1_1_2)):
#                     print(moedas1_1)
#                 else:
#                     print(moedas1_1_2)
#             else:
#                 print(moedaFora)
#                 
#         else:
#             print(moedas3_2)
#             moedas2_1 = moedas3_2[0:2]
#             moedaFora = moedas3_2[2:3]
#             
#            
#             if (math.fsum(moedas2_1)) > (math.fsum(moedaFora)):
#                 
#                 moedas1_1 = moedas2_1[0:1]
#                 moedas1_1_2 = moedas2_1[1:2]
#                 if (math.fsum(moedas1_1)) > (math.fsum(moedas1_1_2)):
#                     print(moedas1_1)
#                 else:
#                     print(moedas1_1_2)
#             else:
#                 print(moedaFora)
#         
#     else:
#         print(moedas6_2)
#         moedas3_1 = moedas6_2[0:3]
#         moedas3_2 = moedas6_2[3:6]
#         
#         if (math.fsum(moedas3_1)) > (math.fsum(moedas3_2)):
#             print(moedas3_1)
#             moedas2_1 = moedas3_1[0:2]
#             moedaFora = moedas3_1[2:3]
#             print(moedas2_1)
#             print(moedaFora)
#             if (math.fsum(moedas2_1)) > (math.fsum(moedaFora)):
#                 moedas1_1 = moedas2_1[0:1]
#                 moedas1_1_2 = moedas2_1[1:2]
#                 if (math.fsum(moedas1_1)) > (math.fsum(moedas1_1_2)):
#                     print(moedas1_1)
#                 else:
#                     print(moedas1_1_2)
#             else:
#                 print(moedaFora)
#         else:
#             print(moedas3_2)
#             moedas2_1 = moedas3_2[0:2]
#             moedaFora = moedas3_2[2:3] 
#             print(moedas2_1)
#             
#             if (math.fsum(moedas2_1)) > (math.fsum(moedaFora)):
#                 moedas1_1 = moedas2_1[0:1]
#                 moedas1_1_2 = moedas2_1[1:2]
#                 if (math.fsum(moedas1_1)) > (math.fsum(moedas1_1_2)):
#                     print(moedas1_1)
#                 else:
#                     print(moedas1_1_2)
#             else:
#                 print(moedaFora)
# =============================================================================

# =============================================================================
# # Exercício 2 - Qual o número de algarismos com a soma das unidades igual a soma
# # desejada em um intervalo definido
# import math
# 
# soma = int(input("Insira o valor da soma dos algarismos: "))
# comeco = int(input("Insira o início do intervalo: "))
# final = int(input("Insira o fim do intervalo: "))
# resultado = 0
# 
# for i in range(comeco,final+1,1):
#     lista = [int(a) for a in str(i)]
#     s = math.fsum(lista)
#     if s == soma:
#         resultado += 1
#         
# print(resultado)
# =============================================================================
