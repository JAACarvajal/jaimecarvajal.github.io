<template>
    <a href="/resume_06072023.pdf" target="_blank" class="tb:mx-auto mt-5 lp:m-0 lp:mt-2 text-center lp:text-left"
        :class="isMobile ? 'w-full block lp:hidden' : 'w-max hidden lp:block'">
        <button type="button"
            class="w-full h-[48px] tb:h-[56px] lp:w-56 lp:h-[70px] group text-xs tb:text-sm lp:text-lg text-white font-medium uppercase leading-normal tracking-wider bg-gradient-to-r from-[#09203F] to-[#537895] rounded-2xl duration-1000 translate-y-0 hover:-translate-y-1 hover:duration-200 dark:from-[#4568dc] dark:to-[#b06ab3]">
            View Resume 📄
        </button>
    </a>
</template>
<script>
export default {
    props: {
        isMobile: Boolean
    }
};
</script>
  