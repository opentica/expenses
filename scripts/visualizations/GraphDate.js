var d3 = require('d3/d3');

var GraphBackground = {};

var height = 2;
var padding = {top: 10, left: 20};
var duration = 500;

GraphBackground.enter = (selection) => {
  selection.select('rect')
    .attr('width', (d) => d.width)
    .attr('height', height)
    .attr('y', -height / 2)
    .attr('opacity', .1)
    .attr('fill', '#0B486B');

  selection.select('text')
    .attr('x', padding.left)
    .attr('dy', '.35em')
    .attr('text-anchor', 'start')
    .attr('fill', '#0B486B')
    .style('font-weight', 600);

  selection.attr('transform', (d) => {
    return 'translate(0,' + d.y + ')';
  });
}

GraphBackground.update = (selection) => {
  selection.select('rect')
    .transition().duration(duration)
    .attr('width', (d) => d.width);

  selection.transition().duration(duration)
    .attr('transform', (d) => {
      return 'translate(0,' + d.y + ')';
    });
}

GraphBackground.exit = () => {

}

module.exports = GraphBackground;