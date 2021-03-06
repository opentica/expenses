var d3 = require('d3/d3');
var React = require('react/addons');
var GraphDate = require('../visualizations/GraphDate');
var ViewActionCreators = require('../actions/ViewActionCreators');

var GraphDateComponent = React.createClass({
  componentDidMount() {
    // wrap element in d3
    this.d3Node = d3.select(this.getDOMNode());
    this.d3Node.datum(this.props.data)
      .call(GraphDate.enter)
      .call(GraphDate.update);
  },
  shouldComponentUpdate(nextProps) {
    if (nextProps.data.update) {
      this.d3Node.datum(nextProps.data)
        .call(GraphDate.update);
      return false;
    }
    return true;
  },
  componentDidUpdate() {
    this.d3Node.datum(this.props.data)
        .call(GraphDate.update);
  },
  render() {
    var total = "$";
    total += this.props.data.total ? this.props.data.total.toFixed(2) : 0;
    var date = this.props.data.formattedDate;

    return (
      <g className="GraphDate">
        <rect />
        <text className="date">
          {date}
        </text>
      </g>
    );
  },
  onMouseEnter() {
    this.d3Node.call(GraphDate.onMouseEnter);
  },
  onMouseLeave() {
    this.d3Node.call(GraphDate.onMouseLeave);
  }
});

module.exports = GraphDateComponent;