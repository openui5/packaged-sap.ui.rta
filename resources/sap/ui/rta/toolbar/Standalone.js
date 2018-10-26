/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2018 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	'./Adaptation'
],
function(
	Adaptation
) {
	"use strict";

	/**
	 * Constructor for a new sap.ui.rta.toolbar.Standalone control
	 *
	 * @class
	 * Contains implementation of Standalone toolbar
	 * @extends sap.ui.rta.toolbar.Adaptation
	 *
	 * @author SAP SE
	 * @version 1.58.5
	 *
	 * @constructor
	 * @private
	 * @since 1.48
	 * @alias sap.ui.rta.toolbar.Standalone
	 * @experimental Since 1.48. This class is experimental. API might be changed in future.
	 */
	var Standalone = Adaptation.extend("sap.ui.rta.toolbar.Standalone", {
		renderer: 'sap.ui.rta.toolbar.AdaptationRenderer',
		type: 'standalone'
	});

	return Standalone;

}, true);
