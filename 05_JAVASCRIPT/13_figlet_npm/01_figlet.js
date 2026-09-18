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
