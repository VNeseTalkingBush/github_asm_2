//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// control navbar it-technologies
function security(){
  // active
  document.getElementById('security').className = 'nav-link active'
  document.getElementById('pills-security').className = 'tab-pane fade show active'

  // deactive
  document.getElementById('smallComputingDevice').className = 'nav-link'
  document.getElementById('pills-smallComputingDevice').className = 'tab-pane fade'

  document.getElementById('ai').className = 'nav-link'
  document.getElementById('pills-ai').className = 'tab-pane fade'

  document.getElementById('blockchain').className = 'nav-link'
  document.getElementById('pills-blockchain').className = 'tab-pane fade'
}

function small(){
  // active
  document.getElementById('smallComputingDevice').className = 'nav-link active'
  document.getElementById('pills-smallComputingDevice').className = 'tab-pane fade show active'

  // deactive
  document.getElementById('security').className = 'nav-link'
  document.getElementById('pills-security').className = 'tab-pane fade'

  document.getElementById('ai').className = 'nav-link'
  document.getElementById('pills-ai').className = 'tab-pane fade'

  document.getElementById('blockchain').className = 'nav-link'
  document.getElementById('pills-blockchain').className = 'tab-pane fade'
}

function ai(){
  // active
  document.getElementById('ai').className = 'nav-link active'
  document.getElementById('pills-ai').className = 'tab-pane fade show active'

  // deactive
  document.getElementById('security').className = 'nav-link'
  document.getElementById('pills-security').className = 'tab-pane fade'

  document.getElementById('smallComputingDevice').className = 'nav-link'
  document.getElementById('pills-smallComputingDevice').className = 'tab-pane fade'

  document.getElementById('blockchain').className = 'nav-link'
  document.getElementById('pills-blockchain').className = 'tab-pane fade'
}

function blockchain(){
  // active
  document.getElementById('blockchain').className = 'nav-link active'
  document.getElementById('pills-blockchain').className = 'tab-pane fade show active'

  // deactive
  document.getElementById('security').className = 'nav-link'
  document.getElementById('pills-security').className = 'tab-pane fade'

  document.getElementById('ai').className = 'nav-link'
  document.getElementById('pills-ai').className = 'tab-pane fade'

  document.getElementById('smallComputingDevice').className = 'nav-link'
  document.getElementById('pills-smallComputingDevice').className = 'tab-pane fade'
}

// light on - off
function turnOff(){
  var off = document.getElementById("light")
  off.src = "/image/light-off.png"

  var btnOff = document.getElementById("btnOff")
  btnOff.className = "btn btn-danger active-button"

  var btnOn = document.getElementById("btnOn")
  btnOn.className = "btn btn-success"

  document.getElementById('projectIdea').style.backgroundImage = 'linear-gradient(to bottom, #000000, #000957, #020072a6)'

  document.getElementById('content').style.opacity = '0'

  document.getElementById('text').style.opacity = '1'
}

function turnOn(){
  var on = document.getElementById("light")
  on.src = "/image/light-on.png"

  var btnOn = document.getElementById("btnOn")
  btnOn.className = "btn btn-success active-button"

  var btnOff = document.getElementById("btnOff")
  btnOff.className = "btn btn-danger"

  document.getElementById('projectIdea').style.backgroundImage = 'linear-gradient(to bottom, #000d49, #bbc900, #e8ff64fa)'

  document.getElementById('content').style.opacity = '1'

  document.getElementById('text').style.opacity = '0'
}