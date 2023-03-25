<?php

//Check if they have 1000 points
//Choose 1-10
//Choose character from list of rarity based on that
//Check if user owns character
//If they do... choose new character
// If they don't... take away 1000, update their profile to have the new character... then return the character

  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }


//   $json = file_get_contents('php://input');
//   $data = json_decode($json, TRUE);

//   if (!isset($data['auth'])) {
//       die("error: no cookie");
//   }

  //$userid = $data['auth']['id'];
  $userid = 15;

  $Legendary = array("legvr","legsun","legsuitcase", "leglemonade","legdollar");
  $Epic = array("epicworld","epicpc","epicmovie","epichotdog","epicdrink","epicdisco","epicboombox","epicbomb");
  $Rare = array("rarestormcloud","raresoccer","rarepopsicle","raremushroom","rareketchup","rareheart","rareflower","rearefire","raredonut","rarecup","rarecoffee","rarebooze");
  $Common = array("comapple","comberry","combread", "comcarrot","comdragonfruit","comegg", "comlemon","commilk","compeach", "compear","comavocado","compineapple", "compizza","comprickle","comstrawberry", "comstrawberrymale","comtomato","comwatermellon");

  
  $mini = getMini();
  echo("here");
  //take away 1000, update their profile to have the new character... then return the character
  
  $query = "UPDATE accounts SET Points=Points-1000, Minis=CONCAT(Minis, ';$mini') WHERE ID = '$userid'";
  if(mysqli_query($conn, $query))
  {
    die($mini);
  }




  function getMini(){
    global $Legendary, $Epic, $Rare, $Common, $userid;


    $rarity = rand(1,10);

    $findMini = '';

    if($rarity <= 1)
    {
        //Legendary
        $item = rand(1,count($Legendary));
        $findMini = $Legendary[$item];
        die($Legendary[$item]."lege");
    } else if ($rarity <= 3)
    {
        //Epic
        $item = rand(1,count($Epic));
        $findMini = $Epic[$item];
        die($findMini."ep");
    } else if ($rarity <= 6)
    {
        //Rare
        $item = rand(1,count($Rare));
        $findMini = $Rare[$item];
        die($findMini."rar");
    } else if ($rarity <= 10)
    {
        //Common
        $item = rand(1,count($Common));
        $findMini = $Common[$item];
        die(count($Common));
        die($Common[$item]);
    }

    die($findMini);
    die("fff");

    $query = "SELECT `Minis` FROM `accounts` WHERE id='$userid'";
    $result = mysqli_query($conn, $query);
    $result = ($result -> fetch_row())[0];
    

    if (!function_exists('str_contains')) {
        function str_contains( $haystack, $needle) {
        return $needle !== '' && mb_strpos($haystack, $needle) !== false;
        }
    }

    if (str_contains($result, ";$findMini")) {
        //Already has mini
        //Look for a new one
        return getMini();
    } else {
        //Does not have mini
        return $findMini;
    }
  }



  
    
  $conn->close();
?>