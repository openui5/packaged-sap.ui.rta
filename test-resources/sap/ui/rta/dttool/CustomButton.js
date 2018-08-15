/*
 * ! ${copyright}
 */
// Provides control sap.ui.rta.dttool.CustomButton.
/* globals sap */
sap.ui.define([
	'jquery.sap.global', 'sap/m/Button', 'sap/m/ButtonRenderer'
], function (jQuery, Button, ButtonRenderer) {
	"use strict";

	/**
	 * Constructor for a new sap.ui.rta.dttool.CustomButton control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 * @class A simple CustomButton.
	 * @extends sap.m.InputListItem
	 * @author SAP SE
	 * @version ${version}
	 * @constructor
	 * @private
	 * @alias sap.ui.rta.dttool.CustomButton
	 */
	var CustomButton = Button.extend('sap.ui.rta.dttool.CustomButton', {

		metadata: {
			properties: {
				newProperty : {
					type : "any"
				}
			}
		},

		renderer : function (oRm, oLi) {
			ButtonRenderer.render.apply(this, arguments);
		}
	});

	return CustomButton;

}, /* bExport= */ true);