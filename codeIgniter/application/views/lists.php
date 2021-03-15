<?php
defined("BASEPATH") or exit("No direct script access allowed"); ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Welcome to Board</title>

	<style type="text/css">
		::selection {
			background-color: #E13300;
			color: white;
		}

		::-moz-selection {
			background-color: #E13300;
			color: white;
		}

		body {
			background-color: #fff;
			margin: 40px;
			font: 13px/20px normal Helvetica, Arial, sans-serif;
			color: #4F5155;
		}

		a {
			color: #003399;
			background-color: transparent;
			font-weight: normal;
		}

		h1 {
			color: #444;
			background-color: transparent;
			border-bottom: 1px solid #D0D0D0;
			font-size: 19px;
			font-weight: normal;
			margin: 0 0 14px 0;
			padding: 14px 15px 10px 15px;
		}

		code {
			font-family: Consolas, Monaco, Courier New, Courier, monospace;
			font-size: 12px;
			background-color: #f9f9f9;
			border: 1px solid #D0D0D0;
			color: #002166;
			display: block;
			margin: 14px 0 14px 0;
			padding: 12px 10px 12px 10px;
		}

		#body {
			margin: 0 15px 0 15px;
		}

		p.footer {
			text-align: right;
			font-size: 11px;
			border-top: 1px solid #D0D0D0;
			line-height: 32px;
			padding: 0 10px 0 10px;
			margin: 20px 0 0 0;
		}

		#container {
			margin: 10px;
			border: 1px solid #D0D0D0;
			box-shadow: 0 0 8px #D0D0D0;
		}
	</style>

	<script src="/dreamcoding/codeIgniter/js/jquery.3.6.0.js"></script>
	<script src="/dreamcoding/codeIgniter/js/jquery.bpopup.min.js"></script>

	<script type="text/javascript">
		function execSave() {
			let i_name, i_tilte, i_contents;
			i_name = $('#name').val().trim();
			i_title = $('#title').val().trim();
			i_contents = $('#contents').val().trim();

			if (!i_name) {
				alert("이름을 입력해주세요.");
				$('#name').focus();
				return false;
			}
			if (!i_title) {
				alert("제목을 입력해주세요.");
				$('#title').focus();
				return false;
			}
			if (!i_contents) {
				alert("내용을 입력해주세요.");
				$('#contents').focus();
				return false;
			}

			$.ajax({
				type: 'POST',
				url: "write_ok",
				data: {
					name: i_name,
					title: i_title,
					contents: i_contents
				},
				cache: false,
				async: false
			})

			.done( function( html )  {
					alert("html:"+html+":");
					alert("정상적으로 저장되었습니다."); 		
			})

			.fail( function( xhr, status, errorThrown) {
				alert( "오류가 발생했습니다." 
				+ " 오류명: " + errorThrown 
				+ " 상태: " + status);
			})

			.always( function(xhr, status) {
				alert("execSave 요청이 완료되었습니다.");
			});			
		}

		function openMessage(IDS) {
			$('#' + IDS).bPopup();
		}

		function addBoard() {
			openMessage('writeBody');
		}
	</script>
</head>

<body>

	<div id="container" style="width:800px;margin:0px auto">

		<div id="body" style="width:100%;margin-top:13px">
			<div id="tableBody" style="width:93%;margin:0px auto">
			</div>
		</div>

		<div id="bottom">
			<div style="float:right;width:50%;text-align:right">
				<button onclick="javascript:addBoard();"> 글쓰기</button>
			</div>
		</div>

		<div id="writeBody" style="width:700px; height:500px;background-color:white;display:none">
			<div style="width:80%;clear:both;height:30px;margin:0px auto;margin-top:20px">
				<span style="width:30%;height:100%;line-height:30px">
					<b> 이름 </b>
				</span>
				<span style="width:70%;height:100%;line-height:30px">
					<input type="text" name="name" id="name" required option="25" info="이름">
				</span>
			</div>

			<div style="width:80%;clear:both;height:30px;margin:0px auto">
				<span style="width:30%;height:100%;line-height:30px">
					<b> 제목 </b>
				</span>
				<span style="width:70%;height:100%;line-height:30px">
					<input type="text" name="title" id="title" required option="25" info="제목"> </span>
			</div>
			<div>

				<div style="width:80%;clear:both;height:270px;margin:0px auto">
					<span style="width:30%;height:30px;line-height:30px;vertical-align:top">
						<b> 내용 </b>
					</span>

					<span style="width:70%;height:100%">
						<textarea style="width:90%;height:100%" name="contents" id="contents"></textarea> </span>
				</div>

				<div style="width:80%;clear:both;height:30px;margin:0px auto;margin-top:30px;text-align:center">
					<button onclick="javascript:execSave();">저장하기</button>
				</div>

			</div>

</body>

</html>