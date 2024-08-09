<!DOCTYPE html>
<html lang="en">
    <?php
    include("connect.php");
    $sql="SELECT id,First_Name, Last_Name, Email, `Bank_Balance_in_$` FROM customer";
    $result =$conn->query($sql);
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    if (isset($_GET['id']) && isset($_GET['amount'])) {
        $id =($_GET['id']);  // Ensure ID is an integer
        $amount =($_GET['amount']);  // Ensure amount is a float
    
        mysqli_query($conn,"UPDATE customer SET Bank_Balance_in_$='$amount'+Bank_Balance_in_$ WHERE id='$id'");
        header('location:home.php');
        die();
    }
    

    ?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Banking System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="background"></div>
    <header>
    <h1 id="MyH1" class="myh1">Banking system</h1>
</header>
    <div class="main-content">
    <img src="image.jpg" alt="bank image" class="bank-image">
    <div class ="buttons">
    <div id="btn1Container"><button>Create Account</button></div>
    <div id=btn2Container><button>Select Customer</button></div>
   <div id="btn3Container"><button>Transfer Money</button></div>
   <p id="text"></p>
        <div class="form" id="frm">
        <label for="amount" >amount $ :</label>
        <input type="number" id="amount" name="money_transfered"autocomplete="amnt" required>
        <div id="btn4Container"><button>submit</button></div>
</div>
</div>
<div class="box">
    <form id="account_form">
        <label for="fname">First_Name :</label>
        <input type="text" id="fname" name="first_name"autocomplete="frst_nme" required>

        <label for="lname">Last_Name :</label>
        <input type="text" id="lname" name="last_name" autocomplete="lst_nme" required>

        <label for="email_customer" >Email :</label>
        <input type="email" id="email_customer" name="email_customer"autocomplete="eml" required>

        <label for="bank_balance" >Bank_Balance_in_$ :</label>
        <input type="number" id="bank_balance" name="bank_balance" autocomplete="bnk_blce" required><br>
        <button type="button" id="submit_button">Submit</button><br><br>
    </form>
</div>
</div>

<div id="output">
        <p>First Name: <span id="fn"></span></p>
        <p>Last Name: <span id="ln"></span></p>
        <p>Email: <span id="em_customer"></span></p>
        <p>Bank Balance $: <span id="bb"></span></p>
    </div>
 
<div class="table-container">
    <h3 id="MyH3">Customers List : </h3>
    <table id="customerTable">
    
    <t>
        <th>id</th>
        <th>First_Name</th>
        <th>Last_Name</th>
        <th>Email</th>
        <th>Bank_Balance_in_$</th>
    </t>
    <?php
    while($rows=$result->fetch_assoc())
    {
        ?>
        <tr>
        <td id><?php echo $rows['id']; ?></td>
        <td id><?php echo $rows['First_Name']; ?></td>
        <td id><?php echo $rows['Last_Name'] ;?></td>
        <td id><?php echo $rows['Email'] ;?></td>
        <td id><?php echo $rows['Bank_Balance_in_$'] ;?></td>
        </tr>
    <?php
    }
    ?>
    
    </table>
</div>
    
    <footer>Made By <strong>Maram Maatallah Nour</strong></footer>
   <script src="index.js"></script>
</body>
    
</html> 
