
<?php
  header('Access-Control-Allow-Origin: *');
  // Read test cookie, if there
  $cookie_received = (isset($_COOKIE['third_party_c_t']) && $_COOKIE['third_party_c_t'] == 'hey there!');
  // And clear it so the user can test it again 
  setcookie('third_party_c_t', '', time() - 3600*24);
?>

<!DOCTYPE html>
<html lang="en">

<script>
    window._3rd_party_test_step2_loaded(<?php echo ($cookie_received ? 'true' : 'false'); ?>);
</script>

</html>
