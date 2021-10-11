//soal - 03
const arr = [1, 2, 3, 4, 5];
function searchInArray(array, nilai) {
    if(array.length === 0){
        return "angka tidak ditemukan"
    }else if(array[array.length -1] === nilai){
        return "angka ditemukan pada index: " + (array.length-1)
    }
    return searchInArray(array.slice(0, -1), nilai)
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));