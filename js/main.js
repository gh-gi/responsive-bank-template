// W3Schools fixed header on scroll, refer to https://www.w3schools.com/howto/howto_js_sticky_header.asp  
      window.onscroll = function() {myFunction()};
      
      var header = document.getElementById("sticky-nav");
      var sticky = header.offsetTop;
      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          document.getElementById("content-container").style.paddingTop = "65px"; // adding code for padding equal to height of main-nav element to prevent page jumping on scroll 
        } else {
          header.classList.remove("sticky");
          document.getElementById("content-container").style.paddingTop = "0px"; // removing padding previously added for no scroll
        }
      }

// Responsive menu bars for mobile
      const toggleButton = document.getElementById("toggle-button");
       // console.log(toggleButton); //testing

      const navlist = document.getElementById("nav-list");
      // console.log(navlist); //testing

      toggleButton.addEventListener("click", toggleshowfn);

      function toggleshowfn () {
        navlist.classList.toggle("toggleshow");
      }

// JqueryUI tabs 
      $(function(){
        $("#tabs").tabs();
      });

// JqueryUI accordion
      $(function(){
        $("#accordion").accordion({
          heightStyle: "content" // height based on content rather than same height for all accordion sections.
        });
      });


  
