function clearScreen() {
    $('.screen').val('')
}

function deleteCharacter() {
    let oldVal = $('.screen').val()
    $('.screen').val(oldVal.slice(0, -1))
}

const symbols = ['+', '-', '*', '/']

function addCharacter(character) {
    let oldVal = $('.screen').val()
    if ((symbols.find(el => el === character) && oldVal.length === 0) 
    || (symbols.find(el => el === character) && (symbols.find(el => el === oldVal[oldVal.length - 1])))) return
    $('.screen').val(oldVal + character)
}

function calculate(){
    let oldVal = $('.screen').val()
    try {
        let answer = eval(oldVal)
        $('.screen').val(answer)
    } catch(e) {
        $('.screen').val("Error")
    }
}