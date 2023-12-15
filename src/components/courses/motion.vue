<template>
    <section class="motion lg:my-16">
        <div class="container">
            <div class="flex gap-4 text-center">
                <p class="max-[453px]:text-xs text-sm text-dark font-normal cursor-pointer">Главная</p>
                <i class="fa-solid fa-caret-right text-xs text-orange"></i>
                <p class="max-[453px]:text-xs text-sm text-dark font-normal cursor-pointer">Курсы</p>
                <i class="fa-solid fa-caret-right text-xs text-orange"></i>
                <p class="max-[453px]:text-xs text-sm text-dark font-normal cursor-pointer">Motion design</p>
            </div>
            <h1
                class="max-[768px]:text-4xl max-[665px]:text-3xl max-[585px]:text-xl max-[475px]:text-lg text-6xl text-dark mt-14 font-semibold">
                Практический курс по анимации для начинающих motion-дизайнеров
            </h1>
            <img class="mt-3 md:mt-10" src="@/assets/images/pic.png" alt="#">
            <div v-for="item in textArray" class="text">
                <h3 class="text-lg md:text-2xl mt-4 md:mt-10 font-medium text-dark">
                    {{ item.title }}
                </h3>
                <p class="max-[768px]:text-[16px] text-xl mt-3 md:mt-10 text-dark">
                    {{ item.text }}
                </p>
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
                    title: ' Мечтаете оживлять статичные картинки и интерфейсы? Тогда этот курс для вас! На интенсивном 8-недельном курсе по анимации вы получите мощную базу.'
                },
                {
                    text: 'Анимация шейпов и текста, работа с векторными фигурами и растровыми изображениями, настройка программы After Effects и эффектный монтаж.Всему этому вы научитесь на курсе Motion Design.Вместе с преподавателями вы изучите принципы анимации и разберетесь с After Effects раз и навсегда.'
                },
                {
                    text: 'К концу курса вы сделаете несколько анимационных шотов и большой итоговый проект, соберете достойное портфолио. За 8 недель обучения вы получите полную базу по motion-дизайну, а наши кураторы будут помогать вам на протяжении всего обучения.'
                },
                {
                    text: 'Обучение проходит в небольших группах, к каждой привязан куратор, один из наших лучших выпускников. У вас всегда будет поддержка и обратная связь. Помимо фидбека от куратора, на каждое домашнее задание вы получаете разбор тренера.'
                }
            ]
        }
    }
}
</script>