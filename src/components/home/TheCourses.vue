<template>
    <div class="container">
        <h1 class="text-center text-dark text-6xl py-14 sm:text-5xl ">Популярные курсы</h1>

        <div class="image-box  flex gap-4 my-11 justify-center sm:flex flex-wrap">
            <div class="card shadow-lg shadow-slate-400/50 p-5 rounded-xl">
                <img src="@/assets/images/pic (1).png" alt="">
                <p class="py-2">Motion Design</p>
            </div>
            <div class="card shadow-lg shadow-slate-400/50 p-5 rounded-xl">
                <img src="@/assets/images/pic (2).png" alt="">
                <p class="py-2">Таргет в Instagram</p>
            </div>
            <div class="card shadow-lg shadow-slate-400/50 p-5 rounded-xl">
                <img src="@/assets/images/pic (3).png" alt="">
                <p class="py-2">Таргет в Instagram</p>
            </div>
            <div class="card shadow-lg shadow-slate-400/50 p-5 rounded-xl">
                <img src="@/assets/images/pic (4).png" alt="">
                <p class="py-2">SMM-стратегия</p>
            </div>
        </div>

        <div class="btns flex justify-center items-center">
            <TheButton color="bg-green">Все курсы</TheButton>
        </div>
    </div>
</template>

<script>
import TheButton from '../TheButton.vue';

export default {
    components: { TheButton }
}
</script>