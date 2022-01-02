$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
      

      $(".navbar-toggle").click(() => {
        let visibility = $(".navbar-toggle").get(0).getAttribute("data-visible");
        if (visibility === "false") {
          $(".navbar-toggle").get(0).setAttribute("data-visible", "true");
          $(".navbar").get(0).setAttribute("aria-visible", "true");
        } else {
          $(".navbar-toggle").get(0).setAttribute("data-visible", "false");
          $(".navbar").get(0).setAttribute("aria-visible", "false");
        }
      });
})