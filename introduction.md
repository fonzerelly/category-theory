## Category Theory - der Ring sie alle zu knechten
<br><br>
Christian H&ouml;rauf<br>
<img src="images/twitter.png" width="5%"><sup>@fonzygruen</sup>

Note: 
Heil Sauron,
willkommen zu dieser einmaligen Veranstaltung der Bruderschaft Saurons. Wie sie sicherlich wissen, war Sauron der Herrscher über Mittelerde bis zwei unsägliche Hobbits es wagten seinen Ring der Macht im Schicksalsberg zu zerstören. Peter Jackson hat die Ereignisse seiner Zeit in einer fast 12-Stündigen Dokumentation festgehalten wo sie die Geschehnisse gut nachvollziehen können.

Wie dem auch sei, sie sind heute hier erschienen um die Grundlagen von Saurons Macht kennen zu lernen: die Kategorientheorie. 

Nun ich werde mich bemühen auf die wichtigsten Aspekte einzugehen, jedoch bin ich sicher, dass wir in der kurzen Zeit lediglich die Spitze des Eisbergs streifen können.

??VERTICAL
# Bild von Nerds aus den 70gern
Note:
Uns ist es gelungen, den Menschen Sand in die Augen zu streuen. Sie glauben zu großen Teilen noch heute, dass sie Ihre Magie in kleinsten Schritten wirken und "imperativ" programmieren müssen. So als würden sie auch jeden ihrer Herzschläge bewusst ausführen. Sauron, der letzte der Maia, wäre nie so töhricht gewesen. 

??VERTICAL
# Bild von Sauron
Note:
Er wuste die abstrakten, arkanen Kräfte zu verstehen und zu lenken.
Und so frage ich Euch:
* Wollt ihr Euch zu den Göttern aufschwingen?
* Wollt auch ihr erfahren, wie die Macht hinter der Macht funktioniert?
* Wollt ihr die Wurzeln leicht wartbarer funktionaler Software kennen lernen?



??VERTICAL
## Bild des Rings
* Ein Ring, sie zu knechten, <!-- .element: class="fragment" -->
* sie alle zu finden, <!-- .element: class="fragment" -->
* ins Dunkel zu treiben <!-- .element: class="fragment" -->
* und ewig zu binden. <!-- .element: class="fragment" -->

Note:
So sprecht mir nach:
Ein Ring, sie zu knechten ...
sie alle zu finden, ...
ins Dunkel zu treiben, ...
und ewig zu binden. ...

??VERTICAL
Euripides: "Jeder Mann ist wie die Gesellschaft, die er gewöhnlich führt"
Note: 
Nun da Eure Seelen so schwarz sind wie der Schatten Saurons, kann ich Euch verraten: Die wahre Natur der Dinge erkennt man nicht durch die Dinge selbst sondern durch deren Beziehungen zu anderen Dingen.

??VERTICAL
## Kategorie
* Objekte
* Morphismen

Note: 
In der Magie sprechen wir also von Objekten und von Morphismen, welhe die Objekte in Beziehung setzen.
Eine Kategorie besteht also aus seinen Set von Objekten und sog. Morphismen, die die verschiedenen Objekte miteinander verbinden. 

??VERTICAL
## Kategorie
* Objekte == Datentypen
* Morphismen == Funktionen
Note: 
Eure Mathematiker verwenden diese Termini auch bezogen auf alle möglichen Umstände. Wir werden uns hier auf auf den Software-Bereich konzentrieren, in dem Objekte Datentypen entsprechen und Morphimen sind die Funktionen, welche von einem Datentyp in einen anderen konvertieren. 

??VERTICAL
``` Typescript
const inc = (x: number): number => x + 1;
const isOdd = (value: number): boolean => x % 2 === 1;
```
Note:
Macht zeichnet sich nicht dadurch aus, dass man eine große, komplexe Funktion schreibt. Macht bedeutet eine komplexe Funktion aus vielen kleinen übeschaubaren Funktionen zusammen zu setzen.

