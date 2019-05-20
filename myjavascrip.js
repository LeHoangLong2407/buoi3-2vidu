function xuly()
{
	console.log('rip113');
	//buoc 1: lấy du liệu từ 1 phần tử có id là j đó
	var a = document.getElementById('so1').value;
	var b = document.getElementById('so2').value;
	console.log('a:'+a+'b:'+b);
	//buoc 1: tính toán,xử lý và trả về kết quả
	var tong = parseInt(a) + parseInt(b);
	document.getElementById('ketqua').innerHTML = 'Ket qua la: '+tong;
}