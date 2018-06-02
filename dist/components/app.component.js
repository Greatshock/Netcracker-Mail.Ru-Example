"use strict";
exports.__esModule = true;
var modal_component_1 = require("./modal.component");
var select_component_1 = require("./select.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.modal = new modal_component_1.ModalComponent();
        this.select = new select_component_1.SelectComponent();
        this.modal.modalLog();
        this.select.selectLog();
    }
    return AppComponent;
}());
var app = new AppComponent();
