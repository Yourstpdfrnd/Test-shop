$(function(){


    $('.product-one__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
  
});