function multi3(num, final, history) {
    if(num == final) {
        alert(history + " multi 3 wins")
        return true
    }
    else if(num > final)
        return false
    else
        return multi3(num*3, final, ++history)
}

function plus5(num, final, history) {
    if(num == final) {
        alert(history + " plus 5 wins")
        return true
    }
    else if(num > final)
        return false
    else
        return plus5(num+5, final, ++history)
}

function analyze(num) {
    if( multi3(1,num,0) || plus5(1,num,0))
        return true
    else {
        alert("Nobody wins!")
        return true
    }
}

analyze(Number(prompt("Number:", "")))