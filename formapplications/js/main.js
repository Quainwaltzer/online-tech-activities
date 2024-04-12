$(document).ready(function() {

  $("#rec-mode").on("change",function(){
    var rec_values = $("#rec-mode").val();
    if(rec_values == "Rec-Area"){
        $("#rec-legend").html("Rectangle - Area");
    }
    else{
        $("#rec-legend").html("Rectangle - Perimeter");
    }
  });

  $("#rec-compute").on("click", function(){
    var rec_length = $("#rec-length").val();
    var rec_width = $("#rec-width").val();
    var rec_result;
    var rec_mode = $("#rec-mode").val();

    if(rec_mode == "Rec-Area"){
        rec_result = rec_length * rec_width;
        $("#rec-result").val(rec_result);
    }
    else{
        rec_result = (2*rec_length) + (2*rec_width);
        $("#rec-result").val(rec_result);
    }
});


$("#tri-mode").on("change",function(){
    var tri_values = $("#tri-mode").val();
    if(tri_values == "Tri-Area"){
        $("#tri-legend").html("Triangle - Area");
        $(".area-container").css({"display":"block"});
        $(".per-container").css({"display":"none"});
    }
    else{
        $("#tri-legend").html("Triangle - Perimeter");
        $(".area-container").css({"display":"none"});
        $(".per-container").css({"display":"block"});
    }
  });

  $("#tri-compute").on("click", function(){
    var tri_base = $("#tri-base").val();
    var tri_height = $("#tri-height").val();
    let tri_side1 = $("#tri-side1").val();
    let tri_side2 = $("#tri-side2").val();
    let tri_side3 = $("#tri-side3").val();
    var sum = tri_side1*1 + tri_side2*1 + tri_side3*1;
    var tri_result;
    var tri_mode = $("#tri-mode").val();

    if(tri_mode == "Tri-Area"){
        tri_result = 0.5 * tri_base * tri_height;
        $("#tri-result").val(tri_result);
    }
    else{
        tri_result = sum;
        $("#tri-result").val(tri_result);
    }
});


$("#cir-mode").on("change",function(){
    var cir_values = $("#cir-mode").val();
    if(cir_values == "Cir-Area"){
        $("#cir-legend").html("Circle - Area");
    }
    else{
        $("#cir-legend").html("Circle - Perimeter");
    }
  });

  $("#cir-compute").on("click", function(){
    var cir_radius = $("#cir-radius").val();
    var cir_result;
    var cir_mode = $("#cir-mode").val();

    if(cir_mode == "Cir-Area"){
        cir_result = Math.PI * cir_radius * cir_radius;
        $("#cir-result").val(cir_result);
    }
    else{
        cir_result = 2 * Math.PI * cir_radius;
        $("#cir-result").val(cir_result);
    }
});

});