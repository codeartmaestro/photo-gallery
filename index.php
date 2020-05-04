<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <link rel="stylesheet" href="public/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
    <title>Leila's Photo Gallery</title>
</head>

<body class="body-flex">

    <?php include 'public/php/header.php'; ?>

    <main class="container-main body-width">
        <div class="frame">
            <div class="frame-content">
                <!-- >> Iran << -->
                <?php include 'public/php/img-tehran.php'; ?>
                <?php include 'public/php/img-isfahan.php'; ?>
                <?php include 'public/php/img-shiraz.php'; ?>
            </div>
        </div>
        <!-- Modal -->
        <?php include 'public/php/modal-container.php'; ?>
    </main>

    <?php include 'public/php/footer.php'; ?>

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.js"></script>
    <script src="public/js/jquery.nicescroll.min.js"></script>
    <script src="public/js/script.js"></script>
</body>

</html>