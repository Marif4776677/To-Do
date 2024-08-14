"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) {  $('.minibox').append(`<h2>${b}</h2>`); }
            };
            let num = y => Number(y) ? a(y): $('.minibox').append(`<h2>${y}</h2>`);
            num($('input').val());
        }
        $('input').val('');
    });
});