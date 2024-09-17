
document.addEventListener("click",function (e){
   if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    $('gallery-modal').modal(options)
    myModal.show();
   }
})
document.addEventListener('DOMContentLoaded', function() {
   // Show the loading icon
   const loadingIcon = document.getElementById('loading');
   loadingIcon.style.display = 'none'; // Initially hidden
   
   // Show the loading icon before page unload
   window.addEventListener('beforeunload', function() {
     loadingIcon.style.display = 'flex';
   });
 });