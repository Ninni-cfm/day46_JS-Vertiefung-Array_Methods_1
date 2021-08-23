# day46_JS-Vertiefung-Array_Methods_1

**Lev1_1_1_js-vertiefung_arrays - Aufgabenstellung**

-   Erstelle ein Array, das aus Deiner Adresse besteht: Straße, Postleitzahl, Ort, Bundesland.
-   Erstelle ein Array besteFreunde, das aus den Namen deiner Freunde besteht.
-   Erstelle ein Array person, das aus deinem Namen, Nachnamen, Spitznamen, Alter, Hobby, Geburtsort, Bootcamp besteht.
-   Zeige alle Arrays in der Konsole.
-   Füge die Arrays adresse und bestefreunde zum Array person hinzu.
-   Gib das Array person in der Konsole aus und versuche auch die jeweiligen Arrays aus der Array person in der Konsole auszugeben.

---

**Lev1_1_2_js-vertiefung_arrays-length - Aufgabenstellung**

Die length Eigenschaft eines Objekts vom Typ Array setzt die Anzahl der Elemente in einem Array oder gibt diese Anzahl zurück.

-   Verwende den Code aus der vorherigen Übung.
-   Nutze die length-Eigenschaft z.B. console.log(person.length);
-   Gebe die Länge von person, adresse, teilnehmer und besteFreunde in der Konsole aus.

---

**Lev1_2_js-vertiefung_arrays_3-moeglichkeiten - Aufgabenstellung**

Es gibt in JS drei Möglichkeiten, um ein Array zu erstellen.
Achte auf die <b>Unterschiede</b>.

-   Erstelle ein Array meineTrainer1 mit den Namen der Trainer\*innen: Georg, Anass, Elaine, Hakan.<br>
    Gib es in der Konsole aus.

-   let meineTrainer2 = new Array("Georg", "Anass", "Elaine", "Hakan");<br>
    Gib es in der Konsole aus.

-   let meineTrainer3 = new Array();<br>
    meineTrainer3[0] = "Georg";<br>
    meineTrainer3[1] = "Anass";<br>
    meineTrainer3[2] = "Elaine";<br>
    meineTrainer3[3] = "Hakan";<br>
    Gib es in der Konsole aus.<br>

---

**Lev1_3_js-vertiefung_arrays_index - Aufgabenstellung**

-   Erstelle ein Array numberArray, das Zahlen von 5 bis 10 enthält.
-   Gib es in der Konsole aus.
-   Die blau hinterlegten Ziffern geben den Index an.

Arrays sind 0-indiziert, was bedeutet, dass sie bei 0 und nicht bei 1 zu zählen beginnen.

-   Wenn wir von numberArray die Nummer 9 aufrufen wollen, müssen wir numberArray[4]; aufrufen.
-   Gib es in der Konsole aus.
-   Rufe auch die Zahlen 5 und 10 auf.<br><br>
-   Lies die Hinweise, um Index besser zu verstehen.

---

**Lev1_4_js-vertiefung_arrays_split() - Aufgabenstellung**

Deklariere Variablen meinText1, meinText2, meinText3.

-   Definiere die Variable meinText1 mit dem Wert: Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.
-   Definiere die Variable meinText2 mit dem Wert: Wie geht es dir heute?
-   Definiere die Variable meinText3 mit dem Wert: Heute ist ein großer Tag für uns.

Deklariere Variablen: split1, split2, split3.

-   Definiere die Variable split1 mit dem Wert: <b>meinText1</b>.split();
-   Definiere die Variable split2 mit dem Wert: <b>meinText1</b>.split("");
-   Definiere die Variable split3 mit dem Wert: <b>meinText1</b>.split(" ");

Teste auch zwei weitere Variablen meinText2 und meinText3.

---

**Lev1_5_1_js-vertiefung_arrays_push() - Aufgabenstellung**

Die push()-Methode fügt neue Elemente am Ende eines Arrays hinzu.
Definiere ein Array songs, das folgendes enthält:

-   Bohemian Rhapsody, Stairway to Heaven, Hotel California
-   Füge diesem Array deine 3 Lieblingslieder mit dem Befehl songs.push("Sweet Child O'Mine"); hinzu.
-   Speichere das Array als Variable totalSongs.
-   Gebe totalSongs in der Konsole aus.

Definiere ein Array besteFussballerAllerZeiten, das folgendes enthält:

-   die 5 besten Fußballspieler.
-   Füge 3 Torhüter hinzu.
-   Gebe es in der Konsole aus.

---

**Lev1_5_2_js-vertiefung_arrays_push()-arrays-in-array - Aufgabenstellung**

Arrays können auch Arrays enthalten.

-   Definiere eine Variable heroUndEnemy, die 3 Arrays beinhaltet:

    -   Batman, The Joker
    -   Professor X, Magneto
    -   Thor, Loki

-   Füge zum Array andere 3 Arrays mit Hero und ihr Gegner hinzu.
-   Gebe heroUndEnemy in der Konsole aus.

---

**Lev1_6_js-vertiefung_arrays_pop() - Aufgabenstellung**

Die pop()-Methode entfernt das letzte Element eines Arrays.

-   Verwende den Code aus den vorherigen Übungen.
-   Entfernt zuletzt hinzugefügte Song aus dem Array totalSongs.
-   Speichere diesen als Variable entfernterSong.
-   Gib entfernterSong und totalSongs in der Konsole aus.<br><br>
-   Entferne den zuletzt hinzugefügten Torhüter aus dem Array bestenFussballerAllerZeiten.
-   Speichere ihn als Variable entfernterFussballer.
-   Gib entfernterFussballer und bestenFussballerAllerZeiten in der Konsole aus.
-   Entferne dann 3 Fussballer.
-   Gib die Variable bestenFussballerAllerZeiten in der Konsole aus.

---

_Source:_ https://github.com/Ninni-cfm/day46_JS-Vertiefung-Array_Methods_1

_Demo:_ https://ninni-cfm.github.io/day46_JS-Vertiefung-Array_Methods_1/
