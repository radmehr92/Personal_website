<template>

  <div>
    <HeaderComponent/>
  </div>

</template>
<script setup lang="ts">
import HeaderComponent from "@/views/HeaderComponent.vue";
</script>















<!-- FA -->
<!--
<div class="flex-wrap w-full" dir="rtl" v-show="locale === 'fa'">

&lt;!&ndash;photo&ndash;&gt;
<div class="flex items-center justify-center relative">
  <div class="w-28 h-28  absolute right-36 top-8  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="gearClipfa18">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                fill="black" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="black" />
        </clipPath>
      </defs>


      <image
          href="/src/assets/image/industry/5.jpg"
          width="24"
          height="24"
          clip-path="url(#gearClipfa18)"
          preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  </div>

  <div class="flex rounded-full border  border-sky-600/50 w-28 h-28 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
    <img class="rounded-full border border-sky-600/50 w-28 h-28" src="/src/assets/image/profile.jpg" alt="Ali Radmehr" />
  </div>


  <div class="w-28 h-28 absolute left-36 bottom-8 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="gearClipfa19">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                fill="black" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                fill="black" />
        </clipPath>
      </defs>


      <image
          href="/src/assets/image/industry/4.jpg"
          width="24"
          height="24"
          clip-path="url(#gearClipfa19)"
          preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  </div>


</div>


&lt;!&ndash;Text&ndash;&gt;
<div class="flex items-center justify-center mt-12 cursor-default ">
  <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
    <div>
      <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
    </div>
    <div class="flex font-IrBold text-lg gap-x-1 tracking-wide">
      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
      <span class="text-sky-600 text-shadow-md">مهندسی</span>
      <span class="text-gray-800 text-shadow-md">و</span>
      <span class="text-shadow-md text-teal-600">مدیریت</span>
      <span class="text-gray-800 text-shadow-md">صنعتی</span>
    </div>

    <div class="flex font-IrRegular text-sm justify-center w-[360px] text-gray-900">
                  <span class="text-justify leading-7">
