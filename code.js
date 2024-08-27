

function binarySearch(list, element) {
    for(let i = 0; i < list.length; i++){
        if(list[i] == element) return i;
    }
    return -1;
}

