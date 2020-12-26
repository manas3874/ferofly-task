const parallax = document.querySelectorAll("#parallax");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  //   console.log(ev.target.defaultView.scrollY);
  parallax[0].style.transform = `translate3d(0px,${offset * -0.3}px,0px)`;
  //   parallax[1].style.transform = `translate3d(0px,${
  //     offset + offset * -0.7
  //   }px,0px)`;
  //   console.log(
  //     // offset,
  //     // parallax[0].clientHeight,
  //     window.innerHeight,
  //     parallax[0].offsetTop - offset,
  //     parallax[1].offsetTop - offset,
  //     parallax[2].offsetTop - offset
  //   );
  //   parallax[0].style.backgroundPositionY = offset * -0.3 + "px";
  // parallax[1].style.backgroundPositionY = offset + offset * -0.9 + "px";
  // parallax[2].style.backgroundPositionY = offset + offset * -0.9 + "px";
  //   parallax.forEach((item) => {
  //     if (item.offsetTop - offset < window.innerHeight) {
  //       item.style.transform = `translate3d(0px,${item.offsetTop * -0.6}px,0px)`;
  //     }
  //     //   item.style.backgroundPositionY = offset + offset * -1.3 + "px";
  //   });
});
