export function capitalize(str){
    const char = str.slice(0,1)
    str = char.toUpperCase() + str.slice(1, str.length)

    return str
}

