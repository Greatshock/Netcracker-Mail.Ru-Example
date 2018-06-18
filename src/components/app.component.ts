"use strict";

// FIRST TASK ON TYPESCRIPT
import { ModalComponent } from './modal.component';
import { SelectComponent } from './select.component'

class AppComponent {

    private modal = new ModalComponent();
    private select = new SelectComponent();

    constructor() {
        this.modal.modalLog();
        this.select.selectLog();
    }
}

let app = new AppComponent();

/* --------------------------------------------- CONFIGURATIONS ----------------------------------------------------- */
const DYNAMIC_WIDGETS_IMPLEMENTATION: number = 1; // Switch to 0 to use implementation with fetch
window.onscroll = scrollYHandlerUsingAsyncAwait;

// HELPER FUNCTIONS
function getRandomColor(): string {
    let letters: string = "0123456789ABCDEF";
    let color:string = "#";
    for (let i = 0; i < 6; i++)
        color += letters[Math.floor(Math.random() * 16)];

    return color;
}
function createWidget(): HTMLDivElement {
    let widget: HTMLDivElement = document.createElement("div");
    widget.className = "widget";
    widget.style.height = "100px";
    widget.style.display = "flex";
    widget.style.justifyContent = "center";
    widget.style.alignItems = "center";
    widget.style.backgroundColor = getRandomColor();

    return widget;
}
function resolveAfter2Seconds(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('widgets fetched');
        }, 2000);
    });
}

/* -------------------------------------- IMPLEMENTATIONS OF DYNAMIC WIDGETS ---------------------------------------- */
// Implementation using fetch
function scrollYHandlerUsingFetch() {
    // Get current page content height (cross-browser approach)
    let scrollHeight: number = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // Get current vertical scroll position
    let yScrollPosition: number = document.documentElement.scrollTop;

    if (yScrollPosition + window.innerHeight === scrollHeight) {
        // Enable loader
        let loader: HTMLElement = <HTMLElement>document.querySelector(".loader");
        loader.style.visibility = "visible";
        loader.style.opacity = "1";

        // Fetch new content from the server
        fetch("")
            .then(function(response) {
                // Simulate server latency
                setTimeout(function() {
                    if (response.status !== 200) {
                        throw new Error(`Server returned an error code ${response.status}`);
                    }

                    // Create and append widgets
                    let line: HTMLElement = <HTMLElement>document.querySelector(".page__line._fourth");
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                    line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());

                    // Hide loader
                    loader.style.visibility = "hidden";
                    loader.style.opacity = "0";

                    window.scrollBy(0, 150);
                }, 1000);
            })
            .catch(alert);
    }
}
// Implementation using async & await
async function scrollYHandlerUsingAsyncAwait() {
    // Get current page content height (cross-browser approach)
    let scrollHeight: number = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // Get current vertical scroll position
    let yScrollPosition: number = document.documentElement.scrollTop;

    if (yScrollPosition + window.innerHeight === scrollHeight) {
        // Enable loader
        let loader: HTMLElement = <HTMLElement>document.querySelector(".loader");
        loader.style.visibility = "visible";
        loader.style.opacity = "1";

        // Fetch new content from the server
        let result: void = await resolveAfter2Seconds()
            .then(function(result) {

                // Create and append widgets
                let line: HTMLElement = <HTMLElement>document.querySelector(".page__line._fourth");
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());
                line.insertAdjacentElement(<InsertPosition>"beforeEnd", createWidget());

                // Hide loader
                loader.style.visibility = "hidden";
                loader.style.opacity = "0";

                window.scrollBy(0, 150);
            })
            .catch(alert);
    }
}
/* ----------------------------------- END OF IMPLEMENTATIONS OF DYNAMIC WIDGETS ------------------------------------ */

