const urlPageTitle = "Home";

document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("ul li a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

const urlRoutes = {
    404: {
        template: "/template/404.html",
        title: "404 | " + urlPageTitle,
        description: "Page not Found",
    },
    "/": {
        template: "/template/index.html",
        title: "Home | " + urlPageTitle,
        description: "This is Home Page",
    },
    "/codehub": {
        template: "/template/codehub.html",
        title: "Contact Us | " + urlPageTitle,
        description: "This is the code hub  page",
    },
    "/about": {
        template: "/template/about.html",
        title: "About Us | " + urlPageTitle,
        description: "This is About us Page",
    },
    
    "/privacy": {
        template: "/template/privacy.html",
        title: "Contact Us | " + urlPageTitle,
        description: "This is the code hub  page",
    },
    "/signin": {
        template: "/template/signin.html",
        title: "Contact Us | " + urlPageTitle,
        description: "This is the code hub  page",
    },
    

};



const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();

}
const urlLocationHandler = async () => {
    const location = window.location.pathname;
    if (location.length == 0){
        location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((Response)  => Response.text());
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]')

}

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();