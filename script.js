let ra = document.getElementById("radius");
	let r=ra.value;
	let volume=(4/3)*3.142*r*r*r;
function volume_sphere() {
    //Write your code here
	
	let v=document.getElementById("volume");
	v.value=volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