??VERTICAL
isOdd &ordm; inc

Note:
Wenn ich also zuerst die Inkrement-Funktion ausführe und dann die isOdd-Funktion, sagt man in der Mathematik
isOdd nach inc.

??VERTICAL
``` Typescript
const isNextOdd = compose<number, number, boolean>(
  isOdd,
  inc
);
```
Note:
Entsprechend sagen wir im Typescript-Kontext: Die Funktionen inc und isOdd wurden "composed", also kombiniert, zu isNextOdd.
Dieses compose, wie sieht das unter der Haube aus?

??VERTICAL
``` Typescript
const compose<T, U, V> = (
  fn1: (input: T) => U, 
  fn2: (input: U) => V
): (input:T) => V {
    return function(value: T) {
        return fn2(fn1(value))
    } 
}
```
Note: 
Wir sehen hier eine Funktion die selbst eine Funktion zurück liefert, in der beide Eingabefunktionen aufgerufen werden.
Dieses Miracel nennt man HigherOrder-Function.
Doch vergesst niemals...

??VERTICAL
| Pure          | Impure        |
| ------------- |:-------------:|
| (x) => x + 1  | Math.random() |

Note:
Ihr bezieht nur Macht aus den Funktionen wenn sie rein sind. So rein wie die Herzen der Elben. Links sehen wir eine Funktion welche bei jedem Aufruf mit dem gleichen Parameter das gleiche Ergebnis liefert. Rechts sehen wir eine Funktion, die vom sog. seed abhängt, quasi einer globalen Variablen. Dies nennt man auch Seiteneffekt. Dieser steht nicht unter unserer Kontrolle und sollte damit soweit Möglich vermieden werden. 

??VERTICAL
## Kategorie
* Objekte == Datentypen
* Morphismen == Funktionen
* Assoziativgesetz
Note: 
Aber wir wissen, dass wir keine absolute Kontrolle erlangen können, denn unser Programm soll ja Ausgaben machen und produziert damit zwangsläufig Seiteneffekte. 
Um so dringlicher, dass wir alle relevanten Gesetzmäßigkeiten einhalten. Genauer gesagt das sog. Assoziativgesetz. 


??VERTICAL
(2 + 3) + 5 = 2 + (3 + 5)
Note:
Die Bruderschaft Saurons weiß, dass ihr Menschen schon längst das Wissen aus Eurer Grundschulzeit verdrängt habt. Zur Erinnerung, das Assoziativgesetz besagt z.B. bei der Addition, dass es keine Rolle spielt welche Summanten ich zuerst miteinandenr verechne, es kommt immer das gleiche heraus. NICHT zu verwechseln mit dem Kommutativgesetz, demzufolge es egal wäre in welcher Reihenfolge die Summanten zu addieren sind.

??VERTICAL
(f &ordm; g) &ordm; h = f &ordm; (g &ordm; h)
Note:
Bezogen auf das Verknüpfen von Funktionen bedeutet das, dass es wie in diesem Beispiel egal ist ob wir f nach g komponieren und dann h oder ob wir g nach h kommponieren und dieses mit f. In beiden Fällten entsteht die exakt gleiche Funktion. 

??VERTICAL
#Ringbesitzer

Sauron ------------>Gollum -----------> Bilbo -------------------> Frodo
       Silmarillion         Der Hobbit         Der Herr der Ringe

                    Gollum --------------------------------------> Frodo
Note:
Oder ander ausgedrückt hätte Peter Jackson sich auch die Trillogie "Der Hobbit" komplett sparen können...

??VERTICAL
Note:
Wir haben jetzt gesehen, wie man Funktionen kombinieren und dadurch ersetzen kann. Dadurch dass hier die Assoziativität gilt, können wir mathematisch gesicherte Schlüsse ziehen:


