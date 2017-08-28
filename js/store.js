$(function() {
	var phoneNum = "";
	/*获取li标签集合*/
	var lis = $('.number-detail').find('li');
	/*点击选号弹出遮罩层*/
	$('.selNo').on('click', function() {
		$('.dialog').show();
		$('.dialog').addClass('animated bounceInDown');
		$('.mask-layer').show();
		/*当点击弹窗的时候，如果之前选择过号码，那么该号码就还是会被选中状态*/

		for(var i = 0; i < lis.length; i++) {
			if($(lis[i]).attr('flag') == "lightblue") {
				$(lis[i]).addClass('selected');
			}
		}
	});
	/*点击弹出框的取消和确定都关闭遮罩层*/
	$('.dialog-header').on('click', function(e) {
		if(e.target.text == "确定") {
			if(phoneNum == "") {
				$('.showNumber').hide();
			} else {
				$('.showNumber').show().text("已选择:" + phoneNum);
			}

			for(var i = 0; i < lis.length; i++) {
				$(lis[i]).removeAttr('flag');
				if($(lis[i]).hasClass('selected')) {
					$(lis[i]).attr('flag', 'lightblue');
				}
			}
		}
		if(e.target.text == "取消") {

			for(var i = 0; i < lis.length; i++) {
				$(lis[i]).removeClass('selected');
			}
		}
		//判断如果没有选中号码的话，选择号码按钮还是不会变颜色
			if($('.showNumber').text()==""){
				$('.selNo').removeClass('active');
			}else{
				//	将购物车父级元素的下面的a标签消失掉
				$('#buyBox .turnBack').hide();
			}
		//无论点确定还是取消都将遮罩层和弹出框去掉
		$('.dialog').hide();
		$('.mask-layer').hide();
	});
	/*选中号码给码号添加背景颜色*/
	$('.number-detail').on('click', function(e) {

		var target = e.target.parentNode;
		for(var i = 0; i < lis.length; i++) {
			$(lis[i]).removeClass('selected');
		}
		$(target).addClass('selected');
		phoneNum = $(target).text();
	});
/*--------------------------------------------华丽的分割线-------------------------------------------------*/
	/*选择商品属性*/
	 // 最后一个li标签选项的标志
      $('.phone').last().attr('index','last');
  		$('.phone a').on('click',function(){
        // 获取第二个ul标签
          var $this=$(this).parent().parent();
          // 判断如果没有编辑文字就让下一个li标签里面的ul标签打开，不然就将当前点击的ul关闭
        if($this.parent().next().find('span').text()==""){
          $this.removeClass('open').parent('li').next().find('ul').addClass('open');
        }else{
         $this.removeClass('open');
        }
        // 点击的时候给a标签一个变化颜色
          $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        // 点击完就出现编辑文字
        $this.prev().find('span').text("修改");
        // 如果点击的a标签是属于最后一个li标签，就不关闭，并且让按钮显示
        if($this.parent().attr('index')=='last'){
            //最后一个属性选项没有修改文字并且一直打开的状态
        	$this.prev().find('span').text("");
          	$this.show();
        }
        if($('.package a').hasClass('active')){
        	$(this).find('em').text('已选择').css('color','#fff');
        	$(this).parent().siblings('li').find('em').text('未选择').css('color','#888888');
        }
  		  
  		});
      // 点击编辑让ul打开
  		  $('.phone span').on('click',function(){
  			$(this).parent().next().addClass('open');
  		});

	/*---------------------------------------------华丽的分割线----------------------------------------------------*/
	/*加入购物车和立即购买*/
	var buyCount=0;
	$('#buyBox').on('click',function(e){
		var target= e.target;
		var buyText=$(target).text();
		if(buyText=="加入购物车"){
			if(buyCount<1){
				buyCount+=1;
			}
			$('.shoppingCart').find('span').text(buyCount);
		}else if(buyText=="立即购买"){
			alert('准备好您的钱包，你即将飞到支付页');
		}else if(buyText=="1"||buyText=="0"){
			alert('坐好扶稳，你即将飞到购物车页');
		}else{

		}

	});
	/*如果没有填好信息点击购买会返回购买区域并且给出提示*/
	$('#buyBox .turnBack').on('click',function(){
		$.toast('请填好购买信息');
	});
  /*---------------------------------------------华丽的分割线----------------------------------------------------*/
  // tab栏切换
  	var storeTab=document.getElementsByClassName('storeTab')[0],
  		storeTabs=storeTab.getElementsByTagName('div');
  		for(var i=0;i<storeTabs.length;i++){
  			storeTabs[i].setAttribute('index',i);
  		}
  	$('.storeTab').on('click',function(e){
  		var target=e.target;
  		var index=$(target).parent().attr('index');
  		console.log(index);
  		$(target).parent().addClass('active').siblings().removeClass('active');
  		$('.detailContent div').eq(index).addClass('current').siblings().removeClass('current');
  	});

});