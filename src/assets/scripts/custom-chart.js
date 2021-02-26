$("#myModal").on("show.bs.modal", function(e) {
		var ttitl = $(e.relatedTarget).data('text');

		if (ttitl == 'g.analytics' || ttitl == 'search console' || ttitl == 'youtube' || ttitl == 'GMB' || ttitl == 'logs') {
			$('.hgfp').show();
		} else {
			$('.hgfp').hide();
		}

		$('.vvwarning').html(ttitl);
	});

	$('.click-eye').on('click', function() {
		var did = $(this).data('id');
		$(this).toggleClass('ac-text');
		$('.bb-table-' + did).toggleClass('show-box-more');
		//		$('#bb-table-'+did).slideDown(500);
	});

	$('.close-box-table').on('click', function() {
		var did = $(this).data('id');
		$('.bb-table-' + did).removeClass('show-box-more');
		$('#click-eye-' + did).removeClass('ac-text');
	});

	$(".texttoggle").click(function() {
		$(this).text($(this).text() == 'CON' ? 'DEV' : 'CON');
	});

	$(".bb-bx").click(function() {

		if ($(this).height() != 30) {
			$(this).animate({
				height: 30
			}, 500);

			$(this).children('span').toggleClass('js-arrow')

		} else {
			$(this).animate({
				height: 85
			}, 500);

			$(this).children('span').toggleClass('js-arrow')

		}
	});

	$(document).ready(function() {

		var $navbar = $("#mNavbar");

		$('.tabDetail').on('click', function(e) {

			$("#mNavbar").find('.active').removeClass();

			//            $(".warning").find('.top80').removeClass('top80');

			var getID = $(this).attr('href');

			$(getID).addClass('top80');

			if (getID == "#Global") {
				$('#goWeb').addClass('active');
			}

			if (getID == "#Website") {
				$('#fWeb').addClass('active');
			}

			if (getID == "#Mobile") {
				$('#mWeb').addClass('active');
			}
			if (getID == "#Load") {
				$('#lWeb').addClass('active');
			}
			if (getID == "#GAna") {
				$('#aWeb').addClass('active');
			}
			//            if (getID == "#Search") {
			//                $('#sWeb').addClass('active');
			//            }
			//            if (getID == "#Youtube") {
			//                $('#yWeb').addClass('active');
			//            }
			//            if (getID == "#GMB") {
			//                $('#gmWeb').addClass('active');
			//            }
			//            if (getID == "#LOGS") {
			//                $('#loWeb').addClass('active');
			//            }

		});

		if ($(window).scrollTop() == 0) {
			$("#goWeb").addClass("active");
		}
	});


	var lastId,
		topMenu = $("#mNavbar"),
		topMenuHeight = topMenu.outerHeight() + 80,
		topMenuHeight3 = topMenu.outerHeight() + 105,

		menuItems = topMenu.find("a"),
		scrollItems = menuItems.map(function() {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		//        $('.IconDev').fadeIn();
		//        $('.IconWarn').fadeIn();
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});



	// Bind to scroll
	$(window).scroll(function() {


		var fromTop = $(this).scrollTop() + topMenuHeight3;
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop)
				return this;

		});

		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			menuItems
				.parent().removeClass("active")
				.end().filter("[href='#" + id + "']").parent().addClass("active");
		}
		if ($(window).scrollTop() == 0) {
			$("#goWeb").addClass("active");
		}

	});

	function scrollToElement(target) {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#" + target).offset().top - 130
		}, 300);
	}
	
	
	$('.deshow').click(function(event) {
		var idd = $(this).data('id');
		$("#" + idd).hide(300);
	});

	function scrollToElementDetail(target) {


		$("#" + target).show(300);

		$([document.documentElement, document.body]).animate({
			scrollTop: $("#" + target).offset().top - 130
		}, 300);
	}

	$('.click-ajax').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			//                var url = "ajax_chart_evo.html";
			$("#container-line").addClass('acv');
			$("#container-line-cumu").removeClass('acv');
			$("#container-line-distri").removeClass('acv');
			$('.box-bg-logo').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu_1").prop("checked", true);
			$("#comu_2").prop("checked", false);
			$("#comu_3").prop("checked", false);


		} else if (id == 2) {
			//                var url = "ajax_chart_cumu.html";

			$("#container-line").removeClass('acv');
			$("#container-line-cumu").addClass('acv');
			$("#container-line-distri").removeClass('acv');
			$('.box-bg-logo').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu_1").prop("checked", false);
			$("#comu_2").prop("checked", true);
			$("#comu_3").prop("checked", false);

		} else if (id == 3) {
			//                var url = "ajax_chart_distri.html";
			$("#container-line").removeClass('acv');
			$("#container-line-cumu").removeClass('acv');
			$("#container-line-distri").addClass('acv');

			$('.box-bg-logo').css({
				'z-index': '0',
				'top': '75px'
			});
			//			
			$("#comu_1").prop("checked", false);
			$("#comu_2").prop("checked", false);
			$("#comu_3").prop("checked", true);
		}


		//            alert(title);

		//            $.ajax({
		//                type: 'POST',
		//                url: url,
		//                data: {
		//                    id: id
		//                },
		//                dataType: 'html',
		//                success: function (data) {
		//
		//                    $(".box-chart-line").html(data);
		$(".b-title").html(title);
		//
		//                }
		//            })

	});

	$('.click-ajax-b').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-2").addClass('acv');
			$("#container-line-cumu-b").removeClass('acv');
			$("#container-line-distri-b").removeClass('acv');
			$('.box-bg-logo-b').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-b_1").prop("checked", true);
			$("#comu-b_2").prop("checked", false);
			$("#comu-b_3").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-2").removeClass('acv');
			$("#container-line-cumu-b").addClass('acv');
			$("#container-line-distri-b").removeClass('acv');
			$('.box-bg-logo-b').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-b_1").prop("checked", false);
			$("#comu-b_2").prop("checked", true);
			$("#comu-b_3").prop("checked", false);
		} else if (id == 3) {
			$("#container-line-2").removeClass('acv');
			$("#container-line-cumu-b").removeClass('acv');
			$("#container-line-distri-b").addClass('acv');
			$('.box-bg-logo-b').css({
				'z-index': '0',
				'top': '75px'
			});
			$("#comu-b_1").prop("checked", false);
			$("#comu-b_2").prop("checked", false);
			$("#comu-b_3").prop("checked", true);
		}

		$(".b-title-b").html(title);
	});

	$('.click-ajax-c').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-mobile-1").addClass('acv');
			$("#container-line-mobile-2").removeClass('acv');
			$("#container-line-mobile-3").removeClass('acv');
			$('.box-bg-logo-c').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-c_1").prop("checked", true);
			$("#comu-c_2").prop("checked", false);
			$("#comu-c_3").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-mobile-1").removeClass('acv');
			$("#container-line-mobile-2").addClass('acv');
			$("#container-line-mobile-3").removeClass('acv');
			$('.box-bg-logo-c').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-c_1").prop("checked", false);
			$("#comu-c_2").prop("checked", true);
			$("#comu-c_3").prop("checked", false);
		} else if (id == 3) {
			$("#container-line-mobile-1").removeClass('acv');
			$("#container-line-mobile-2").removeClass('acv');
			$("#container-line-mobile-3").addClass('acv');
			$('.box-bg-logo-c').css({
				'z-index': '0',
				'top': '75px'
			});
			$("#comu-c_1").prop("checked", false);
			$("#comu-c_2").prop("checked", false);
			$("#comu-c_3").prop("checked", true);
		}

		$(".b-title-c").html(title);
	});

	$('.click-ajax-d').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-load-1").addClass('acv');
			$("#container-line-load-2").removeClass('acv');
			$("#container-line-load-3").removeClass('acv');
			$('.box-bg-logo-d').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-d_1").prop("checked", true);
			$("#comu-d_2").prop("checked", false);
			$("#comu-d_3").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-load-1").removeClass('acv');
			$("#container-line-load-2").addClass('acv');
			$("#container-line-load-3").removeClass('acv');
			$('.box-bg-logo-d').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-d_1").prop("checked", false);
			$("#comu-d_2").prop("checked", true);
			$("#comu-d_3").prop("checked", false);
		} else if (id == 3) {
			$("#container-line-load-1").removeClass('acv');
			$("#container-line-load-2").removeClass('acv');
			$("#container-line-load-3").addClass('acv');
			$('.box-bg-logo-d').css({
				'z-index': '0',
				'top': '75px'
			});
			$("#comu-d_1").prop("checked", false);
			$("#comu-d_2").prop("checked", false);
			$("#comu-d_3").prop("checked", true);
		}

		$(".b-title-d").html(title);
	});

	$('.click-ajax-e').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-g-1").addClass('acv');
			$("#container-line-g-2").removeClass('acv');
			$("#container-line-g-3").removeClass('acv');
			$('.box-bg-logo-e').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-e_1").prop("checked", true);
			$("#comu-e_2").prop("checked", false);
			$("#comu-e_3").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-g-1").removeClass('acv');
			$("#container-line-g-2").addClass('acv');
			$("#container-line-g-3").removeClass('acv');
			$('.box-bg-logo-e').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-e_1").prop("checked", false);
			$("#comu-e_2").prop("checked", true);
			$("#comu-e_3").prop("checked", false);
		} else if (id == 3) {
			$("#container-line-g-1").removeClass('acv');
			$("#container-line-g-2").removeClass('acv');
			$("#container-line-g-3").addClass('acv');
			$('.box-bg-logo-e').css({
				'z-index': '0',
				'top': '75px'
			});
			$("#comu-e_1").prop("checked", false);
			$("#comu-e_2").prop("checked", false);
			$("#comu-e_3").prop("checked", true);
		}

		$(".b-title-e").html(title);
	});

	$('.click-ajax-f').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-search-1").addClass('acv');
			$("#container-line-search-2").removeClass('acv');
			$('.box-bg-logo-f').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-f_1").prop("checked", true);
			$("#comu-f_2").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-search-1").removeClass('acv');
			$("#container-line-search-2").addClass('acv');
			$('.box-bg-logo-f').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-f_1").prop("checked", false);
			$("#comu-f_2").prop("checked", true);
		}

		$(".b-title-f").html(title);
	});

	$('.click-ajax-g').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-youtube-1").addClass('acv');
			$("#container-line-youtube-2").removeClass('acv');
			$("#container-line-youtube-3").removeClass('acv');
			$('.box-bg-logo-g').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-g_1").prop("checked", true);
			$("#comu-g_2").prop("checked", false);
			$("#comu-g_3").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-youtube-1").removeClass('acv');
			$("#container-line-youtube-2").addClass('acv');
			$("#container-line-youtube-3").removeClass('acv');
			$('.box-bg-logo-g').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-g_1").prop("checked", false);
			$("#comu-g_2").prop("checked", true);
			$("#comu-g_3").prop("checked", false);
		} else if (id == 3) {
			$("#container-line-youtube-1").removeClass('acv');
			$("#container-line-youtube-2").removeClass('acv');
			$("#container-line-youtube-3").addClass('acv');
			$('.box-bg-logo-g').css({
				'z-index': '0',
				'top': '75px'
			});
			$("#comu-g_1").prop("checked", false);
			$("#comu-g_2").prop("checked", false);
			$("#comu-g_3").prop("checked", true);
		}

		$(".b-title-g").html(title);
	});

	$('.click-ajax-h').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-gmb-1").addClass('acv');
			$("#container-line-gmb-2").removeClass('acv');
			$('.box-bg-logo-h').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-h_1").prop("checked", true);
			$("#comu-h_2").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-gmb-1").removeClass('acv');
			$("#container-line-gmb-2").addClass('acv');
			$('.box-bg-logo-h').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-h_1").prop("checked", false);
			$("#comu-h_2").prop("checked", true);
		}

		$(".b-title-h").html(title);
	});

	$('.click-ajax-i').click(function(event) {

		var id = $(this).data("id");
		var title = $(this).data("title");

		if (id == 1) {
			$("#container-line-logs-1").addClass('acv');
			$("#container-line-logs-2").removeClass('acv');
			$('.box-bg-logo-i').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-i_1").prop("checked", true);
			$("#comu-i_2").prop("checked", false);
		} else if (id == 2) {
			$("#container-line-logs-1").removeClass('acv');
			$("#container-line-logs-2").addClass('acv');
			$('.box-bg-logo-i').css({
				'z-index': '1',
				'top': '75px'
			});

			$("#comu-i_1").prop("checked", false);
			$("#comu-i_2").prop("checked", true);
		}

		$(".b-title-i").html(title);
	});