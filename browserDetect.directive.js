'use strict';

/**
 * Browser Detect directive written by North McCormick
 * // Github link
 * Based off: http://stackoverflow.com/a/2401861
 */
 
angular.module('browserDetect', [])

.directive('browserDetect', function($log) {
	return {
		restrict : 'A',

		link : function(scope, elem) {

			var browser = (function(){
			    var ua= navigator.userAgent, tem,
			    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			    if(/trident/i.test(M[1])){
			        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
			        return 'IE '+(tem[1] || '');
			    }
			    if(M[1]=== 'Chrome'){
			        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
			        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
			    }
			    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
			    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
			    return {
			    	name: M[0],
			    	version: M[1]
			    };
			})();

			angular.element(elem).addClass('browser-' + browser.name);
			angular.element(elem).addClass('browser-' + browser.version);
		}
	};
});