
        $(function () {
            $('#img_cont').hover(
                function () {
                    $('#tlbar').slideDown(200);
                    $('#nav').slideDown(200);
                },
                function () {
                    $('#tlbar').slideUp(200);
                    $('#nav').slideUp(200);
                }
            );
            $('#tlbar,#nav').hover(
                function () {
                    $(this).removeClass('transparent');
                },
                function () {
                    $(this).addClass('transparent');
                }
            );
        });
   
