// Code your solutions in this file

const writeCardsNames = ['Lisa', 'Kaitlin', 'Jan']
const writeCards = function(arr, adj){
    let message = [];
    for (let i=0; i<arr.length; i++){
    message.push(`Thank you, ${arr[i]}, for the wonderful ${adj} gift!`);
    }
    return message;
}

const countDown = function(num){
    for(let i=num; i>=0; i--){
    console.log(i);
    }
}

