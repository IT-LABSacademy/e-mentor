<template>
    <section class="statistic">
        <div class="container">
            <div class="wrapper">
                <!-- card -->
                <div class="card">
                    <h1 class="number">8</h1>
                    <p class="text">недель интенсивного обучения,
                        занятия 3 раза в неделю</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">24</h1>
                    <p class="text"> урока и домашних заданий
                        с проверкой от тренера</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">7</h1>
                    <p class="text">работ в портфолио по окончании курса, 6 шотов и 1 итоговая работа</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">4</h1>
                    <p class="text">студента в каждой группе, у каждой группы свой куратор</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.statistic .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.statistic {
    margin-bottom: 110px;
}

.statistic .wrapper {
    flex-wrap: wrap;
    display: flex;
    gap: 30px;
}

.statistic .card .number {
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 58px;
    display: flex;
    margin-top: 100px;
    color: #10B582;
    font-family: sans-serif;
}

.statistic .card .text {
    font-size: 14px;
    line-height: 17px;
    width: 270px;
    text-align: center;
    color: #353A5A;
}
</style>