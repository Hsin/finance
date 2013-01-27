$(function() {
		$( "#dialog-login" ).dialog({
			autoOpen: false,
			height: 250,
			width: 350,
			modal: true,
			buttons: {
				"登录": userLogin,
				"取消": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				
			}
		});
		$( "#dialog-buy" ).dialog({
			autoOpen: false,
			height: 420,
			width: 350,
			modal: true,
			buttons: {
				"卖": function() {
					$( this ).dialog( "close" );
				},
				"买": function() {
					$( this ).dialog( "close" );
				},
				"取消": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				
			}
		});
		$( "#dialog-sell" ).dialog({
			autoOpen: false,
			height: 430,
			width: 350,
			modal: true,
			buttons: {
				"市价平仓": function() {
					$( this ).dialog( "close" );
				},
				"取消": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				
			}
		});
		$( "#dialog-stay" ).dialog({
			autoOpen: false,
			height: 520,
			width: 350,
			modal: true,
			buttons: {
				"挂单": function() {
					$( this ).dialog( "close" );
				},
				"取消": function() {
					$( this ).dialog( "close" );
				}
			},
			close: function() {
				
			}
		});

	$( "#button-login" ).button().click(function() {
				$( "#dialog-login" ).dialog( "open" );
			});
	$( "#button-buy" ).button().click(function() {
				$( "#dialog-buy" ).dialog( "open" );
			});
	$( "#button-sell" ).button().click(function() {
				$( "#dialog-sell" ).dialog( "open" );
			});
	$( "#button-stay" ).button().click(function() {
				$( "#dialog-stay" ).dialog( "open" );
			});
	$( "#button-logout" ).button().click(function() {
				alert("成功退出");	
			});
	$( "#user-operations" ).tabs();
	$("#scroll-table").scrollbar({orientation: 'vertical'});
	$("input[type='radio']").click(function(){
		$(this).parent().parent().siblings().removeClass("ui-state-active");
		$(this).parent().parent().addClass("ui-state-active");
	});
	});

function userLogin(){
	var userid = $("#login-userid", $(this)).val();
	var password = $("#login-password", $(this)).val();
	if (!userid || !password) {
		updateTips("登陆账号和电话密码均为必填项", $(".validateTips", $(this)) );
		return;
	};
	//other validation added here

	$.ajax({
		data:{
			"userid": userid,
			"password": password
		},
		url: "login.do",
		success: loginSuccess,
		error:function(){
			alert("登陆失败");
		}
	});
	alert("登陆成功");
	$( this ).dialog( "close" );
}
function updateTips(tips, container){
	container.text(tips).addClass("ui-state-highlight");
	setTimeout(function(){
		container.removeClass("ui-state-highlight");
	}, 1500);
}
function loginSuccess(data){
	var account = $("#account-status")
	$("[name='userid']", account).val($("userid", data).text());
	$("[name='username']", account).val($("username", data).text());
	$("[name='org']", account).val($("org", data).text());
	$("[name='agent']", account).val($("agent", data).text());
	$("[name='telephone']", account).val($("telephone", data).text());
	$("[name='bankname']", account).val($("bankname", data).text());
	$("[name='bankaccount']", account).val($("bankaccount", data).text());

	var current = $("#current-status")
	$("[name='netvalue']", account).val($("netvalue", data).text());
	$("[name='balance']", account).val($("balance", data).text());
	$("[name='profitloss']", account).val($("profitloss", data).text());
	$("[name='availabledeposit']", account).val($("availabledeposit", data).text());
	$("[name='useddeposit']", account).val($("useddeposit", data).text());
	$("[name='frozendeposit']", account).val($("frozendeposit", data).text());
	$("[name='risk']", account).val($("risk", data).text());

}