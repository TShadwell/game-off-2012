(function(){
	var	canvas = c||document.GetElementById("c"),
		ctx = canvas.getContext("2d"),
		d=document;
	
	//If the screen resizes, the canvas needs to also.

	window.addEventListener(
		'resize',
		(function(){
			ctx.clearRect(
				0,
				0,
				(canvas.width = d.documentElement.clientWidth),
				(canvas.height = d.documentElement.clientHeight)
			);
			return arguments.callee
		})(),
		false
	);
})();
