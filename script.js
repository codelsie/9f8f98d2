"use strict";

$(function() {
    $("[data-slot-content]").each(function() {
        let el = $(`[data-slot="${this.dataset.targetSlot}"]`);
        if (el.length) el.append(this);
    });
});