<template>
    <section class="format flex items-center justify-center">

        <!-- images -->
        <!-- <div class="img"> -->
            <!-- <img class="line" src="../../assets/images/dash line.png" alt=""> -->
            <!-- </div> -->
            
            <!-- texts -->
            <div class="texts">
                <div class="up">
                    <h1 class="text-light">Актуальные знания</h1>
                </div>
                <div class="doun text-light">
                    <p>Мы понимаем, как быстро меняются тренды и появляются обновления. Поэтому
                        мы всегда следим за всеми новинками, добавляем в про
                        грамму то, что требуют топовые компании. Мы предла
                        гаем вам только актуальные знания, чтобы вы были впереди планеты всей. </p>
                    </div>

                    <!-- button -->
            <div class="button">
                <button class="btn text-light">Купить курс</button>
            </div>
        </div>

        <img src="../assets/images/course-photo.svg" alt="">
    </section>
</template>

<script>

</script>

<style>
    .format {
        flex-wrap: wrap;
        padding: 100px;
        gap: 140px;
    }

    .format .texts {
        flex-wrap: wrap;
    }

    .format .texts .up h1 {
        font-size: 56px;
        font-family: 'R-500',;
        max-width: 540px;
    }

    .format .texts .doun p {
        font-size: 16px;
        font-family: 'R-400';
        max-width: 478px;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    .format .texts .button .btn {
        border: 1px solid  #FA9F42;
        padding: 20px 74px;
        border-radius: 0px 20px;
        background: #FA9F42;
        }

        @media (max-width: 505px) {
            .format {
                gap: 50px;
            }

            .format .texts .up h1{
                font-size: 39px;
            }

            .format .texts .doun p {
                font-size: 10px;
            }

            .format .texts .button .btn {
                padding: 10px 40px;
            }
        }

</style>