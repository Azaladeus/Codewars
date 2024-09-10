function pigIt(str){
    if(str.length === 0) {
        return '';
    } else {
        return str.split(' ').map(el => {
                if(el.length === 0 ) {
                    return ''
                } else if (el.match(/[,.!?]/)) {
                    return el;
                } else {
                    return el.split('').slice(1).join('') + el.split('').shift() + 'ay';
                }
            }).join(' ')
    }
}