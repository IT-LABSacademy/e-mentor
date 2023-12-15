<template>
    <section class="statistic mb-5 lg:mb-16">
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
                    title: '8',
                    text: 'недель интенсивного обучения, занятия 3 раза в неделю'
                },
                {
                    title: '24',
                    text: 'урока и домашних заданий с проверкой от тренера'
                },
                {
                    title: '7',
                    text: 'работ в портфолио по окончании курса, 6 шотов и 1 итоговая работа'
                },
                {
                    title: '4',
                    text: 'студента в каждой группе, у каждой группы свой куратор'
                },
            ]
        }
    },
}
</script>