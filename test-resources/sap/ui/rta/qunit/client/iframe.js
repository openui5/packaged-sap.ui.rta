if (window.location.search.indexOf('loadframework') !== -1) {
	document.write("<script src='" + document.location.pathname.match(/(.*)\/test-resources\//)[1] + "/resources/sap-ui-core.js'><" + "/script>");
}