$(function(){

   //スマホドロワーメニュー
   $('#drawer_btn').on('click', function () {
    $('#drawer_menu').animate({ width: 'toggle'}, 300);
  });
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


   // タブメニュー
  $('.menu-btn').hover(function(){
    var index = $('.menu-btn').index(this);
    $('.tab-content').removeClass('active');
    $('.tab-content').eq(index).addClass('active');
    $('.menu-btn').removeClass('active');
    $(this).addClass('active');
  });
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  

  // モーダルウィンドウ
  $('#open').click(function(){
    $('#overlay, #modal-window').fadeIn();
  });
  
  $('#close').click(function(){
    $('#overlay, #modal-window').fadeOut();
  });
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝  


  // アコーディオンメニュー
  $('.menu-open').click(function(){
    $(this).next('.sub-menu').slideToggle();
  });
  // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  
  // スライドメニュー
  var slideWidth = $('.slide').outerWidth();	// .slideの幅を取得して代入
	var slideNum = $('.slide').length;	// .slideの数を取得して代入
	var slideSetWidth = slideWidth * slideNum;	// .slideの幅×数で求めた値を代入
	$('.slideSet').css('width', slideSetWidth);	// .slideSetのスタイルシートにwidth: slideSetWidthを指定
 
	var slideCurrent = 0;	// 現在地を示す変数
 
	// アニメーションを実行する独自関数
	var sliding = function(){
		// slideCurrentが0以下だったら
		if( slideCurrent < 0 ){
			slideCurrent = slideNum - 1;
 
		// slideCurrentがslideNumを超えたら
		}else if( slideCurrent > slideNum - 1 ){	// slideCUrrent >= slideNumでも可
			slideCurrent = 0;
    }
    
		$('.slideSet').stop().animate({
			left: slideCurrent * -slideWidth
		});
	}
 
	// 前へボタンが押されたとき
	$('.slider-prev').click(function(){
		slideCurrent--;
		sliding();
	});
 
	// 次へボタンが押されたとき
	$('.slider-next').click(function(){
		slideCurrent++;
		sliding();
	});

});
