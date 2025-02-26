"use strict";

(function() {
    document.querySelectorAll("[data-slot-content]").forEach(function(content) {
        let slot = document.querySelector(`[data-slot="${content.dataset.slotContent}"]`)
        if (slot) slot.appendChild(content);
    });
})();