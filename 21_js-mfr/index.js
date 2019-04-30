d3.csv("https://raw.githubusercontent.com/kli19/Softdev-2/master/21_js-mfr/2006_-_2012_School_Demographics_and_Accountability_Snapshot.csv").then(function(data){
    var PS15=data.filter(function(n){
	return (n.DBN=="01M015");
    });
    console.log(PS15);

    //===================TOTAL POPULATION==================
    var population = PS15.map(function(n){
        return (parseInt(n.total_enrollment))
    });
    console.log(population)  
    var total_pop = population.reduce(function(a,b){
        return a+b;
    });
    console.log(total_pop);
    document.getElementById("pop").innerHTML = "The total enrollment in PS15 over the course of 7 years is " + total_pop;

    //=====================AVG PREK======================
    var prek = PS15.map(function(n){
        return (parseInt(n.prek))
    });
    console.log(prek)
    var total_prek = prek.reduce(function(a,b){
	return a+b;
    });
    console.log(total_prek);
    document.getElementById("prek").innerHTML = "The average enrollment of pre-schoolers in PS15 over the course of 7 years is " + total_prek/7;

    //==================FEMALE=====================
    var year_11_12 = PS15.filter(function(n){
	return (n.schoolyear=="20112012");
    });
    console.log(year_11_12);
    var fem = year_11_12[0].female_num;
    console.log(fem);
    document.getElementById("fem").innerHTML = "The number of females enrolled in PS15 during 2011-2012 was " + fem;
})
