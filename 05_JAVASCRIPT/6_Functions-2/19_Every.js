let chek = [2 , 4 , 6 , 8].every((ele) => (ele%2 == 0))
console.log(chek); //gives true

// every method gives output as true and false
// badha j element true hova joi to j answer true ave ak pan jo false hse to answer false bani jse

let chek2 = [2 , 4 , 6 , 8 , 1].every((ele) => (ele%2 == 0))
console.log(chek2); //gives false because ahi last ma 1 avi gyu je odd che mate condion false bani gy

// AND jevu j (very similar)
// fakt ane fakt array mae j use thy