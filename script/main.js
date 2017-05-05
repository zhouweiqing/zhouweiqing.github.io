
setInterval(function() {
	var disp = document.getElementById('timeStatus');
	
	var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    
    disp.textContent = h + ":" + m + ":" + s + "   \n";
}, 10);
