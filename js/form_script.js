function range(){var t=$(".range").val();$(".range").css({background:"-webkit-linear-gradient(left ,#ffc411 0%,#ffc411 "+t+"%,#e4e4e4 "+t+"%, #e4e4e4 100%)"})}$(document).ready(function(){var t,a,e,n=$(".calculator"),o=n.find(".calculator__bill"),l=n.find(".calculator__tip"),r=n.find(".calculator__result"),i=n.find(".tip-amount");$(window).on("DOMContentLoaded",function(){i.text(l.val()+"%"),t=1*o.val(),a=1*l.val(),e=t+t*(a/100),r.text(e.toFixed(2)+"+")}),l.on("change",function(){""===o.val()||isNaN(o.val())?alert("Enter bill amount, please!"):t=1*o.val(),i.text(l.val()+"%"),a=1*l.val(),e=t+t*(a/100),r.text(e.toFixed(2)+"+")})}),$(".form_tours__search__btn").click(function(){$(".form_tours__search__btn__img").toggleClass("is-rotate"),$(".form_tours__more_form").toggleClass("heightAuto")});