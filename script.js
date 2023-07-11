//jQuery shorthand to ensure code is executed after the browser has finished rendering all elements in HTML

$(function () { 
  
//created current 24-hr clock time via dayjs()
 const hr = dayjs().format('HH');

//color coding time block to each element  
 const colorCode = () => {
  $('.time-block').each(function(){
    const timeBlock = $(this).id;// 'this' keyword directs to the current element being iterated 
  
 
//conditional statement rendering color coding to represent present, future, and past depending on the current hr 
  if(timeBlock === hr) {
    $(this).removeClass('past future').addClass('present');
    } else if (timeBlock > hr) {
    $(this).removeClass('past present').addClass('future');
    } else {
    $(this).removeClass('present future').addClass('past');
    }
  })
 }

//display the current date/time to header of HTML
const dtHeader = () => {
  const currentDay = $('#currentDay');
  const date = dayjs().format('ddd. MMMM D, YYYY');
  const time = dayjs().format('hh:mm:ss a');

  currentDay.text(`${date} | ${time}`);
}

// creating an eventListenter to 'save' local storage fxn, once 'save' is clicked 

const saveBtn  = () => {
  $('.btn').on('click', function (){
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('textarea').val(); // input from user

      localStorage.setItem(key, value);
  })
}

//user abe to render value when page is refreshed

const grabItem = () => {
  $('.time-block').each(function () {
    const key = $(this).attr('id');
    const value = $(this).localStorage.getItem(key);

    $(this).children('textearea').val(value)
  })
}

// call fxns here and interval set to update every second













});






 
  // const hr = dayjs().format('HH');
 
  
  // const colorCode = () => {
    // $('.time-block').each(function() {
      // const timeBlock = this.id; 
      
      
      // if (timeBlock === hr) {
        // $(this).removeClass('past future').addClass('present');
      // } else if (timeBlock > hr) {
        // $(this).removeClass('past present').addClass('future');
      // } else {
        // $(this).removeClass('present future').addClass('past');
      // }
    // })
  // }

  
  // const dtHeader = () => {
    // const currentDay = $('#currentDay');
    // const date = dayjs().format('ddd. MMMM D, YYYY');
    // const time = dayjs().format('hh:mm:ss a');

    // currentDay.text(`${date} | ${time}`);
   
  // }

  
  // const saveBtn = () => {
    // $('.btn').on('click', function () {
      // const key = $(this).parent().attr('id');
      // const value = $(this).siblings('textarea').val();

      // localStorage.setItem(key, value);
    // })
  // }

  
  // const grabEvent = () => {
    // $('.time-block').each(function() {
      // const key = $(this).attr('id');
      // const value = localStorage.getItem(key);

      // $(this).children('textarea').val(value);
    // })
  // }

  
  // setInterval(colorCode, 1000);
  // setInterval(dtHeader, 1000);
  // saveBtn();
  // grabEvent();