??VERTICAL
#Partition friendly
Note:
Z.B. können wir die Aufgabe besser Portionieren. Wenn Gimli in 10 Minuten zwei Orks abschlachtet und Legolas 17, dann können wir später ihre Ergebnisse zusammenführen. Wir könnten also für Gimli und für Legolas unterschiedliche Threads anlegen, in denen Sie Orks erledigen. 

??VERTICAl
#Incremental
Note:
Oder wir bearbeiten das Problem inkrementell. Wir könnten Gimli vielleicht sogr ein Zeitfenster einrichten, in dem er die Orks nach Wertgegenständen untersucht, während Legolas jeden ankommenden Ork erlegt.




??VERTICAL
## Kategorie
* Objekte == Datentypen
* Morphismen == Funktionen
* Assoziativgesetz
* neutrale Element
Note:
Ein letztes Gesetz fehlt Euch Menschen noch, die Macht Saurons zu verstehen. In einer Kategorie wird ein neutrales Element. Und wer spielt in Mittelerde eine so neutrale Rolle,dass Peter Jackson ihn noch nicht mal in seiner Dokumentation erwähnt?

??VERTICAL
#Tom Bombadil
Note:
Richtig Tom Bombadil, der angeblich schon da war bevor mein Meister Sauron auf den Plan tratt - lächerlich. Der angeblich nicht anfällig für die Macht des Rings war - unmöglich. Der stehts Pilze konsumierende Nichtsnutz - was auch sonst... Aber gut, auch ihn brauchen wir um eine Kategorie zu konstruieren.

??VERTICAL
5 + 0 = 5
Note:
Das neutrale Element wirkt sich nicht auf eine Operation aus. So wie sich z.B. auch die Addition mit der 0 nicht auswirkt, bleibt auch die Anwendung einer Identity-Function ohne Folgen: 

??VERTICAL
f &ordm; identity = f

in Typescript
``` Typescript
function identity<T> (x: T): T {
    return x;
}

const isAlsoOdd = compose(isOdd, identity)
const isAlsoOdd2 = compose(identity, isOdd)
```
Wir sehen also, dass 

??VERTICAL
8 * 1 = 8
Note:
... der der 1 bei der Multiplikation muss es auch beim verbinden von Funktionen ein Neutrales Element geben:

??VERTICAL
``` Typescript
function identity<T> (x: T): T {
    return x;
}
```
Note:
die Identity-Function, welche nichts weiter tut als ihren Eingabeparameter zurück zu geben.

??VERTICAL
f &ordm; identity = f
Note:
So gilt nun auch, dass f verbunden mit Identity wieder f ergibt.

??VERTICAL
NICHT MEIN SCHATZZZ!!!
<img src="images/gollum-angry.jpg" width="100%">
Note:
Bevor jetzt Eure Augen genauso so groß werden, weil ihr Euch fragt: "Wozu sollte ich so eine nichtsnützige Funktion brauchen?!?" lasst mich noch erwähnen, dass die Römer zwar viel geleistet haben, aber da sie kein neutrales Element wie die Null kannten blieb ihnen das Rechnen mit Unbekannten verborgen. Und wo wären wir heute ohne Algebra?

??VERTICAL

Note:
Jetzt wissen wir also was eine Kategorie ist, und welche Regeln erfüllt sein müssen um von einer Kategorie zu sprechen. Sehen wir uns ein paar Beispiele an, wie man solche Beziehungsgeflechte Kategorisiert:

??VERTICAL
# Initial Object - Sauron
Note:
Nehmen wir zum beispiel unseren großen und furchtgebietenden Meister Sauron, dessen waches Auge alles sieht. Er war es, der die großen Ringe erschuf.
Drei waren den Elben gegeben, sieben den Zwergen und neun den Menschen. Diese Ringe bargen die Stärke jedes Volk zu leiten. Doch sie wurden alle betrogen, denn es wurde noch ein Ring gefertigt. Im Lande Mordor schiedete der Herrscher Sauron heimlich einen Meisterring um alle anderen zu beherrschen. In diesen Ring floß seine bosheit, seine Grausamkeit und sein Wille alles Leben zu unterdrücken.
Von Ihm gehen alle denkbaren Verknüpfungen aus. Keine endet jedoch dort. In der Kategorientheorie spricht man von einem Initialobjekt.

