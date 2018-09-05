let x,y;
let operation;
let result;

// const screen = document.getElementById('screen');
const screen = document.querySelector("#screen > div");
const buttons = document.getElementsByTagName('button');

numbers_map = new Map();
numbers_map.set('zero','0');
numbers_map.set('one','1');
numbers_map.set('two','2');
numbers_map.set('three','3');
numbers_map.set('four','4');
numbers_map.set('five','5');
numbers_map.set('six','6');
numbers_map.set('seven','7');
numbers_map.set('eight','8');
numbers_map.set('nine','9');
numbers_map.set('decimal-point','.');

binary_operators_map = new Map();
binary_operators_map.set('modulo','%');
binary_operators_map.set('divide','&divide;');
binary_operators_map.set('times','&times;');
binary_operators_map.set('minus','&minus;');
binary_operators_map.set('plus','&plus;');

unary_operators_map = new Map();
unary_operators_map.set('square','&sup2;');
unary_operators_map.set('factorial','&excl;');
unary_operators_map.set('square-root','&radic;');

function reset(){
    x ='';
    y='';
    operation ='';
    result = '0.0';
    screen.innerHTML = result;
}

function memory(){
    x=result;
    y='';
    operation='';
}

window.onload = reset;

function getFactorial(x){
    if(x==0||x==1){
        return 1;
    }
    result =1;
    for (i=1;i<=x;i++){
        result=result*i;
    }
    return result;
}

function handleEventButtonClicked(e){
    key = this.id;
    if(numbers_map.has(key)){
        if(operation==''){
            x +=numbers_map.get(key);
            screen.innerHTML=x;
        }else if(binary_operators_map.has(operation)){
            y +=numbers_map.get(key);
            screen.innerHTML= x + binary_operators_map.get(operation) + y;
        }
    }else if(binary_operators_map.has(key)){
        if(x!=''&&y==''){
            operation = key;
            screen.innerHTML = x + binary_operators_map.get(operation);
        }
    }else if(unary_operators_map.has(key)){
        if(x!=''){
            operation = key;
            if(operation=='square'||operation=='factorial'){
                screen.innerHTML = x + unary_operators_map.get(operation);
            }else if(operation=='square-root'){
                screen.innerHTML = unary_operators_map.get(operation) + x;
            }
        }
    }else if(key=='equals'){
        if(x!='' && y!='' && binary_operators_map.has(operation)){
            x = Number(x);
            y=Number(y);
            switch (operation) {
                case 'modulo':
                    result = x%y;
                    break;
                case 'divide':
                    result = x/y;
                    break;
                case 'times':
                    result = x*y;
                    break;
                case 'minus':
                    result = x-y;
                    break;
                case 'plus':
                    result = x+y;
                    break;
                default:
                    break;
            }
        } else if(x!=''&&unary_operators_map.get(operation)){
            x = Number(x);
            switch (operation) {
                case 'square':
                    result = Math.pow(x, 2);
                    break;
                case 'factorial':
                    result = getFactorial(x);
                    break;         
                case 'square-root':
                    result = Math.sqrt(x);
                    break;  
                default:
                    break;
            }
        } else{
            return;
        }
        screen.innerHTML = result;
        memory();
    }else if(key=='reset'){
        reset();
    }
}
for (i=0;i<buttons.length;i++){
    button = buttons[i];
    button.addEventListener("click", handleEventButtonClicked);
}

