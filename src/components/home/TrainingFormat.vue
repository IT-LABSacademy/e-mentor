<template>
    <section class="format bg-green py-14 md:py-24 xl:py-28">
        <div class="container flex items-center justify-center lg:justify-between flex-wrap gap-10">

<!-- image-block -->
            <div class="image-block md:w-[450px]">
                <img class="relative z-10 w-full h-full object-cover" src="../../assets/images/photo.png" alt="">
            </div>

            <!-- texts -->
            <div class="texts">
                <div class="up">
                    <h1 class="text-light">Выбирайте свой формат обучения</h1>
                </div>
                <div class="down text-light">
                    <p>
                        Смотрите видео-лекции в удобное для вас время, обучайтесь н тренажере, участвуйте в интенсивных
                        воркшопах с командой или проходите курс с гибким расписанием. На нашей платформе каждый найд
                        ет подходящий формат.
                    </p>
                </div>
                <div class="button">
                    <button class="btn text-light">Все курсы</button>
                </div>
            </div>

            <!-- button -->
        </div>
    </section>
</template>

<script>

</script>

<style scoped>
.format .texts {
    flex-wrap: wrap;
}

.format .texts .up h1 {
    font-size: 56px;
    font-family: 'R-500', ;
    max-width: 500px;
}

.format .texts .down p {
    font-size: 16px;
    font-family: 'R-400';
    max-width: 478px;
    margin-top: 20px;
    margin-bottom: 50px;
}

.format .texts .button .btn {
    padding: 20px 74px;
    border-radius: 0px 20px;
    background: #FA9F42;
    transition: 0.3s;
}

.format .texts .button .btn:hover {
    border-radius: 20px 0px;
}

.format .container .image-block {
    position: relative;
}

.format .container .image-block::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 30px;
    top: -30px;
    border: 2px dashed white;
    border-radius: 0 120px 0 0;
}

@media (max-width: 505px) {
    .format {
        gap: 50px;
    }

    .format .texts .up h1 {
        font-size: 39px;
    }

    .format .texts .down p {
        font-size: 10px;
    }

    .format .texts .button .btn {
        padding: 10px 40px;
    }

    .format .container .image-block::before {
        left: 10px;
        top: -15px;
        border-radius: 0 80px 0 0;
    }
}
</style>