??VERTICAL
# Gollum - Terminal Object
Note:
Ihm Gegenüber steht Gollum, der in seiner Einfallt und Schwäche nicht nur den einen Ring an die unsägichen Hobbits verloren hat, nein auf dem Schicksalsberg hat er den Ring in seiner Gier und Dummheit mit sich in den Tod gerissen.
Alle Pfeile zeigen damit auf ihn und kein weitere Pfeil zeigt von ihm weg. Damit können wir in Terminal Object nenne.

??VERTICAL 
# Duality
Note:
An dieser Stelle erkennen wir einen weiteren Teil der arkanen Macht. Aus jeder Struktur von Objekten und Morphismen die wir erkennen können lässt sich auch immer eine Umgekehrte Struktur, eine Co-St  ruktur ermitteln indem man einfach die Pfeile der Struktur umdreht.
So konnten wir z.B. aus dem Initial-Object auch das Terminal-Object ableiten.

??VERTICAL
# ProductType -> Frodo und Sam

                      C
                    /  \
                  fst   snd
                  /  |   \
                A - AxB - B
Note:
Ein weiteres Beispiel bieten diese miesen kleinen Hobbitse Frodo und Sam. Man bekommt sie nur im Doppelpack. Klar gelang es einem der Nazghul sie kurzzeitig zu trennen, aber die meiste Zeit weichen Sie keinen Meter voneinander. Man kann sie also als ein eigenes Objekt betrachten, obwohl sie trennbar sind. Man nennt sowas ProductType, weil sich so gewonnene Datentyp-Kompositionen als Mal-Operation betrachten kann. 

??VERTICAL
``` Typescript
class Coordinate <T> {
    x: T;
    y: T;
}
```
Note:
Ihr kennt so einen Datentyp aus der Schule als Carthesische Koordinaten.

So, was mag wohl herauskommen, wenn man hier die Pfeile umdreht?

TODO: 
Recherchiere nochmal wie sich der ProductType als Mal-Operation darstellen lässt.


??VERTICAL
#SUMTYPE
                      
                A - AxB - B
                  \  |   /
                  ?     ?
                    \  /
                      C

Note:
Das Gegenteil des ProductTypes, das CoProduct ist der sog. SumType. Im Gegensatz zum Product wo zwei Objekte gleichzeitig referenziert werden konnten, repräsentiert ein SumType ein Objekt, welches zwei Ausprägungen hat. Gollum ist ein gutes Beispiel dafür, weil er sich immer mit sich selbst unterhält, mal als guter Smeagol mal als böser Gollum. 

??VERTICAL
``` Typescript

class Either<T,U> {
    value: T|U  
}

```


Note:
In der Programmierung spricht man von einem Either

??VERTICAL
## Gollum -> Bilbo -> Frodo
Note:
Oder anders ausgedrückt: Da ich 

??VERTICAL
## Kategorie
* Objekte == Datentypen
* Morphismen == Funktionen
* Assoziativgesetz
Note: 

TODO:
Check out fp-ts gibt es dort eine compose funktion die man klauen kann?

Wie sieht vor allem die Typendefinition dafür aus.

Rewrite identity in TypeScript

??VERTICAL



??VERTICAL
## Ideen
* Was ergibt sich aus der Assoziativität?
 * Partition Friendly -> ich kann Dinge aufteilen 
    -> Gimly nimmt die 10 Orks, Legolas die anderen 10
 * Incremental -> Ich kann eines nach dem anderen bearbeiten
    -> Legolas feuert einen Pfeil nach dem anderen auf die Orks ab
* Funktor -> Separation of concerns
  * What to do (function to map)
  * When to do it (Functor  )
  