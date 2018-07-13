import { List } from "./sharepoint";
const siteURL = "http://localhost:8081";

function startApp(divName: string) {
    var elt = $(`#${divName}`);

    var list = new List(siteURL, "Project Tracker");

    list.getItems(function (items: Array<any>) {
        console.log(items);

        for (var i = 0; i < items.length; i++) {            
            elt.html(elt.html() + `<p>${items[i].Title}</p>`);
        }
    })
}

startApp("app");