/*
DOS command = cmd command
-> Two types of interfaces
   1> CLI/CUI                                                              2> GUI
(command line interface /Character User Interface)                (Graphical User Interface)

CLI/CMD/CUI :- Isme hum computer ko commands type karke instructions dete hain.
GUI         :- Isme hum icons, buttons, windows, menus, folders etc. ke through computer ko operate karte hain.

1) color help :- for changing color help
   color 2    :- for actual color change (green)

2) title Hacker:- For changing title 
   (cmd run as admistrator kholyu have upar jovo to Administrator : command prompt lakhyu 
   title Hacker lakhvathi Administrator : Hacker avi jse) 

3) prompt Goku:- C:\Users\makwa> aa je lakhelu che enu name change karva 

4) systeminfo :- system ni badhi j info api de

5) cls :- badhu j clear karva mate  

6) time :- time dekhade 
           apde apda hisab thi pan time change kari sakvi
           {have jo time badlelo ane ene default karvu hoy to w32tm /resync}

    date :- datwe dekhade
        
7) slmgr /dli :- apdu licence expired to nthi thy gyu ne e jova mate
                (- ane flag kahevay)
                slmgr /dli   → basic license information
                slmgr /dlv   → detailed license information
                slmgr /xpr   → activation expiry/status

8) winver :- ana thi windows nu version jani shakay

9) exit :- cmd ne close karva mate

10) +++++ --Flags-- +++++

flags := Flags are characters that we pass with commands to modifiy therir behavior 
(ex. ls -l {shi -l ae Flag kevay }) ane samjva mate apde man command sikhiae pan aa man command macos ma kam kare cmd ma ny

+ ls -l :- for aditional info
+ ls -a :- for hidden directories
+ ls -la :- above two flags ae combines

11) help ls OR cd /?:- aa ak instruction manual che je apdne je te command ni biography  kholine apse 

12) D: :- C drive ma thi D drive ma jump karav mate

13)touch index.html :- file create karva mate 

14) rm     :-remove files
    rmdir  :-remove directories (it works only if folder is empty if folder has such files it will not remove )
    rm -rf :-remove any folders

    This above 3 command are too sensitive mtlb ama thi delete thylu recycle bin ma pan pachu nthi avtu to aa commnd ne bav samji vichari ne use karvo 


*/