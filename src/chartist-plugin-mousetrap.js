/**
 * Chartist.js plugin to enable mouse events.
 * Wasim Nahvi
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var defaultOptions = {

  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.mousetrap = function (options) {
    options = Chartist.extend({}, defaultOptions, options);

    return function mousetrap(chart) {
      var mousetrapSelector = options.pointClass;
      if (chart instanceof Chartist.Bar) {
        mousetrapSelector = 'ct-bar';
      } else if (chart instanceof Chartist.Pie) {
        // Added support for donut graph
        if (chart.options.donut) {
          mousetrapSelector = 'ct-slice-donut';
        } else {
          mousetrapSelector = 'ct-slice-pie';
        }
      }

      var $chart = chart.container;

      function on(event, selector, callback) {
        $chart.addEventListener(event, function (e) {
          if (!selector || hasClass(e.target, selector))
            callback(e);
        });
      }

      on('mouseover', mousetrapSelector, function (event) {
        var $point = event.target;

        var meta = $point.getAttribute('ct:meta');
        var value = $point.getAttribute('ct:value');

        if (options.mouseoverFnc) {
          options.mouseoverFnc(meta, value);
        }
      });

      on('mouseout', mousetrapSelector, function () {
        var $point = event.target;

        var meta = $point.getAttribute('ct:meta');
        var value = $point.getAttribute('ct:value');

        if (options.mouseoutFnc) {
          options.mouseoutFnc(meta, value);
        }
      });

      on('mousemove', null, function (event) {
        var $point = event.target;

        var meta = $point.getAttribute('ct:meta');
        var value = $point.getAttribute('ct:value');

        if (options.mousemoveFnc) {
          options.mousemoveFnc(meta, value);
        }
      });

			on('click', mousetrapSelector, function (event) {
        var $point = event.target;

        var meta = $point.getAttribute('ct:meta');
        var value = $point.getAttribute('ct:value');

        if (options.clickFnc) {
          options.clickFnc(meta, value);
        }
      });

      function hasClass(element, className) {
          return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
      }
     }
  };


} (window, document, Chartist));
