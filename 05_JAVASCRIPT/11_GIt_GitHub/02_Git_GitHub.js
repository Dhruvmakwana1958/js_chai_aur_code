/*
Configuration of Git :-
git ma amuk vastu nu pele thi setup karvu (ahi apde username ane email sey karisu )

•-> git config --global user.name "Dhruvmakwana1958" 
•-> git config --global user.email "makwanadhruv1958@gmail.com
(Hint :- username apya pachi git config --list karva thi eamil id jate j avi jse )

•-> git clone <some link> :- Github ma rakhela project ne apda local system ma download karva ya to show karva 
There are 3 types of links HTTPS , SSH , GitHub ClI
GitHub Repository
       |
       +── HTTPS → Simple / Beginner friendly
       |
       +── SSH   → SSH Key / Convenient for regular use
       |
       +── CLI   → GitHub commands through Terminal
{git clone Delta-Students}

•-> cd Delta-Students karyu have tema
•-> ls -la :- ana thi hidden files dekhase jema .git nam ni hse file 

Now ,
apde have readme file ma kaik cahnge karyu to have README>md ni bvaju ma 'M' lakhelu avse mtlb modified mtlb git dwara je tracked file hati ema modification karvama avyu
apde index.html ane style.css files banvi to tema bajuu ma 'U' dekhade che mtln Untracked mtlb git ae aa file ne kayrey tracke j noti kari

avi rite 4 stages hoy che koi pan file na 
File Status Life Cycle
1] untracked :- Git dwara track j nthi thy 
2] unmodified :- Git dwara tarck thy che pan tene modified karvama nthi avi mtlb tem ni tem j che je last ma commit kari ti tevii j fari thi change nthi kryo
3] modified :- git dwara track thyeli file jema kaik change karvama avyo che
4] staged :- git add staged (haji commit nathi thyu)

# New file
index.html

# Git status
U → Untracked

git add index.html

# Now
A → Staged

git commit -m "Add index file"

# Now
Unmodified

# Now some change in this file
Modified

•-> git add <file name> :- je te file add thy jase
•-> git add . :- te directory ma rheli badhi j file add thy jse 

•-> git commit -m "Add new files" 

•-> git push origin main 

+++++++++++++++ aa upar nu badhu kam karyu ae che apde koi file ne clone kari tema change karyu ane tene github upar push kari +++++++++++++++


NOW , apda local system ma kaik banavyu che jene github track j nthi kartu to tene github upar kai rite push karvu??

sav thi pela je te folder che tene local ma banvyu but tema .git vadi file nthi matlb aa folder github ma track thatu nthi

•-> git init => .git file add thy jse (jene apde ls -la command thi joi shakay)
   (git add .     git commit -m "discription"    )

•-> git remote add origin <link> = for add origin mtlb ke aa project ne github upar kyi  repo ma store karvu

•-> git remote -v  :- to verify remote 

•-> git branch : to check branch

•-> git branch -M main :- for rename the branch
    (git push origin main )



-------------------------> BRANCHES <------------------------

1] git branch :- to check branch 
2] git branch -M main :- for rename the branch
3] git checkout -b <Branch Name> :- to create new branch 
4] git checkout :- to navigate 
5] git branch -d <Branch Name> :- for delete the branch

6] git diff <Branch name> :- to compare commits , files , branches & more
7] git merge <Branch name> :- to merge 2 branches
            OR
   create a PR(pool request) in githuub ama feature1 vadi branch ma ja ne contribute upar click karvu have title ane discription apya
   bad teni pull request create karvi haev niche merge branch avse jema no conflicts lakhelu hse have merge branch ma click karyu 
   have apda changes main branch ma jova mdse(conflict to ave jo 2 same file ma same jagya e change karva ma avyo hoy to github 
   confuse thy jay ke aa banne ma thi kyo change rakhvano che to tya conflicts avse)

+++++++++++ MERGE CONFLICTS ++++++++++

now for creating a conflicts we can add ,
"// This is new feature - form" in main branch and add & commit 
"// This is new feature - Button" in  Feature1 branch and add & commit
•-> git diff main(jo apdu poiner Feature1 ma hoy)
•-> git merge main (merge karya bad apda vs codde ma niche mujab na option ave te select kari ne apde change kari shakiae
nahi to aa option ni niche HEAD ane evvu badhu lakehlu avse te badhu remove kari devu je agtya nu che te j rakhvu )
Accept Current Change | Accept Incoming Change | Accept Both Changes | Compare Changes

now aa changes apdde Feature1 ma karya have ane psuh karisu github upar tya thi PR create kari ne Feature1 ne main sathe merge
karisu ane tyar bad local syste ma git pull origin main kari ne git hub na change ne local ma b lavi sakisu 

HINT :- ahi apde lambi process thy kem ke apde badhu j kam Feature1 ma rai ne karyu jo apde git diff main karyu hot to apde
github ma PR create karvu j na padet kem ke apde feature1 ma change karyu che to apde last ma tene main sathe to merge karvu j
padvanu hstuu to ahi na case ma apde sidhu j main vadi branch sathe kam lidhu hot to aa lengthey way ma na javu padet



{
download ma Monika nam nu folder banyu
tema main branch ma   index.html  , README.md  ,  style.css  aam 3 files banavi
now we crreted a branch 
•-> git branch = (main)
•-> git checkout -b Feature1 = (Feature1 nam ni branch banavi)
•-> git checkout Feature1 = (main branch ma thi Feature1 vadi branch ma jump karyu)
(have tema aoo.js nam ni file add kari ane tema as a comment lakhyu this is new feature)
•-> git add .
•-> git commit -m "discription"
•-> git push origin Feature1 = (apda work ne github upar push karyu)
(but git checkout main karta tema app.js ny dekhay )
(github upar jai ne ypar lakhaya mujab PR create karyu ane navi branch ne main sathe merge kari but aa change github(remote)
upar avyo aa chanage ne local ma lava mate)
•-> git pull origin main = remote no change local ma avi jse


+++++++++++ Fixing Mistakes ++++++++++
Case 1 : staged changes] 
•->git reset <file name> = last ma je add karyu che mtlb jene staged karyu che tene reset karse
   git reset = tajetar ma lastt ma je kai b jetli b file add thy che te badha ne reset karse 

Case 2 : commited changes (for one commit)]
•-> git reseat HEAD~1 (last commit ne point kare 
    ex ,  A    B    C    D)    ahi d upar nu commit che ane apde try kariae chiae ke apdu pointer c vada commit par avi jay 
                         ⁕

Case 3 : commited changes (for many commits)]
(apde icchiae chiae ke apde lattest commit D & C nthi joita apdu pointer sidhu D thi B ma avi jay tena mate )
•-> git log = git log normally us project/repository ke commits dikhata hai, sirf recent ek-do commits nahi.
      {
            •-> git log → saare available commits history me dikhata hai
            •-> git log -n 3 → sirf last 3 commits
            •-> git log --oneline → commits ko short format me dikhata hai
      }
•-> git reset <commit hash>    = D thi B upar avi jaisu 
•-> git reset -- hard <- commit hash ->  = B pachi na commites delete marva je apdne na dekhay aagd jata tena mate 
to ana thi je te changes kari ne commits karya che ae commit to dur thase jode jode te change pan jata rese       


SPECIAL NOTE :- Isme (git commit -am "Discription") sirf wahi files commit hoti hain jo already staged hain. 
Staged :--      git add . ->  STAGED -->  git commit -m "message" -->  COMMITTED
(Maan lo tumne index.html me kuch change kiya:
index.html
   ↓
Modified    Ab: git add index.html karoge to:
index.html
   ↓
Staged ✅
Ab: git commit -m "Update index"
karoge to staged changes commit ho jayenge.)

* git commit -m "message"
 → Sirf STAGED files ko commit karta hai.

 git commit -am "message"
 → Tracked + Modified files ko automatically
   stage karke commit karta hai. mtlb add + commit 
 → New/Untracked files ko commit nahi karta.

 Example:
 git add .
 git commit -m "Add files"

 Flow:
 Modified → git add → Staged → git commit → Committed


---------------> FORKING <--------------- 
What is Forking?
• A fork is a new repository that shares code and visibility settings with the original "upstream"
repository.
• Fork is a rough copy.
(node name ni koi ni banaveli repo che tema change karvu che have apdne directly edit option na mde to tena mate fork karvu pade
fork karva node nam ni repo search karoo tene open karo ane upar fork no option avse tema jav
have apda account ma navi repo banva mate option ave evi j rite jemm apde koi navi repo banai tayre options ave have je name devu hoy
te dyo ane pachi niche option avse Copy the main branch only {mtlb khali main branch j copy thy but apde evu nthi karvu
apde badhi branch sahit joi che etle te option ne uncheck kari dyo 
now create a fork upar click karo})

have apde tema koi pan file ma change kari sahkiae chiae example for apde readme ma change karyu ane commit karyu
have apde te change je authorized node che tene moklva mate pool request create karvi pde to te create karo

base repository: nodejs/node🔻   base: main🔻    <--   head repository: delta-student-101/node🔻   compare: main🔻

{aa evu keva mage che ke Dhruvmakwna-node vadi repo che teni main branch ne node js ni je official repo che teni main branch sathe
have ama apde file ne kya moklvi che te selet karvana options pan ave che }




   ===================== GIT CLONE vs GITHUB FORK =====================

 Git Clone:
 → GitHub Repository ko Local Computer par copy karta hai.
 → Git command hai.

    git clone <repository-URL>

    GitHub Repo
         ↓ clone
    Local Computer
    Git Fork:
    → Kisi aur ki GitHub Repository ki copy apne GitHub Account me banata hai.
    → GitHub feature hai.
   
       Original Repo
            ↓ fork
       Your GitHub Repo
   
   
    Main Difference:
    → Clone = GitHub → Local Computer      → Fork  = GitHub → Your GitHub Account
   
    Clone aur Fork SAME nahi hain.
    Lekin dono ko saath me use kiya ja sakta hai:
         Original Repo
              ↓ Fork
         Your GitHub Repo
              ↓ Clone
         Local Computer
              ↓ Push
         Your GitHub Repo
     
  Short Trick:
 →Fork  = GitHub par apni copy
 →Clone = Computer par local copy
       
}     












*/




