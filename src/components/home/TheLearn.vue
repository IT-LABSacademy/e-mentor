<template>
    <section class="the-learn my-7 md:my-28">
        <div class="container">
            <h1 class="text-6xl text-center py-4 text-dark">На курсы вы научитесь</h1>
            <div class="flex justify-center xl:justify-between items-center flex-wrap gap-8 xl:gap-0 my-14">
                <div class="card w-[285px] border py-6 px-4 shadow-md rounded-xl text-dark">
                    <div class="title flex items-stretch justify-center gap-2">
                        <img src="/./src/assets/images/icon.svg" alt="">
                        <h2 class="py-4 text-xl w-60">Анимировать объекты</h2>
                    </div>
                    <p class="text-sm">Узнаете принципы создания инфографики, персонажной 2D флэт-анимации.</p>
                </div>
                <div class="card w-[285px] border py-6 px-4 shadow-md rounded-xl text-dark">
                    <div class="title flex items-center justify-center gap-2">
                        <img src="/./src/assets/images/icon2.svg" alt="">
                        <h2 class="py-4 text-xl w-60">Работать с кадром</h2>
                    </div>
                    <p class="text-sm">Изучите основные принципы анимации и работы с объектами, их движением в кадре.</p>
                </div>
                <div class="card w-[285px] border py-6 px-4 shadow-md rounded-xl text-dark">
                    <div class="title flex items-center justify-center gap-2">
                        <img src="/./src/assets/images/icon3.svg" alt="">
                        <h2 class="py-4 text-xl w-64">Работать в After Effects</h2>
                    </div>
                    <p class="text-sm">Научитесь реализовывать ваши идеи с помощью популярной программы для анимации</p>
                </div>
                <div class="card w-[285px] border py-6 px-4 shadow-md rounded-xl text-dark">
                    <div class="title flex items-center justify-center gap-2">
                        <img src="/./src/assets/images/icon4.svg" alt="">
                        <h2 class="py-4 text-xl w-60">Работать со звуком</h2>
                    </div>
                    <p class="text-sm">Освоите инструменты работы, сможете редактировать музыку
                        в своем проекте.</p>
                </div>
            </div>
            <div class="btns flex items-center justify-center ">
                <TheButton color="bg-green">Программа курса</TheButton>
            </div>
        </div>
    </section>
</template>

<script>
import TheButton from '../TheButton.vue';

export default {
    components: { TheButton }
}
</script>