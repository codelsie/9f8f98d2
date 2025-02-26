"use strict";

class AdManager
{
    getBanner465x60() {
        return `<script type="text/javascript">
            atOptions = {
                'key' : 'd52fb4d960ddefdbd55ba3a5f712ea48',
                'format' : 'iframe',
                'height' : 60,
                'width' : 468,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/d52fb4d960ddefdbd55ba3a5f712ea48/invoke.js"></script>`;
    }

    getBanner300x250() {
        return `<script type="text/javascript">
            atOptions = {
                'key' : 'ae8a5226225aa195612b3a3625df792b',
                'format' : 'iframe',
                'height' : 250,
                'width' : 300,
                'params' : {}
            };
        </script>
        <script type="text/javascript" src="//www.highperformanceformat.com/ae8a5226225aa195612b3a3625df792b/invoke.js"></script>`;
    }

    getNativeBanner() {
        return `<script async="async" data-cfasync="false" src="//pl25973424.effectiveratecpm.com/2df87e8d1e230437faac8785f929ab17/invoke.js"></script>
        <div id="container-2df87e8d1e230437faac8785f929ab17"></div>`;
    }

    getAsElements(script) {
        let container = document.createElement('div');
        container.innerHTML = script;
        console.log(container)
        return container.children;
    }
}

class PageManager {
    constructor() {
        this.adManager = new AdManager();
        this.buildDocument();
        this.appendToStart();
    }

    buildDocument() {
        this.fragment = {};
        this.fragment.main = document.querySelector('#main'); 
        this.fragment.postBody = this.fragment.main.querySelector('.post-body');
    }

    appendToStart() {
        let container = document.createElement('div');
        this.fragment.postBody.appendChild(container);
        let banners = this.adManager.getAsElements(this.adManager.getBanner465x60());
        console.log(banners)
        for (let el of banners) {
            container.insertBefore(el, container.firstChild);
        }
    }
}

new PageManager();