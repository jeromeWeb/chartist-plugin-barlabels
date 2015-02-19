/**
 * Chartist.js plugin to display a data label on top of the bars in a bar chart.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  var defaultOptions = {
    labelClass: 'ct-label',
    labelOffset: {
      x: 0,
      y: -10
    },
    labelBgClass: 'ct-label-bg',
    barWidth: 20,
    textAnchor: 'middle'
  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.ctBarLabels = function(options) {

    options = Chartist.extend({}, defaultOptions, options);

    return function ctBarLabels(chart) {
      if(chart instanceof Chartist.Bar) {
        chart.on('draw', function(data) {
          if(data.type === 'bar') {
        	  
        	data.group.elem('line', {
        		x1: data.x2,
        		x2: data.x2,
        		y1: data.y2,
        		y2: data.y2-options.barWidth,
        		style: 'stroke-width:' + options.barWidth
        	}, options.labelBgClass);
        	
            data.group.elem('text', {
              x: data.x1 + options.labelOffset.x,
              y: data.y2 + options.labelOffset.y+options.barWidth/2,
              style: 'text-anchor: ' + options.textAnchor
            }, options.labelClass).text(data.value);
          }
        });
      }
    };
  };

}(window, document, Chartist));	    		
