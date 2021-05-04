var i = 0; var path = new Array(); 

path[0] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/africa-139343__340.jpg?raw=true"; 
path[1] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/animal-197161__340.jpg?raw=true"; 
path[2] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/animals-1975258__340.jpg?raw=true"; 
path[3] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkey-1725230__340.jpg?raw=true";
path[4] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkey-2714578__340.jpg?raw=true";
path[5] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkey-4189421__340.jpg?raw=true";
path[6] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkey-534906__340.jpg?raw=true";
path[7] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkeys-5576167__340.jpg?raw=true";
path[8] = "https://github.com/OlofSvahn/Mypage/blob/main/SP/donkeys-5576167__340.jpg?raw=true";

function imageChange() 
{ 
document.slide.src = path[i]; 
if(i < path.length - 1) i++; 
else i = 0;
setTimeout("imageChange()",3000); 
} 
window.onload=imageChange;