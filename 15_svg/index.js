var dataset = [
    [ 5,     20 ],
    [ 480,   90 ],
    [ 250,   50 ],
    [ 100,   33 ],
    [ 330,   95 ],
    [ 410,   12 ],
    [ 475,   44 ],
    [ 25,    67 ],
    [ 85,    21 ],
    [ 220,   88 ]
];
//taken from https://alignedleft.com/tutorials/d3/making-a-scatterplot

var margin = {top: 70, right: 70, bottom: 70, left: 70},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d[0];})])
    .range([ 0, width ]);

var y = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) {return d[1];})])
    .range([ height, 0 ]);

var chart = d3.select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .attr('class', 'chart')

var main = chart.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    .attr('class', 'main')

main.append('text')
    .attr("x", 450 )
    .attr("y",  0 )
    .style("text-anchor", "middle")
    .text('Scatter');

var x_axis = d3.axisBottom(x);

main.append('g')
    .attr('transform', 'translate(0,' + height + ')')
    .attr('class', 'axis')
    .call(x_axis);

main.append("text")
    .attr("x", 450 )
    .attr("y",  400 )
    .style("text-anchor", "middle")
    .text("x");

var y_axis = d3.axisLeft(y);

main.append('g')
    .attr('transform', 'translate(0,0)')
    .attr('class', 'axis')
    .call(y_axis);

main.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -175 )
    .attr("y",  -35 )
    .style("text-anchor", "middle")
    .text("y");

var g = main.append("g"); 
g.selectAll("dots")
    .data(dataset)
    .enter().append("circle")
    .attr("cx", function (d) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 5);
