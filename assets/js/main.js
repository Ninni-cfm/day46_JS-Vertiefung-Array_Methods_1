//***********************************************************************************************************************************
// helper functions

// Greeting from StackOverflow :-)
const varToString = varObj => Object.keys(varObj)[0];

function displayText(param = "<br>", elementType = 'p') {
    console.log(param);
    document.body.innerHTML += `<${elementType}>${param}</${elementType}>`;
}
function displayVariable(param, elementType = 'p') {
    displayText(param.concat(": ", eval(param)), elementType);
}
function displayVar(expr) {
    console.log(varToString(expr) + ": ", eval(expr));
    displayText(`${expr}: See console for details...`);
}
function displayArray(param) {
    let arr = eval(param);
    let str = `${param}: (${arr.length}) [`;
    for (i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
        } else if (typeof (arr[i]) == "object") {
            str += `[${arr[i]}]`;
        } else {
            str += `${arr[i]}`;
        }
        if (i < arr.length - 1)
            str += ", ";
    }
    str += ']';
    displayText(str);
}


//***********************************************************************************************************************************
displayText("Lev1_1_1_js-vertiefung_arrays", 'h2');
// Erstelle ein Array, das aus Deiner Adresse besteht: Straße, Postleitzahl, Ort, Bundesland.
// Erstelle ein Array besteFreunde, das aus den Namen deiner Freunde besteht.
// Erstelle ein Array person, das aus deinem Namen, Nachnamen, Spitznamen, Alter, Hobby, Geburtsort, Bootcamp besteht.
// Zeige alle Arrays in der Konsole.
let address = ["Am Lakenbruch 17", 44793, "Bochum", "NRW"];
let bestFriends = ["Marco", "Uli", "Christoph", "Mirko", "Ralf"];
let person = ["Klaus", "Nienhaus", "Ninni", 57, "model trains", "Bocholt", "Supercode"];
let participants = [];
displayArray("address");
displayArray("bestFriends");
displayArray("person");
displayArray("participants");

// Füge die Arrays adresse und bestefreunde zum Array person hinzu.
// Gib das Array person in der Konsole aus und versuche auch die jeweiligen Arrays aus der Array person in der Konsole auszugeben.
person.push(address, bestFriends);
displayArray("person");
displayArray("person[7]");
displayArray("person[8]");
displayText();


//***********************************************************************************************************************************
displayText("Lev1_1_2_js-vertiefung_arrays-length", 'h2');
// Verwende den Code aus der vorherigen Übung.
// Nutze die length-Eigenschaft z.B.console.log(person.length);
// Gebe die Länge von person, adresse, teilnehmer und besteFreunde in der Konsole aus.
displayVariable("person.length");
displayVariable("address.length");
displayVariable("participants.length");
displayVariable("bestFriends.length");
displayText();


//***********************************************************************************************************************************
displayText("Lev1_2_js-vertiefung_arrays_3-moeglichkeiten", 'h2');
// Es gibt in JS mehrere Möglichkeiten, um ein Array zu erstellen.
// Achte auf die Unterschiede.
let myTrainer1 = ["Georg", "Anass", "Elaine", "Hakan"];
displayArray("myTrainer1");
let myTrainer2 = new Array("Georg", "Anass", "Elaine", "Hakan");
displayArray("myTrainer2");
let myTrainer3 = new Array();
myTrainer3[0] = "Georg";
myTrainer3[1] = "Anass";
myTrainer3[2] = "Elaine";
myTrainer3[3] = "Hakan";
displayArray("myTrainer3");
displayText();


//***********************************************************************************************************************************
displayText("Lev1_3_js-vertiefung_arrays_index", 'h2');
// Erstelle ein Array numberArray, das Zahlen von 5 bis 10 enthält.
// Gib es in der Konsole aus.
let numberArray = [5, 6, 7, 8, 9, 10];
displayArray("numberArray");

