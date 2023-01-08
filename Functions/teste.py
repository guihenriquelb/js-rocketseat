#Questão4

print("Digite o primeiro número")
numero1=int(input())
print("Digite o segundo número")
numero2=int(input())
print("Digite o terceiro número")
numero3=int(input())

total = numero1 + numero2 + numero3

if total == 10:
    print("PARABÉNS, VOCÊ ESTÁ APROVADO. BOM FINAL DE ANO")

if total < 5:
    print("NÃO FOI DESTA VEZ, ESTUDE MAIS")

if total >= 5 and total < 10:
    print("QUASE LÁ, MAS AINDA TEM QUE ESTUDAR")