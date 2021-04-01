/*
     2 - 0 
    / \
    1-3

*/

//Edge List
const graph = [
    [0, 2],
    [2, 3],
    [2, 1],
    [1, 3]
]

//Adjencent list

const graph = [
    [2], [2, 3], [0, 3, 1], [1, 2]
];


const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 3, 1],
    3: [1, 3],
}

//Adjencent Matrix

const graph = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}