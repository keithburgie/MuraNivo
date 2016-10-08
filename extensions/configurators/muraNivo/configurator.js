/**
* 
* This file is part of MuraNivo TM
*
* Copyright 2015 Stephen J. Withington, Jr.
* Licensed under the Apache License, Version v2.0
* http://www.apache.org/licenses/LICENSE-2.0
*
*/
function init(data) {

	initConfigurator(data,{
		url: '../plugins/MuraNivo/extensions/configurators/muraNivo/configurator.cfm'
		, pars: ''
		, title: 'MuraNivo Slider'
		, init: function(){}
		, destroy: function(){}
		, validate: function(){
			return true;
		}
	});

	return true;

};