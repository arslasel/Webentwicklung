function setInList(list, index, value) {
    var result = [...list]
    result[index] = value
    return result
}

function setInObject(obj, index, value) {
    var result = { ...obj }
    result[index] = value
    return result
}

function test() {
    let lista = [0, 1, [2, 3], 4, { a: 1 }]
    let listb = setInList(lista, 3, 99)

    console.log(lista)
    console.log(listb)
    console.log(lista[2])
    console.log(lista[2] === listb[2])
    console.log(lista[4] === listb[4])

    console.log('-------------------')

    let obja = { a: { a: 1 }, b: 5, c: [1, 2, 3] }
    let objb = setInObject(obja, 'b', 99)
    console.log(obja)
    console.log(objb)
    console.log(obja.a === objb.a)
    console.log(obja.c === objb.c)
}
