//Гений математической мысли, задаем координаты начала (0, 0) если после всех перемещений они не совпадают,
//то мы пришли не в ту точку, значит возвращаем false, движения и начальная точка все расписано.
function isValidWalk(walk) {
    let coordination = {
        x: 0,
        y: 0,
    }

    if (walk.length != 10) {
        return false;
    }

    for (let i = 0; i < walk.length; i++) {
        switch(walk[i]) {
            case 'n':
                coordination.y++;
                break;
            case 's':
                coordination.y--;
                break;
            case 'w':
                coordination.x--;
                break;
            case 'e':
                coordination.x++
                break;
        }
    }

    if(coordination.x === 0 && coordination.y === 0) {
        return true;
    } else {
        return false;
    }
}