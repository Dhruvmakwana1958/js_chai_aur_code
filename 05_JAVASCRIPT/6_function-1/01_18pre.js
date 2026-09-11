/*Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output :
"United States of America"*/

let longestCountry = function(country){
    let longest = "";

    for(let i = 0 ; i<country.length ; i++){
        if(country[i].length > longest.length){
            longest = country[i]
        }
    }
    return longest;
}

let country = ["Australia", "Germany", "United States of America" , "Mera bharat mahan hai jay hind"];

console.log(longestCountry(country));