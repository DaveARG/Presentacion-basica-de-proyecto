function carga_inicio(){
    $("#carga").animate({"opacity": 0}, 400, function() {
        $("#carga").css( "display","none" );
    });
}

function correcto_nav(){
    $("#botnav").blur(function(){
      if($("#botnav").hasClass("collapsed")){}
      else{setTimeout(function(){$("#botnav").click();}, 100);}
    });
    if ($("#botnav").is(":focus")) {
        $("#botnav").blur();
    }
}

function hw(){
    var alto=$(window).height();
    $(".hw-75").css("height",alto*0.75);
    $(".hw-50").css("height",alto*0.50);
}


function cambio_attr_px(iddiv,tipo,px,atrr,valor1,valor2){
    var ancho=$(window).width();
    if(tipo=="<"){
        if(ancho<px){
            $( "#"+iddiv ).css( atrr,valor1 );
        }else{
             $( "#"+iddiv ).css( atrr,valor2 );
        }
    }else{
        if(ancho>px){
            $( "#"+iddiv ).css( atrr,valor1 );
        }else{
             $( "#"+iddiv ).css( atrr,valor2 );
        }
    }
}

$(window).on('load', function() {
    carga_inicio();
});
$(document).ready(function() {
    correcto_nav();
    hw();
});
$( window ).resize(function() {
    hw();
});

function alerta(tipo,texto){
    if ( $("#alertamax").length ) {
        $("#alertamax").finish();
        $("#alertamax").remove();
    }
    $('body').prepend('<div class="d-flex fixed-top justify-content-center p-3 textoh5 w-100" id="alertamax"><div class="alert alert-'+tipo+' text-center" style="max-width:60%">'+texto+'</div></div>');
    setTimeout(function(){
        $("#alertamax").animate({"opacity":"0"}, 1000, function() {
            $("#alertamax").remove();
        });
    }, 3000);
}


function burbujaClick(id,color){
    var sonidoClick = new Audio("click.mp3");
    sonidoClick.play();
    if ( $("#burbujita").length ) {
        $("#burbujita").finish();
        $("#burbujita").remove();
    }
    $("#"+id).append('<div class="position-absolute" style="border-radius:100%;background-color:#'+color+'70;width:0px;height:0px;opacity:1;" id="burbujita"></div>');
    $("#burbujita").animate({"width":"150px", "height":"150px", "opacity":"0"},400, function() {
        $("#burbujita").remove();
    });
}


function copiar_portapapeles(div) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($("#"+div).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


function ir_a(div) {
    var lugar=$('#pantallaY').scrollTop();
    $('#pantallaY').animate({
        scrollTop: $("#"+div).offset().top+lugar
    }, 1000);
}


function mouseenterCambioAtrr(iddiv,atrr,valor){
    $( "#"+iddiv ).css( atrr,valor );
}
function mouseleaveCambioAtrr(iddiv,atrr,valor){
    if(!$("#"+iddiv).is(":focus")){
        $( "#"+iddiv ).css( atrr,valor );
    }
}