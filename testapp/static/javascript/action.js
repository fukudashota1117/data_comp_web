$(function () {

	// 繧ｵ繝悶Α繝�ヨ譎ゅ�繝｢繝ｼ繝繝ｫ
	$('.js_modal_1').submit(function () {
		var memberRegistModal = new jBox('Modal');
		memberRegistModal.setContent($('.modal_1'));
		memberRegistModal.open({
			width: 550,
			closeButton: false,
			adjustDistance: { top: 15, right: 15, bottom: 15, left: 15 },
			blockScroll: false,
		});
		$(".jBox-container").append('<div class="jbox_button_close"></div>');
		$(".jbox_button_close, .js_modal_1_close").on('click', function () {
			memberRegistModal.close();
		});
		return false;
	});

	// 繝｢繝ｼ繝繝ｫ陦ｨ遉ｺ
	$('.js_modal_large').click(function () {
		var modalLarge = new jBox('Modal');
		var target = $(this).data('modal-class');
		if( target === undefined){
			target = '.modal';
		}
		else{
			target = '.' + target;
		}
		modalLarge.setContent($(target));
		modalLarge.open({
			width: 900,
			closeButton: false,
			adjustDistance: { top: 15, right: 15, bottom: 15, left: 15 },
			blockScroll: false,
		});
		$(".jBox-container").append('<div class="jbox_button_close"></div>');
		$(".jbox_button_close, .js_modal_large_close").on('click', function () {
			modalLarge.close();
		});
		return false;
	});

	// 繧ｳ繝ｳ繝�Φ繝�′蟆代↑縺��ｴ蜷医√ヵ繝�ち繝ｼ繧呈怙荳矩Κ縺ｫ遘ｻ蜍輔＆縺帙ｋ
	if( undefined != document.getElementsByTagName('header')[0] &&
		undefined != document.getElementsByTagName('main')[0] &&
		undefined != document.getElementsByTagName('footer')[0] ){
		function setMainMinHeight() {
			$('main').css('height', '');
			var windowH = window.innerHeight;
			var headerH = document.getElementsByTagName('header')[0].offsetHeight;
			var mainH = document.getElementsByTagName('main')[0].offsetHeight;
			var footerH = document.getElementsByTagName('footer')[0].offsetHeight;
			if ((mainH + footerH + headerH) < windowH) {
				var mainH = windowH - footerH - headerH;
				$('main').css('height', mainH + 'px');	/* min-height縺�縺ｨ蟄占ｦ∫ｴ�縺ｮheight:100%縺悟柑縺九↑縺�◆繧”eight繧定ｨｭ螳� */
			}
		}
		addEventListener('resize', setMainMinHeight, false);
		setMainMinHeight();
		window.setMainMinHeight = setMainMinHeight;
	}

	// 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ陦ｨ遉ｺ
	var scrollT = $(window).scrollTop();
	$('.btn_hamburger').on('click', function () {
		$('header').toggleClass('gnav_opened');
		$('.gnav').fadeToggle(300);
		if ($('header').hasClass('gnav_opened')) {
			$('.header_logo img').attr('src', '/assets/images/common/logo_white.svg');
			scrollT = $(window).scrollTop();
			$('html').addClass('scroll_prevent');
			$('html').css('top', -(scrollT) + 'px');
		}
		else {
			$('.header_logo img').attr('src', '/assets/images/common/logo.svg');
			$('html').removeClass('scroll_prevent');
			$(window).scrollTop(scrollT);
		}
	});

	// 繝上Φ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ蜀��繝ｪ繝ｳ繧ｯ繝懊ち繝ｳ縺梧款縺輔ｌ縺溷�ｴ蜷医√ワ繝ｳ繝舌�繧ｬ繝ｼ繝｡繝九Η繝ｼ繧帝哩縺倥ｋ
	$('.gnav a').on('click', function (e) {
		if ($('header').hasClass('gnav_opened')) {
			$('.gnav').hide();
			$('header').toggleClass('gnav_opened');
			$('.header_logo img').attr('src', '/assets/images/common/logo.svg');
			$('html').removeClass('scroll_prevent');
		}
	});

	// 莨壼藤蜷代￠繝｡繝九Η繝ｼ陦ｨ遉ｺ
	$('.btn_member_nav').on('click', function () {
		$('.gnav_member_wrap').toggleClass('member_nav_opened');
	});
	$('body').on('click', function (e) {
		if ($(e.target).attr("class") != "btn_member_nav") {
			$('.gnav_member_wrap.member_nav_opened').removeClass('member_nav_opened');
		}
	});

	// STEP 谺｡縺ｸ繝懊ち繝ｳ縺ｮ辟｡蜉ｹ蛹�
	$('.nav_step_btn_disable').on('click', function () {
		return false;
	});

	// 繝医ャ繝励Γ繧､繝ｳ繝薙ず繝･繧｢繝ｫ縺ｮ繝ｩ繝ｳ繝繝�陦ｨ遉ｺ
	if ($('.top_visual').length) {
		var data = sessionStorage.getItem('topMainVisual');
		var randomNum = Math.floor(Math.random() * 4) + 1;
		while (data == randomNum) {
			randomNum = Math.floor(Math.random() * 4) + 1;
		}
		$('.top_visual').addClass('top_visual_' + randomNum);
		sessionStorage.setItem('topMainVisual', randomNum);
	}

	// 繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ
	$('a').click(function (e) {
		// 繧ｿ繝門�繧頑崛縺医�蝣ｴ蜷医�繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ辟｡縺�
		if ($(this).hasClass('tab_btn')) {
			return false;
		}
		// href螻樊ｧ縺後↑縺��ｴ蜷医�繝壹�繧ｸ蜀�Μ繝ｳ繧ｯ辟｡縺�
		if ($(this).attr('href') === undefined) {
			return false;
		}
		var anchor = $(this);
		var href = anchor.attr('href');
		var pagename = window.location.href;
		pagename = pagename.replace(/#.*/, '');
		href = href.replace(pagename, '');
		if (href.search(/^#/) >= 0) {
			e.preventDefault();
			var speed = 400;
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$("html, body").animate({ scrollTop: position }, speed, "swing");
			return false;
		}
	});

	// 逕ｻ髱｢蝗ｺ螳夊ｦ∫ｴ�
	function setFixedItem() {
		// 荳螳夐㍼繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷郁｡ｨ遉ｺ
		if ($(this).scrollTop() > 800) {
			$(".btn_to_top").fadeIn();
			$(".fixed_cv").fadeIn();
		} else {
			$(".btn_to_top").fadeOut();
			$(".fixed_cv").fadeOut();
		}

		// 繝輔ャ繧ｿ繝ｼ謇句燕縺ｧ繧ｹ繝医ャ繝�
		var bodyHeight = $("body").height();
		var scrollPosition = $(window).height() + $(window).scrollTop();
		var footHeight = $("footer").innerHeight();
		var fixedCvHeight = $(".fixed_cv").innerHeight();
		if (fixedCvHeight == undefined) {
			fixedCvHeight = 0;
		}
		if (bodyHeight - scrollPosition <= footHeight) {
			$(".btn_to_top").css({
				position: "absolute",
				bottom: footHeight + 20 + "px",
			});
		} else {
			$(".btn_to_top").css({
				position: "fixed",
				bottom: fixedCvHeight + 20 + "px",
			});
		}
	}
	$(window).on("scroll", setFixedItem);
	setFixedItem();

	// 繝代せ繝ｯ繝ｼ繝芽｡ｨ遉ｺ/髱櫁｡ｨ遉ｺ
	$('.js_passcheck').change(function () {
		if ($(this).prop('checked')) {
			$('.js_password').attr('type', 'text');
		} else {
			$('.js_password').attr('type', 'password');
		}
	});

	// 繝代せ繝ｯ繝ｼ繝芽｡ｨ遉ｺ/髱櫁｡ｨ遉ｺ�育ｯ�峇髯仙ｮ夲ｼ�
	$('body').on('click', '.js_pwdflip .js_pwdflip_change', function (){
		let target = $(this).closest('.js_pwdflip');
		if (target.find('.js_pwdflip_change').prop('checked')) {
			target.find('.js_pwdflip_pwd').attr('type', 'text');
		} else {
			target.find('.js_pwdflip_pwd').attr('type', 'password');
		}
	});

	// 譏溯ｩ穂ｾ｡
	function initStarRating() {
		$(".js_starrating").each(function () {
			var num = $(this).find(".js_starrating_num").text();
			if ($(this).find(".js_starrating_star").hasClass('jq-ry-container')) {
				$(this).find(".js_starrating_star").rateYo("destroy");
			}
			$(this).find(".js_starrating_star").rateYo({
				precision: 2,
				rating: num,
				normalFill: '#AEAEAE',
				ratedFill: '#FF8401',
				starWidth: "12px",
				spacing: "2px",
				readOnly: true
			});
		});
	}
	window.initStarRating = initStarRating;
	initStarRating();

	// 繝｡繝�ぅ繧｢繧ｯ繧ｨ繝ｪ縺斐→縺ｮ蜃ｦ逅� : >=640px
	const mediaQuery640 = window.matchMedia('(min-width: 640px)');
	function handleTabletChange(e) {
		if (e.matches) {
			// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 邱丞粋 PC蜷代￠��
			initReviewTotalStarRatingLarge();
		}
	}
	window.handleTabletChange = handleTabletChange;
	mediaQuery640.addListener(handleTabletChange);
	handleTabletChange(mediaQuery640);

	// 繝｡繝�ぅ繧｢繧ｯ繧ｨ繝ｪ縺斐→縺ｮ蜃ｦ逅� : <=639px
	const mediaQueryMaw639 = window.matchMedia('(max-width: 639px)');
	function handleWinMaw639(e){
		if (e.matches) {
			// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 邱丞粋 SP蜷代￠��
			initReviewTotalStarRatingSmall();
		}
	}
	mediaQueryMaw639.addListener(handleWinMaw639);
	handleWinMaw639(mediaQueryMaw639);

	// 繝｡繝�ぅ繧｢繧ｯ繧ｨ繝ｪ縺斐→縺ｮ蜃ｦ逅� : >=768px
	const mediaQueryMiw768 = window.matchMedia('(min-width: 768px)');
	function handleWinMiw768(e){
		if (e.matches) {
			// PC陦ｨ遉ｺ縺ｮ迥ｶ諷九↓繧ゅ°縺九ｏ繧峨★繧ｹ繝槭�逕ｨ繝翫ン縺碁幕縺�※縺�ｋ蝣ｴ蜷�
			if ($('header').hasClass('gnav_opened')) {
				$('header').removeClass('gnav_opened');
				$('.gnav').hide();
				$('.header_logo img').attr('src', '/assets/images/common/logo.svg');
				$('html').removeClass('scroll_prevent');
				$(window).scrollTop(scrollT);
			}
		}
	}
	mediaQueryMiw768.addListener(handleWinMiw768);

	// 繝槭ャ繝励さ繝ｳ繝医Ο繝ｼ繝ｫ蛻晄悄蛹�
	function initMapCtrl(){
		$('.tab_panel:visible .js_map_ctrl').each( function (){
			var btnW = 0;
			$(this).find('.button_check').each( function (){
				btnW += $(this).outerWidth(true);
			});

			/* 蜿ｳ遶ｯ縺ｮ菴咏區繧定ｨｭ螳� */
			btnW += 20;

			/* 讓ｪ蟷�ｨｭ螳� */
			$(this).find('.map_ctrl_in').width(btnW);

			/* 繧ｪ繝ｼ繝舌�繝輔Ο繝ｼ縺檎匱逕溘☆繧句�ｴ蜷医∝ｷｦ蜿ｳ繝懊ち繝ｳ繧剃ｻ倥￠繧� */
			if( btnW > $(window).width()){
				if( $(this).find('.map_ctrl_scroll_l').length == 0 ){
					$(this).append('<div class="map_ctrl_scroll_l disabled"></div><div class="map_ctrl_scroll_r disabled"></div>')
				}
				dispMapCtrlScroll();
			}
			else{
				$(this).find('.map_ctrl_scroll_l').remove();
				$(this).find('.map_ctrl_scroll_r').remove();
			}
		});
	}
	window.initMapCtrl = initMapCtrl;

	// 繝槭ャ繝励さ繝ｳ繝医Ο繝ｼ繝ｫ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ陦ｨ遉ｺ
	function dispMapCtrlScroll(){
		let currentS = $('.tab_panel:visible .map_ctrl').scrollLeft();
		let maxS = $('.tab_panel:visible .map_ctrl')[0].scrollLeftMax;
		// 蟾ｦ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷�
		if( currentS == 0 ){
			$('.tab_panel:visible .map_ctrl_scroll_l').addClass('disabled');
		}
		else{
			$('.tab_panel:visible .map_ctrl_scroll_l').removeClass('disabled');
		}
		// 蜿ｳ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷茨ｼ郁ｪ､蟾ｮ縺檎匱逕溘☆繧句�ｴ蜷医′縺ゅｋ縺溘ａ隱ｿ謨ｴ��
		if( currentS >= ( maxS - 5 )){
			$('.tab_panel:visible .map_ctrl_scroll_r').addClass('disabled');
		}
		else{
			$('.tab_panel:visible .map_ctrl_scroll_r').removeClass('disabled');
		}
	}

	// 繝槭ャ繝励さ繝ｳ繝医Ο繝ｼ繝ｫ縺ｮ繧､繝吶Φ繝郁ｨｭ螳�
	if( $('.js_map_ctrl').length ){
		var timerMapCtrl = 0; 
		// 繝ｪ繧ｵ繧､繧ｺ蠕後�蜀肴緒逕ｻ
		$(window).on("resize", function() {
			clearTimeout(timerMapCtrl);

			// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
			timerMapCtrl = setTimeout(function(){
				initMapCtrl();
			}, 400);
		});
		$('body').on('click', '.map_ctrl_scroll_l', function (){
			let target = $('.tab_panel:visible .map_ctrl');
			target.animate({ scrollLeft: target.scrollLeft() - $(window).width() });
		});
		$('body').on('click', '.map_ctrl_scroll_r', function (){
			let target = $('.tab_panel:visible .map_ctrl');
			target.animate({ scrollLeft: target.scrollLeft() + $(window).width() });
		});
		var isRunning = false;
		$('.map_ctrl').on('scroll', function (){
			if ( !isRunning ) {
				isRunning = true;
				// 謠冗判縺吶ｋ蜑阪�繧ｿ繧､繝溘Φ繧ｰ縺ｧ螳溯｡�
				window.requestAnimationFrame(function() {
					dispMapCtrlScroll();
					isRunning = false;
				});
			}
		});
	}

	// 繧ｫ繧ｹ繧ｿ繝�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ陦ｨ遉ｺ
	function dispCustomScroll(){
/*
		let currentS = $('.customscroll_in').scrollLeft();
		let maxS = $('.customscroll_in')[0].scrollLeftMax;

		// 蟾ｦ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷�
		if( currentS == 0 ){
			$('.customscroll_scroll_l').addClass('disabled');
		}
		else{
			$('.customscroll_scroll_l').removeClass('disabled');
		}
		// 蜿ｳ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷茨ｼ郁ｪ､蟾ｮ縺檎匱逕溘☆繧句�ｴ蜷医′縺ゅｋ縺溘ａ隱ｿ謨ｴ��
		if( currentS >= ( maxS - 5 )){
			$('.customscroll_scroll_r').addClass('disabled');
		}
		else{
			$('.customscroll_scroll_r').removeClass('disabled');
		}
*/
		$('.js_customscroll').each( function (){
			let currentS = $(this).find('.customscroll_in').scrollLeft();
			let maxS = $(this).find('.customscroll_in')[0].scrollLeftMax;

			// 蟾ｦ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷�
			if( currentS == 0 ){
				$(this).find('.customscroll_scroll_l').addClass('disabled');
			}
			else{
				$(this).find('.customscroll_scroll_l').removeClass('disabled');
			}
			// 蜿ｳ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷茨ｼ郁ｪ､蟾ｮ縺檎匱逕溘☆繧句�ｴ蜷医′縺ゅｋ縺溘ａ隱ｿ謨ｴ��
			if( currentS >= ( maxS - 5 )){
				$(this).find('.customscroll_scroll_r').addClass('disabled');
			}
			else{
				$(this).find('.customscroll_scroll_r').removeClass('disabled');
			}
		});
	}

	// 繧ｫ繧ｹ繧ｿ繝�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ蛻晄悄蛹�
	function initCustomScroll(){
		$('.js_customscroll').each( function (){
			var targetW = $(this).find('.customscroll_in').children(':first-child').outerWidth(true);

			/* 繧ｪ繝ｼ繝舌�繝輔Ο繝ｼ縺檎匱逕溘☆繧句�ｴ蜷医∝ｷｦ蜿ｳ繝懊ち繝ｳ繧剃ｻ倥￠繧� */
			if( targetW > $(window).width()){
				if( $(this).find('.customscroll_scroll_l').length == 0 ){
					$(this).append('<div class="customscroll_scroll_l disabled"></div><div class="customscroll_scroll_r disabled"></div>')
				}
				dispCustomScroll();
			}
			else{
				$(this).find('.customscroll_scroll_l').remove();
				$(this).find('.customscroll_scroll_r').remove();
			}
		});
	}
	initCustomScroll();

	// 繧ｫ繧ｹ繧ｿ繝�繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺ｮ繧､繝吶Φ繝郁ｨｭ螳�
	if( $('.js_customscroll').length ){
		var timerCustomScroll = 0; 
		// 繝ｪ繧ｵ繧､繧ｺ蠕後�蜀肴緒逕ｻ
		$(window).on("resize", function() {
			clearTimeout(timerCustomScroll);

			// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
			timerCustomScroll = setTimeout(function(){
				initCustomScroll();
			}, 400);
		});
		$('body').on('click', '.customscroll_scroll_l', function (){
			let target = $('.customscroll_in');
			target.animate({ scrollLeft: target.scrollLeft() - target.parent('.customscroll').width() });
		});
		$('body').on('click', '.customscroll_scroll_r', function (){
			let target = $('.customscroll_in');
			target.animate({ scrollLeft: target.scrollLeft() + target.parent('.customscroll').width() });
		});
/*
		$('.customscroll_scroll_l').on('click', function (){
			let target = $(this).siblings('.customscroll_in');
			target.animate({ scrollLeft: target.scrollLeft() - target.parent('.customscroll').width() });
		});
		$('.customscroll_scroll_r').on('click', function (){
			let target = $(this).siblings('.customscroll_in');
			target.animate({ scrollLeft: target.scrollLeft() + target.parent('.customscroll').width() });
		});
*/

		var isCustomScrollRunning = false;
		$('.customscroll_in').on('scroll', function (){
			if ( !isCustomScrollRunning ) {
				isCustomScrollRunning = true;
				// 謠冗判縺吶ｋ蜑阪�繧ｿ繧､繝溘Φ繧ｰ縺ｧ螳溯｡�
				window.requestAnimationFrame(function() {
					dispCustomScroll();
					isCustomScrollRunning = false;
				});
			}
		});
	}

	// 繝√ぉ繝ｼ繝ｳ蠎励°繧画爾縺呎擅莉ｶ繝懊ち繝ｳ 繧ｯ繝ｪ繝�け
	$('.chainstorelist_item').on( 'click touchend', function (e) {
		$(this).toggleClass('chainstorelist_item_checked');
		return false;
	});

	// 繝√ぉ繝ｼ繝ｳ蠎励°繧画爾縺呎擅莉ｶ繝懊ち繝ｳ 繝帙�繝舌�
	// 繧ｿ繝�メ繝�ヰ繧､繧ｹ縺ｧ縺ｯ繧ｿ繝�メ蠕後↓繝帙�繝舌�迥ｶ諷九′谿九▲縺ｦ縺励∪縺�◆繧√け繝ｩ繧ｹ縺ｧ蛻ｶ蠕｡
	if (!(/android|ipod|ipad|iphone|macintosh/.test(ua) && 'ontouchend' in document)) {
		$('.chainstorelist_item').hover(
			function () {
				$(this).addClass('chainstorelist_item_hover');
			},
			function () {
				$(this).removeClass('chainstorelist_item_hover');
			}
		);
	}

	// 繝√ぉ繝ｼ繝ｳ蠎励ｒ繧ゅ▲縺ｨ隕九ｋ
	if( $('.chainstore2_item').length ){
		// 譛螟ｧ陦ｨ遉ｺ謨ｰ繧定ｶ�∴縺溷�ｴ蜷医�繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繧帝哩縺倥�幕髢峨�繧ｿ繝ｳ繧定ｿｽ蜉�
		const chainstore_default_num = 3;
		$('.chainstore2_item').each(function () {
			if( chainstore_default_num < $(this).find('.chainstore2_list_item').length ){
				var h = 0;
				var i = 0;
				$(this).find('.chainstore2_list_item').each( function (){
					if( i >= chainstore_default_num ){
						return;
					}
					h += $(this).outerHeight(true);
					i++;
				});
				$(this).find('.chainstore2_list').css( 'height', h + 'px');
				$(this).find('.chainstore2_body').append('<div class="chainstore2_btn_more">繧ゅ▲縺ｨ隕九ｋ</div>');
			}
		});

		// 繧ゅ▲縺ｨ隕九ｋ繝懊ち繝ｳ 繧ｯ繝ｪ繝�け
		$('body').on('click', '.chainstore2_btn_more', function () {
			// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ縺碁幕縺�※縺�ｋ蝣ｴ蜷�
			if($(this).closest('.chainstore2_item').hasClass('chainstore2_item_show')){
				$(this).closest('.chainstore2_item').removeClass('chainstore2_item_show');
				var h = 0;
				var i = 0;
				$(this).siblings('.chainstore2_list').find('.chainstore2_list_item').each( function (){
					if( i >= chainstore_default_num ){
						return;
					}
					h += $(this).outerHeight(true);
					i++;
				});
				$(this).siblings('.chainstore2_list').animate({
					height: h + 'px'
				}, 200);
				$(this).text('繧ゅ▲縺ｨ隕九ｋ');
			}
			// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ縺碁哩縺倥※縺�ｋ蝣ｴ蜷�
			else{
				$(this).closest('.chainstore2_item').addClass('chainstore2_item_show');
				var h = 0;
				$(this).siblings('.chainstore2_list').find('.chainstore2_list_item').each( function (){
					h += $(this).outerHeight(true);
				});
				$(this).siblings('.chainstore2_list').animate({
					height: h + 'px'
				}, 200);
				$(this).text('髢峨§繧�');
			}
		});
	}

	// 縺昴�莉悶�莠ｺ豌励メ繧ｧ繝ｼ繝ｳ蠎励ｒ隕九ｋ
	if( $('.chainstore2').length ){
		// 譛螟ｧ陦ｨ遉ｺ謨ｰ繧定ｶ�∴縺溷�ｴ蜷医�繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繧帝哩縺倥�幕髢峨�繧ｿ繝ｳ繧定ｿｽ蜉�
		const chainstore_cat_default_num = 6;
		$('.chainstore2').each(function () {
			if( ( chainstore_cat_default_num < $(this).find('.chainstore2_item').length ) &&
				!$(this).hasClass('chainstore2_items_top') &&
				!$(this).hasClass('chainstore2_items_bottom') ){

				$(this).clone().addClass('chainstore2_items_bottom').insertAfter(this);
				$(this).addClass('chainstore2_items_top');

				$(this).find('.chainstore2_item:gt('+(chainstore_cat_default_num-1)+')').remove();
				$(this).siblings('.chainstore2_items_bottom').find('.chainstore2_item:lt('+chainstore_cat_default_num+')').remove();
				$(this).siblings('.chainstore2_items_bottom').after('<div class="chainstore2_btn_othermore_wrap"><div class="chainstore2_btn_othermore">縺昴�莉悶�莠ｺ豌励メ繧ｧ繝ｼ繝ｳ蠎励ｒ隕九ｋ</div>');
				$(this).siblings('.chainstore2_items_bottom').hide();
			}
		});

		// 縺昴�莉悶�莠ｺ豌励メ繧ｧ繝ｼ繝ｳ蠎励ｒ隕九ｋ 繧ｯ繝ｪ繝�け
		$('.chainstore2_btn_othermore').on('click', function () {
			// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ縺碁幕縺�※縺�ｋ蝣ｴ蜷�
			if($(this).closest('.chainstore2_btn_othermore_wrap').siblings('.chainstore2_items_bottom').hasClass('chainstore2_open')){
				$(this).closest('.chainstore2_btn_othermore_wrap').siblings('.chainstore2_items_bottom').removeClass('chainstore2_open');
				$(this).closest('.chainstore2_btn_othermore_wrap').siblings('.chainstore2_items_bottom').slideUp();
				$(this).removeClass('chainstore2_btn_othermore_close');
				$(this).text('縺昴�莉悶�莠ｺ豌励メ繧ｧ繝ｼ繝ｳ蠎励ｒ隕九ｋ');
			}
			// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ縺碁哩縺倥※縺�ｋ蝣ｴ蜷�
			else{
				$(this).closest('.chainstore2_btn_othermore_wrap').siblings('.chainstore2_items_bottom').addClass('chainstore2_open');
				$(this).closest('.chainstore2_btn_othermore_wrap').siblings('.chainstore2_items_bottom').slideDown();
				$(this).addClass('chainstore2_btn_othermore_close');
				$(this).text('髢峨§繧�');
			}
		});
	}

	// 繧ｿ繝�
	var tabCurrent = 0;
	$('.tab_btn').click(function () {
		$('.tab_ctrl').removeClass('tab_ctrl_' + tabCurrent);
		tabCurrent = $('.tab_btn').index(this);
		$('.tab_ctrl').addClass('tab_ctrl_' + tabCurrent);

		$('.tab_btn.tab_current').removeClass('tab_current');
		$(this).addClass('tab_current');
		$(".tab .tab_panel").hide();
		$(this.hash).fadeIn(
			function (){
				// 繝槭ャ繝励さ繝ｳ繝医Ο繝ｼ繝ｫ蛻晄悄蛹�
				if( $('.js_map_ctrl').length ){
					initMapCtrl();
				}
			}
		);

		return false;
	});
	$('.tab_btn').eq(0).trigger('click');

	// 繝懊ち繝ｳ 繝√ぉ繝�け繝槭�繧ｯ
	$('.button_check').on('click', function () {
		$(this).toggleClass('button_checked');
	});

	// 蜿｣繧ｳ繝溷�譛溯ｨｭ螳�
	function initReview() {
		$('.review_items').each(function () {
			var root = $(this);
			var review_total_num = root.find('.review_item_wrap').length;
			var review_default_num = 10;
			var review_open_num = 10;
			if ( 0 == review_total_num ) {
				root.append(`
					<div class="review_no_item">
						<p>隧ｲ蠖薙☆繧句哨繧ｳ繝溘′縺ゅｊ縺ｾ縺帙ｓ</p>
					</div>
				`);
			}
			else if (review_total_num > review_default_num) {
				root.find('.review_item_wrap').each(function () {
					if (review_default_num <= root.find('.review_item_wrap').index(this)) {
						$(this).addClass('review_item_wrap_hide');
					}
					else{
						$(this).addClass('review_item_wrap_show');
					}
				});

				// 縲梧ｬ｡縺ｮn莉ｶ繧定｡ｨ遉ｺ縲崎ｿｽ蜉�
				if( 0 < root.find('.review_item_more').length ){
					root.find('.review_item_more').remove();
				}
				root.append(`
					<div class="review_item_more">
						<div class="review_item_more_in js_review_list_more">
							<p class="review_item_more_txt">谺｡縺ｮ<span class="review_item_more_txt_num">10</span>莉ｶ繧�<br class="show_xsm">陦ｨ遉ｺ</p>
						</div>
					</div>
				`);

				// 縲梧ｬ｡縺ｮn莉ｶ繧定｡ｨ遉ｺ縲阪�謨ｰ蛟､譖ｴ譁ｰ
				function setReviewItemMoreNum(){
					var review_more_num = root.find('.review_item_wrap.review_item_wrap_hide').length;
					if( review_more_num > review_open_num ){
						review_more_num = review_open_num;
					}
					root.find('.review_item_more_txt_num').html(review_more_num);
				}
				setReviewItemMoreNum();

				// 繧､繝吶Φ繝茨ｼ壹梧ｬ｡縺ｮn莉ｶ繧定｡ｨ遉ｺ縲肴款荳�
				root.find('.review_item_more').on('click', function () {
					var i = 0;
					root.find('.review_item_wrap.review_item_wrap_hide').each(function () {
						i++;
						if (i <= review_open_num) {
							$(this).removeClass('review_item_wrap_hide');
							$(this).addClass('review_item_wrap_show');
							if (0 == root.find('.review_item_wrap.review_item_wrap_hide').length) {
								root.find('.review_item_more').remove();
							}
						}
					});
					setReviewItemMoreNum();
					// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧堤匱逕溘＆縺帙√せ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ繧定｡ｨ遉ｺ/髱櫁｡ｨ遉ｺ
					setTimeout( () => {
						root.closest('.js_scrollbtn_ctnr').scrollLeft( root.closest('.js_scrollbtn_ctnr').scrollLeft() + 1 );
						root.closest('.js_scrollbtn_ctnr').scrollLeft( root.closest('.js_scrollbtn_ctnr').scrollLeft() - 1 );
					}, 300);
				});
			}
			else {
				root.find('.review_item_wrap').each(function () {
					$(this).addClass('review_item_wrap_show');
				});
			}

			// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝舌�縺ｮ菴咲ｽｮ繧貞ｷｦ遶ｯ縺ｫ縺吶ｋ
			root.closest('.js_scrollbtn_ctnr').scrollLeft( 0 );

			// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繧堤匱逕溘＆縺帙√せ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ繧定｡ｨ遉ｺ/髱櫁｡ｨ遉ｺ
			root.closest('.js_scrollbtn_ctnr').siblings('.js_scrollbtn_l, .js_scrollbtn_r').addClass('disabled');
			setTimeout( () => {
				root.closest('.js_scrollbtn_ctnr').scrollLeft( root.closest('.js_scrollbtn_ctnr').scrollLeft() + 1 );
				root.closest('.js_scrollbtn_ctnr').scrollLeft( root.closest('.js_scrollbtn_ctnr').scrollLeft() - 1 );
			}, 300);
		});
		// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 蛟句挨��
		initReviewStarRating();
	}
	window.initReview = initReview;
	initReview(); 

	// 陦怜捉霎ｺ蜀咏悄
	if ($('.town_visuals').length) {
		// 陦怜捉霎ｺ蜀咏悄縺ｮ2譫夂岼莉･髯阪ｒ陦ｨ遉ｺ
		$('.town_visuals').addClass('town_visuals_active');

		// 陦怜捉霎ｺ蜀咏悄縺ｮ譫壽焚繧ｫ繧ｦ繝ｳ繝�
		function calcTownVisualsTotal(){
			$('.town_visuals_total').text($('.town_visuals .town_visual_image_wrap ').length);
		}
		window.calcTownVisualsTotal = calcTownVisualsTotal;

		// slick蛻晄悄蛹�
		$('.town_visuals').on('init', function (event, slick) {
			// slick蛻晄悄蛹門ｮ御ｺ�凾縺ｮ蜃ｦ逅�
			$(this).append('<div class="town_visuals_counter"><span class="town_visuals_current"></span> / <span class="town_visuals_total"></span></div>');
			$('.town_visuals_current').text(slick.currentSlide + 1);
			$('.town_visuals_total').text(slick.slideCount);
		})
		.slick({
			infinite: true,
			speed: 500,
			fade: true,
			centerMode: true,
			prevArrow: '<span class="town_visuals_prev_btn"></span>',
			nextArrow: '<span class="town_visuals_next_btn"></span>',
		})
		.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.town_visuals_current').text(nextSlide + 1);
		});
	}

	// 陦怜捉霎ｺ蜀咏悄繝昴ャ繝励い繝��
	var slickObj;
	$('.js_town_images').on('click', function () {

		// 繧ｦ繧｣繝ｳ繝峨え蝗ｺ螳�
		scrollT = $(window).scrollTop();
		$('html').addClass('scroll_prevent');
		$('html').css('top', -(scrollT) + 'px');

		if (undefined == slickObj) {
			$('.town_images').show();
			slickObj = $('.town_images_ctnr').on('init', function (event, slick) {
				// slick蛻晄悄蛹門ｮ御ｺ�凾縺ｮ蜃ｦ逅�
				$(this).append('<div class="slick_counter"><span class="slick_current"></span> / <span class="slick_total"></span></div><div class="town_images_close"></div>');
				$('.town_images .slick_current').text(slick.currentSlide + 1);

				// 繧ｭ繝｣繝励す繝ｧ繝ｳ菴咲ｽｮ隱ｿ謨ｴ
				var imgMaxH = 0;
				$('.town_image img').each(function () {
					if (imgMaxH < $(this).outerHeight()) {
						imgMaxH = $(this).outerHeight();
					}
				});
				$('.town_image_caption').css('top', imgMaxH + 'px');

				// 逕ｻ蜒丈ｽ咲ｽｮ隱ｿ謨ｴ
				$('.town_image img').each(function () {
					var imgMarginT = (imgMaxH - $(this).outerHeight()) / 2;
					$(this).css('margin-top', imgMarginT + 'px');
				});

				// 繧ｳ繝ｳ繝�リ菴咲ｽｮ隱ｿ謨ｴ
				var txtMaxH = 0;
				$('.town_image_caption').each(function () {
					if (txtMaxH < $(this).outerHeight()) {
						txtMaxH = $(this).outerHeight();
					}
					// OS迢ｬ閾ｪ縺ｮUI縺後≠繧句�ｴ蜷医′縺ゅｋ縺溘ａ50px蛻�ｼ輔￥
					var marginT = ((window.innerHeight - imgMaxH - txtMaxH) / 2) - 50;
					if (marginT < 0) {
						marginT = 0;
					}
					$('.town_images_ctnr').css('margin-top', marginT + 'px');
				});
			})
				.slick({
					infinite: true,
					speed: 500,
					fade: true,
					centerMode: true,
					prevArrow: '<span class="slick_prev_btn"></span>',
					nextArrow: '<span class="slick_next_btn"></span>',
				})
				.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					$('.town_images .slick_current').text(nextSlide + 1);
				});

			// 繝舌ヶ繝ｪ繝ｳ繧ｰ蛛懈ｭ｢
			$('.slick_prev_btn, .slick_next_btn').on('click', function () {
				return false;
			});

			// 髢峨§繧句�逅�
			$('.town_images').on('click', function () {
				$('.town_images').fadeOut();

				// 繧ｦ繧｣繝ｳ繝峨え蝗ｺ螳夊ｧ｣髯､
				$('html').removeClass('scroll_prevent');
				$(window).scrollTop(scrollT);
			});
		}
		// 陦怜捉霎ｺ蜀咏悄繝昴ャ繝励い繝��縺ｮ譫壽焚繧ｫ繧ｦ繝ｳ繝�
		$('.town_images .slick_total').text($('.town_images .town_image').length);

		// 陦怜�逵溘ｒ繧ｯ繝ｪ繝�け縺輔ｌ縺溷�ｴ蜷医√◎縺ｮ陦怜�逵溘°繧峨�繝��繧｢繝��陦ｨ遉ｺ
		var showIndex = 0;
		if($(this).hasClass('town_visual_image')){
			showIndex = $(this).closest('.town_visual_image_wrap').index();
		}
		slickObj.slick('slickGoTo', showIndex, true);

		// 陦怜�逵溘�繝��繧｢繝��陦ｨ遉ｺ
		$('.town_images').fadeIn();
		$('.town_images_ctnr').slick('setPosition');
	});

	// 驕ｸ謚槭�繧ｿ繝ｳ��3縺､��
	$('.js_select_1').each(function () {
		$(this).find('.js_select_btn').on('click', function () {
			$(this).siblings('.js_select_btn.js_select_btn_checked').removeClass('js_select_btn_checked');
			$(this).addClass('js_select_btn_checked');
		});
	});

	// 驕ｸ謚槭�繧ｿ繝ｳ�郁､�焚��
	$('.js_select_multi').each(function () {
		$(this).find('.js_select_btn').on('click', function () {
			$(this).toggleClass('js_select_btn_checked');
		});
	});

	// 蜆ｪ蜈亥ｺｦ鬆�↓3縺､驕ｸ謚�
	function select3() {
		$('.js_select_3').each(function () {
			var priority1 = false;
			var priority2 = false;
			var priority3 = false;

			function getCurrentPriority(){
				if( priority1 == false ){
					return 1;
				}
				else if( priority2 == false ){
					return 2;
				}
				else if( priority3 == false ){
					return 3;
				}
				else{
					return 0;
				}
			}

			function setPriority(p){
				switch ( p ) {
					case 1:
						priority1 = true;
						break;
					case 2:
						priority2 = true;
						break;
					case 3:
						priority3 = true;
						break;
				}
			}

			function resetPriority(p){
				switch ( p ) {
					case 1:
						priority1 = false;
						break;
					case 2:
						priority2 = false;
						break;
					case 3:
						priority3 = false;
						break;
				}
			}

			$(this).find('.select_3_btn').on('click', function () {
				if ($(this).hasClass('select_3_btn_checked')) {
					$(this).removeClass('select_3_btn_checked');
					resetPriority(Number($(this).find('.select_3_priority').text()));
					$(this).find('.select_3_priority').text('');
				}
				else{
					var priority = getCurrentPriority();
					if( priority != 0 ){
						$(this).addClass('select_3_btn_checked');
						$(this).find('.select_3_priority').text(priority);
						setPriority(priority);
					}
				}
			});

			$(this).find('.select_3_reset').on('click', function () {
				$(this).parents('.js_select_3').find('.select_3_btn').removeClass('select_3_btn_checked');
				$(this).parents('.js_select_3').find('.select_3_priority').text('');
				resetPriority(1);
				resetPriority(2);
				resetPriority(3);
			});

			// 譌｢縺ｫ3縺､驕ｸ謚槭＆繧後※縺�ｋ蝣ｴ蜷茨ｼ域綾繧九�繧ｿ繝ｳ縺ｧ縺ｮ驕ｷ遘ｻ譎ゑｼ�
			if( $(this).find('.select_3_btn.select_3_btn_checked').length == 3 ){
				setPriority(1);
				setPriority(2);
				setPriority(3);
			}
		});
	}
	window.select3 = select3;
	select3();

	// 鬧�錐縺九ｉ陦励ｒ謗｢縺吝�蜉帶ｬ��繝輔か繝ｼ繧ｫ繧ｹ
	$(".search_form_input_wrap .search_form_input").on('focusin', function (){
		$(this).closest('.search_form_input_wrap').addClass('search_form_input_focused');
	});
	$(".search_form_input_wrap .search_form_input").on('focusout', function (){
		$(this).closest('.search_form_input_wrap').removeClass('search_form_input_focused');
	});

	// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ
	$('.js_accordion').each( function (){
		// 髢矩哩迥ｶ諷九�蛻晄悄險ｭ螳�
		if( !$(this).hasClass('js_accordion_open')){
			$(this).find('.js_accordion_body').hide();
			setMainMinHeight();
		}

		// 繧｢繧ｳ繝ｼ繝�ぅ繧ｪ繝ｳ繝医げ繝ｫ繝懊ち繝ｳ謚ｼ荳�
		$(this).find('.js_accordion_btn:first').on('click', function () {
			$(this).siblings('.js_accordion_body').slideToggle(200, function (){
				setMainMinHeight();
			});
			$(this).closest('.js_accordion').toggleClass('js_accordion_open');
		});
	});

	// 繝ｪ繝ｳ繧ｯ繧ｻ繝ｬ繧ｯ繝医�繝�け繧ｹ
	if( $('.js_link_selecter').length ){
		$('.js_link_selecter').on( 'change', function (){
			location.href = $(this).val();
		});
	}

	// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 邱丞粋 PC蜷代￠��
	function initReviewTotalStarRatingLarge(){
		$(".review_totalrate").each(function () {
			var num = $(this).find(".review_totalrate_num").text();
			if( num == ''){
				num = 0;
			}
			if ($(this).find(".review_totalrate_star").hasClass('jq-ry-container')) {
				$(this).find(".review_totalrate_star").rateYo("destroy");
			}
			$(this).find(".review_totalrate_star").rateYo({
				precision: 2,
				rating: num,
				normalFill: '#C8C8C8',
				ratedFill: '#F9CD30',
				starWidth: "22px",
				spacing: "3px",
				readOnly: true
			});
		});
	}

	// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 邱丞粋 SP蜷代￠��
	function initReviewTotalStarRatingSmall(){
		$(".review_totalrate").each(function () {
			var num = $(this).find(".review_totalrate_num").text();
			if( num == ''){
				num = 0;
			}
			if ($(this).find(".review_totalrate_star").hasClass('jq-ry-container')) {
				$(this).find(".review_totalrate_star").rateYo("destroy");
			}
			$(this).find(".review_totalrate_star").rateYo({
				precision: 2,
				rating: num,
				normalFill: '#C8C8C8',
				ratedFill: '#F9CD30',
				starWidth: "16px",
				spacing: "2px",
				readOnly: true
			});
		});
	}

	// 譏溯ｩ穂ｾ｡�亥哨繧ｳ繝� 蛟句挨��
	function initReviewStarRating(){
		$(".review_item_rate").each(function () {
			var num = $(this).find(".review_item_rate_num").text();
			if( num == ''){
				num = 0;
			}
			if ($(this).find(".review_item_rate_star").hasClass('jq-ry-container')) {
				$(this).find(".review_item_rate_star").rateYo("destroy");
			}
			$(this).find(".review_item_rate_star").rateYo({
				precision: 2,
				rating: num,
				normalFill: '#C8C8C8',
				ratedFill: '#F9CD30',
				starWidth: "16px",
				spacing: "2px",
				readOnly: true
			});
		});
	}
	window.initReviewStarRating = initReviewStarRating;
	initReviewStarRating();

	// 邨槭ｊ霎ｼ縺ｿ譚｡莉ｶ縺ｮ髢矩哩繝懊ち繝ｳ謚ｼ荳�
	$('.js_review_search_open_btn').on('click', function () {
		let target = $(this).closest('.review_ctrl');
		target.toggleClass('review_search_opened');
		if (target.hasClass('review_search_opened')) {
			target.find('.review_search_body').slideDown(100);
		}
		else {
			target.find('.review_search_body').slideUp(100);
		}
	});

	// 邨槭ｊ霎ｼ縺ｿ譚｡莉ｶ髢矩哩縺ｮ蛻晄悄險ｭ螳�
	$('.js_review_search_open_btn').each( function (){
		let target = $(this).closest('.review_ctrl');
		if( target.hasClass('review_search_opened') ){
			target.find('.review_search_body').show();
		}
	});

	// 蜿｣繧ｳ繝溘�繝��繧｢繝��
	$('body').on('click', '.js_review_popup', function () {
		var root = $(this).closest('.review_items');

		// 繧ｦ繧｣繝ｳ繝峨え蝗ｺ螳�
		scrollT = $(window).scrollTop();
		$('html').addClass('scroll_prevent');
		$('html').css('top', -(scrollT) + 'px');

		// 繧ｪ繝ｼ繝舌�繝ｬ繧､隕∫ｴ�菴懈�
		$('body').append('<div class="overlay"><div class="review_popup_ctnr"></div><div class="overlay_close"></div></div>');
		$('.review_popup_ctnr').append( root.find('.review_item_wrap.review_item_wrap_show').clone()) ;
		$('.overlay').show();

		// Slick螳溯｡�
		let slickObjReview = $('.review_popup_ctnr').slick({
			infinite: true,
			speed: 500,
			fade: true,
			centerMode: true,
			centerPadding: '0px',
			prevArrow: '<span class="review_popup_prev_btn"></span>',
			nextArrow: '<span class="review_popup_next_btn"></span>',
		});

		// 繝舌ヶ繝ｪ繝ｳ繧ｰ蛛懈ｭ｢
		$('.review_popup_prev_btn, .review_popup_next_btn, .overlay .review_item').on('click', function () {
			return false;
		});

		// 繧ｪ繝ｼ繝舌�繝ｬ繧､髢峨§繧句�逅�
		$('.overlay').on('click', function () {
			$('.overlay').fadeOut(function (){ $('.overlay').remove()} );

			// 繧ｦ繧｣繝ｳ繝峨え蝗ｺ螳夊ｧ｣髯､
			$('html').removeClass('scroll_prevent');
			$(window).scrollTop(scrollT);
		});

		// 繧ｯ繝ｪ繝�け縺輔ｌ縺溷哨繧ｳ繝溘ｒ迚ｹ螳�
		var showIndex = 0;
		showIndex = root.find('.js_review_popup').index($(this));
		slickObjReview.slick('slickGoTo', showIndex, true);

		// 蜿｣繧ｳ繝溘�繝��繧｢繝��陦ｨ遉ｺ
		$('.overlay').fadeIn();
	});

	// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ
	class Scrollbtn {
		constructor( target ) {
			this.target = target;

			/* 蟾ｦ蜿ｳ繝懊ち繝ｳ繧剃ｻ倥￠繧� */
			target.append('<div class="js_scrollbtn_l disabled"></div><div class="js_scrollbtn_r disabled"></div>')

			// 繧､繝吶Φ繝茨ｼ壹Μ繧ｵ繧､繧ｺ
			this.timerScrollbtnResize = 0;
			$(window).on("resize", () => {
				// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
				clearTimeout(this.timerScrollbtnResize);
				this.timerScrollbtnResize = setTimeout( () => {
					this.dispScrollbtn();
				}, 400);
			});

			// 繧､繝吶Φ繝茨ｼ壼ｷｦ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ謚ｼ荳�
			target.find('.js_scrollbtn_l').on('click', function (){
				let ctnr = target.find('.js_scrollbtn_ctnr');

				// 蜿｣繧ｳ繝溘′騾泌�繧後↑縺�ｈ縺�↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驥剰ｪｿ謨ｴ
				let scrollAvailable = Math.floor(ctnr.outerWidth() / 240) * 240;
				let scrollPos = ctnr.scrollLeft() - scrollAvailable;
				scrollPos = Math.ceil(scrollPos / 240) * 240;

				ctnr.animate({ scrollLeft: scrollPos });
			});

			// 繧､繝吶Φ繝茨ｼ壼承繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ謚ｼ荳�
			target.find('.js_scrollbtn_r').on('click', function (){
				let ctnr = target.find('.js_scrollbtn_ctnr');

				// 蜿｣繧ｳ繝溘′騾泌�繧後↑縺�ｈ縺�↓繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驥剰ｪｿ謨ｴ
				let scrollAvailable = Math.floor(ctnr.outerWidth() / 240) * 240;
				let scrollPos = ctnr.scrollLeft() + scrollAvailable;
				scrollPos = Math.floor(scrollPos / 240) * 240;

				ctnr.animate({ scrollLeft: scrollPos });
			});

			// 繧､繝吶Φ繝茨ｼ壹せ繧ｯ繝ｭ繝ｼ繝ｫ
			this.timerScrollbtnScroll = 0;
			target.find('.js_scrollbtn_ctnr').on('scroll', () => {
				// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
				clearTimeout(this.timerScrollbtnScroll);
				this.timerScrollbtnScroll = setTimeout( () => {
					this.dispScrollbtn();
				}, 200);
			});
		}

		dispScrollbtn(){
			let currentS = this.target.find('.js_scrollbtn_ctnr').scrollLeft();
			let maxS = this.target.find('.js_scrollbtn_ctnr')[0].scrollLeftMax;

			// 蟾ｦ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷�
			if( currentS == 0 ){
				this.target.find('.js_scrollbtn_l').addClass('disabled');
			}
			else{
				this.target.find('.js_scrollbtn_l').removeClass('disabled');
			}

			// 蜿ｳ遶ｯ縺ｾ縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ縺励◆蝣ｴ蜷茨ｼ郁ｪ､蟾ｮ縺檎匱逕溘☆繧句�ｴ蜷医′縺ゅｋ縺溘ａ隱ｿ謨ｴ��
			if( currentS >= ( maxS - 5 )){
				this.target.find('.js_scrollbtn_r').addClass('disabled');
			}
			else{
				this.target.find('.js_scrollbtn_r').removeClass('disabled');
			}
		}
	}

	// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝懊ち繝ｳ蛻晄悄蛹�
	$('.js_scrollbtn').each( function (){
		let scrollbtn = new Scrollbtn( $(this) );
		scrollbtn.dispScrollbtn();
	});

	// 繧ｰ繝ｭ繝ｼ繝舌Ν繝翫ン蜀�し繝悶Γ繝九Η繝ｼ髢矩哩
	if ($('.js_gnav_submenu').length) {
		var ua = window.navigator.userAgent.toLowerCase();

		// 繧ｹ繝槭�縲√ち繝悶Ξ繝�ヨ縺ｮ蝣ｴ蜷�
		if (/android|ipod|ipad|iphone|macintosh/.test(ua) && 'ontouchend' in document) {
			// 繧ｿ繝�メ繧､繝吶Φ繝�
			$('.gnav_general_search').on('touchstart', function () {
				// 逕ｻ髱｢蟷�′768px莉･荳翫�蝣ｴ蜷�
				if( mediaQueryMiw768.matches ){
					if( $(this).closest('.js_gnav_submenu').hasClass('gnav_submenu_active') ){
						$(this).closest('.js_gnav_submenu').removeClass('gnav_submenu_active');
						$(this).closest('.js_gnav_submenu').addClass('gnav_submenu_deactive');
					}
					else{
						$(this).closest('.js_gnav_submenu').addClass('gnav_submenu_active');
						$(this).closest('.js_gnav_submenu').removeClass('gnav_submenu_deactive');
					}
					return false;
				}
			});
			$('.gnav_general_search').on('touchend', function () {
				// 逕ｻ髱｢蟷�′768px莉･荳翫�蝣ｴ蜷�
				if( mediaQueryMiw768.matches ){
					return false;
				}
			});
			// 繧ｵ繝悶Γ繝九Η繝ｼ縺碁幕縺�◆迥ｶ諷九〒縺昴ｌ莉･螟悶�隕∫ｴ�縺後ち繝�メ縺輔ｌ縺溷�ｴ蜷医�哩縺倥ｋ
			$('body').on('touchend', function (e) {
				if ( ($(e.target).attr("class") != "gnav_general_search") && ($('.js_gnav_submenu').hasClass('gnav_submenu_active') ) ) {
					setTimeout( function (){
						$('.js_gnav_submenu').removeClass('gnav_submenu_active');
						$('.js_gnav_submenu').addClass('gnav_submenu_deactive');
					}, 50 );
				}
			});

			// 繧ｯ繝ｪ繝�け繧､繝吶Φ繝茨ｼ�iOS縺�縺ｨ縲瑚｡励ｒ謗｢縺吶阪ち繝�メ縺ｧ繝帙ヰ繝ｼ繧､繝吶Φ繝医→繧ｯ繝ｪ繝�け繧､繝吶Φ繝医′逋ｺ逕溘＠縺ｦ縺励∪縺�◆繧�ｼ�
			$('.gnav_general_search .gnav_general_link').on( 'click', function (){
				// 逕ｻ髱｢蟷�′768px莉･荳翫�蝣ｴ蜷医√�繝ｼ繧ｸ驕ｷ遘ｻ縺励↑縺�ｈ縺�↓險ｭ螳�
				if( mediaQueryMiw768.matches ){
					return false;
				}
			});
		}
		// PC縺ｮ蝣ｴ蜷�
		else{
			// 繝帙�繝舌�繧､繝吶Φ繝�
			$('.js_gnav_submenu').hover(
				//繝槭え繧ｹ繧ｫ繝ｼ繧ｽ繝ｫ縺碁㍾縺ｪ縺｣縺滓凾
				function() {
					if( mediaQueryMiw768.matches ){
						$(this).removeClass('gnav_submenu_deactive');
						$(this).addClass('gnav_submenu_active');
						return false;
					}
				},
				//繝槭え繧ｹ繧ｫ繝ｼ繧ｽ繝ｫ縺碁屬繧後◆譎�
				function() {
					if( mediaQueryMiw768.matches ){
						$(this).removeClass('gnav_submenu_active');
						$(this).addClass('gnav_submenu_deactive');
						return false;
					}
				}
			);
		}
	}

	// 繝倥Ν繝励メ繝��
	if( $('.helptip_ico').length ){
		// 繝倥Ν繝励メ繝��險ｭ螳�
		function setHelptip(){
			$('.helptip').each( function (){

				// .helptip_body繧剃ｻｮ諠ｳ繧ｳ繝ｳ繝�リ縺ｨ縺吶ｋ
				let posTargetL = $(this).offset().left;
				let posCtnrL = 0;
				let widthCtnr = $('body').outerWidth();
				if( $(this).closest("[class^='ctnr_']").length ){
					posCtnrL += $(this).closest("[class^='ctnr_']").offset().left;
					widthCtnr = $(this).closest("[class^='ctnr_']").outerWidth();
				}
				$(this).find('.helptip_body').css('left', -(posTargetL) + posCtnrL + 'px');
				$(this).find('.helptip_body').css('width', widthCtnr + 'px');

				// 繝｡繝�ぅ繧｢繧ｯ繧ｨ繝ｪ縺斐→縺ｮ蜃ｦ逅�
				if( mediaQueryMaw639.matches ){
					$(this).find('.helptip_body_in').css('left', 'auto');
				}
				else{
					let posTargetLNew = posTargetL - posCtnrL - 175;
					let posTargetRNew = posTargetL - posCtnrL + 175;
					let posWindowW = $(window).width();

					// 繧ｦ繧､繝ｳ繝峨え縺ｮ蜿ｳ蛛ｴ繧偵�縺ｿ蜃ｺ縺吝�ｴ蜷�
					if(posCtnrL + posTargetRNew > posWindowW){
						posTargetLNew = widthCtnr - 350;
					}
					// 繧ｦ繧､繝ｳ繝峨え縺ｮ蟾ｦ蛛ｴ繧偵�縺ｿ蜃ｺ縺吝�ｴ蜷�
					else if(posCtnrL + posTargetLNew < 0){
						posTargetLNew = 0;
					}
					$(this).find('.helptip_body_in').css('left', posTargetLNew + 'px');
				}
			});
		}

		// 繝倥Ν繝励メ繝��繧ｯ繝ｪ繝�け
		$('.helptip_ico').on('click', function () {
			$(this).closest('.helptip').toggleClass('helptip_show');
		});

		// 繝倥Ν繝励メ繝��繝ｪ繧ｵ繧､繧ｺ
		let timerHelptip = 0;
		$(window).on("resize", function() {
			clearTimeout(timerHelptip);

			// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
			timerHelptip = setTimeout(function(){
				setHelptip();
			}, 400);
		});

		// 蛻晄悄險ｭ螳�
		$('.helptip_body_in').append('<div class="helptip_btn_close"></div>')
		setHelptip();

		// 髢峨§繧九�繧ｿ繝ｳ繧ｯ繝ｪ繝�け
		$('.helptip_btn_close').on('click', function () {
			$(this).closest('.helptip').toggleClass('helptip_show');
		});
	}

	// 繝倥ャ繝繝ｼ蜀�TownU繝ｭ繧ｴ縺ｮ菴咲ｽｮ隱ｿ謨ｴ
	if($('.header_logo').length){
		let timerHeaderLogo = 0;

		function adjustHeaderLogo(){
			$('.header_logo').css('margin-left', '-' + $('.header_logo img').width() / 2 + 'px');
		}
		adjustHeaderLogo();

		$(window).on("resize", function() {
			clearTimeout(timerHeaderLogo);

			// 謖�ｮ壽凾髢灘ｾ後∽ｸ蠎ｦ縺�縺大�逅�ｒ螳溯｡�
			timerHeaderLogo = setTimeout(function(){
				adjustHeaderLogo();
			}, 400);
		});
	}
});

// 繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ驥乗怙螟ｧ蛟､蜿門ｾ�
(function(elmProto){
	if ('scrollTopMax' in elmProto) {
		return;
	}
	Object.defineProperties(elmProto, {
		'scrollTopMax': {
			get: function scrollTopMax() {
				return this.scrollHeight - this.clientHeight;
			}
		},
		'scrollLeftMax': {
			get: function scrollLeftMax() {
				return this.scrollWidth - this.clientWidth;
			}
		}
	});
}
)(Element.prototype);