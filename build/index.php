<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=8" />
    <link rel="stylesheet" href="css/style.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet">
    <title>Leila's Photo Gallery</title>
</head>

<body class="body-flex">

    <?php include '../src/php/header.php'; ?>

    <main class="container-main body-width">
        <div class="frame">
            <div class="frame-content">
                <!-- >> Iran << -->
                <?php include '../src/php/img-tehran.php'; ?>
                <?php include '../src/php/img-isfahan.php'; ?>
                <?php include '../src/php/img-shiraz.php'; ?>
            </div>
        </div>
        <!-- Modal -->
        <?php include '../src/php/modal-container.php'; ?>
    </main>

    <?php include '../src/php/footer.php'; ?>

    <script src="js/script.min.js"></script>
</body>

</html>