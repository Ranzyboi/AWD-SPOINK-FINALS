$(document).ready(function(){
  // This function is for the back button in lab rooms
  $(".btn-back").click(function(){
    window.location.href = "index.html";
  });

  //set default value
  if(sessionStorage.getItem("view") == null){
    sessionStorage.setItem("view", "visitor");
  }
  var view = sessionStorage.getItem("view");
  // navbar links
  const viewRoomsLink = $("#viewRoomsLink");
  const signInLink = $("#signInLink");
  const viewProfileLink = $("#viewProfileLink");
  const logoutBtn = $("#logoutBtn");

  // views links
  const techViewLink = $("#technicianViewLink");
  const studentViewLink = $("#studentViewLink");
  const visitorViewLink = $("#visitorViewLink");

  studentViewLink.on("click", function(){
    signInLink.addClass("d-none").fadeOut();
    viewProfileLink.removeClass("d-none").fadeIn();
    logoutBtn.removeClass("d-none").fadeIn();
    studentViewLink.addClass("d-none").fadeOut();
    visitorViewLink.removeClass("d-none").fadeIn();
    techViewLink.removeClass("d-none").fadeIn();
    sessionStorage.setItem("view", "student");
  });

  techViewLink.on("click", function(){
    signInLink.addClass("d-none").fadeOut();
    viewProfileLink.addClass("d-none").fadeOut();
    logoutBtn.removeClass("d-none").fadeIn();
    studentViewLink.removeClass("d-none").fadeIn();
    techViewLink.addClass("d-none").fadeOut();
    visitorViewLink.removeClass("d-none").fadeIn();
    sessionStorage.setItem("view", "tech");
  });

  visitorViewLink.on("click", function(){
    signInLink.removeClass("d-none").fadeIn();
    viewProfileLink.addClass("d-none").fadeOut();
    logoutBtn.addClass("d-none").fadeOut();
    studentViewLink.removeClass("d-none").fadeIn();
    visitorViewLink.addClass("d-none").fadeOut();
    techViewLink.removeClass("d-none").fadeIn();
    sessionStorage.setItem("view", "visitor");
  });

  // Initial animation based on sessionStorage value
  if(view == "student"){
    signInLink.hide();
    viewProfileLink.show();
    logoutBtn.show();
    studentViewLink.hide();
    visitorViewLink.show();
    techViewLink.show();
  } else if(view == "tech") {
    signInLink.hide();
    viewProfileLink.hide();
    logoutBtn.show();
    studentViewLink.show();
    techViewLink.hide();
    visitorViewLink.show();
  } else if(view == "visitor"){
    signInLink.show();
    viewProfileLink.hide();
    logoutBtn.hide();
    studentViewLink.show();
    visitorViewLink.hide();
    techViewLink.show();
  }
});
