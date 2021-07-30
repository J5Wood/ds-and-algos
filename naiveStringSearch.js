function naiveStringSearch(str, pat) {
    let matches = 0;

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < pat.length; j++){
            if (str[i + j] !== pat[j]) break;
            if (j === pat.length - 1) matches ++;
        }
    }
    return matches;
}

console.log(naiveStringSearch("Hey it's a random string of ran characranters", "ran"))
