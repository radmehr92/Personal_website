<template>

  <div class="sm:flex hidden">
    <header class="fixed top-0 left-0 w-full bg-sky-50 z-50">


      <nav class="relative  justify-between items-center p-4 text-base tracking-wider font-IrBold hidden md:flex">
        <!-- دکمه تغییر زبان -->
        <button
            @click="toggleLanguage"
            class="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-gray-300 bg-white text-xs font-IrBold text-gray-700 hover:text-sky-600 hover:border-sky-500 shadow-sm transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mt-0.5 text-sky-500">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          {{ currentLocale === 'en' ? 'Persian - فا' : 'EN - انگلیسی' }}
        </button>

        <!-- لینک‌ها -->
        <div class="flex gap-6">
          <a
              v-for="section in orderedLinks"
              :key="section"
              :href="'#' + section"
              @click="setActive(section)"
              :class="[
            'relative pb-1',
            'after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:transition-all after:duration-300',
            'hover:text-gray-900 hover:after:w-full after:bg-sky-500',
            activeSection === section ? 'text-sky-600 after:w-full' : 'after:w-0'
          ]"
          >
            {{ $t(section) }}
          </a>
        </div>

        <!-- تصویر لوگو-->
        <div class="h-12 w-12 -mt-1">
          <img class="h-12 w-12" src="/src/assets/image/rad.png" alt="Ali Radmehr" />
        </div>


      </nav>

      <!-- sm:640 screen-->
      <nav class="relative  justify-between items-center p-2 text-sm  font-IrBold hidden md:hidden sm:flex">
        <!-- دکمه تغییر زبان -->
        <button
            @click="toggleLanguage"
            class="flex items-center mb-2 gap-2 px-2 py-1.5 rounded-lg border border-gray-300 bg-white text-xs font-IrBold text-gray-700 hover:text-sky-600 hover:border-sky-500 shadow-sm transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke-width="1.5" stroke="currentColor" class="w-4 h-4 -mt-0.5 text-sky-500">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          {{ currentLocale === 'en' ? 'Persian - فا' : 'EN - انگلیسی' }}
        </button>

        <!-- لینک‌ها -->
        <div class="flex gap-4">
          <a
              v-for="section in orderedLinks"
              :key="section"
              :href="'#' + section"
              @click="setActive(section)"
              :class="[
            'relative pb-1',
            'after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:transition-all after:duration-300',
            'hover:text-gray-900 hover:after:w-full after:bg-sky-500',
            activeSection === section ? 'text-sky-600 after:w-full' : 'after:w-0'
          ]"
          >
            {{ $t(section) }}
          </a>
        </div>

        <!-- تصویر لوگو-->
        <div class="h-12 w-12 -mt-1">
          <img class="h-12 w-12" src="/src/assets/image/rad.png" alt="Ali Radmehr" />
        </div>


      </nav>




    </header>
  </div>


  <header class="fixed top-0 right-0 w-full bg-sky-50 z-50 shadow-sm sm:hidden overflow-x-hidden">
    <!-- نوار بالا: زبان و لوگو -->
    <div class="flex items-center justify-between h-12 px-2 bg-sky-100">
      <!-- دکمه زبان -->
      <button
          @click="toggleLanguage"
          class="flex items-center gap-1 px-1.5 py-1 rounded-lg border border-gray-300 bg-white text-xs font-IrBold text-gray-700 hover:text-sky-600 hover:border-sky-500 transition max-w-[40%]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-sky-500">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"/>
        </svg>
        {{ currentLocale === 'en' ? 'Persian - فا' : 'EN - انگلیسی' }}
      </button>

      <!-- لوگو -->
      <div class="w-8 h-8 flex-shrink-0">
        <img src="/src/assets/image/rad.png" alt="Ali Radmehr" class="w-full h-full object-contain" />
      </div>
    </div>

    <!-- نویگیشن -->
    <nav class="px-2 py-2 text-sm font-IrBold">
      <div class="flex flex-wrap gap-2 justify-center">
        <a
            v-for="section in orderedLinks"
            :key="section"
            :href="'#' + section"
            @click="setActive(section)"
            :class="[
            'relative pb-1 transition-colors text-xs',
            'after:absolute after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300',
            activeSection === section ? 'text-sky-600 after:w-full' : 'text-gray-700 after:w-0',
            'hover:text-gray-900 hover:after:w-full'
          ]"
        >
          {{ $t(section) }}
        </a>
      </div>
    </nav>
  </header>



</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      currentLocale: this.$i18n.locale,
      activeSection: 'bio',
      links: {
        en: ['bio', 'experience', 'education', 'certification', 'contact'],
        fa: ['bio', 'experience', 'education', 'certification', 'contact']
      },
      observer: null
    };
  },
  computed: {
    orderedLinks() {
      return this.currentLocale === 'fa'
          ? [...this.links.fa].reverse()
          : this.links.en;
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    this.observer = new IntersectionObserver(this.handleIntersect, options);

    this.orderedLinks.forEach(section => {
      const el = document.getElementById(section);
      if (el) this.observer.observe(el);
    });
  },
  beforeDestroy() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    toggleLanguage() {
      this.currentLocale = this.currentLocale === 'en' ? 'fa' : 'en';
      this.$i18n.locale = this.currentLocale;
    },
    setActive(section) {
      this.activeSection = section;
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }
  }
};
</script>

<style>
html[dir="rtl"] {
  direction: rtl;
}
</style>
