
var Demo = (function() {

	"use strict";

	function Demo() {
	}

	Demo.prototype = {

		// Function parsing xml strings returning documents
		parse: function(xmlStr) {
			var parser = {};
			if (typeof window.DOMParser !== "undefined") {
				parser = new window.DOMParser();
				return parser.parseFromString(xmlStr, "text/xml");
			} else if (typeof window.ActiveXObject !== "undefined" && window.ActiveXObject("Microsoft.XMLDOM")) {
				parser = new window.ActiveXObject("Microsoft.XMLDOM");
				parser.async = "false";
				parser.loadXML(xmlStr);
				return parser;
			} else {
				throw new Error("No XML parser found");
			}
		},

		// Function transforming xml documents using xsl documents
		transform: function(xmlDoc, xslDoc) {

			if (typeof XSLTProcessor !== "undefined" && typeof window.XMLSerializer !== "undefined") // FF, Safari, Chrome
			{
				var xsltProcessor = new XSLTProcessor();
				xsltProcessor.importStylesheet(xslDoc);
				var resultDocument = xsltProcessor.transformToFragment(xmlDoc, document);

				return new window.XMLSerializer().serializeToString(resultDocument);
			}
			else if (typeof xmlDoc.transformNode !== "undefined") { // IE6, IE7, IE8
				return xmlDoc.transformNode(xslDoc);
			} else {
				throw new Error("No XSLT processor found");
			}
		}
	};

	return Demo;
})();

var demo = new Demo();
var xmlDoc = demo.parse(xml);
var xslDoc = demo.parse(xsl);
var html = demo.transform(xmlDoc, xslDoc);
document.querySelector("#output").innerHTML = html;

