var arr = [
   {
    team  :'CSK',
    primary :'yellow',
    secondary :'blue',
    fullName : 'Chennai Super King',
    trophies : 5,
    captain : 'Gaikwad',
   },
   {
    team  :'RCB',
    primary :'red',
    secondary :'black',
    fullName : 'Royal Challengers Bangalore',
    trophies : 1,
    captain : 'Patidar',
   },
   {
    team  :'MI',
    primary :'blue',
    secondary :'gold',
    fullName : 'Mumbai Indians',
    trophies : 5,
    captain : 'Hardik',
   },
   {
    team  :'KKR',
    primary :'purple',
    secondary :'gold',
    fullName : 'Kolkata Knight Riders',
    trophies : 3,
    captain : 'Rahane',
   },
   {
    team  :'RR',
    primary :'pink',
    secondary :'blue',
    fullName : 'Rajasthan Royals',
    trophies : 1,
    captain : 'Parag',
   },
   {
    team  :'SRH',
    primary :'orange',
    secondary :'black',
    fullName : 'Sunrisers Hyderabad',
    trophies : 2,
    captain : 'kishan',
   },
   {
    team  :'PBKS',
    primary :'red',
    secondary :'white',
    fullName : 'Punjab Kings',
    trophies : 0,
    captain : 'shreyas',
   },
   {
    team  :'GT',
    primary :'navy blue',
    secondary :'golden',
    fullName : 'Gujrat Titans',
    trophies : 1,
    captain : 'Gill',
   },
]





let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');
let fullform = document.querySelector('#fullname')
let trophies = document.querySelector('#trophies')
let captain = document.querySelector('#captain')


btn.addEventListener("click",function(){
    let winner = arr[Math.floor(Math.random()*arr.length)];
     console.log(winner.team)
     h1.innerHTML = winner.team
     h1.style.backgroundColor = winner.primary
     fullform.innerHTML = winner.fullName
     trophies.innerHTML = winner.trophies
     captain.innerHTML = winner.captain
    
})
   
