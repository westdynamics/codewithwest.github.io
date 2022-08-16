//window.alert("yello");

/*
const urlsPageTitle = "Codehub";

document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("nav a")){
        return;
    }
    e.preventDefault();
    urlRoute();
})

var urlRoutes = {   
    404: {
        template: "/template/404.html",
        title: "404 | " + urlsPageTitle,
        description: "Page not Found",
    },
    "/codehubhome": {
        template: "/template/codehubhome.html",
        title: "codeHubHome | " + urlsPageTitle,
        description: "This is CodeHub Page",
    },
    "/python": {
        template: "/template/python.html",
        title: "Python | " + urlsPageTitle,
        description: "This is the  python code hub  page",
    },
    "/c": {
        template: "/template/c.html",
        title: "C | " + urlsPageTitle,
        description: "This is c us Page",
    },
    
    "/webdev": {
        template: "/template/webdev.html",
        title: "Webdev | " + urlsPageTitle,
        description: "This is the code hub  page",
    },
    "/dart": {
        template: "/template/dart.html",
        title: "Dart | " + urlsPageTitle,
        description: "This is the code hub  page",
    },

};



const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandlers();

}
const urlLocationHandlers = async ()=> {
    var location = window.location.pathname;
    if (location.length == 0){
        location = "/codehubhome";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((Response)  => Response.text());
    document.getElementsByClassName("contents").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]')

}

window.onpopstate = urlLocationHandlers;
window.route = urlRoute;
urlLocationHandlers();

*/



//const pageTitle = "CodeHub";

const routes = {
    404: {
        template: "/template/404.html",
        title: "404 ",
        description: "Page not Found",
    },
    codehubhome: {
        template: "/codehubTemplates/codehubhome.html",
        title: "",
        description: "This is Home Page",
    },
    python: {
        template: "/codehubTemplates/python.html",
        title: ""  ,
        description: "This is About us Page",
    },
    c: {
        template: "/codehubTemplates/c.html",
        title: "",
        description: "This is the contact us page",
    },
    webdev: {
        template: "/codehubTemplates/webdev.html",
        title: "",
        description: "This is the contact us page",
    },
    dart: {
        template: "/codehubTemplates/dart.html",
        title: "",
        description: "This is the contact us page",
    },
};

const locationHandler = async () => {
    var location = window.location.hash.replace("#", "");
    if (location.length == 0){
        location = "codehubhome";
    }
    const routess = routes[location] || routes[404];
    const htmls = await fetch(routess.template).then((Response) => Response.text());
    document.getElementById("contents").innerHTML = htmls;
    document.title = routess.title;
    document.querySelector('meta[name="description"]').setAttribute("contents",routess.description);


};


window.addEventListener("hashchange", locationHandler);
locationHandler();

