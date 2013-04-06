function redirect(url) {
    window.location = url;
}

function resizeWindow(doc) {
    if ( window.innerWidth < 1060) {
        var newSize = window.innerWidth - 260;
        var windowSize = window.innerWidth - 60;
		if ( windowSize >= 560 ){		
			doc.getElementById("all-content").style.width = new String(newSize) + "px";
			doc.getElementById("mainDiv").style.width = new String(windowSize) + "px";
		}
    } else {
        doc.getElementById("all-content").style.width = "800px";
        doc.getElementById("mainDiv").style.width = "1000px";
    }
}