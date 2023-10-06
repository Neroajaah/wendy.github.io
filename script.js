$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});
$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

ScrollReveal().reveal(
  "nav,#home,#experts,#about-container,.about-text,#about-home2,#about-home3,#about-home4,#map,.getin,#course-inner,.courses1,.details1",
  {
    origin: "left",
    distance: "200px",
  }
);

ScrollReveal().reveal(
  "#features,#home,#registration,#about-home,#about-container1,.about-text1,#blog-container,.form,#blog-container1,.courses,details",
  {
    origin: "right",
    distance: "200px",
  }
);

ScrollReveal().reveal("footer", {
  origin: "bottom",
  distance: "200px",
});
