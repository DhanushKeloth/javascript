const routes = {
  home: `<h1>Home</h1>
            <p>Welcome to the home page!</p>`,
  about: `<h1>About</h1>
            <p>This is the about page.</p>`,
  contact:`<h1>Contact</h1>
            <p>This is the contact page.</p>`,
  notfound:`<h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>`,
};
let app = document.getElementById("app");
window.location.hash = "#home"; //set the default page to home
function router() {
  const hash = window.location.hash.slice(1); //#home => home
  app.innerHTML = routes[hash] || routes.notfound;  //set the content of the app div to the corresponding route
}
window.addEventListener("hashchange", router); //change the page when the hash changed in the url
window.addEventListener("load", router); //load the correct page on initial load
