function changeFontSize(x){
    arr = document.getElementsByTagName('p');
	console.log(arr);
    for (index in arr){
		console.log(arr[index]);
        arr[index].style.fontSize=x+'px';
    }
}
function increaseFontSize(p){
	let x = window.getComputedStyle(p).getPropertyValue("font-size");
	let y = x.substring(0,x.length-2);
	let z = parseInt(y);
	if(z>=30)return false;
	p.style.fontSize= (z+1) + 'px';
	return true;
}
function decreaseFontSize(p){
	let x = window.getComputedStyle(p).getPropertyValue("font-size");
	let y = x.substring(0,x.length-2);
	let z = parseInt(y);
	if(z<=10)return false;
	p.style.fontSize= (z-1) + 'px';
	return true;
}
function changeColor(){
    arr = document.getElementsByTagName('p');
	console.log(arr);
    arr[0].style.color='green';
    arr[1].style.color='yellow';
    arr[2].style.color='red';
}
function changeBgColor(color){
    document.body.style.backgroundColor=color;
}
function copyContent(p1, p2){
    p1.innerText = p2.innerText;
}