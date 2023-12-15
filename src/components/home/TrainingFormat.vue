<template>
    <section class="format flex items-center justify-center">

        <!-- images -->
        <!-- <div class="img"> -->
            <!-- <img class="line" src="../../assets/images/dash line.png" alt=""> -->
            <!-- </div> -->
            <img src="../../assets/images/photo.png" alt="">

        <!-- texts -->
        <div class="texts">
            <div class="up">
                <h1 class="text-light">Выбирайте свой формат обучения</h1>
            </div>
            <div class="doun text-light">
                <p>Смотрите видео-лекции в удобное для вас время, обучайтесь н
                     тренажере, участвуйте в интенсивных воркшопах с 
                    командой или проходите курс с гибким расписанием. Н
                    а нашей платформе каждый найд
                    ет подходящий формат.</p>
            </div>
            <div class="button">
                <button class="btn text-light">Все курсы</button>
            </div>
        </div>

        <!-- button -->
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
        max-width: 500px;
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