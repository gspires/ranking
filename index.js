


function ranking(vit, der) {
    let dif = vit - der
    if (dif <= 10) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Ferro'
    } else if (dif > 10 && dif <= 20) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Bronze'
    } else if (dif > 20 && dif <= 50) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Prata'
    } else if (dif > 51 && dif <= 80) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Ouro'
    } else if (dif > 80 && dif <= 90) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Diamante'
    } else if (dif > 90 && dif <= 100) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Lendário'
    } else if (dif > 100) {
        result = 'O Herói tem saldo de ' + dif + ' está no nível de Imortal'
    }
    return result
}

console.log(ranking(8, 2))