/*
•-> npm install(or i) <package name>
after install run ls command which shows list items

Installing packages :- 
apde package ibstall kariae tyare amuk files je jate j avi jay che je niche mujab che (01_niglegt me banavi che)
1] node_modules = The node_modules folder containes every installed dependancy for your project
   Dependency = • apdo code jena upar depend kare che 
                • apde je package use kariae chiae e ak rite apda mate dependecy banui jse because jo te uninsatll thy jse to apdo 
                   code run j ny kaare
2] package-lock.js = It records the exact version of every installed dependency, including its sub-dependencies and their versions.
3] package.json = The package. json file contains descriptive and functional metadata about a project, such as a name,
                  version, and dependencies
                  • this is a most important file 
                  • package install karva thi node_module nam ni file apda pc ma avi jse jema figlet na packages na codes hse
                    ahi temporary apde delete kari che jenu karn che apde tene github ms push karvu che ane jo apde node_module 
                    akhi dir ne psu karisu to 1000 thi vadhu files hse to ape generally evu karta nthi apde node_module ne 
                    delete kari dai chiae 
                  • pan apde tene package.json file thi game tyare install kari shakiae chiae 

                  •-> npm install = aa command thi apde apda node module ne pachu lavi shakiae chiae



for use of figlet we use this file and copoy the code from npmjs website and search niglet we can show the cod and just copy all

*/
const figlet = require('figlet');

figlet("{ Dhruv }", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
