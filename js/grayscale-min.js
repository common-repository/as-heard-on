jQuery(document).ready(function($){function t(t){var a=document.createElement("canvas"),i=a.getContext("2d"),e=new Image;e.src=t,a.width=e.width,a.height=e.height,i.drawImage(e,0,0);for(var s=i.getImageData(0,0,a.width,a.height),r=0;r<s.height;r++)for(var n=0;n<s.width;n++){var o=4*r*s.width+4*n,d=(s.data[o]+s.data[o+1]+s.data[o+2])/3;s.data[o]=d,s.data[o+1]=d,s.data[o+2]=d}return i.putImageData(s,0,0,0,0,s.width,s.height),a.toDataURL()}var a=1e3*parseInt(grayscale_vars.opacity_js),i=parseInt(grayscale_vars.color_js),i=0;$(window).load(function(){$(".item-gray img").fadeIn(a),$(".item-gray img").each(function(){var a=$(this);a.css({position:"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block; float: left; padding:0 15px 15px 0;'>").clone().addClass("img_grayscale").css({position:"absolute","z-index":"998",opacity:"0"}).insertBefore(a).queue(function(){var t=$(this);t.parent().css({width:this.width,height:this.height}),t.dequeue()}),this.src=t(this.src)}),$(".item-gray img").mouseover(function(){$(this).parent().find("img:first").stop().animate({opacity:1},a)}),$(".img_grayscale").mouseout(function(){$(this).stop().animate({opacity:0},a)})})});