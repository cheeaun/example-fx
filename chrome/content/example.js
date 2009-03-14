var example = function(){
	var prefManager = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
	return {
		init: function(){
			gBrowser.addEventListener('load', function(){
				var autoRun = prefManager.getBoolPref('extensions.example.autorun');
				if (autoRun) example.run();
			}, false);
		},
			
		run: function(){
			alert('run');
			/*
			 * 'content' = content window
			 * Eg: content.document.getElementsByTagName("head")[0]
			 *
			 * normal JavaScript code to be written here.
			 *
			 */
		}
	};
}();

window.addEventListener('load', example.init, false);
