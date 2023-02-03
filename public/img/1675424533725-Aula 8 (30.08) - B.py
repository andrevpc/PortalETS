# =============================================================================
# # Exercício 1 - Criar array de 1 até 9
# import numpy as np
# 
# matriz = np.array([0,1,2,3,4,5,6,7,8,9])
# print(matriz)
# 
# array=np.arange(0,10,1)
# print(array)
# 
# array=np.arange(10).reshape((2,5))
# print(array)
# # [0 1 2 3 4 5 6 7 8 9]
# # [0 1 2 3 4 5 6 7 8 9]
# # [[0 1 2 3 4]
# #  [5 6 7 8 9]]
# =============================================================================

# =============================================================================
# # Exercício 2 - Criar array de 0 a 100, pulando de 10 em 10
# import numpy as np
# 
# matriz = np.arange(0,100,10)
# print(matriz)
# # [ 0 10 20 30 40 50 60 70 80 90]
# =============================================================================

# =============================================================================
# # Exercício 3 - Criar uma 10x10 com apenas "True"
# import numpy as np
# 
# matriz = np.full((10,10),"True")
# print(matriz)
#  # [['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']
#  # ['True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True' 'True']]
# =============================================================================

# =============================================================================
# # Exercício 4 - Substituir números impares de uma 3x3 por 0
# import numpy as np
# 
# matriz = np.random.randint(0,100,9).reshape((3,3))
# print(matriz)
# matriz[matriz%2==1]=0
# print(matriz)
# # [[73 84 11]
# #  [86 73 83]
# #  [27 33 64]]
# # [[ 0 84  0]
# #  [86  0  0]
# #  [ 0  0 64]]
# =============================================================================


# Os arrays nos dão muita liberdade para: multiplicar, dividir, multiplicar
# matricialmente (dot), comparar, interceção, diferença...
# Quando igualamos arrays, quando fazemos operaçôes em uma, alteramos a outra
# para isso não acontecer use .copy()

# =============================================================================
# # Testando o dot e o *
# import numpy as np
# 
# x=np.array([[1,2],[3,4]])
# x2=np.array([[1,2],[3,4]])
# y=np.array([5,6])
# print(x)
# print(y)
# print(x * 2)
# print(x * y)
# print(y.dot(x))
# print(np.dot(y,x))
# print(np.dot(x,x2))
# # [[1 2]
# #  [3 4]]
# # [5 6]
# # [[2 4]
# #  [6 8]]
# # [[ 5 12]
# #  [15 24]]
# # [23 34]
# # [23 34]
# # [[ 7 10]
# #  [15 22]]
# =============================================================================

# np.where funciona como um if dentro da array