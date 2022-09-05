$(function () {
    $("#tableGrid_ID").DataTable({
        "paging": true,
		"lengthChange": true,
		"autoWidth": true,
        "searching": true,
        "ordering": true,
        "info": false,
        "autoWidth": false,
        "responsive": true,
        "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#tableGrid_ID_wrapper .col-md-6:eq(0)');

	// 테이블의 Row 클릭시 값 가져오기
	$("#tableGrid_ID tr").click(function () {

		var str = ""
		var tdArr = new Array();	// 배열 선언

		// 현재 클릭된 Row(<tr>)
		var tr = $(this);
		var td = tr.children();

		// tr.text()는 클릭된 Row 즉 tr에 있는 모든 값을 가져온다.
		//console.log("클릭한 Row의 모든 데이터 : " + tr.text());

		// 반복문을 이용해서 배열에 값을 담아 사용할 수 도 있다.
		td.each(function (i) {
			tdArr.push(td.eq(i).text());
		});

		// td.eq(index)를 통해 값을 가져올 수도 있다.
		var col1 = td.eq(0).text();
		var col2 = td.eq(1).text();
		var col3 = td.eq(2).text();
		var col4 = td.eq(3).text();
		var col5 = td.eq(4).text();

		$(".card-title").html(" * 클릭한 Row의 모든 데이터 = <br>" + tr.text());
	});
});

