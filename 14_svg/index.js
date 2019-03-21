var selection = d3.select("body");
console.log(selection);

var h2 = d3.selectAll("h2");
console.log(h2);

var tds = d3.selectAll("tr").selectAll("td");
console.log(tds);

var span = d3.selectAll("tr").selectAll("td").selectAll("span");
console.log(span);

var sections = d3.selectAll("section");
console.log(sections);

d3.selectAll("section").append("p");
d3.selectAll("section").select("aside");

d3.select("body").datum(42).append("h1");

var numbers = [4, 5, 18, 23, 42];
d3.selectAll("div").data(numbers);

var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

function name(d) {
  return d.name;
}

console.log(d3.selectAll("div").data(letters, name(letters)));
