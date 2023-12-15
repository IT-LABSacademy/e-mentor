<template>
    <section class="format bg-green py-14 md:py-24 xl:py-28">
        <div class="container flex items-center justify-center lg:justify-between flex-wrap gap-10">

            <!-- texts -->
            <div class="texts">
                <div class="up">
                    <h1 class="text-light">Актуальные знания</h1>
                </div>
                <div class="doun text-light">
                    <p>
                        Мы понимаем, как быстро меняются тренды и появляются обновления. Поэтому
                        мы всегда следим за всеми новинками, добавляем в про
                        грамму то, что требуют топовые компании. Мы предла
                        гаем вам только актуальные знания, чтобы вы были впереди планеты всей.
                    </p>
                </div>

                <!-- button -->
                <div class="button">
                    <button class="btn text-light">Купить курс</button>
                </div>
            </div>

            <!-- image-block -->
            <div class="image-block">
                <img src="../../assets/images/course-photo.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style>
.format .texts {
    flex-wrap: wrap;
}

.format .texts .up h1 {
    font-size: 56px;
    font-family: 'R-500', ;
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
    border: 1px solid #FA9F42;
    padding: 20px 74px;
    border-radius: 0px 20px;
    background: #FA9F42;
}

@media (max-width: 505px) {
    .format {
        gap: 50px;
    }

    .format .texts .up h1 {
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