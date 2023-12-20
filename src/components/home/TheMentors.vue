<template>
    <section class="mentors my-7 md:my-28">
        <div class="container flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0">
            <div class="content">
                <h1 class="text-6xl text-dark max-w-[510px]">Учитесь у лучших</h1>
                <p class="lg:w-[500px] mt-5 mb-12">Наши преподаватели – профессионалы, которые добились успеха в своей области.
                    Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных медиа: получайте
                    опыт из первых рук, в любое время. Кураторы курсов – наши лучшие выпускники, будут помогать и
                    поддерживать вас на протяжении всего oбучения.
                </p>
                <TheButton color="bg-green">Все преподаватели</TheButton>
            </div>

            <div class="image-block flex justify-evenly items-center flex-wrap gap-5">
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/1.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Катя, ведущий дизайнер TailGroup</p>
                </div>
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/2.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Марина, маркетолог Headers Market</p>
                </div>
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/3.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Сава, PR-менеджер Central Media</p>
                </div>
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/4.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Паша, основатель LeadCompany</p>
                </div>
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/5.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Саша, главный редактор Just Journal</p>
                </div>
                <div class="card w-[170px] text-center">
                    <img src="@/assets/images/6.jpg" alt="#">
                    <p class="text-dark text-sm mt-4">Лёня, ведущий разработчик Ymail</p>
                </div>
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