const seatElm = document.querySelectorAll('.seat')
const selectElm = document.querySelector('#movie');
const totalSeat = document.querySelector('#total');
const movieName = document.querySelector('#moviename');
const totalPrice = document.querySelector('#totalP');
const containerSeat = document.querySelector('.container')
const ticketPrice = +selectElm.value;



const updateSelectedSeat = () =>{

    const selectedSeat = document.querySelectorAll('.seat.selected');
    let totalSeats = totalSeat.innerHTML = selectedSeat.length
    totalPrice.innerHTML = totalSeats * ticketPrice
  
    

}


containerSeat.addEventListener('click', (e)=>{


   if( e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){

       e.target.classList.toggle('selected')
       updateSelectedSeat()

}

})

