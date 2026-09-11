/*
Q) if apde koi na projrct ne clone kari ne apdi system ma lavya have tema kaik change kari ne have tene push kariae chiae to su original repositoy ma cahnge thse?
Ans = NO
jo pelo option awe re ke apde apdi repository ne private rakhvi je thi badha joi na shake
biju apde public pan rakhvi tem cahta koi change kari shakta mthi jya sudhi write ni permisiion na hoy have aa write ni permisoon koi ne apva mate repo khoolo tema settings ane 
teni andar colaborators no option ave tema people ne add kari ne apda project ma je te vaykti ne write krvani permision api shakay 

===================== git pull =====================

 git pull origin main
 → GitHub ki "main" branch se latest changes laata hai
 → origin = GitHub repository
 → main   = branch
 → Default: changes ko MERGE karta hai


 ===================== --rebase =====================

 git pull origin main --rebase
 → Pehle GitHub ke latest changes laata hai
 → Phir hamare LOCAL commits ko unke upar dobara lagata hai
 → History ko LINEAR / clean rakhta hai

 Example:
 GitHub: A → B → D
 Local:  A → B → C

 Rebase ke baad:
 A → B → D → C


 ===================== --allow-unrelated-histories =====================

 git pull origin main --allow-unrelated-histories
 → Jab LOCAL aur GitHub ki history completely ALAG ho
 → Git normally merge karne se mana karta hai
 → Ye option Git ko kehta hai:
   "Dono alag histories hain, phir bhi MERGE kar do"

 Example:
 Local:  A → B
 GitHub: X → Y

 Allow karne ke baad:
 A → B ──┐
         M
 X → Y ──┘


 ===================== EASY REMEMBER =====================

 origin  → KAHAN se?       → Remote/GitHub repository
 main    → KIS branch se?  → main branch
 rebase  → KAISE jodna?    → Clean/linear way
 unrelated → ALAG history? → Phir bhi merge karne do

*/

 