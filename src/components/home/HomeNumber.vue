<template>
    <section class="statistic p-20">
        <div class="container">
            <div class="wrapper flex flex-wrap gap-7 justify-center">
                <!-- card -->
                <div v-for="item in textArray" class="card flex flex-wrap flex-col">
                    <h1 class="number flex text-center flex-col text-6xl mt-28 text-green font-sans">{{ item.title }}</h1>
                    <p class="text text-sm leading-4 w-64 mt-5 text-center text-dark"> {{ item.text }} </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            textArray: [
                {
                    title: '100+',
                    text: 'теоретических и практическихкурсов для разного уровня'
                },
                {
                    title: '3 000',
                    text: 'часов видео-лекций и вебинаров от лучших преподавателей'
                },
                {
                    title: '15',
                    text: 'направлений обучения востребованным профессиям'
                },
                {
                    title: '2 000',
                    text: 'учеников уже занимаются на нашей платформе'
                },
            ]
        }
    },
}
</script>