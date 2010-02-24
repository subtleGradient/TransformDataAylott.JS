function formatCurrency(num){
	num = (num||'0').toString().replace(/\$|\,/g,'');
	if (isNaN(num)) num = "0";
	if (num+0 == 0) return '$0';
	
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	
	var cents = num%100;
	num = Math.floor(num/100).toString();
	
	if (cents<10) cents = "0" + cents;
	
	numlength = num.length;
	
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
	
	return [
		sign ? '' : '-',
		'$',
		num,
		'.',
		cents
	].join('');
}
