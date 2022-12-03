var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
}


//  Registratio record 
// https://script.google.com/macros/s/AKfycbwZUShbcscBpyonC_9xRikUfICVcQXbRp0DxAPg3l_k6tYoyqRnBpXQhvn0OS4RK2AT1w/exec

fetch('https://script.google.com/macros/s/AKfycbwZUShbcscBpyonC_9xRikUfICVcQXbRp0DxAPg3l_k6tYoyqRnBpXQhvn0OS4RK2AT1w/exec')
.then((res)=> res.json()).then(data => {
   console.log(data)
   const table = document.querySelector('.regData');
   var check = true;
   html = ''

   data.data.forEach(ele => {
      if(check == true){
         html += ` <tr class="RegThed">
         <th>${ele.name}</th>
         <th>${ele.branch}</th>
         <th>${ele.year}</th>
       </tr>`;
         check = false
      }else{
         html += ` <tr>
         <td>${ele.name}</td>
         <td>${ele.branch}</td>
         <td>${ele.year}</td>
       </tr>`;
      }
   })
   table.innerHTML = html;
})