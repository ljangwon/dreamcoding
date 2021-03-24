'use strict';

function display_count_st_master() {
	$.ajax({
		url: 'model/st_master/count_st_master.php',
		cache: false,
	}).done(function (html) {
		$('#count').html(html);
	});
}

function saveTdData(id, header, value) {
	$.ajax({
		url: 'model/st_master/save_st_master.php',
		method: 'POST',
		data: { id: id, header: header, value: value },
		success: function (result) {
			$('#result').html('<br> success: <br>' + id + result);
		},
	}).fail(function (result) {
		$('#result').html('<br> fail: <br>' + id + result);
	});
}

function returnTdToOriginal(table, preClickedTD, rowIdx, colIdx) {
	let cellInputId = 'td_' + rowIdx + '_' + colIdx;
	let id = table.cell(rowIdx, 0).data();

	let columnHeader = table.column(colIdx).header();
	let columnHeaderText = $(columnHeader).html();

	// originData가 바꼈을 때에만 서버업데이트...
	if ($('#' + cellInputId).attr('originalData') != $('#' + cellInputId).val()) {
		saveTdData(id, columnHeaderText, $('#' + cellInputId).val());
		display_count_st_master();
	}

	preClickedTD.data($('#' + preClickedTD.inputID).val());
}

function display_table_t1() {
	$('#t1').DataTable({
		paging: false,
		keys: true,
		ajax: 'model/st_master/ajax_st_master.php',
		columns: [
			{
				data: 'id',
			},
			{
				data: 'grade1',
			},
			{
				data: 'grade2',
			},
			{
				data: 'name',
			},
			{
				data: 'status',
			},
			{
				data: 'house',
			},
		],

		columnDefs: [
			{
				targets: [0],
				render: function (data, type, row, meta) {
					return '#' + data;
				},
			},
			{
				targets: '_all',
				className: 'dt-body-center',
			},
		],
	});
	let table = $('#t1').DataTable();
	let preClickedTD = null;
	table
		.on('key-focus', function (e, datatable, cell) {
			let clickCellData = cell.data();
			let clickCellInputId = 'td_' + cell.index().row + '_' + cell.index().column;
			let inputData = "<input type='text' id ='" + clickCellInputId + "'>";
			cell.data(inputData).draw();
			cell.inputID = clickCellInputId;
			$('#' + clickCellInputId).attr('originalData', clickCellData);
			//original data 저장함...
			$('#' + clickCellInputId).val(clickCellData);
			$('#' + clickCellInputId).focus();
			preClickedTD = cell;
		})
		.on('key-blur', function (e, datatable, cell) {
			if (preClickedTD) {
				// 선택 상태에서 원복
				returnTdToOriginal(datatable, preClickedTD, cell.index().row, cell.index().column);
			}
		});
}

function display_table_t2() {
	$('#t2').DataTable({
		paging: false,
		keys: true,
		ajax: 'model/study_history/select.php',
		columns: [
			{
				data: 'id',
			},
			{
				data: 'st_id',
			},
			{
				data: 'course',
			},
			{
				data: 'memo',
			},
		],

		columnDefs: [
			{
				targets: [0],
				render: function (data, type, row, meta) {
					return '#' + data;
				},
			},
			{
				targets: '_all',
				className: 'dt-body-center',
			},
		],
	});

	let table = $('#t2').DataTable();
	let preClickedTD = null;
	table
		.on('key-focus', function (e, datatable, cell) {
			let clickCellData = cell.data();
			let clickCellInputId = 'td_' + cell.index().row + '_' + cell.index().column;
			let inputData = "<input type='text' id ='" + clickCellInputId + "'>";
			cell.data(inputData).draw();
			cell.inputID = clickCellInputId;
			$('#' + clickCellInputId).attr('originalData', clickCellData);
			//original data 저장함...
			$('#' + clickCellInputId).val(clickCellData);
			$('#' + clickCellInputId).focus();
			preClickedTD = cell;
		})
		.on('key-blur', function (e, datatable, cell) {
			if (preClickedTD) {
				// 선택 상태에서 원복
				returnTdToOriginal2(datatable, preClickedTD, cell.index().row, cell.index().column);
			}
		});
}

function saveTdData2(id, header, value) {
	$.ajax({
		url: 'model/study_history/update.php',
		method: 'POST',
		data: { id: id, header: header, value: value },
		success: function (result) {
			$('#result2').html('<br> success: <br>' + id + result);
		},
	}).fail(function (result) {
		$('#result2').html('<br> fail: <br>' + id + result);
	});
}

function returnTdToOriginal2(table, preClickedTD, rowIdx, colIdx) {
	let cellInputId = 'td_' + rowIdx + '_' + colIdx;
	let id = table.cell(rowIdx, 0).data();

	let columnHeader = table.column(colIdx).header();
	let columnHeaderText = $(columnHeader).html();

	// originData가 바꼈을 때에만 서버업데이트...
	if ($('#' + cellInputId).attr('originalData') != $('#' + cellInputId).val()) {
		saveTdData2(id, columnHeaderText, $('#' + cellInputId).val());
	}

	preClickedTD.data($('#' + preClickedTD.inputID).val());
}
