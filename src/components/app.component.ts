// FIRST TASK ON TYPESCRIPT
import { ModalComponent } from './modal.component';
import { SelectComponent } from './select.component'

export class AppComponent {

    private modal: ModalComponent = new ModalComponent();
    private select: SelectComponent = new SelectComponent();

    constructor() {
        this.modal.modalLog();
        this.select.selectLog();
    }
}

let app: AppComponent = new AppComponent();

/* --------------------------------------------- CONFIGURATIONS ----------------------------------------------------- */
const DYNAMIC_WIDGETS_IMPLEMENTATION: number = 1; // Switch to 0 to use implementation with fetch

if (DYNAMIC_WIDGETS_IMPLEMENTATION) {
    window.addEventListener("scroll", scrollYHandlerUsingAsyncAwait);
} else {
    window.addEventListener("scroll", scrollYHandlerUsingFetch);
}

/* ------------------------------- IMPLEMENTATIONS OF DYNAMIC WIDGETS --------------------------- */
// Implementation using fetch
function scrollYHandlerUsingFetch(): void {
    // Get current page content height (cross-browser approach)
    let scrollHeight: number = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // Get current vertical scroll position
    let yScrollPosition: number = document.documentElement.scrollTop;

    // Show or hide `scroll top` button
    // depending on the current scroll position
    if (yScrollPosition + window.innerHeight > document.documentElement.clientHeight + 500) {
        applyStyles(scrollTopButton, {
            visibility: "visible",
            opacity: "1",
            transition: "1s"
        });
    } else {
        applyStyles(scrollTopButton, {
            visibility: "hidden",
            opacity: "0",
            transition: ""
        });
    }

    if (yScrollPosition + window.innerHeight === scrollHeight) {
        // Enable loader
        let loader: HTMLElement = document.querySelector(".loader");
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
                    let line: HTMLElement = document.querySelector(".page__line._fourth");
                    line.insertAdjacentElement("beforeend", createWidgetsBlock());

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

    // Show or hide `scroll top` button
    // depending on the current scroll position
    if (yScrollPosition + window.innerHeight > document.documentElement.clientHeight + 500) {
        applyStyles(scrollTopButton, {
            visibility: "visible",
            opacity: "1",
            transition: "1s"
        });
    } else {
        applyStyles(scrollTopButton, {
            visibility: "hidden",
            opacity: "0",
            transition: ""
        });
    }

    if (yScrollPosition + window.innerHeight === scrollHeight) {
        // Enable loader
        let loader: HTMLElement = document.querySelector(".loader");
        loader.style.visibility = "visible";
        loader.style.opacity = "1";

        // Fetch new content from the server
        let result: void = await fetchWidgets(2000)
            .then(function(result) {

                // Create and append widgets
                let line: HTMLElement = document.querySelector(".page__line._fourth");
                line.insertAdjacentElement("beforeend", createWidgetsBlock());

                // Hide loader
                loader.style.visibility = "hidden";
                loader.style.opacity = "0";

                window.scrollBy(0, 150);
            })
            .catch(alert);
    }
}
/* --------------------------- END OF IMPLEMENTATIONS OF DYNAMIC WIDGETS ------------------------ */



/* --------------------------------------- SMOOTH SCROLL ---------------------------------------- */
let scrollTopButton: HTMLElement = document.querySelector(".button._scroll-to-top");
scrollTopButton.onclick = function scrollUp() {
        window.scrollBy(0, -100);
        if (window.pageYOffset > 0) {
            applyStyles(scrollTopButton, {
                opacity: "",
                visibility: "",
                transition: ""
            });
            requestAnimationFrame(scrollUp);
        }
    };
/* ----------------------------------- END OF SMOOTH SCROLL ------------------------------------- */



/* --------------------------------- DEBOUNCE, THROTTLING, RESIZE-------------------------------- */
let yandexMailbox = document.querySelector(".y-mailbox");

yandexMailbox.addEventListener("mousemove", debounce(() => {
    console.log("debounce");
}, 300));

yandexMailbox.addEventListener("touchmove", throttle(() => {
    console.log("throttle");
}, 2000));

window.addEventListener("resize", debounce(() => {
    console.log("resizing ended");
}, 300));

function debounce(f: Function, ms: number) {
    let timer: number = null;

    return function (...args: any[]) {
        const onComplete = () => {
            f.apply(this, args);
            timer = null;
        };

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(onComplete, ms);
    }
}

function throttle(f: Function, ms: number) {
    let isThrottled: boolean = false,
        savedArgs: any,
        savedThis: any;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        f.apply(this, arguments);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
/* ------------------------------ END OF DEBOUNCE, THROTTLING,RESIZE----------------------------- */



// HELPERS
function fetchWidgets(timeout: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('widgets fetched');
        }, timeout);
    });
}

function getRandomColor(): string {
    let letters: string = "0123456789ABCDEF",
        color:string = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function applyStyles(element: HTMLElement, styles: {[style: string]: string}): void {
    for (let styleName in styles) {
        if (styles.hasOwnProperty(styleName)) {
            element.style[<any>styleName] = styles[styleName];
        }
    }
}

function createWidgetsBlock(): HTMLDivElement {
    let widgetsBlock: HTMLDivElement = document.createElement("div");
    widgetsBlock.style.marginBottom = "80px";

    for (let i = 0; i < 6; i++) {
        let widget: HTMLDivElement = document.createElement("div");

        let styles = {
            className: "widget",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: getRandomColor(),
            marginBottom: "10px"
        };
        applyStyles(widget, styles);

        widgetsBlock.insertAdjacentElement("beforeend", widget);
    }

    return widgetsBlock;
}
