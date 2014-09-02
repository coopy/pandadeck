(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // includes/card-form-wrapper.jade compiled template
    templatizer["includes"]["card-form-wrapper"] = function tmpl_includes_card_form_wrapper() {
        return '<form data-hook="card-form" class="card card-form"><div data-hook="field-container"></div><a href="" role="button" class="edit-front">Edit Front</a><a href="" role="button" class="edit-back">Edit Back</a><button role="submit">Done</button></form>';
    };

    // includes/card-input.jade compiled template
    templatizer["includes"]["card-input"] = function tmpl_includes_card_input() {
        return '<div class="card-input-view"><label><span data-hook="label"></span><br/><textarea class="form-input"></textarea><div data-hook="message-container" class="message message-below message-error"><p data-hook="message-text"></p></div></label></div>';
    };

    // includes/card.jade compiled template
    templatizer["includes"]["card"] = function tmpl_includes_card(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(model) {
            buf.push('<div class="card"><div class="front active"><label>Front of card</label><p>' + jade.escape(null == (jade_interp = model.question) ? "" : jade_interp) + '</p></div><div class="back"><label>Back of card</label><p>' + jade.escape(null == (jade_interp = model.answer) ? "" : jade_interp) + "</p></div></div>");
        }).call(this, "model" in locals_for_with ? locals_for_with.model : typeof model !== "undefined" ? model : undefined);
        return buf.join("");
    };

    // main.jade compiled template
    templatizer["main"] = function tmpl_main() {
        return '<div class="wrapper"><nav class="navbar navbar-default"><div class="container-fluid"></div><ul class="nav navbar-nav"><li><a href="/cards">Cards</a></li><li><a href="/flash">Flash</a></li></ul></nav><div class="main-content"><h1>Panda Deck</h1><div data-hook="page-container" class="page-container"></div></div></div>';
    };

    // pages/cards.jade compiled template
    templatizer["pages"]["cards"] = function tmpl_pages_cards() {
        return '<div class="page cards"><div data-hook="card-form-wrapper" class="card-form-wrapper"></div><div data-hook="card-collection" class="card-collection"></div></div>';
    };

    // pages/flash.jade compiled template
    templatizer["pages"]["flash"] = function tmpl_pages_flash() {
        return '<div class="page flash"><h2>Flash!</h2><div data-hook="card-container" class="card-container"></div><a role="button" href="" class="previous-card">Previous</a><a role="button" href="" class="next-card">Next</a></div>';
    };

    return templatizer;
}));