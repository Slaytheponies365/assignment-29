var arr = [42,54,7890,89,65,79,75,574,356,45564]

function setup() {
  createCanvas(800,800);

  console.log("the array:"+arr)
  
for (var i = 0; i < arr.length; i = i+1){
  if(arr[i]%2 == 0) 
  console.log("even: "+arr [i])
}
}

function draw() {
  background("black");
}