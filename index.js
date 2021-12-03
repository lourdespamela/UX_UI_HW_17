// attempt 1 $("#project-scroll").click(function() {
//     document.getElementById("scroll-landing").scrollIntoView();
// });

// attempt 2 $(document).ready(function () {  
//     $('#project-scroll').click(function(event){
//       $('#scroll-landing').scrollIntoView(true);
//     });
// });

// attempt 3 $(document).ready(function () {
//     $('#project-scroll').click(function (event) {
//       event.preventDefault();
//       scrollToElement($('#scroll-landing'));
//     });
  
//     function scrollToElement(elem) {
//       $('body').animate({
//           scrollTop: elem.offset().top
//       }, 2000);
//     }
//   });

function down() {
    document.getElementById("scroll-landing").scrollIntoView();
  }