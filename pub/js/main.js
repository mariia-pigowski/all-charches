MENU = {
    "Розклад Богослужінь": "https://docs.google.com/document/d/e/2PACX-1vRiXZbzC6yLChaScQPFxYBIZ4enH7qYNynOME6qwcVEN7d0NlUSfM7XjMzHEmCrjQ0bLkvnS4qFeWME/pub?embedded=true",
    "Служителі": "https://docs.google.com/document/d/e/2PACX-1vTk4ViPH-QpKiqd8mkH-BnBozHNEWHUWuIEbhw_fbl8jAJQGhbUgLJNKO5-ldh1LcsS2y5oDz6137Hb/pub?embedded=true"
}

function init() {
    new Vue({
        "el": '#app',
        "data": {
            "menu": MENU,
            "mainContent": ""
        },
        "methods": {
            "select": function(link) {
                console.log(link);
                this.mainContent=link;
            }
        }
    });
}
