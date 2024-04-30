// shift
const array = ["pc","redes","BD","audirotia"];
array.shift();
console.log(array);

//unshift 
const array1 = ["pc","redes","BD","audirotia"];
console.log(array1.unshift("Linux"));
//array1.unshift("FYI");
console.log(array1);

//reverse
const array2 = ["pc","redes","BD","audirotia"];
//console.log(array2.reverse());
//array2.reverse();
//console.log(array2);
const Reverse = array2.reverse();
console.log(array2);
console.log("reverse",Reverse);


//lastIndexOf
const array4 = ["pc","redes","BD","audirotia"];
console.log(array4.lastIndexOf("BD"));

//flat
const array5 = ["pc","redes","BD","audirotia",["c#","java","js","visual"]];
console.log(array5.flat());

//isArray
console.log(Array.isArray(["pc","redes","BD","audirotia","c#","java","js","visual"]));
console.log(Array.isArray({nombre : " Julian"}));

//from
console.log(Array.from("Julian"));

//Metodos nuevos 2023

//find
const array6 = [5, 12, 8, 130,78,44,64,86,92,100,2];
const found = array6.find(a=> {
    console.log("a",a)
    return a === 78;
});
console.log(found);

//findLast
const array7 = [5, 12, 8, 130,78,44,64,86,92,100,2];
const found1 = array7.findLast(a=> {
    console.log("a",a)
    return a === 78;
});
console.log(found1);

//findIndex
const array8 = [5, 12, 8, 130,78,44,64,86,92,100,2];
const found2 = array8.findIndex(a=> a ===78);
console.log(found2);

//toReversed
const array9 = ["pc","redes","BD","audirotia"];
const toReverse = array9.toReversed();
console.log(array9);
console.log("toReversed",toReverse);

//sort
const array10 = [5, 12, 8, 130,78,44,64,86,92,100,2];
const orden = array10.sort((a,b) =>a-b);
console.log(array10);
console.log(orden);

//toSorted
const array11 = [5, 12, 8, 130,78,44,64,86,92,100,2];
const ordens = array11.toSorted((a,b) =>a-b);
console.log(array11);
console.log(ordens);

//splice
const array3 = ["pc","redes","BD","audirotia"];
//ADD with 0
const splice = array3.splice(1,0,"Virus");
console.log("original",array3);
console.log("Splice",splice);
//Remove with 1
const splice1 = array3.splice(2,1);
console.log(array3);
console.log(splice1);


//toSpliced
const array12 = ["pc","redes","BD","audirotia"];
//ADD with 0
const splice2 = array12.toSpliced(1,0,"Virus");
console.log("original",array12);
console.log("Splice add",splice2);
//Remove with 1
const splice3 = array12.toSpliced(2,1);
console.log("original",array12);
console.log("Splice remove",splice3);
