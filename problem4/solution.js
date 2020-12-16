const solution = (genres, plays) => {
    const hash = genres.reduce((acc, cur, i) => {
        if (acc[cur]){
            acc[cur].total += plays[i];
            acc[cur].music.push({ id : i, play : plays[i] });
            acc[cur].music.sort((a, b) => b.play - a.play);
        }
        else {
            acc[cur] = { total : plays[i], music : [] };
            acc[cur].music.push({ id : i, play : plays[i] });
        }
        return acc;
    }, {});

    return Object.values(hash).sort((a, b) => b.total - a.total).reduce((acc, cur) => {
        if (cur.music.length < 2) {
            acc.push(cur.music[0].id);
        }
        else {
            for (let i = 0; i < 2; i++) {
                acc.push(cur.music[i].id);
            }    
        }

        return acc;
    }, []);
}

solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])