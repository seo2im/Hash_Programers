const solution = (participant, competition) => {
    const hash = competition.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    
    return participant.find(name => {
        if (hash[name])
            hash[name] -= 1;
        else
            return true;
    })
}