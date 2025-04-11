let i = 0;
let txt = 'Hobby Artist! Sometimes other things?';
let speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Revealing sections stuff
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

window.onscroll = function () {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    document.getElementById("el").style.display = 'none';
  }
};

//arrow stuff
// Get the arrow element
let arrow = document.querySelector('.arrow');


function toggleArrowVisibility() {
  let sectionOne = document.querySelector('section'); 
  let sectionOneTop = sectionOne.getBoundingClientRect().top;

  if (sectionOneTop <= window.innerHeight && sectionOneTop >= 0) {
    arrow.style.display = 'block';  // Show the arrow
  } else {
    arrow.style.display = 'none';   // Hide the arrow
  }
}

window.addEventListener('scroll', toggleArrowVisibility);

toggleArrowVisibility();

// Gallery stuff
let currentIndex = 0;
let images = document.querySelectorAll('.gallery img');

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = 'flex';
  modalImage.src = images[index].src;
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

document.querySelectorAll('.gallery img').forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  
  const modalImage = document.getElementById('modalImage');
  modalImage.src = images[currentIndex].src;
}

//flowers stuff
// Function to make an element draggable
//stole this code from w3schools <3
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
      
        // Calculate the new position of the element
        let newTop = elmnt.offsetTop - pos2;
        let newLeft = elmnt.offsetLeft - pos1;
      
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
      
        // Restrict movement to within the viewport
        if (newTop < 0) newTop = 0; // Prevent going off the top
        if (newLeft < 0) newLeft = 0; // Prevent going off the left
        if (newLeft > viewportWidth - elmnt.offsetWidth) {
          newLeft = viewportWidth - elmnt.offsetWidth; // Prevent going off the right
        }
        if (newTop > viewportHeight - elmnt.offsetHeight) {
          newTop = viewportHeight - elmnt.offsetHeight; // Prevent going off the bottom
        }
      
        // Set the element's new position within the bounds
        elmnt.style.top = newTop + "px";
        elmnt.style.left = newLeft + "px";
      }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  // Get all draggable elements and apply the drag function to each one
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach(draggable => {
    dragElement(draggable);
  });

//Contact page stuff
document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    
    // Hide all other sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('hidden');
    });
  
    // Show contact section
    document.getElementById('contact').classList.remove('hidden');
  });
  
  function goBack() {
    // Hide contact section
    document.getElementById('contact').classList.add('hidden');
  
    // Show all other sections
    document.querySelectorAll('section:not(#contact)').forEach(section => {
      section.classList.remove('hidden');
    });
  
    // Scroll back to the top
    window.scrollTo(0, 0);
  }

