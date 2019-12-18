<?php

 if(isset($_POST['ob1']) || isset($_POST['ob2']) || isset($_POST['ob3']) || isset($_POST['ob4'])){
   //Convert it to an Associative Array
   //obj1
   var_dump($_POST['ob1']);  

   $obj1 = json_decode($_POST['ob1'], true);
   var_dump($_POST['ob1']);  
   if($obj1!=null){
    $conn = new mysqli("localhost", "eventadmin", "eventadmin", "eventdb");
   if($conn->connect_error){
    die($conn->connect_error);
     }
     $sql = "Insert Into eventdata(Data) values('$obj1')";
     $conn->query($sql);
     if($conn->affected_rows > 0){
       echo "Inserted Successfully";
       var_dump($_POST['ob1']);  

     }
     else{
       echo "Sorry: Problem With Insertion";	
     }

   }

   //obj2
   $obj2 = json_decode($_POST['ob2'], true);
   if($obj2!=null){
    $conn = new mysqli("localhost", "eventadmin", "eventadmin", "eventdb");
   if($conn->connect_error){
    die($conn->connect_error);
     }
     $sql = "Insert Into eventdata(Data) values('$obj2')";
     $conn->query($sql);
     if($conn->affected_rows > 0){
       echo "Inserted Successfully";
     }
     else{
       echo "Sorry: Problem With Insertion";	
     }

   }

   //obj3

   $obj3 = json_decode($_POST['ob3'], true);
   if($obj3!=null){
    $conn = new mysqli("localhost", "eventadmin", "eventadmin", "eventdb");
   if($conn->connect_error){
    die($conn->connect_error);
     }
     $sql = "Insert Into eventdata(Data) values('$obj3')";
     $conn->query($sql);
     if($conn->affected_rows > 0){
       echo "Inserted Successfully";
     }
     else{
       echo "Sorry: Problem With Insertion";	
     }

   }

    //obj4
    

    $obj4 = json_decode($_POST['ob4'], true);
    if($obj4!=null){
     $conn = new mysqli("localhost", "eventadmin", "eventadmin", "eventdb");
    if($conn->connect_error){
     die($conn->connect_error);
      }
      $sql = "Insert Into eventdata(Data) values('$obj4')";
      $conn->query($sql);
      if($conn->affected_rows > 0){
        echo "Inserted Successfully";
      }
      else{
        echo "Sorry: Problem With Insertion";	
      }
 
    }

  }

 ///////////////////////////////////////////////////


 if(isset($_GET['ob1']) || isset($_GET['ob2']) || isset($_GET['ob3']) || isset($_GET['ob4'])){
  $sql = "Select * from eventdata"; 
   $conn = new mysqli("localhost", "eventadmin", "eventadmin", "eventdb");
   if($conn->connect_error){
  	die($conn->connect_error);
   }
   if ($result = $conn->query($sql)){
     if($result->num_rows > 0){
      $storedevent="";
      while($row = $result->fetch_assoc()){
        if($row['Data']!=null)
        $storedevent.=$row['Data']."<br>";
      }
     //Convert to JSON Before Sending to Client
     //var_dump(json_encode($storedevent));
     echo json_encode($storedevent);
    }
  }
  else{
   echo "No Data to Retrieve";
  }
 }
?>