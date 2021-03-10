
const calendar = document.querySelector('.root');
const calendarList = document.createElement('ul');
//calendarList.classList.add('.style')
calendar.appendChild(calendarList);
console.log(calendar)



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
 
const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];//.sort( () => .5 - Math.random() );
console.log(shuffleArray(dates))


function backgroundColor(e) {
  e.target.classList.add('green');
}

 dates.forEach(function(date){
   const box = document.createElement('li');
   //box.classList.add('style2')
   box.addEventListener('click', backgroundColor);
   calendarList.appendChild(box);
   box.innerText =+ date
 })
