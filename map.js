const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
 newArr = arr.map(fruits =>{
    if(fruits === ' ')
    {
       return fruits = 'empty string'
    }
    else{
        return fruits
    }
})
console.log(newArr)

