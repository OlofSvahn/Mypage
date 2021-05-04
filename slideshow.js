var i = 0; var path = new Array(); 

path[0] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/africa-139343__340.jpg?raw=true"; 
path[1] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/animal-197161__340.jpg?raw=true"; 
path[2] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/animals-1975258__340.jpg?raw=true"; 
path[3] = ""

function imageChange() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0; 
setTimeout("imageChange()",3000); 
} 
window.onload=imageChange;