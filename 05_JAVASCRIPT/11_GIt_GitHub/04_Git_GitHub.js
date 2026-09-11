
/*
  GitHub Project me sirf 2 New Files Add karna:
 
  Situation:
  - Existing project already GitHub se connected hai.
  - Local system me alag se 2 files bani hain:
       1. dhruv.html
       2. stlle.ccss
  - Existing GitHub files ko change nahi karna.
 
  Steps:
 
  1. dhruv.html & stlle.ccss ko existing Git project folder
     ke andar COPY karo.
 
  2. Git project folder me terminal open karo.
 
  3. Check:
       git status
 
  4. Sirf new 2 files ko stage karo:
       git add dhruv.html stlle.ccss
 
     NOTE: git add . mat karo, kyunki sirf ye 2 files push
     karni hain.
 
  5. Commit:
       git commit -m "Add Dhruv HTML and CSS files"
 
  6. GitHub par push:
       git push origin main
 
  IMPORTANT:
  - git pull ki zarurat nahi hai agar local project already
    GitHub ke latest version ke saath up-to-date hai.
  - git add filename → specific file stage karta hai.
  - git add . → folder ke sabhi changed/untracked files stage
    kar sakta hai.
 
  Final:
  Local Project
       ↓
  git add (only 2 files)
       ↓
  commit
       ↓
  git push origin main
       ↓
  GitHub → sirf dhruv.html + stlle.ccss add
 */

