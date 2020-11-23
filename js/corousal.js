let count = 0;

$("#right").click(() => {

    let windowWidth = $(window).width();

    let cardCount = $(".info-card");
    let length = cardCount.length; 

    if(windowWidth > 768)
    {
        length = length / 2;
    }

        if(count < (length - 1))
        {
            count = count + 1;
        }
        
        let deg = count * 100;
        deg = deg * -1;

        $(".scroll-cards").css('transform', 'translateX(' + deg + '%)');
        if(count > 0)
        {
            $("#left").removeClass("invisible");
        }

        if(count == (length - 1))
        {
            $("#right").addClass("invisible");
        }	

  
  });

$("#left").click(() => {

     let windowWidth = $(window).width();

      let cardCount = $(".info-card");
    let length = cardCount.length; 

    if(windowWidth > 768)
    {
        length = length / 2;
    }

    if(count > 0)
    {
        count = count - 1;
    }

    let deg = count * 100;
    deg = deg * -1;

    $(".scroll-cards").css('transform', 'translateX(' + deg + '%)');
    if(count == 0)
        {
            $("#left").addClass("invisible");
        }

      if(count < (length - 1))
      {
            $("#right").removeClass("invisible");
      }

  });


var width = $(window).width();
$(window).on('resize', function() {
if ($(this).width() !== width) {
width = $(this).width();
if(width > 768)
{
        if(count > 0)
        {
            count = 0;
            $(".scroll-cards").css('transform', 'translateX(0%)');
            $("#left").addClass("invisible");
            $("#right").removeClass("invisible");
        }
}

if(width < 768)
{
    if(count == 0)
    {
            $(".scroll-cards").css('transform', 'translateX(0%)');
            $("#left").addClass("invisible");
            $("#right").removeClass("invisible");
    }
}

}
});