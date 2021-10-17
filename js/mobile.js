function mobile(){
    height = $(window).width();
    if(height <= 1000){
        $('#sl1').html('Добро пожаловать, путник. <br> Ты готов выдвигаться в путь?');
    }else{
        $('#sl1').html('Добро пожаловать, путник. Ты готов выдвигаться в путь?');
    }
}
mobile();
$(window).resize(mobile);