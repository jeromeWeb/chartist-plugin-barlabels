# Bar labels for Chartist.js 
This is a simple plugin for Chartist.js that will add a label at the top of each bar on bar charts.
NB: This won't have a good looking on stacked bar charts

## Available options and their defaults values
```javascript
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
```

## Sample usage in Chartist.js

```javascript
var chart = new Chartist.Bar('.ct-chart', {
  labels: [1, 2, 3, 4, 5, 6, 7],
  series: [
    [2, 4, 2, 5, 4, 3, 6]
  ]
}, {
  plugins: [
    Chartist.plugins.ctBarLabels({
      labelClass: 'ct-label',
      labelOffset: {
        x: 0,
        y: -10
      },
      labelBgClass: 'ct-label-bg',
      barWidth: 20,
      textAnchor: 'middle'
    })
  ]
});
```
