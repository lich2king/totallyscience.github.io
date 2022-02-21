<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  // Set test cookie
  setcookie('third_party_c_t', 'hey there!', time() + 3600*24*2);
?>

<!DOCTYPE html>
<html lang="en">

<script>
    window._3rd_party_test_step1_loaded();
</script>

</html>