// Die blau hinterlegten Ziffern geben den Index an.
// Arrays sind 0-indiziert, was bedeutet, dass sie bei 0 und nicht bei 1 zu zählen beginnen.
// Wenn wir von numberArray die Nummer 9 aufrufen wollen, müssen wir numberArray[4]; aufrufen.
// Gib es in der Konsole aus.
displayVariable("numberArray[4]");
// Rufe auch die Zahlen 5 und 10 auf.
displayVariable("numberArray[0]");
displayVariable("numberArray[5]");
displayText();


//***********************************************************************************************************************************
displayText("Lev1_4_js-vertiefung_arrays_split()", 'h2');

// Deklariere Variablen meinText1, meinText2, meinText3.
let meinText1, meinText2, meinText3;
// Definiere die Variable meinText1 mit dem Wert: Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.
meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.';
// Definiere die Variable meinText2 mit dem Wert: Wie geht es dir heute?
meinText2 = 'Wie geht es dir heute?';
// Definiere die Variable meinText3 mit dem Wert: Heute ist ein großer Tag für uns.
meinText3 = 'Heute ist ein großer Tag für uns.';

// Deklariere Variablen: split1, split2, split3.
let split1, split2, split3;
// Definiere die Variable split1 mit dem Wert: meinText1.split();
split1 = meinText1.split();
displayArray("split1");
// Definiere die Variable split2 mit dem Wert: meinText1.split("");
split2 = meinText1.split("");
displayArray("split2");
// Definiere die Variable split3 mit dem Wert: meinText1.split(" ");
split3 = meinText1.split(" ");
displayArray("split3");

// Teste auch zwei weitere Variablen meinText2 und meinText3.
split1 = meinText2.split();
split2 = meinText2.split("");
split3 = meinText2.split(" ");
displayArray("split1");
displayArray("split2");
displayArray("split3");

split1 = meinText3.split();
split2 = meinText3.split("");
split3 = meinText3.split(" ");
displayArray("split1");
displayArray("split2");
displayArray("split3");
displayText();


//***********************************************************************************************************************************
displayText("Lev1_5_1_js-vertiefung_arrays_push()", 'h2');

// Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
// Definiere ein Array songs, das folgendes enthält:
// Bohemian Rhapsody, Stairway to Heaven, Hotel California
let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];
// Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
songs.push("Paranoid", "We Will Rock You", "Number of the Beast");
// Speichere das Array als Variable totalSongs.
let totalSongs = songs;
// Gebe totalSongs in der Konsole aus.
displayArray("totalSongs");

// Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:
// die 5 besten Fußballspieler.
let besteFussballerAllerZeiten = ["Diego Maradona", "Pele", "Lionel Messi", "Franz Beckenbauer", "Johan Cruyff"];
// Füge 3 Torhüter hinzu.
besteFussballerAllerZeiten.push("Sepp Maier", "Gianluigi Buffon", "Manuel Neuer")
// Gebe es in der Konsole aus.
displayArray("besteFussballerAllerZeiten");
displayText();

//***********************************************************************************************************************************
displayText("Lev1_5_2_js-vertiefung_arrays_push()-arrays-in-array", 'h2');

// Arrays können auch Arrays enthalten.
// Definiere eine Variable heroUndEnemy, die 3 Arrays beinhaltet:
// Batman, The Joker
// Professor X, Magneto
// Thor, Loki
let heroUndEnemy = [["Batman", "The Joker"], ["Professor X", "Magneto"], ["Thor", "Loki"]];
// Füge zum Array andere 3 Arrays mit Hero und ihr Gegner hinzu.
heroUndEnemy.push(["Superman", "LexLuthor"]);
heroUndEnemy.push(["Wolverine", "SabreTooth"]);
heroUndEnemy.push(["GhostRider", "Mephisto"]);
// Gebe heroUndEnemy in der Konsole aus.
displayArray("heroUndEnemy");