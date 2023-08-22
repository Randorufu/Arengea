import $ from "https://cdn.skypack.dev/jquery@3.6.4";
$(document).ready(() => {
  const toggleButton = $('.show-btn');
  const items = document.querySelectorAll('.story > p');
  let index = 0;
  toggleButton.on('click', () => {
     $(items[index]).removeClass('hidden');
     $(items[index]).addClass('selected');
     $(items[index-1]).removeClass('selected');
     index = index + 1;
     $('html, body').scrollTop($(".show-btn").offset().top);
     if(index === items.length){
       $('.show-btn').addClass('hidden');
     }
  });
});