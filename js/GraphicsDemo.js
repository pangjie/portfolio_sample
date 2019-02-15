window.onload = function init() {
	
	var c_board = document.getElementById("board");
	var color = "#000000";
	var cool_true = 0;
	var fun_img;
	var order_number;
	c_board.width = document.body.clientWidth;
	c_board.height = document.body.clientHeight;
	ctx = c_board.getContext("2d");
	ctx.fillStyle="#ffffff";
	ctx.fillRect(0,0,c_board.width,c_board.height);

	document.getElementById("reset").addEventListener("click",reset,false);
	document.getElementById("eraser").addEventListener("click",eraser,false);
	document.getElementById("black").addEventListener("click",black,false);
	document.getElementById("blue").addEventListener("click",blue,false);
	document.getElementById("red").addEventListener("click",red,false);
	document.getElementById("cool").addEventListener("click",cool,false);

	document.getElementById("reset").addEventListener("touchstart",reset,false);
	document.getElementById("eraser").addEventListener("touchstart",eraser,false);
	document.getElementById("black").addEventListener("touchstart",black,false);
	document.getElementById("blue").addEventListener("touchstart",blue,false);
	document.getElementById("red").addEventListener("touchstart",red,false);
	document.getElementById("cool").addEventListener("touchstart",cool,false);

	c_board.addEventListener("touchstart",function(event){	
		ctx.beginPath();
		event.preventDefault();
		ctx.moveTo(event.pageX,event.pageY);
		c_board.addEventListener("touchmove",start,false);
	});
	c_board.addEventListener("mousedown",function(event){			
		ctx.beginPath();
		event.preventDefault();
		ctx.moveTo(event.pageX,event.pageY);
		c_board.addEventListener("mousemove",start,false);		
	});

	c_board.addEventListener("touchend",end,false);
	c_board.addEventListener("mouseup",end,false);

	c_board.addEventListener("mousemove",function(event){
		document.getElementById("status").innerHTML="X:"+event.pageX+" Y:"+event.pageY+cool_true;
	});
	c_board.addEventListener("touchmove",function(event){
		document.getElementById("status").innerHTML="X:"+event.pageX+" Y:"+event.pageY;
	});

	c_board.addEventListener("touchstart",start,false);
	c_board.addEventListener("mousedown",start,false);

	c_board.addEventListener("mousemove",fun1,false);

	function start(event){
		if (cool_true==0) {
			ctx.lineWidth = 5;
			ctx.strokeStyle = color;
			ctx.lineCap = "round";	
			ctx.lineTo(event.pageX,event.pageY);
			ctx.stroke()
		};
		if (cool_true==1) {
			ctx.drawImage(fun_img,event.pageX,event.pageY);
		};
	}
		
	function end(){
		c_board.removeEventListener("touchmove",start,false);
		c_board.removeEventListener("mousemove",start,false);}

	function reset(){
		ctx.fillStyle="#ffffff";
		ctx.fillRect(0,0,c_board.width,c_board.height);
	}

	function eraser() {color = "#ffffff";}
	function black() {color = "#000000";}
	function blue() {color = "#6699FF";}
	function red() {color = "#CF0000";}
	
	function cool() {
		if (cool_true==0) 
			cool_true=1;
		else 
			cool_true = 0;
	}

	function fun1() {
		order_number = Math.floor(Math.random()*7+1);
		switch(order_number) {
			case 1:
				fun_img = document.getElementById("1");
				break;
			case 2:
				fun_img = document.getElementById("2");
				break;
			case 3:
				fun_img = document.getElementById("3");
				break;
			case 4:
				fun_img = document.getElementById("4");
				break;
			case 5:
				fun_img = document.getElementById("5");
				break;
			case 6:
				fun_img = document.getElementById("6");
				break;
			case 7:
				fun_img = document.getElementById("7");
				break;
		}
	}
}












