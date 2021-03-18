<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datatable</title>

  <link href='https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css' rel='stylesheet' />

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js" defer></script>
  <script type="text/javascript" src='https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js' defer></script>
  
  <script type="text/javascript" src='../../js/jquery.bpopup.min.js' defer></script>
  <script type="text/javascript" src='https://momentjs.com/downloads/moment.min.js' defer></script>

  <script>
       $(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "data/objects.txt",
        "columns": [
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "extn" },
            { "data": "start_date" },
            { "data": "salary" }
        ]
    } );
} );
  </script>

  <style>
    .f32 .flag {
      vertical-align: middle;
      margin: -8px 0;
    }

    progress {
      width: 100%;
    }
  </style>
</head>

<body>
<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Extn.</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot>
    </table>

</body>

</html>