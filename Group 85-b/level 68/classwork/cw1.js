//დაწერეთ პროცესორის კოდი, ვითომ შემოდის მოთხოვნა, რომელიც თქვენ უნდა დაამუშავოთ. მოთხოვნის მისამარდან გამომდინარე, მომხმარებელი გადაიყვანეთ იმავე მისამართზე. გამოიყენეთ ქვემოთ მითითებული კოდი:
//const routes = [
  //{ path: "/", content: "content for home page", needsLogin: false },
  //{ path: "/dashboard", content: "content for dashboard", needsLogin: true },
  //{ path: "/messages", content: "content for messages", needsLogin: true }
//];


const routes = [
  { path: "/", content: "content for home page", needsLogin: false },
  { path: "/dashboard", content: "content for dashboard", needsLogin: true },
  { path: "/messages", content: "content for messages", needsLogin: true }
];
const isLoggedIn = true;
function processRequest(path, isLoggedIn) {
    for(let i = 0; i < routes.length; i++) {
        if(routes[i].path === path) {
            if(routes[i].needsLogin && !isLoggedIn) {
                console.log("გთხოვთ, გაიარეთ ავტორიზაცია");
                return;
            }
            console.log(routes[i].content);
            return;
        }
    }
    console.log("404 Not Found");
}
processRequest("/dashboard", isLoggedIn);
processRequest("/messages", isLoggedIn);
processRequest("/", isLoggedIn);
processRequest("/unknown", isLoggedIn);
