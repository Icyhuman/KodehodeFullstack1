/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/* Tester function to compare the result of a function with the desired response.*/
function test(response, expectedResponse) {
  if (response === expectedResponse) {
    console.log("Test successful, response was : " + response);
  } else {
    console.log(response);
    console.log(expectedResponse);
    //console.warn is visually distinct, letting us distinguish positive and negative results easier
    console.warn("Expected " + expectedResponse + " but got " + response);
  }
}

/* Two arrays with the same content may not be seen as the same by JS 
   Therefore we use a .join() before comparing to compare the content instead of the arrays themselves*/
function arraytest(response, expectedResponse) {
  if (response.join() === expectedResponse.join()) {
    console.log("Test successful, response was : " + response);
  } else {
    console.log(response);
    console.log(expectedResponse);
    //console.warn is visually distinct, letting us distinguish positive and negative results easier
    console.warn("Expected " + expectedResponse + " but got " + response);
  }
}

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
function numCheck(num) {
  //Starting with some basic error handling in case the input isn't a number
  if (typeof num != "number") {
    console.log("Error! Given data is not a number. Attempting conversion.");
    num = Number(num); //If the user mistakenly gave the number in string or array form, we fix it here.
    if (Number.isNaN(num)) {
      console.warn("Conversion failed");
      return "Ikke tall";
    }
  }
  if (num % 2 == 0) {
    //Using mod 2 to chech whether the remainder is 0(even) or 1(odd)
    return "Partall";
  } else {
    return "Oddetall";
  }
}

//TESTING
test(numCheck(8), "Partall");
test(numCheck("8"), "Partall");
test(numCheck([8]), "Partall");
test(numCheck(493), "Oddetall");
test(numCheck(800), "Partall");
test(numCheck("Crazy hamburger"), "Ikke tall");

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her
//Simple one line solution. Run .toUpperCase, then add "!". Lacks error checking, so please only give it strings:)
const yell = (string) => string.toUpperCase() + "!";

test(yell("yo whaddup"), "YO WHADDUP!");
test(yell("7"), "7!");
test(yell("Γειά σου"), "ΓΕΙΆ ΣΟΥ!"); //Testing whether other alphabets work lol

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her
function greeter(name, hour) {
  if (typeof hour != "number") {
    //Number check similar to task 1. Returns distinct errors based on whether given hour is undefined or wrong
    if (hour === undefined) {
      console.warn("Timeverdi ikke gitt");
      return "Timeverdi ikke gitt";
    }
    hour = Number(hour);
    if (Number.isNaN(hour)) {
      console.warn("Timeverdi ikke tall");
      return "Timeverdi ikke tall";
    }
  }
  //Hour checker, no need to else if because we return once anything is true
  if (hour < 0) {
    return "Ugyldig tid";
  }
  if (hour < 6) {
    return `God natt ${name}`;
  }
  if (hour < 12) {
    return `God morgen ${name}`;
  }
  if (hour < 18) {
    return `God dag ${name}`;
  }
  if (hour < 24) {
    return `God kveld ${name}`;
  }
  return "Ugyldig tid";
}
test(greeter("gamer", 12), "God dag gamer");
test(greeter("gamer"), "Timeverdi ikke gitt");
test(greeter("gamer", "gaming time"), "Timeverdi ikke tall");
test(greeter("gamer", 92), "Ugyldig tid");
test(greeter("Obama", 2), "God natt Obama");
test(greeter("Jeff", 19), "God kveld Jeff");
test(greeter("Peppino Spaghetti", 11), "God morgen Peppino Spaghetti");

/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her
//We simply use the slice method to return a slice of the array with first and last value gone
const arraytrim = (array) => {
  return array.slice(1, -1);
};

//Sorry the tests look terrible, Prettier insists that this is the ideal way to display these arrays :(
arraytest(arraytrim(["Rød", "Grønn", "Blå", "Gul"]), ["Grønn", "Blå"]);
arraytest(arraytrim(["En", "To", "Tre", "Fire", "Fem", "Seks"]), [
  "To",
  "Tre",
  "Fire",
  "Fem",
]);
//Testing with mixed strings and numbers
arraytest(
  arraytrim([
    9,
    "My",
    "name",
    "is",
    "Fred",
    "Flintstone",
    "Yabba",
    "Dabba",
    "Doo",
    83,
    500,
  ]),
  ["My", "name", "is", "Fred", "Flintstone", "Yabba", "Dabba", "Doo", 83],
);

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her
// Rather self explanatory. Replaces the desired word and trims
const replaceAndTrim = (string) => {
  return string.replaceAll("vanskelig", "gøy").trim();
};

test(replaceAndTrim("nothing changed lol"), "nothing changed lol");
test(replaceAndTrim("  Javascript er vanskelig   "), "Javascript er gøy");
test(
  replaceAndTrim(" Det er vanskelig å bruke metoder "),
  "Det er gøy å bruke metoder",
);
test(replaceAndTrim("   vanskelig        "), "gøy");
// Code handles multiple occurences
test(replaceAndTrim("  vanskeligscript er vanskelig   "), "gøyscript er gøy");

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
// Helper function for the bonus task. Uses toLowerCase() to avoid having to check for both "e" and "E"
const eCheck = (string) => {
  return string.toLowerCase().includes("e");
};

// Changed to multiple returns to accomodate the bonus task. Original solution accessed with arrayManipulation()[0]
function arrayManipulation(array) {
  //Filter the array with the eCheck helper. Filter makes a shallow copy so later changes to the original also apply to this array
  let eArray = array.filter(eCheck);
  array.shift(); //Remove "Bok"
  array[array.indexOf("Viskelær")] = "Linjal"; //Find "Viskelær" and replace it
  array.splice(array.indexOf("Penn"), 2, "Markeringspenn"); //Remove the 2 items in favor of "Markeringspenn"
  let string = array.join("|"); //Join the whole thing to a string
  return [string, eArray];
}

test(arrayManipulation(items)[0], "Markeringspenn|Linjal|Blyant|Markør");
arraytest(arrayManipulation(items)[1], ["Markeringspenn"]);

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her
function arrayCheck(array, string) {
  if (array.includes(string)) {
    //If included, remove using splice
    array.splice(array.indexOf(string), 1);
  } else {
    //Else add the string
    array.push(string);
  }
  return array;
}

arraytest(arrayCheck(["Rød", "Grønn"], "Blå"), ["Rød", "Grønn", "Blå"]);
arraytest(arrayCheck(["Rød", "Grønn", "Blå"], "Grønn"), ["Rød", "Blå"]);
arraytest(arrayCheck(["Spaghetti", "Meatballs"], "Tomato sauce"), [
  "Spaghetti",
  "Meatballs",
  "Tomato sauce",
]);

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
function smile(input) {
  switch (
    typeof input //Switch converts the value based on its type. Cases are self explanatory
  ) {
    case "string":
      break; //Break avoids executing later cases
    case "number":
      input = input.toString();
      break;
    case "boolean":
      if (input) {
        input = "Ja";
      } else {
        input = "Slapp av";
      }
      break;
    default:
      input = "Kun primitive verdier";
  }
  return "😎" + input + "😎"; //Add smileys and return
}

test(smile(69420), "😎69420😎");
test(smile(true), "😎Ja😎");
test(smile(false), "😎Slapp av😎");
test(smile("holy moly"), "😎holy moly😎");
test(smile(["eggs", "milk", "ham"]), "😎Kun primitive verdier😎");
