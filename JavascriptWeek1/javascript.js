/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her
// Disclaimer: The code works fine when statements are separated by linebreaks so I will be very inconsistent with semicolons
const sampleString = "Hello hello testing testing";
let otherString = "Okay I also use let, this should be good right?"
const shouldYouTryToChangeAConst = false;
if(shouldYouTryToChangeAConst){
    sampleString= "Changing this is surely a good idea"
}else{
    otherString = "Yeah it's much better to change this one"
}
console.log(sampleString);
console.log(otherString);
const coolArray=["Yeah I can make arrays too", 11, true, "You can mix data types in these but it would be a mess if you ever try to iterate through this array. So you probably shouldnt"]
const theNumberSeven = 7; //Sorry I'm not gonna demonstrate math on this one because it would make the name of this variable very inconsistent
let numberThatMayOrMayNotBeSeven = 7;
numberThatMayOrMayNotBeSeven++;
console.log(numberThatMayOrMayNotBeSeven);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her
const constantNum=4; //Yeah we can't really do math on this one cause it's a const, oops
let mathTarget=7;
console.log(mathTarget);
mathTarget++
console.log(mathTarget);
mathTarget = mathTarget/constantNum;
console.log(mathTarget);
mathTarget*=73;
console.log(mathTarget);
mathTarget-=140;
console.log(mathTarget);

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "John Testname";
let userAge = 12;
let userIsLoggedIn = false;
let userIsBlocked = true;
let goToPage = "";

// Skriv koden for oppgave 4 her
if(
    userName!="" && typeof(userName)=="string" && //extra check cause usernames not being strings could cause a mess
    userAge >=18 &&
    !userIsBlocked
){
    userIsLoggedIn=true;
    goToPage="/home"
    console.log("Everything seems to be correct. Welcome, "+userName)
}else{
    //throw new Error("Uh oh something is incorrect here"); 
    // I would throw an error as the task indicates, but then the code stops so I won't. Have warnings instead.
    userName==""||typeof(userName)!="string"? console.warn("Invalid username"):null
    userAge<18? console.warn("Too young"):null
    userIsBlocked? console.warn("You are blocked"):null
}

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her
userIsLoggedIn?nul:console.warn("The user failed to log in back in task 4. I wasn't told to account for that, so I'm just gonna print a warning and continue lol.")
let userTitle
userMale?userTitle="Mr.":userTitle="Mrs."
console.log("Hello, "+userTitle+" "+userName)
