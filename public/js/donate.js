$("#h").click(()=>{
    $("#am").val(100);
})

$("#fh").click(()=>{
    $("#am").val(500);
})

$("#ot").click(()=>{
    $("#am").val(1000);
})

$('.donSect').css("height", $('.donDiv').height());

$(window).resize(()=>{
    $('.donSect').css("height", $('.donDiv').height());
})
