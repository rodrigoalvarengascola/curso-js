let num = [5,8,2,9,3]
num.push (1)
num.sort()
console.log(num)
console.log (`O vetor tem ${num.length} posiçoes`) 
console.log(num[5])
let pos = num.indexOf(8)
if (pos == -1){
    console.log(`O valor nao foi encontrado!`)
}else{
    console.log(`O valor  esta na posição ${pos}`)
}
