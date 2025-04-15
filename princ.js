let titolo = 'DAY 3'
console.log (titolo)

let stipendio = 'C guadagna 1600, CO guadagna invece 1800, chi guadagna più dei due?'
let stipendio2 = stipendio.match(/\d+/g)

const stipendio3 = stipendio2[0] > stipendio2[1] 
? 'c guadagna più di CO' 
: 'CO guadagna più di c'
console.log(stipendio3)



console.log(stipendio2[0])
sipnedio = stipendio.split(' ')
console.log(sipnedio)

for (i=0; i<sipnedio.lenght; i++){
  console.log(sipnedio[i]);
}
  

console.log(sipnedio.join(' '))
console.log(sipnedio[2])
console.log(stipendio.match('1600'))

let pecentage = 3 % 100
console.log(pecentage)

sipnedio.pop()
console.log(sipnedio)

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining = false
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  let spuffa = false
  spuffa
  ? console.log('si sta spuffando')
  : console.log('no non sta spuffando')



//POP BOX

//alert('ciao')

//let number = prompt('VALORE', 'Scrivi qui..')
//console.log(number)

//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box

//POP BOX

let firstName = 'Spuff'
let lastName = 'Spuffus'
let country = 'Spuffolandia'
let age = 99
let isMarried = false

console.log(typeof firstName)

const mmm='10'
const mmmm = 10
console.log(typeof mmm == typeof mmmm)
console.log(typeof Number.mmm == typeof mmmm)

const parasect = '9.8'
console.log(Number(Math.round(parasect)) == 10)

let major = 'python'
console.log(major.length)
let jj = 'jaron'
console.log(jj.length)

let isSame = jj.length == major.length
? 'sono uguali'
: 'non sono uguali'
console.log(isSame)

let random = Math.random()*1379
random > 100
? console.log(Math.round(random))
: console.log(null)

//let number = prompt('VALORE', 'Scrivi qui..')
//number.length > 10
//? console.log(number)
//: alert('insert a bigger name')

//let prompt1 = prompt ('Enter Area') 
//let prompt2 = prompt('Enter Base')
//const bitch = (prompt2*prompt1)/2
//console.log(bitch)//


//let perimeter1 = prompt ('enter side a')
//let perimeter2 = prompt ('enter side b')
//let perimeter3 = prompt ('enter side c')
//let result = (Number(perimeter1)+Number(perimeter2)+Number(perimeter3))
//console.log(result)


//let area1 = prompt ('Enter Base')
//let area2 = prompt ('Enter height')
//if (area1 == 11) {
//  alert('inserisci un altro numero')
//}
//console.log(Number(area1)*Number(area2))
//console.log(Number(area1*2)+Number(area2*2))

//let hour = prompt('inserisci quante ore fai settimanalmente')
//let rate = prompt ('inserisci quanto vieni pagato per ora')
//console.log(`La tua paga settimanale è di ${Number(rate)*Number(hour)} euro alla settimana`)
//console.log(`La tua paga giornaliera è di ${Number(rate)*Number(hour/5)} euro al giorno`)
//console.log(`La tua paga mensile è di ${Number(rate*4)*Number(hour)} euro al mese`)
//if (hour < 20) alert('lavori troppo poco');

//let yourName = prompt ('Inserisci il tuo nome')
//if (yourName.length <= 7) alert('Il tuo nome è corto');
//if (yourName.length > 7) alert('Il tuo nome è lungo');


//let nome = prompt('inserisci il tuo nome')
//let cognome = prompt('inserisci il tuo cognome')
//if (cognome.length > nome.length)  console.log(`Il tuo cognome ${cognome} è più lungo del tuo nome ${nome}`);
//if (cognome.length < nome.length) console.log(`Il tuo cognome ${cognome} è più corto del tuo nome ${nome}`);
//if (cognome.length == nome.length) console.log(`Il tuo cognome ${cognome} è lungo uguale al tuo nome ${nome}`);
// cognome.length > nome.length
? console.log('più lungo')
: console.log('più corot')

//let myAge = prompt('insert number')
//let yourAge = prompt ('insert number')
//let agge = Number(myAge)-Number(yourAge)
//if (agge>0) console.log(`I am ${agge} older than you`);
//if (agge <0) console.log(`I am ${agge} younger than you`);
//if (agge == 0) console.log(`We have the same age`);

//let drive = prompt('enter your age')
//drive >= 18
//? alert('you can drive')
//: alert('you cant drive')


//let live = prompt('enter your age')
//const anno = 365.25*24*60*60
//console.log(`Hai vissuto ${Number(live)*anno} secondi`)
//if (Number(live)*anno > 1000) console.log('grande!');


let youtube = prompt('inserisci VISUAL mensili')
let reparto = prompt ('inserisci il tuo settore tra gaming, finanza o altro')
const guadagno = (Number(youtube)/1000)
if (reparto == 'gaming') console.log(guadagno*3.5);
if (reparto == 'finanza') console.log(guadagno*6);
if (reparto == 'altro') console.log(guadagno*3);



let tempo = prompt ('inserisci età')
resultante = tempo*365*24*60*60
console.log(`Hai vissuto ${resultante}secondi`)
resultante > 1000 ? 'grande' :'coglione'
