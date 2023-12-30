const seatElm = document.querySelectorAll('.seat')
const selectElm = document.querySelector('#movie');
const totalSeat = document.querySelector('#total');
const movieName = document.querySelector('#moviename');
const totalPrice = document.querySelector('#totalP');
const containerSeat = document.querySelector('.container')
let ticketPrice = +selectElm.value;



const updateSelectedSeat = () =>{

    const selectedSeat = document.querySelectorAll('.seat.selected');
    let totalSeats = totalSeat.innerHTML = selectedSeat.length
    totalPrice.innerHTML = totalSeats * ticketPrice
  
    

}

selectElm.addEventListener('change', (e)=>{

   ticketPrice = +e.target.value
   updateSelectedSeat()

   let selectedMovie = selectElm.value
 

   if(selectedMovie === '12'){

    movieName.innerHTML = 'Mission Impossible'
   } else if(selectedMovie === '10'){
    movieName.innerHTML = 'Spider Man'

   } else if(selectedMovie === '8'){

    movieName.innerHTML = 'Barbie'

   } else if(selectedMovie === '5'){
    movieName.innerHTML = 'Avatar'
   }
    
})


containerSeat.addEventListener('click', (e)=>{


   if( e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

       e.target.classList.toggle('selected')
       updateSelectedSeat()

}

})