فارغ‌التحصیل مهندسی شیمی با مدرک مدیریت از دانشگاه تهران، متمرکز بر نوآوری و بهبود عملیاتی در صنعت و فناوری. دارای تجربه در مدیریت پروژه‌های پیچیده، بهینه‌سازی فرآیندها، و ارائه راه‌حل‌های پایدار برای ارتقاء کیفیت و بهره‌وری. مسلط به هدایت تیم‌های چندرشته‌ای، تحقیق و توسعه، تضمین کیفیت، و توسعه راهبردی کسب‌وکار. نتیجه‌گرا و متعهد به خلق ارزش از طریق نوآوری صنعتی و فناورانه.                  </span>
    </div>

    <div>
      <div class="flex mt-10 gap-x-4">
        <div>
          <a href="https://www.linkedin.com/in/ali-radmehr/" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-[#0077B7] text-white rounded-lg hover:bg-[#005f95] transition-colors font-IrRegular text-sm">
            <svg class="w-4 h-4" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
      C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
      H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
      c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
      s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
      c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
      c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
      c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
      L341.91,330.654L341.91,330.654z"/>
            </svg>
            <span class="mt-0.5">لینکدین من</span>
          </a>
        </div>

        <div>
          <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
            <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
              <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
            </div>
            <span class="mt-0.5">تماس با من</span>
          </a>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-start">
      <div class="flex items-start  mt-6">
        <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
      </div>

    </div>

  </div>

</div>

</div>


<div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef5" class="embla w-full  overflow-hidden">
<div class="flex gap-x-6">
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/naft.png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/bime.png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/tap.png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/harrir.png" alt="" class="w-16 h-14" />
  </div>
  <div class="flex-shrink-0 w-1/4 px-2">
    <img src="/src/assets/image/factory/sanat.png" alt="" class="w-16 h-14" />
  </div>
</div>
</div>
-->
<!--              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[390px] h-[370px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/sanat.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-2">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه  |  صنعت اکسپرس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">هلدینگ توسعه فناوری برنا</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center  mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>


                      </div>


                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[23px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ">مرداد ۱۴۰۳ – تاکنون</span>
                        </div>

                      </div>


                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-4">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                        <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">برنامه‌ریزی و مدیریت پروژه  - رهبری تیم پروژه - کنترل کیفیت و نظارت - مدیریت ریسک - بهینه‌سازی فرآیندها -
مستندسازی و گزارش‌دهی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


&lt;!&ndash;                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">ریاست واحد کنترل کیفیت   |  سوگاس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">



                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-20">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">رهبری عملیات کنترل کیفیت در شرکت پارس طبیعت سلولز (سوگاس) در سه شیفت کاری، با هدف تضمین استانداردهای کیفی بالا و بهره‌وری عملیاتی. نظارت بر فرآیندهای آزمایشگاهی با حفظ انطباق با استانداردهای صنعتی. مدیریت تیم‌های چندوظیفه‌ای برای دستیابی به نتایج کیفی پایدار. هدایت ابتکارات بهبود مستمر به‌منظور ارتقای بهره‌وری فرآیند و کیفیت محصول.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg3.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مسئول فنی   |  سوگاس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-10">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">نظارت بر عملیات فنی در واحدهای مهندسی، آزمایشگاه و ایمنی در شرکت پارس طبیعت سلولز (سوگاس)، با هدف اطمینان از انطباق با استانداردهای مقرراتی. بهینه‌سازی جریان‌های تولید و همکاری با تیم‌های چندوظیفه‌ای برای ارتقای بهره‌وری عملیاتی.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg4.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">ارائه دهنده طرح های توسعه و تحقیقاتی   |  سوگاس</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-10">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">انجام تحقیقات و تحلیل‌های بازار به‌منظور شناسایی فرصت‌های محصول جدید و توسعه مفاهیم نوآورانه با هدف ارتقای رقابت‌پذیری شرکت. طراحی و ارائه راه‌حل‌های داده‌محور و منطبق با صنعت</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/harrir.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-xs text-gray-900 mt-0.5 text-shadow-sm">ارائه دهنده طرح های توسعه و تحقیقاتی   |  خط تولید خمیرسازی باگاس</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شرکت حریر خوزستان زیر مجموعه هلدینگ تاپیکو</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ml-[12px]">فروردین ۱۴۰۲ – خرداد ۱۴۰۲ / ۳ ماه</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mb-10">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">تحقیق و پژوهش در رابطه با امکان پذیری اجرای طرح خط خمیرسازی باگاس سفید کامکپت شرکت حریر خوزستان / مذاکره با شرکت های طراح و سازنده تجهیزات و تاسیسات صنایع سلولزی اروپایی و شرق آسیایی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/naft.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه |  همیار نفت</span>
                        </div>



                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">وزارت نفت - شرکت نفت</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[67px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm">مرداد ۱۳۹۷ – تیر ۱۳۹۹ / ۱ سال و ۱۱ ماه</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mb-4">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">برنامه‌ریزی و مدیریت پروژه - رهبری تیم پروژه - کنترل کیفیت و نظارت - مدیریت ریسک - بهینه‌سازی فرآیندها - مستندسازی و گزارش‌دهی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[390px] h-[350px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg3.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-14" src="/src/assets/image/factory/bime.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه |  بیمه روستایی</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">سازمان مرکزی تعاون روستایی ایران</span>
                        </div>

                      </div>


                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center ml-[67px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-[10px] text-gray-900 mt-0.5 text-shadow-sm">اردیبهشت ۱۳۹۶ – خرداد ۱۳۹۷/ ۱ سال و ۲ ماه</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mb-4">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                        <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify"> برنامه‌ریزی و مدیریت پروژه  - رهبری تیم پروژه - کنترل کیفیت و نظارت - مدیریت ریسک - بهینه‌سازی فرآیندها -
مستندسازی و گزارش‌دهی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>&ndash;&gt;

              </div>-->