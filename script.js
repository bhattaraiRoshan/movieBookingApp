const seatElm = document.querySelectorAll('.seat')



seatElm.forEach((elm, index)=>{

    elm.addEventListener('click', ()=>{
        
        

        
        elm.classList.value === 'seat selected' ? elm.classList.remove('selected') : elm.classList.add('selected')
         if(elm.classList.value === 'seat occupied selected'){
            alert('Seat has been already occupied. Please select another seat!') 
            return
         }
    })

})