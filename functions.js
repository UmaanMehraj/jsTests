export class Calculator{
    add(a, b){
        return a + b
    }
    subtract(a,b){
        return a - b
    }
    divide(a,b){
        if(b!==0){
            return a/b
        }
    }
    multiply(a,b){
        return a * b
    }
}


export function capitalize(str){
    const char = str.slice(0,1)
    str = char.toUpperCase() + str.slice(1, str.length)

    return str
}

export function strRev(str){
    return str.split('').reverse().join('')

}