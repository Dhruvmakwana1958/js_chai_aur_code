/*
========================================================
        JAVASCRIPT: THREADING, SYNCHRONOUS & ASYNCHRONOUS
========================================================


1. THREADING KYA HAI?
---------------------

Thread = Program ke instructions execute karne ka ek path.

Simple meaning:
Thread batata hai ki program ke tasks/instructions ko
execute karne ke liye kitne execution paths available hain.


SINGLE-THREADED:
----------------

Ek hi main thread hota hai.

    👨‍💻 Thread
        ↓
      Task A
        ↓
      Task B
        ↓   
      Task C

Ek time par JavaScript ka ek main piece of code execute
hota hai.


MULTI-THREADED:
---------------

Multiple threads hote hain.

    👨‍💻 Thread 1 → Task A
    👨‍💻 Thread 2 → Task B
    👨‍💻 Thread 3 → Task C

Multiple threads alag-alag tasks ko concurrently/parallel
handle kar sakte hain.


========================================================
2. JAVASCRIPT SINGLE-THREADED HAI
========================================================

JavaScript ka main execution model SINGLE-THREADED hai.

Matlab JavaScript code ko execute karne ke liye ek
main Call Stack hota hai.

Example:

    console.log("A");
    console.log("B");
    console.log("C");

Execution:

    A
    ↓
    B
    ↓
    C

Ek hi time par JavaScript ke main execution thread par
ek hi task execute hota hai.


========================================================
3. SYNCHRONOUS KYA HOTA HAI?
========================================================

Synchronous =

    "Pehle current task complete karo,
     phir next task execute karo."

Example:

    console.log("Start");

    let sum = 10 + 20;

    console.log(sum);

    console.log("End");


Output:

    Start
    30
    End


Flow:

    Start
      ↓
    10 + 20
      ↓
    30
      ↓
    End


Agar koi synchronous task bahut time leta hai,
to next task ko wait karna padta hai.

Isliye synchronous code BLOCKING ho sakta hai.


========================================================
4. ASYNCHRONOUS KYA HOTA HAI?
========================================================

Asynchronous =

    "Time-taking operation start karo aur uske complete
     hone ka wait kiye bina JavaScript doosra kaam
     continue kar sakti hai."

Example:

    console.log("Start");

    setTimeout(function () {
        console.log("Timer completed");
    }, 3000);

    console.log("End");


Output:

    Start
    End
    Timer completed


Flow:

    Start
      ↓
    setTimeout()
      ↓
    Timer browser ko handle karne ke liye diya
      ↓
    JavaScript wait nahi karti
      ↓
    End
      ↓
    3 seconds complete
      ↓
    Timer callback execute
      ↓
    Timer completed


========================================================
5. JAVASCRIPT SINGLE-THREADED HOKAR
   ASYNCHRONOUS KAISE HAI?
========================================================

Important:

    JavaScript khud SINGLE-THREADED hai,
    lekin Browser/Node.js JavaScript ko
    extra APIs/facilities provide karta hai.

Browser environment mein roughly:

                 JavaScript
                     ↓
                Call Stack
                     ↓
          ┌─────────────────────┐
          │     Browser APIs    │
          │                     │
          │  setTimeout()       │
          │  DOM Events         │
          │  fetch()            │
          └─────────────────────┘
                     ↓
               Callback Queue
                     ↓
                 Event Loop
                     ↓
                Call Stack


Example:

    console.log("A");

    setTimeout(() => {
        console.log("B");
    }, 2000);

    console.log("C");


Execution:

    A
    ↓
    setTimeout()
    ↓
    Timer browser handle karta hai
    ↓
    JavaScript aage continue karti hai
    ↓
    C
    ↓
    2 seconds complete
    ↓
    Callback Queue
    ↓
    Event Loop
    ↓
    Call Stack
    ↓
    B


Final Output:

    A
    C
    B


IMPORTANT:

    JavaScript ne A, C aur B ko ek saath execute nahi kiya.

    JavaScript ka main execution abhi bhi
    SINGLE-THREADED hai.

    Asynchronous operation ko Browser/Host Environment
    handle karta hai aur callback baad mein JavaScript
    ke main thread par execute hota hai.


========================================================
6. SYNCHRONOUS vs ASYNCHRONOUS
========================================================

SYNCHRONOUS:

    Task A
      ↓
    Complete
      ↓
    Task B
      ↓
    Complete
      ↓
    Task C


ASYNCHRONOUS:

    Task A start
      ↓
    Time-taking operation
      ↓
    Wait nahi karta
      ↓
    Task B execute
      ↓
    Task C execute
      ↓
    Task A complete hone par
    uska callback execute


Main Difference:

    Synchronous
    = Wait → Complete → Next Task

    Asynchronous
    = Start → Don't Block → Continue → Complete Later


========================================================
7. THREADING ≠ ASYNCHRONOUS
========================================================

IMPORTANT:

    Asynchronous ≠ Multithreading

Dono alag concepts hain.


THREADING:

    Program ke execution ke liye
    kitne execution paths/threads hain.


ASYNCHRONOUS:

    Kya program kisi time-taking operation ko
    wait kiye bina doosra kaam continue kar sakta hai?


JavaScript:

    Main JavaScript Execution
             ↓
        Single Thread
             ↓
    Asynchronous Behaviour
             ↑
    Browser / Node.js APIs
    + Event Loop


Isliye:

    JavaScript = Single-threaded
    JavaScript = Asynchronous behaviour support karti hai
    JavaScript = Automatically multi-threaded nahi hai


========================================================
8. REAL-LIFE EXAMPLE
========================================================

SYNCHRONOUS:

    👨‍🍳 Chef

    Order 1 banao
        ↓
    Complete
        ↓
    Order 2 banao
        ↓
    Complete
        ↓
    Order 3 banao


ASYNCHRONOUS:

    👨‍🍳 Chef

    Order 1 cooking start
        ↓
    Cooking mein time lag raha hai
        ↓
    Chef wait nahi karta
        ↓
    Order 2 prepare karta hai
        ↓
    Order 1 ready hone par usko handle karta hai


MULTI-THREADED:

    👨‍🍳 Chef 1 → Order 1
    👨‍🍳 Chef 2 → Order 2
    👨‍🍳 Chef 3 → Order 3

    Yahan multiple execution workers/threads
    available hain.


========================================================
9. IMPORTANT TERMS
========================================================

Thread
→ Program ke instructions execute karne ka path.

Single-threaded
→ Main execution ke liye ek thread.

Multi-threaded
→ Multiple execution threads.

Synchronous
→ Ek task complete hone ke baad next task.

Asynchronous
→ Time-taking operation ka wait kiye bina
  doosra kaam continue karna.

Call Stack
→ Jahan JavaScript ke functions/code execute hote hain.

Browser APIs
→ Browser ki facilities jo timers, DOM events,
  network requests etc. handle kar sakti hain.

Callback
→ Aisa function jo baad mein execute hota hai.

Callback Queue
→ Ready callbacks temporary wait karte hain.

Event Loop
→ Check karta hai ki Call Stack available hai ya nahi
  aur appropriate callbacks ko Call Stack tak bhejne
  mein help karta hai.


========================================================
10. ONE-LINE REVISION
========================================================

Thread
→ Execution ka path.

Single-threaded JavaScript
→ JavaScript ka main execution ek thread par hota hai.

Synchronous
→ Pehle kaam complete → phir next kaam.

Asynchronous
→ Time-taking kaam ko wait kiye bina aage continue.

Event Loop
→ Async callbacks ko appropriate time par
  Call Stack tak lane mein help karta hai.

IMPORTANT:
→ Asynchronous ka matlab Multi-threaded nahi hota.
→ JavaScript single-threaded hote hue bhi
  asynchronous behaviour provide kar sakti hai.


========================================================
*/