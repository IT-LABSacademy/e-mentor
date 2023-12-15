<template>
    <section class="statistic my-7 md:my-20">
        <div class="container">
            <div class="wrapper flex flex-wrap gap-7 justify-center">
                <!-- card -->
                <div v-for="item in textArray" class="card flex flex-wrap flex-col mt-10 md:mt-24">
                    <h1 class="number flex text-center flex-col text-6xl text-green font-sans">
                        {{ item.title }}
                    </h1>
                    <p class="text text-md leading-5 w-64 mt-5 text-center text-dark">
                        {{ item.text }}
                    </p>
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