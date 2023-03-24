/* https://www.youtube.com/watch?v=AwicscsvGLg */

// Local Storage -- Chrome Inspect > Application > Local Storage > Key & Value
localStorage.setItem('breakfast','cereal');
console.log(localStorage.getItem('breakfast'));

localStorage.removeItem('breakfast'); //remove localStorage
localStorage.clear(); //remove all localStorage


// Session Storage -- Chrome Inspect > Application > Local Storage > Key & Value
sessionStorage.setItem('breakfast','eggs');
console.log(sessionStorage.getItem('breakfast'));



// Cookies
document.cookie = "hello=true";
document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "person=beau; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

document.cookie = "person=; expires=Mon, 13 Jun 1970 17:10:00 GMT; path=/";

console.log(document.cookie);