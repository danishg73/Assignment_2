// Functions used in assignments

const addString = (a,b) => {
    return a+b;
  };

const splitString = (a) => {
    return a.split(';');
  };

const countOccurrences = (array, value) => {
    let z = 0;
    // console.log(arr.length);
    for (let i=0 ; i<array.length ; i++){
        if (array[i] == value){
            
            z++;
        }
    }
    return z;
};

//              ///////

// extra functions to handle html
const concatBtn = () => {
    let a = document.getElementById("input1").value;
    let b = document.getElementById("input2").value;
    document.getElementById('concatString').value = addString(a,b);
};

const splitBtn = () => {
    let a = document.getElementById("input3").value;
    document.getElementById('splitString').value = splitString(a);
};

const occurence = () => {
    let a = document.getElementById("input4").value;
    let b = document.getElementById("input5").value;
    a = a.replace("[", "");
    a = a.replace("]", "");
    a = a.trim();
    a = a.split(','); 
    document.getElementById('valueOccur').value = countOccurrences(a,b);
};