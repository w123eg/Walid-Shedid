write_code();
$('#Dphp').bind('change keyup', function() {
  write_code();
});
function write_code()
{
 var phpcode = jQuery('#Dphp').val();

$.ajax({
  url:"Test.php",
  method:"POST",
  data:{phpcode:phpcode},
  dataType:"json",
  success:function(data)
  {
  $('#uploaded_code').html(data.code_view);
  }
  });
} 