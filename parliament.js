var Dataset = [
  {
    id: "APC",
    legend: "APC Group",
    name: "APC Group",
    seats: 63,
  },
  {
    id: "PDP",
    legend: "PDP Group",
    name: "PDP Group",
    seats: 44,
  },
  {
    id: "YPP",
    legend: "YPP Group",
    name: "YPP Group",
    seats: 1,
  },
  {
    id: "Vacant",
    legend: "Vacant",
    name: "Vacant",
    seats: 1,
  },
];

var parliament = d3.parliament().width(600).innerRadiusCoef(0.4);
parliament.enter.fromCenter(true).smallToBig(true);
parliament.exit.toCenter(true).bigToSmall(true);
parliament.on("mousemove", function (e) {
  d3.select("#parliament-tooltip")
    .style("opacity", 1)
    .style("display", "block")
    .html("<b>" + e.party.id + "</b> ")
    .style("left", d3.event.pageX + "px")
    .style("top", d3.event.pageY - 40 + "px")
    .style("fill-opacity", "0.5");
});
parliament.on("mouseout", function (e) {
  d3.select("#parliament-tooltip").style("opacity", 0).style("display", "none");
});
var setData = function (d) {
  d3.select(".parliament-container svg").datum(d).call(parliament);
};
setData(Dataset);
