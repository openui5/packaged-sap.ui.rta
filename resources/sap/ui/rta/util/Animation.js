/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'jquery.sap.global'
],
function(jQuery) {
	"use strict";

	var module = {};

	/**
	 * CSS Transition helper
	 * @param {jQuery} $element - jQuery element(s)
	 * @param {Function} fnCallback - The function should start animation process (e.g. by adding class to the element)
	 * @return {Promise}
	 */
	module.waitTransition = function ($element, fnCallback) {
		if (!($element instanceof jQuery)) {
			throw new Error('$element should be wrapped into jQuery object');
		}
		if (!jQuery.isFunction(fnCallback)) {
			throw new Error('fnCallback should be a function');
		}

		return new Promise(function (fnResolve) {
			$element.one('transitionend', fnResolve);

			// perform animation in the next animation frame, normally 16-17ms later.
			var iTimestampInitial;
			var fnAnimCallback = function (iTimestamp) {
				if (!iTimestampInitial) {
					iTimestampInitial = iTimestamp;
				}
				if (iTimestamp !== iTimestampInitial) {
					fnCallback();
				} else {
					window.requestAnimationFrame(fnAnimCallback);
				}
			};
			window.requestAnimationFrame(fnAnimCallback);
		});
	};

	return module;
}, true);
