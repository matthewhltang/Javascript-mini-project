const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');



sidebarToggle.addEventListener('click', function() {
    /*if(sidebar.classList.contains('show-sidebar')) {
        console.log("YES for .links");
        sidebar.classList.remove('show-sidebar');
    }
    else {
        console.log("No");
        sidebar.classList.add('show-sidebar');
    }*/
    
    console.log(sidebar.classList);
    sidebar.classList.toggle("show-sidebar");
});



sidebar.addEventListener('click', function() {
    sidebar.classList.toggle("show-sidebar");
})