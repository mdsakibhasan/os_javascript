$(document).ready(function(){
	//here is icon animate
	$('#showMenu').click(function(){
		var x = $('#display').css('left');
		if(x!="15%"){
			$('#display').animate({"left":"15%"},3000);
		}
	});
	//here is autocalculation
	calcu();
	function calcu(){
		$('input').click(function(){
			var order= document.forms[0];
			var productare = "";
			var joss ="";
			var price = 0;
			var i =0;

			while(i<order.length){
				if(order[i].checked){
					var item= order[i].id;

					if(item == "Bag1<br/>"){
						price = price+100;
					}else if (item == "Bag2<br/>"){
						price = price+200;
					}else if (item == "Bag3<br/>"){
						price = price+300;
					}else if (item == "Bag4<br/>"){
						price = price+400;
					}else if (item == "Bag5<br/>"){
						price = price+500;
					}else if (item == "shoe1<br/>"){
						price = price+500;
					}else if (item == "shoe2<br/>"){
						price = price+200;
					}else if (item == "shoe3<br/>"){
						price = price+300;
					}else if (item == "shoe4<br/>"){
						price = price+400;
					}else if (item == "shoe5<br/>"){
						price = price+500;
					}else if (item == "shoe6<br/>"){
						price = price+6;
					}else if (item == "shoe7<br/>"){
						price = price+7;
					}else if (item == "shoe8<br/>"){
						price = price+8;
					}else if (item == "shoe9<br/>"){
						price = price+9;
					}else if (item == "shoe10<br/>"){
						price = price+10;
					}else if (item == "shoe11<br/>"){
						price = price+11;
					}else if (item == "shoe12<br/>"){
						price = price+12;
					}else if (item == "shoe13<br/>"){
						price = price+13;
					}else if (item == "shoe14<br/>"){
						price = price+14;
					}else if (item == "shoe15<br/>"){
						price = price+15;
					}else if (item == "shoe16<br/>"){
						price = price+16;
					}else if (item == "shoe17<br/>"){
						price = price+17;
					}else if (item == "shoe18<br/>"){
						price = price+18;
					}else if (item == "shoe19<br/>"){
						price = price+19;
					}else if (item == "shoe20<br/>"){
						price = price+20;
					}
					productare = productare + "<span>"+order[i].id+"</span>";
					joss = joss + "<span>"+order[i].value+"</span>";
					$('#totalAmt').text(price);
				}
				i++
			}
			$('#labelList').html(productare);
			$('#priceList').html(joss);
		});
	}
	//here is ajax
	var start =0;
	var stop =5;

	$('#showMore').click(function(){
		$.ajax({
			type:"GET",
			url:"http://localhost/moreshoes.html",
			success:function(html){
				var a = $(html);
				var b = a.filter('#moreitem');
				var c = b.slice(start,stop);
				$('#items').append(c);
				start +=5;
				stop +=5;
				calcu();
			}
		});
	});
	//here is addcard
	$('#totalAmt').hide();
	$('#addToCart').click(function(){
		$('#totalAmt').toggle();
	});
});