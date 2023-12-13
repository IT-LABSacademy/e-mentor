<template>
    <section class="statistic">
        <div class="container">
            <div class="wrapper">
                <!-- card -->
                <div class="card">
                    <h1 class="number">100+</h1>
                    <p class="text"> теоретических и практических
                        курсов для разного уровня</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">3 000</h1>
                    <p class="text">часов видео-лекций и вебинаров
                        от лучших преподавателей</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">15</h1>
                    <p class="text">направлений обучения востребованным профессиям</p>
                </div>
                <!-- card -->
                <div class="card">
                    <h1 class="number">2 000</h1>
                    <p class="text">учеников уже занимаются
                        на нашей платформе</p>
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
.statistic {
    padding: 80px 0;
}
.statistic .card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.statistic .wrapper {
    display: flex;
    flex-wrap: wrap;
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