const solution = (clothes) => {
    const hash = clothes.reduce((acc, cur) => {
        if (acc[cur[1]])
            acc[cur[1]] += 1;
        else 
            acc[cur[1]] = 2;
        return acc;
    }, {});
    
    let answer = 1;
    for (let key in hash) {
        answer *= hash[key];
    }
    return answer - 1;
}