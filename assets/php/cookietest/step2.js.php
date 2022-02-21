<?php
  header('Content-Type: application/javascript; charset=UTF-8');
  // Read test cookie, if there
  $cookie_received = (isset($_COOKIE['third_party_c_t']) && $_COOKIE['third_party_c_t'] == 'hey there!');
  // And clear it so the user can test it again 
  setcookie('third_party_c_t', '', time() - 3600*24);
?>
window._3rd_party_test_step2_loaded(<?php echo ($cookie_received ? 'true' : 'false'); ?>);