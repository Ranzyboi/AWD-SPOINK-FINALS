$(document).ready(function(){
  // This code is to generate the current date
  document.getElementById('date').valueAsDate = new Date();

  // navbar links
  const viewRoomsLink = $("#viewRoomsLink");
  const signInLink = $("#signInLink");
  const viewProfileLink = $("#viewProfileLink");
  const logoutBtn = $("#logoutBtn");

  // NAV BAR
  const view = sessionStorage.getItem("view");
  
  // reservation seats
  const resSeatsP = $(".resSeatsContainer p")

  if(view == "student"){
    signInLink.addClass("d-none");
    viewProfileLink.removeClass("d-none");
    logoutBtn.removeClass("d-none");

    for(p of resSeatsP){
      p.classList.add("d-none");
    }

  } else if(view == "tech") {
    signInLink.addClass("d-none");
    viewProfileLink.addClass("d-none");
    logoutBtn.removeClass("d-none");

    for(p of resSeatsP){
      p.classList.add("d-none");
    }
  } else if(view == "visitor"){
    signInLink.removeClass("d-none");
    viewProfileLink.addClass("d-none");
    logoutBtn.addClass("d-none");
  }

  // The next lines of code is for reserving seats
  const form = document.querySelector('.reserve-form');
  form.addEventListener('submit', (event) => {
    // VISITOR
    if(view == "visitor"){
      alert('Please sign in to reserve a seat.');
    } 
    // STUDENT
    else if(view == "student"){
      event.preventDefault(); // Prevent form submission
      const checkedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
      const checkedId = checkedCheckboxes.map((checkbox) => checkbox.id);
      var date = document.querySelector("#date").value;
      var time = document.querySelector("#time").value;

      var reserve;
      var anonymous;
      var dateRequested;
      const reservedSeatsContainer = document.querySelector(".resSeatsContainer");
      var seatNumbers = [];
      var name = "Anonymous";
      var profileLink = "";


      // this for loop is to uncheck the boxes after selecting them
      for(let i = 0; i < checkedCheckboxes.length; i++){
        checkedCheckboxes[i].checked = false;
      }
  
      if (date !== "" && time !== "" && checkedCheckboxes != "") {
        reserve = confirm(`Reserve the selected seats on ${date} from ${time}?`);
  
        if(reserve == true){
          anonymous = confirm(`Do you want to reserve anonymously [ok for YES | cancel for NO]?`);
          if(anonymous == true){
            // code to store the email in database as anonymous

            for(let i = 0; i < checkedId.length; i++){
              let btn = document.querySelector(`#${checkedId[i]}`);
              let labelElement = document.querySelector(`label[for="${checkedId[i]}"]`);
              labelElement.classList.replace("btn-outline-info", "btn-danger");
              btn.disabled = true;
              seatNumbers.push(labelElement.textContent);
            }  
            dateRequested = new Date()
            alert(`Seats reserved on ${dateRequested.getMonth()+1} / ${dateRequested.getDate()} / ${dateRequested.getFullYear()} Time: ${dateRequested.getHours()} : ${dateRequested.getMinutes()} : ${dateRequested.getSeconds()} `);
            
            // create a paragraph element
  
            for(s of seatNumbers){
              let parag = $("<p>");
              parag.addClass("text-white custom-font text-center");
              parag.html(`Seat #${s}: ${name}`);
              reservedSeatsContainer.append(parag[0]);
            }
          } else {
            // code to store the logged in email in database
            name = "John Jacob";
            profileLink = "John Jacob.html"
           
            for(let i = 0; i < checkedId.length; i++){
              let btn = document.querySelector(`#${checkedId[i]}`);
              let labelElement = document.querySelector(`label[for="${checkedId[i]}"]`);
              labelElement.classList.replace("btn-outline-info", "btn-danger");
              btn.disabled = true;
              seatNumbers.push(labelElement.textContent);
            }  
            dateRequested = new Date()
            alert(`Seats reserved on ${dateRequested.getMonth()+1} / ${dateRequested.getDate()} / ${dateRequested.getFullYear()} Time: ${dateRequested.getHours()} : ${dateRequested.getMinutes()} : ${dateRequested.getSeconds()} `);
            
            // create a paragraph element
  
            for(s of seatNumbers){
              let parag = $("<p>");
              parag.addClass("text-white custom-font text-center");
              parag.html(`Seat #${s}: <a class="link-offset-3 link-offset-2-hover text-white" href="${profileLink}">${name}`);
              reservedSeatsContainer.append(parag[0]);
            }
          }
        }
      } else {
        alert('Please select a date and a time and the seats you want to reserve!');
      }  
      
    }

    // TECHNICIAN
    else if(view == "tech") {
      event.preventDefault(); // Prevent form submission
  
      const checkedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
      const checkedId = checkedCheckboxes.map((checkbox) => checkbox.id);
      var date = document.querySelector("#date").value;
      var time = document.querySelector("#time").value;
  

      // this for loop is to uncheck the boxes after selecting them
      for(let i = 0; i < checkedCheckboxes.length; i++){
        checkedCheckboxes[i].checked = false;
      }
  
      var anonymous;
      const reservedSeatsContainer = document.querySelector(".resSeatsContainer");
      var seatNumbers = [];
      var name = "Anonymous";
      var profileLink = "";

      if (date !== "" && time !== "" && checkedCheckboxes != "") {
        anonymous = confirm('Does the student want to reserve anonymously [ok for YES | cancel for NO]?');
        if(anonymous == true){  
          // code for storing anonymous instead of the email of student in database

          for(let i = 0; i < checkedId.length; i++){
            let btn = document.querySelector(`#${checkedId[i]}`);
            let labelElement = document.querySelector(`label[for="${checkedId[i]}"]`);
            labelElement.classList.replace("btn-outline-info", "btn-danger");
            btn.disabled=true;
            seatNumbers.push(labelElement.textContent);
          }

          for(s of seatNumbers){
            let parag = $("<p>");
            parag.addClass("text-white custom-font text-center");
            parag.html(`Seat #${s}: ${name}`);
            reservedSeatsContainer.append(parag[0]);
          }
        } else {
          email = prompt(`Enter email of student:`);
          name = "John Benison";
          profileLink = "john benison.html";

          if(email === ""){
            alert('Please enter the email of the student!');
          }
          else if(email == null){
            //do nothing
          }
          else{
            for(let i = 0; i < checkedId.length; i++){
              let btn = document.querySelector(`#${checkedId[i]}`);
              let labelElement = document.querySelector(`label[for="${checkedId[i]}"]`);
              labelElement.classList.replace("btn-outline-info", "btn-danger");
              btn.disabled=true;
              seatNumbers.push(labelElement.textContent);
            }
            
              // create a paragraph element

            for(s of seatNumbers){
              let parag = $("<p>");
              parag.addClass("text-white custom-font text-center");
              parag.html(`Seat #${s}: <a class="link-offset-3 link-offset-2-hover text-white" href="${profileLink}">${name}`);
              reservedSeatsContainer.append(parag[0]);
            }
            
            $(document).ready(function(){
    // Animation for navbar links
    const navbarLinks = $(".navbar-nav .nav-link");
    navbarLinks.each(function(index) {
        $(this).hover(
            function() {
                $(this).addClass("animate__animated animate__bounce");
            },
            function() {
                $(this).removeClass("animate__animated animate__bounce");
            }
        );
    });

    // Animation for reserved seats container
    const resSeatsContainer = $(".resSeatsContainer");
    resSeatsContainer.hover(
        function() {
            $(this).addClass("animate__animated animate__pulse");
        },
        function() {
            $(this).removeClass("animate__animated animate__pulse");
        }
    );

    // Animation for reserve button
    const reserveBtn = $("#reserveBtn");
    reserveBtn.hover(
        function() {
            $(this).addClass("animate__animated animate__rubberBand");
        },
        function() {
            $(this).removeClass("animate__animated animate__rubberBand");
        }
    );

    // Animation for back button
    const backButton = $(".btn-back");
    backButton.hover(
        function() {
            $(this).addClass("animate__animated animate__heartBeat");
        },
        function() {
            $(this).removeClass("animate__animated animate__heartBeat");
        }
    );
});

          }
        }
      } else {
        alert('Please select a date and a time and the seats you want to reserve!');
      }  
    }
  });
  })
  