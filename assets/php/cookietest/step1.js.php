<?php
  header('Content-Type: application/javascript; charset=UTF-8');
  // Set test cookie
  setcookie('third_party_c_t', 'hey there!', time() + 3600*24*2);
?>
window._3rd_party_test_step1_loaded();