/*
================= GIT CONFIGURATION =================

Git me user.name / user.email configure karte hain, jisse
Git ko pata chalta hai ki commit kis user ne kiya hai.

1) GLOBAL
git config --global user.name "Dhruvmakwana1958"

→ Current user ki SABHI Git repositories par apply hota hai.

        GLOBAL
           ↓
   +-------+-------+
   ↓       ↓       ↓
Project-A Project-B Project-C


2) LOCAL
git config --local user.name "Dhruv"

→ Sirf CURRENT repository par apply hota hai.
→ Iske liye Git repository ke folder ke andar hona chahiye
  (.git folder present hona chahiye).

        GLOBAL
  Dhruvmakwana1958
          ↓
    Project-A
          ↓
        LOCAL
        Dhruv


3) SYSTEM
git config --system user.name "Dhruv"

→ Computer ke SABHI USERS ki Git repositories par apply hota hai.


SCOPES:
--system → All Users
--global → All Repositories (Current User)
--local  → Current Repository


PRIORITY:
--local > --global > --system

Agar Global + Local dono set hain, to Git LOCAL value
ko priority deta hai.


CHECK CONFIGURATION:
git config --global user.name   → Global username
git config --local user.name     → Local username
git config --system user.name    → System username

SHORT TRICK:
GLOBAL = All Projects
LOCAL  = One Project
SYSTEM = All Users
=======================================================
*/
