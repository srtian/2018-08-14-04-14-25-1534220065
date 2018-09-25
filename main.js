module.exports = function main(input) {
    const array = input.toString().split('').map(Number)
    const len = array.length
    const led = [
    ["._. ","|.| ","|_| "],
     ["... ","..| ","..| "],
     ["._. ","._| ","|_. "], 
     ["._. ","._| ","._| "],
     ["... ","|_| ","..| "],
     ["._. ","|_. ","._| "],
     ["._. ","|_. ","|_| "],
     ["._. ","..| ","..| "],
     ["._. ","|_| ","|_| "],
     ["._. ","|_| ","..| "],
    ]
    let str = ""
    let newArray = []
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < len; i++) {
            str = str + led[array[i]][j]
        }
        newArray.push(str, "\n")
        str = ""
    }
    const result = newArray.reduce((prev, curr, idx, arr) => {
        return prev + curr
    })
    console.log(result)
    return result
};