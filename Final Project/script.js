
   /* Nav Bar Side Bar */
   function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
        if (mySidebar.style.display === "block") {
            mySidebar.style.display = "none";
          } else {
            mySidebar.style.display = "block";
          }
    }
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
  /*Shopping PopUp */
    function openPopup(imageSrc) {
        const popup = document.querySelector('.popup-image');
        const popupImage = document.querySelector('#popupImage');
        
        popup.style.display = 'flex'; 
        popupImage.src = imageSrc;    
    }
    
    function closePopup() {
        document.querySelector('.popup-image').style.display = 'none';
    }
/* Carousel Slide */
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
    
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
    
        const offset = -currentSlide * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    setInterval(nextSlide, 5000);

    /* FAQ Accordian Panel */
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }