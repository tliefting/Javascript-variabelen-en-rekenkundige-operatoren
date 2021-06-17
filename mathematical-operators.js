console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================
const sum1 = 4+5;
console.log(sum1);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================
const sum2 = 7*52;
console.log(sum2);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================
const sum3 = (4+3)*7;
console.log(sum3);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================
const sum4 = (36/6)*2;
console.log(sum4);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================
const sweet= "zoet";
const juicy="sappig";
console.log(sweet+juicy);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================
const firstName="Thierry";
const lastName="Liefting";
console.log(firstName+" "+lastName);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================
const city="Spanbroek";
const state="Noord-Holland";
const location=(city+" , "+ state);
console.log(location);
