var b1 = document . body;
var table1 = document.createElement('table');
var julldle = [];
var candle  =[];
var turn = 'X';
var callback = function(event1){


    var mutjull = julldle.indexOf(event1 . target . parentNode);
    console.log('mutjull', mutjull);
    var mutcan = candle[mutjull].indexOf(event1 . target);
    console.log('mutcan', mutcan);

    if(candle[mutjull][mutcan].textContent !== ''){
        console.log('빈칸아닙니다.');
    }else{
        console.log('빈칸입니다.');
        candle[mutjull][mutcan].textContent = turn;

        var all1 = false;

        if(
            candle[mutjull][0].textContent === turn &&
            candle[mutjull][1].textContent === turn &&
            candle[mutjull][2].textContent === turn
        ){
            all1 = true;
        }

        if(
            candle[0][mutcan].textContent === turn &&
            candle[1][mutcan].textContent === turn &&
            candle[2][mutcan].textContent === turn
        ){
            all1 = true;
        }

        if(mutjull - mutcan === 0 || Math.abs(mutjull - mutcan) === 2){

            if(
                candle[0][0].textContent === turn &&
                candle[1][1].textContent === turn &&
                candle[2][2].textContent === turn
            ){
                all1 = true;
            }
        }

        if(all1){
            console.log(turn + '님이 승리!');
        }else{
            if(turn == 'X'){
                turn = 'O';
            }else {
                turn = 'X';
            }
        }
    }
};

for(i=1; i<=3; i++){

    var jull = document.createElement('tr');
    julldle.push(jull);
    candle.push([]);

    for(var j=1; j<=3; j+=1){
        var can = document.createElement('td');
        can.addEventListener('click', callback);

  candle[i - 1].push(can);
  jull.appendChild(can);
    }

    table1.appendChild(jull);
}

b1.appendChild(table1);

console.log(julldle, candle);
