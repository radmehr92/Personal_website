<template>
  <div>
    <HeaderComponent />
    <main class="scroll-smooth min-w-max">

      <section id="bio" class="flex min-w-max min-h-screen  bg-sky-50">

        <div class="hidden 2xl:flex container">
          <div class="flex-wrap space-y-8 p-8">
            <div class="flex items-center justify-between w-full mt-20">

              <!-- EN -->
              <div class="flex items-center justify-between w-full" v-show="locale === 'en'">
                <!--Text-->
                <div class="flex items-center justify-center mt-28 cursor-default">
                  <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-base text-shadow-md">Hello...! I'm Ali Radmehr</span>
                    </div>
                    <div class="flex font-IrBold text-3xl gap-x-2">
                      <span class="text-gray-800 text-shadow-md">Professional in</span>
                      <span class="text-shadow-md text-sky-600">Engineering</span>
                      <span class="text-gray-800 text-shadow-md">& Industrial</span>
                      <span class="text-shadow-md text-teal-600">Management</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-2/4 text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
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
                            <span class="mt-0.5">My LinkedIn</span>
                          </a>
                        </div>

                        <div>
                          <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                            <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                              <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                            </div>
                            <span class="mt-0.5">Contact Me</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                      </div>

                    </div>
                  </div>
                </div>

                <!--photo-->
                <div class="flex mr-44 relative">

                  <div class="w-80 h-80  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip001">
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
                          clip-path="url(#gearClip001)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border border-sky-600/50 w-72 h-72 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-80 h-80 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip002">
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
                          clip-path="url(#gearClip002)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>
              </div>

              <!-- FA -->
              <div class="flex items-center justify-between w-full" dir="rtl" v-show="locale === 'fa'">


                <!--Text-->
                <div class="mt-20 mr-2 cursor-default">
                  <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-lg tracking-wide text-shadow-md">علی رادمهر</span>
                    </div>
                    <div class="flex font-IrBold text-3xl gap-x-3 tracking-wide">
                      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                      <span class="text-sky-600 text-shadow-md">مهندسی</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت</span>
                      <span class="text-gray-800 text-shadow-md">صنعتی</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-2/4 text-gray-900">
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

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
                      </div>

                    </div>
                  </div>
                </div>


                <!--photo-->
                <div class="flex ml-44 mt-24 relative">
                  <div class="w-80 h-80  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa01">
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
                          clip-path="url(#gearClipfa01)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border border-sky-600/50 w-72 h-72 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-80 h-80 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa02">
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
                          clip-path="url(#gearClipfa02)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>
              </div>


            </div>

            <div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef0" class="embla w-full max-w-[540px]  overflow-hidden">
              <div class="embla__container flex">
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/naft.png" alt="naft" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/bime.png" alt="bime" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="parsgraphic" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="sugas" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/tap.png" alt="tap" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/harrir.png" alt="harrir" class="w-16 h-16 mx-auto" />
                </div>
                <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                  <img src="/src/assets/image/factory/sanat.png" alt="sanat" class="w-16 h-16 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

         <div class="hidden 2xl:hidden xl:flex container">
            <div class="flex-wrap space-y-8 p-8">
              <div class="flex items-center justify-between w-full mt-20">

                <!-- EN -->
                <div class="flex items-center justify-between w-full" v-show="locale === 'en'">
                  <!--Text-->
                  <div class="flex items-center justify-center mt-28 cursor-default">
                    <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                      <div>
                        <span class="flex font-IrBold text-base text-shadow-md">Hello...! I'm Ali Radmehr</span>
                      </div>
                      <div class="flex font-IrBold text-3xl gap-x-2">
                        <span class="text-gray-800 text-shadow-md">Professional in</span>
                        <span class="text-shadow-md text-sky-600">Engineering</span>
                        <span class="text-gray-800 text-shadow-md">& Industrial</span>
                        <span class="text-shadow-md text-teal-600">Management</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[550px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
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
                              <span class="mt-0.5">My LinkedIn</span>
                            </a>
                          </div>

                          <div>
                            <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                              <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                                <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                              </div>
                              <span class="mt-0.5">Contact Me</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="pt-16 space-y-10">
                        <div class="flex items-center">
                          <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                        </div>

                      </div>
                    </div>
                  </div>

                  <!--photo-->
                  <div class="flex ml-20 relative">

                    <div class="w-80 h-80  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClip">
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
                            clip-path="url(#gearClip)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>

                    <div class="flex rounded-full border border-sky-600/50 w-72 h-72 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                      <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                    </div>


                    <div class="w-80 h-80 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClip">
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
                            clip-path="url(#gearClip)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>


                  </div>
                </div>

                <!-- FA -->
                <div class="flex items-center justify-between w-full" dir="rtl" v-show="locale === 'fa'">


                  <!--Text-->
                  <div class="mt-20 ml-64 cursor-default">
                    <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                      <div>
                        <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
                      </div>
                      <div class="flex font-IrBold text-3xl gap-x-3 tracking-widest">
                        <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                        <span class="text-sky-600 text-shadow-md">مهندسی</span>
                        <span class="text-gray-800 text-shadow-md">و</span>
                        <span class="text-shadow-md text-teal-600">مدیریت</span>
                        <span class="text-gray-800 text-shadow-md">صنعتی</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[500px] text-gray-900">
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

                      <div class="pt-16 space-y-10">
                        <div class="flex items-center">
                          <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
                        </div>

                      </div>
                    </div>
                  </div>


                  <!--photo-->
                  <div class="flex ml-36 mt-24 relative">
                    <div class="w-80 h-80  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClipfa22">
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
                            clip-path="url(#gearClipfa22)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>

                    <div class="flex rounded-full border border-sky-600/50 w-72 h-72 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                      <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                    </div>


                    <div class="w-80 h-80 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClipfa">
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
                            clip-path="url(#gearClipfa)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>


                  </div>
                </div>


              </div>


              <div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef1" class="embla w-full max-w-[540px]  overflow-hidden">
                <div class="embla__container flex">
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/naft.png" alt="naft" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/bime.png" alt="bime" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="parsgraphic" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="sugas" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/tap.png" alt="tap" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/harrir.png" alt="harrir" class="w-16 h-16 mx-auto" />
                  </div>
                  <div class="embla__slide flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 px-2">
                    <img src="/src/assets/image/factory/sanat.png" alt="sanat" class="w-16 h-16 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="hidden xl:hidden lg:flex container">
            <div class="flex-wrap space-y-8 p-8">
              <div class="flex items-center justify-between w-full mt-20">

                <!-- EN -->
                <div class="flex items-center justify-between w-full" v-show="locale === 'en'">

                  <!--Text-->
                  <div class="flex items-center justify-center mt-20 cursor-default">
                    <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                      <div>
                        <span class="flex font-IrBold text-base text-shadow-md">Hello...! I'm Ali Radmehr</span>
                      </div>
                      <div class="flex font-IrBold text-xl gap-x-2">
                        <span class="text-gray-800 text-shadow-md">Professional in</span>
                        <span class="text-shadow-md text-sky-600">Engineering</span>
                        <span class="text-gray-800 text-shadow-md">& Industrial</span>
                        <span class="text-shadow-md text-teal-600">Management</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[450px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
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
                              <span class="mt-0.5">My LinkedIn</span>
                            </a>
                          </div>

                          <div>
                            <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                              <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                                <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                              </div>
                              <span class="mt-0.5">Contact Me</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="pt-16 space-y-10">
                        <div class="flex items-center">
                          <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                        </div>

                      </div>
                    </div>
                  </div>

                  <!--photo-->
                  <div class="flex ml-32 relative">

                    <div class="w-60 h-60  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClip3">
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
                            clip-path="url(#gearClip3)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>

                    <div class="flex rounded-full border border-sky-600/50 w-52 h-52 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                      <img class="rounded-full border border-sky-600/50 w-52 h-52" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                    </div>


                    <div class="w-60 h-60 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClip4">
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
                            clip-path="url(#gearClip4)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>


                  </div>
                </div>

                <!-- FA -->
                <div class="flex items-center justify-between w-full gap-x-36" dir="rtl" v-show="locale === 'fa'">


                  <!--Text-->
                  <div class="mt-24  cursor-default">
                    <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                      <div>
                        <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
                      </div>
                      <div class="flex font-IrBold text-xl gap-x-3 tracking-widest">
                        <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                        <span class="text-sky-600 text-shadow-md">مهندسی</span>
                        <span class="text-gray-800 text-shadow-md">و</span>
                        <span class="text-shadow-md text-teal-600">مدیریت</span>
                        <span class="text-gray-800 text-shadow-md">صنعتی</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[400px] text-gray-900">
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

                      <div class="pt-16 space-y-10">
                        <div class="flex items-center">
                          <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
                        </div>

                      </div>
                    </div>
                  </div>


                  <!--photo-->
                  <div class="flex ml-40 relative">
                    <div class="w-60 h-60  absolute right-20 bottom-20 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClipfa5">
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
                            clip-path="url(#gearClipfa5)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>

                    <div class="flex rounded-full border border-sky-600/50 w-52 h-52 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                      <img class="rounded-full border border-sky-600/50 w-52 h-52" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                    </div>


                    <div class="w-60 h-60 absolute left-20 top-28 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                      <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id="gearClipfa6">
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
                            clip-path="url(#gearClipfa6)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                      </svg>
                    </div>


                  </div>
                </div>


              </div>

              <div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef2" class="embla w-[540px] overflow-hidden">
                <div class="flex ">
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/naft.png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/bime.png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/tap.png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/harrir.png" alt="" class="w-16 h-16" />
                  </div>
                  <div class="flex-shrink-0 w-1/4 px-2">
                    <img src="/src/assets/image/factory/sanat.png" alt="" class="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="hidden lg:hidden md:flex container">

          <div class="flex-wrap space-y-8 p-4">
            <div class="flex items-center justify-between w-full mt-24">

              <!-- EN -->
              <div class="flex-wrap w-full" v-show="locale === 'en'">

                <!--photo-->
                <div class="flex ml-28 relative">

                  <div class="w-48 h-48  absolute right-[400px] top-8  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip6">
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
                          clip-path="url(#gearClip6)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border border-sky-600/50 w-40 h-40 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-48 h-48 absolute left-20 bottom-2 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip7">
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
                          clip-path="url(#gearClip7)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>

                <!--Text-->
                <div class="flex items-center justify-center mt-12 cursor-default">
                  <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-sm text-shadow-md">Hello...! I'm Ali Radmehr</span>
                    </div>
                    <div class="flex font-IrBold text-xl gap-x-2">
                      <span class="text-gray-800 text-shadow-md">Professional in</span>
                      <span class="text-shadow-md text-sky-600">Engineering</span>
                      <span class="text-gray-800 text-shadow-md">& Industrial</span>
                      <span class="text-shadow-md text-teal-600">Management</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[600px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
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
                            <span class="mt-0.5">My LinkedIn</span>
                          </a>
                        </div>

                        <div>
                          <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                            <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                              <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                            </div>
                            <span class="mt-0.5">Contact Me</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                      </div>

                    </div>
                  </div>
                </div>


              </div>

              <!-- FA -->
              <div class="flex-wrap w-full" dir="rtl" v-show="locale === 'fa'">

                <!--photo-->
                <div class="flex mr-28 relative">
                  <div class="w-48 h-48  absolute right-20 top-8  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa8">
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
                          clip-path="url(#gearClipfa8)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border ml-72 border-sky-600/50 w-40 h-40 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-48 h-48 absolute left-[500px] bottom-2 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa9">
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
                          clip-path="url(#gearClipfa9)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>


                <!--Text-->
                <div class="mt-14 ml-24 cursor-default">
                  <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
                    </div>
                    <div class="flex font-IrBold text-2xl gap-x-3 tracking-widest">
                      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                      <span class="text-sky-600 text-shadow-md">مهندسی</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت</span>
                      <span class="text-gray-800 text-shadow-md">صنعتی</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-[600px] text-gray-900">
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

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


            </div>

            <div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef3" class="embla w-[540px] overflow-hidden">
              <div class="flex">
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/naft.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/bime.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/tap.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/harrir.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/sanat.png" alt="" class="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>

        </div>


          <div class="hidden md:hidden sm:flex container">

          <div class="flex-wrap space-y-8 p-4">
            <div class="flex items-center justify-between w-full mt-24">

              <!-- EN -->
              <div class="flex-wrap w-full" v-show="locale === 'en'">

                <!--photo-->
                <div class="flex ml-28 relative">

                  <div class="w-40 h-40  absolute right-[380px] top-8  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip10">
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
                          clip-path="url(#gearClip10)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border border-sky-600/50 w-40 h-40 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-40 h-40 absolute left-24 bottom-6 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip11">
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
                          clip-path="url(#gearClip11)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>

                <!--Text-->
                <div class="flex items-center justify-center mt-12 cursor-default">
                  <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-sm text-shadow-md">Hello...! I'm Ali Radmehr</span>
                    </div>
                    <div class="flex font-IrBold text-xl gap-x-2">
                      <span class="text-gray-800 text-shadow-md">Professional in</span>
                      <span class="text-shadow-md text-sky-600">Engineering</span>
                      <span class="text-gray-800 text-shadow-md">& Industrial</span>
                      <span class="text-shadow-md text-teal-600">Management</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[550px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
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
                            <span class="mt-0.5">My LinkedIn</span>
                          </a>
                        </div>

                        <div>
                          <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                            <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                              <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                            </div>
                            <span class="mt-0.5">Contact Me</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                      </div>

                    </div>
                  </div>
                </div>


              </div>

              <!-- FA -->
              <div class="flex-wrap w-full" dir="rtl" v-show="locale === 'fa'">

                <!--photo-->
                <div class="flex relative">
                  <div class="w-40 h-40  absolute right-[410px] top-10  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa12">
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
                          clip-path="url(#gearClipfa12)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border mr-80 border-sky-600/50 w-40 h-40 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/ali.png" alt="Ali Radmehr" />
                  </div>


                  <div class="w-40 h-40 absolute left-[200px] bottom-8 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClipfa13">
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
                          clip-path="url(#gearClipfa13)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>


                <!--Text-->
                <div class="mt-10 ml-10 cursor-default">
                  <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
                    </div>
                    <div class="flex font-IrBold text-xl gap-x-3 tracking-widest">
                      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                      <span class="text-sky-600 text-shadow-md">مهندسی</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت</span>
                      <span class="text-gray-800 text-shadow-md">صنعتی</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-[550px] text-gray-900">
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

                    <div class="pt-16 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm tracking-widest text-gray-700">همکاری با شرکت های : </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>


            </div>

            <div :class="locale === 'fa' ? 'align-right' : 'align-left'" ref="emblaRef4" class="embla w-[540px] overflow-hidden">
              <div class="flex">
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/naft.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/bime.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/parsgraphic.ir%20(1).png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/tap.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/harrir.png" alt="" class="w-16 h-16" />
                </div>
                <div class="flex-shrink-0 w-1/4 px-2">
                  <img src="/src/assets/image/factory/sanat.png" alt="" class="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>

        </div>


          <div class="flex flex-col sm:hidden w-full max-w-xs mx-auto px-4 py-6">

          <div class="flex-wrap space-y-8 p-2">
            <div class="flex items-center justify-between w-full mt-24">

              <!-- EN -->
              <div class="flex-wrap w-full" v-show="locale === 'en'">

                <!--photo-->
                <div class="flex items-center justify-center  relative">

                  <div class="w-28 h-28  absolute right-[145px] top-8  animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip15">
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
                          clip-path="url(#gearClip15)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>

                  <div class="flex rounded-full border border-sky-600/50 w-28 h-28 shadow-md z-10 animate-fade-up animate-once animate-ease-in-out">
                    <img class="rounded-full border border-sky-600/50 w-28 h-28" src="/src/assets/image/profile.jpg" alt="Ali Radmehr" />
                  </div>


                  <div class="w-28 h-28 absolute left-36 bottom-6 animate-spin animate-infinite animate-duration-[10000ms] animate-delay-[10ms] animate-ease-in-out animate-reverse animate-fill-backwards">
                    <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <clipPath id="gearClip16">
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
                          clip-path="url(#gearClip16)"
                          preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </div>


                </div>

                <!--Text-->
                <div class="flex items-center justify-center mt-12 cursor-default">
                  <div class="space-y-2 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-sm text-shadow-md">Hello...! I'm Ali Radmehr</span>
                    </div>
                    <div class="flex font-IrBold text-[11px] gap-x-1">
                      <span class="text-gray-800 text-shadow-md">Professional in</span>
                      <span class="text-shadow-md text-sky-600">Engineering</span>
                      <span class="text-gray-800 text-shadow-md">& Industrial</span>
                      <span class="text-shadow-md text-teal-600">Management</span>
                    </div>

                    <div class="flex font-IrRegular text-xs justify-center w-[280px] text-gray-900">
                  <span class="text-justify leading-5">
                    Chemical Engineering graduate with an MBA from the University of Tehran, focused on innovation and operational improvement in industry and technology. Experienced in managing complex projects, optimizing processes, and delivering sustainable solutions to boost quality and efficiency. Skilled in leading cross-functional teams, R&D, quality assurance, and strategic business development. Results-driven and committed to creating value through industrial and technological innovation.
                  </span>
                    </div>

                    <div>
                      <div class="flex mt-4 gap-x-4">
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
                            <span class="mt-0.5">My LinkedIn</span>
                          </a>
                        </div>

                        <div>
                          <a href="#contact" class="flex items-center justify-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-IrRegular text-sm">
                            <div class="bg-white rounded h-5 w-5 flex items-center justify-center">
                              <img src="/src/assets/image/call.svg" alt="Contact Icon" class="w-3 h-3" />
                            </div>
                            <span class="mt-0.5">Contact Me</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="pt-6 space-y-10">
                      <div class="flex items-center">
                        <span class="font-IrBold text-sm text-gray-700">Companies I've worked with :</span>
                      </div>

                    </div>

                  </div>


                </div>


              </div>

              <!-- FA -->
              <div class="flex-wrap w-full" dir="rtl" v-show="locale === 'fa'">

                <!--photo-->
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


                <!--Text-->
                <div class="flex items-center justify-center mt-12 cursor-default ">
                  <div class="space-y-3 animate-fade-up animate-once animate-ease-in-out">
                    <div>
                      <span class="flex font-IrBold text-lg tracking-wider text-shadow-md">علی رادمهر</span>
                    </div>
                    <div class="flex font-IrBold text-base gap-x-1 tracking-wide">
                      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                      <span class="text-sky-600 text-shadow-md">مهندسی</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت</span>
                      <span class="text-gray-800 text-shadow-md">صنعتی</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[280px] text-gray-900">
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


          </div>

        </div>

      </section>


      <section id="experience" class="flex w-full min-h-screen  bg-gray-50 cursor-default">

        <div class="hidden  lg:flex container">
          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end" >

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">Experience</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

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
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Sanat Express</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[68px]">Jul 2024 - Present</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Borna Technology Holding</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">In sanat express projects, orchestrated comprehensive project planning and management, led cross-functional teams, and supervised quality control to drive project success. Mitigated risks, optimized operational processes, and delivered detailed documentation and strategic reports to enhance efficiency and project outcomes.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Quality Control Manager | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company is a subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">Led quality control operations at Pars Tabiat Cellulose Company (Sugas) across three shifts, ensuring high-quality standards and operational efficiency. Oversaw laboratory processes, maintaining compliance with industry standards. Managed cross-functional teams to achieve consistent quality outcomes. Drove continuous improvement initiatives, enhancing process efficiency and product quality.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Technical Manager | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company is a subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">Oversaw technical operations within engineering, laboratory, and safety units at Pars Tabiat Cellulose Company (Sugas), ensuring compliance with regulatory standards. Optimized production workflows and collaborated with cross-functional teams to enhance operational efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Research And Development Specialist | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company is a subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">Conducted market research and analysis to identify new product opportunities and develop innovative concepts aimed at enhancing the company’s competitiveness. Designed and proposed data-driven, industry-aligned solutions to address evolving customer needs and market trends.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">R&D Project Presenter | Bagasse Pulp Innovation</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[35px]">Apr 2023 - Jun 2023 · 3 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Harir Khuzestan Company is a subsidiary of the Topico Holding Group.</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Conducted detailed feasibility studies for launching a white bagasse pulp production line with a focus on sustainability. Led negotiations with top European and East Asian suppliers to secure optimal equipment solutions. Collaborated with multidisciplinary teams to improve pulp production quality and efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Hamyar Naft</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[20px]">Aug 2018 - Jul 2020 · 2 yrs</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Ministry of Petroleum of Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">At Hamyar Naft, spearheaded end-to-end project management, guided multidisciplinary teams, and enforced stringent quality controls. Proactively managed risks, streamlined operational processes, and delivered detailed documentation and strategic reports to enhance project efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Rural Insurance</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[13px]">Apr 2017 - Jun 2018 · 1 yr 3 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Central Organization for Rural Cooperatives of Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm mr-[25px]">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">In the Rural Insurance Project, directed comprehensive project planning and execution, led diverse teams, and implemented robust quality controls. Actively managed risks, optimized operational workflows, and provided detailed documentation and strategic reports to drive project efficiency and success.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div  dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">سوابق شغلی</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه  |  صنعت اکسپرس</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[23px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ">مرداد ۱۴۰۳ – تاکنون</span>
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

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-0.5">
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


                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
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


                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-3">
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



                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-3">
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



                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">ارائه دهنده طرح های توسعه و تحقیقاتی   |  خط تولید خمیرسازی باگاس</span>
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

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">شرکت حریر خوزستان زیر مجموعه هلدینگ تاپیکو</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mb-3">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">تحقیق و پژوهش در رابطه با امکان پذیری اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان / مذاکره با شرکت های طراح و سازنده تجهیزات و تاسیسات صنایع سلولزی اروپایی و شرق آسیایی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm">مرداد ۱۳۹۷ – تیر ۱۳۹۹ / ۱ سال و ۱۱ ماه</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">وزارت نفت - شرکت نفت</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-[67px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
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



                <div class="relative w-[800px] h-36 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ">اردیبهشت ۱۳۹۶ – خرداد ۱۳۹۷ / ۱ سال و ۲ ماه</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">سازمان مرکزی تعاون روستایی ایران</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm ml-[102px]">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1.5">
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

                </div>

              </div>


            </div>

          </div>
        </div>

        <div class="hidden lg:hidden md:flex container">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end" >

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">Experience</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

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
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Sanat Express</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[68px]">Jul 2024 - Present</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Borna Technology Holding</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-14">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm">In sanat express projects, orchestrated comprehensive project planning and management, led cross-functional teams, and supervised quality control to drive project success. Mitigated risks, optimized operational processes, and delivered detailed documentation and strategic reports to enhance efficiency and project outcomes.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Quality Control Manager | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-14">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900 text-shadow-sm text-justify">Led quality control operations at Pars Tabiat Cellulose Company (Sugas) across three shifts, ensuring high-quality standards and operational efficiency. Oversaw laboratory processes, maintaining compliance with industry standards. Managed cross-functional teams to achieve consistent quality outcomes. Drove continuous improvement initiatives, enhancing process efficiency and product quality.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Technical Manager | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-10">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900 text-justify text-shadow-sm ">Oversaw technical operations within engineering, laboratory, and safety units at Pars Tabiat Cellulose Company (Sugas), ensuring compliance with regulatory standards. Optimized production workflows and collaborated with cross-functional teams to enhance operational efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Research And Development Specialist | Sugas</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">Conducted market research and analysis to identify new product opportunities and develop innovative concepts aimed at enhancing the company’s competitiveness. Designed and proposed data-driven, industry-aligned solutions to address evolving customer needs and market trends.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">R&D Project Presenter | Bagasse Pulp Innovation</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[35px]">Apr 2023 - Jun 2023 · 3 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Harir Khuzestan Company -  Topico Holding Group</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-10">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Conducted detailed feasibility studies for launching a white bagasse pulp production line with a focus on sustainability. Led negotiations with top European and East Asian suppliers to secure optimal equipment solutions. Collaborated with multidisciplinary teams to improve pulp production quality and efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Hamyar Naft</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[20px]">Aug 2018 - Jul 2020 · 2 yrs</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Ministry of Petroleum of Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">At Hamyar Naft, spearheaded end-to-end project management, guided multidisciplinary teams, and enforced stringent quality controls. Proactively managed risks, streamlined operational processes, and delivered detailed documentation and strategic reports to enhance project efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Rural Insurance</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[13px]">Apr 2017 - Jun 2018 · 1 yr 3 mos</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Central Organization for Rural Cooperatives of Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm mr-[25px]">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-8">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">In the Rural Insurance Project, directed comprehensive project planning and execution, led diverse teams, and implemented robust quality controls. Actively managed risks, optimized operational workflows, and provided detailed documentation and strategic reports to drive project efficiency and success.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div  dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">سوابق شغلی</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه  |  صنعت اکسپرس</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[23px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ">مرداد ۱۴۰۳ – تاکنون</span>
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

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-2">
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


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
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

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-14">
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


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
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

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
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



                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
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

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-3">
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



                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ml-[12px]">فروردین ۱۴۰۲ – خرداد ۱۴۰۲ / ۳ ماه</span>
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

                        <div class="flex gap-x-1 items-center ml-[47px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">شوش، استان خوزستان، ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mb-4">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">تحقیق و پژوهش در رابطه با امکان پذیری اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان / مذاکره با شرکت های طراح و سازنده تجهیزات و تاسیسات صنایع سلولزی اروپایی و شرق آسیایی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm">مرداد ۱۳۹۷ – تیر ۱۳۹۹ / ۱ سال و ۱۱ ماه</span>
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

                        <div class="flex gap-x-1 items-center ml-[67px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">تهران , استان تهران , ایران</span>
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



                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm ">اردیبهشت ۱۳۹۶ – خرداد ۱۳۹۷ / ۱ سال و ۲ ماه</span>
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

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm ml-[102px]">تهران , استان تهران , ایران</span>
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

                </div>

              </div>


            </div>

          </div>

        </div>


        <div class="hidden md:hidden sm:flex container p-8">

          <div class="flex items-center justify-between w-full mt-28  mb-28 " v-show="locale === 'en'">


            <div class="flex-wrap items-end" >

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">Experience</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

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
                    <div class=" flex-wrap space-y-1.5">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Sanat Express</span>
                        </div>



                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Borna Technology Holding</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">



                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[68px]">Jul 2024 - Present</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-20">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm">In sanat express projects, orchestrated comprehensive project planning and management, led cross-functional teams, and supervised quality control to drive project success. Mitigated risks, optimized operational processes, and delivered detailed documentation and strategic reports to enhance efficiency and project outcomes.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">Quality Control Manager | Sugas</span>
                        </div>




                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">



                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-20">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900 text-shadow-sm text-justify">Led quality control operations at Pars Tabiat Cellulose Company (Sugas) across three shifts, ensuring high-quality standards and operational efficiency. Oversaw laboratory processes, maintaining compliance with industry standards. Managed cross-functional teams to achieve consistent quality outcomes. Drove continuous improvement initiatives, enhancing process efficiency and product quality.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Technical Manager | Sugas</span>
                        </div>



                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">



                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-14">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900 text-justify text-shadow-sm ">Oversaw technical operations within engineering, laboratory, and safety units at Pars Tabiat Cellulose Company (Sugas), ensuring compliance with regulatory standards. Optimized production workflows and collaborated with cross-functional teams to enhance operational efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Research And Development Specialist | Sugas</span>
                        </div>




                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Pars Tabiat Cellulose Company - subsidiary of Pars Paper Group</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">



                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[4px]">Dec 2020 - Jun 2024 · 3 yrs 7 mos</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-14">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">Conducted market research and analysis to identify new product opportunities and develop innovative concepts aimed at enhancing the company’s competitiveness. Designed and proposed data-driven, industry-aligned solutions to address evolving customer needs and market trends.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">R&D Project Presenter | Bagasse Pulp Innovation</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Harir Khuzestan Company -  Topico Holding Group</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>


                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[35px]">Apr 2023 - Jun 2023 · 3 mos</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-20">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Conducted detailed feasibility studies for launching a white bagasse pulp production line with a focus on sustainability. Led negotiations with top European and East Asian suppliers to secure optimal equipment solutions. Collaborated with multidisciplinary teams to improve pulp production quality and efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Hamyar Naft</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Ministry of Petroleum of Iran</span>
                        </div>


                      </div>


                      <div class="flex items-center justify-between">


                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[20px]">Aug 2018 - Jul 2020 · 2 yrs</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-16">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-[11px]  text-gray-900  text-shadow-sm text-justify">At Hamyar Naft, spearheaded end-to-end project management, guided multidisciplinary teams, and enforced stringent quality controls. Proactively managed risks, streamlined operational processes, and delivered detailed documentation and strategic reports to enhance project efficiency.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project Manager | Rural Insurance</span>
                        </div>


                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#fac"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-gray-900  text-shadow-sm">Central Organization for Rural Cooperatives of Iran</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center mr-2.5 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900  text-shadow-sm mr-[25px]">Tehran, Tehran Province, Iran</span>
                        </div>

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-gray-900 mt-0.5 text-shadow-sm mr-[13px]">Apr 2017 - Jun 2018 · 1 yr 3 mos</span>
                        </div>


                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white -mt-16">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">In the Rural Insurance Project, directed comprehensive project planning and execution, led diverse teams, and implemented robust quality controls. Actively managed risks, optimized operational workflows, and provided detailed documentation and strategic reports to drive project efficiency and success.</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div  dir="rtl" class="flex items-center  w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white mt-0.5 text-shadow-sm">سوابق شغلی</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-4 animate-fade-left animate-ease-linear">

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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
                          <span class="font-IrRegular text-xs  text-gray-900  text-shadow-sm text-justify">تحقیق و پژوهش در رابطه با امکان پذیری اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان / مذاکره با شرکت های طراح و سازنده تجهیزات و تاسیسات صنایع سلولزی اروپایی و شرق آسیایی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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



                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

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

                </div>

              </div>


            </div>

          </div>

        </div>

        <div class="flex flex-col sm:hidden w-[280px] max-w-sm mx-auto px-2 py-6 overflow-x-hidden">

          <div class="flex flex-col items-center justify-center w-full " v-show="locale === 'en'">
            <!-- عنوان -->
            <div class="w-full mt-16">
              <div class="relative w-[280px] max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white text-shadow-sm">Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- کارت تجربه -->
            <div class="mt-4 w-full space-y-6">

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg1.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/sanat.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Project Manager | Sanat Express</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Borna Technology Holding</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Tehran, Tehran Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Jul 2024 - Present</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex gap-x-0.5">
                    <div class="flex gap-x-1 items-start">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full">
                    <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words w-[280px]">
                    In Sanat Express projects, orchestrated comprehensive project planning and management, led cross-functional teams, and supervised quality control to drive project success. Mitigated risks, optimized operational processes, and delivered detailed documentation and strategic reports to enhance efficiency and project outcomes.
                    </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg2.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Quality Control Manager | Sugas</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                          <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Pars Tabiat Cellulose Company – subsidiary of Pars Paper Group
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Dec 2020 – Jun 2024 · 3 yrs 7 mos</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                <div class="flex items-center gap-x-0.5">
                  <div class="flex gap-x-1 mb-60">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                      <svg class="h-4 w-4 text-teal-700">
                        <use href="#paper"></use>
                      </svg>
                    </div>

                  </div>
                  <div class="w-full max-w-full">
                     <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
                      Led quality control operations at Pars Tabiat Cellulose Company (Sugas) across three shifts, ensuring high-quality standards and operational efficiency. Oversaw laboratory processes, maintaining compliance with industry standards. Managed cross-functional teams to achieve consistent quality outcomes. Drove continuous improvement initiatives, enhancing process efficiency and product quality.
                     </span>
                  </div>
                </div>
                </div>
              </div>


              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg3.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Technical Manager | Sugas</span>
                    </div>

                   <div class="flex items-center gap-x-1">
                     <div class="flex items-center gap-x-1">
                       <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                         <svg class="h-4 w-4 text-teal-700">
                           <use href="#fac"></use>
                         </svg>
                       </div>

                     </div>
                     <div>
                        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Pars Tabiat Cellulose Company – subsidiary of Pars Paper Group
        </span>
                     </div>
                   </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Dec 2020 – Jun 2024 · 3 yrs 7 mos</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-0.5">
                    <div class="flex gap-x-1 mb-40">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
          Oversaw technical operations within engineering, laboratory, and safety units at Pars Tabiat Cellulose Company (Sugas), ensuring compliance with regulatory standards. Optimized production workflows and collaborated with cross-functional teams to enhance operational efficiency.
        </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg4.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Research and Development Specialist | Sugas</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                          <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Pars Tabiat Cellulose Company – subsidiary of Pars Paper Group
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Dec 2020 – Jun 2024 · 3 yrs 7 mos</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex gap-x-1 mb-40">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div>
                      <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
          Conducted market research and analysis to identify new product opportunities and develop innovative concepts aimed at enhancing the company’s competitiveness. Designed and proposed data-driven, industry-aligned solutions to address evolving customer needs and market trends.
        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg1.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/harrir.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">R&D Project Presenter | Bagasse Pulp Innovation</span>
                    </div>

                    <div class="flex items-center gap-x-0.5">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>

                      </div>
                      <div>
                            <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Harir Khuzestan Company – Topico Holding Group
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Apr 2023 – Jun 2023 · 3 mos</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex gap-x-1 mb-48">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
          Conducted detailed feasibility studies for launching a white bagasse pulp production line with a focus on sustainability. Led negotiations with top European and East Asian suppliers to secure optimal equipment solutions. Collaborated with multidisciplinary teams to improve pulp production quality and efficiency.
        </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg2.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/naft.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Project Manager | Hamyar Naft</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Ministry of Petroleum of Iran
        </span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Tehran, Tehran Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Aug 2018 – Jul 2020 · 2 yrs</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex gap-x-1 mb-40">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
          At Hamyar Naft, spearheaded end-to-end project management, guided multidisciplinary teams, and enforced stringent quality controls. Proactively managed risks, streamlined operational processes, and delivered detailed documentation and strategic reports to enhance project efficiency.
        </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg3.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/bime.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-1">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Project Manager | Rural Insurance</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>

                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">
          Central Organization for Rural Cooperatives of Iran
        </span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Tehran, Tehran Province, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Apr 2017 – Jun 2018 · 1 yr 3 mos</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex gap-x-1 mb-48">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words">
          In the Rural Insurance Project, directed comprehensive project planning and execution, led diverse teams, and implemented robust quality controls. Actively managed risks, optimized operational workflows, and provided detailed documentation and strategic reports to drive project efficiency and success.
        </span>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

          <div dir="rtl" class="flex flex-col sm:hidden max-w-sm w-full mt-8 overflow-x-hidden" v-show="locale === 'fa'">
            <!-- عنوان -->
            <div class="w-full  mt-16">
              <div class="relative w-full max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/2.jpg" alt=""
                       class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex items-center  w-full p-2 h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-wide text-white text-shadow-sm">سوابق شغلی</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- کارت تجربه -->
            <div class="mt-6 w-full space-y-6">

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg1.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-12 h-12" src="/src/assets/image/factory/sanat.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">مدیر پروژه | صنعت اکسپرس</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">هلدینگ توسعه فناوری برنا</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#loc"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">تهران، استان تهران، ایران</span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">مرداد ۱۴۰۳ – تاکنون</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex mb-16">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          برنامه‌ریزی و مدیریت پروژه – رهبری تیم پروژه – کنترل کیفیت و نظارت – مدیریت ریسک – بهینه‌سازی فرآیندها – مستندسازی و گزارش‌دهی
        </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg2.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">ریاست واحد کنترل کیفیت | سوگاس</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                         <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-snug">
          شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">شوش، استان خوزستان، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-start gap-x-1 mb-48">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>

                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          رهبری عملیات کنترل کیفیت در شرکت پارس طبیعت سلولز (سوگاس) در سه شیفت کاری، با هدف تضمین استانداردهای کیفی بالا و بهره‌وری عملیاتی. نظارت بر فرآیندهای آزمایشگاهی با حفظ انطباق با استانداردهای صنعتی. مدیریت تیم‌های چندوظیفه‌ای برای دستیابی به نتایج کیفی پایدار. هدایت ابتکارات بهبود مستمر به‌منظور ارتقای بهره‌وری فرآیند و کیفیت محصول.
        </span>
                    </div>
                  </div>

                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg3.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-2">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">مسئول فنی | سوگاس</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>

                      </div>
                      <div>
                           <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-snug">
          شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">شوش، استان خوزستان، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-start mb-28">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          نظارت بر عملیات فنی در واحدهای مهندسی، آزمایشگاه و ایمنی در شرکت پارس طبیعت سلولز (سوگاس)، با هدف اطمینان از انطباق با استانداردهای مقرراتی. بهینه‌سازی جریان‌های تولید و همکاری با تیم‌های چندوظیفه‌ای برای ارتقای بهره‌وری عملیاتی.
        </span>
                    </div>
                  </div>


                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg4.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">ارائه‌دهنده طرح‌های توسعه و تحقیقاتی | سوگاس</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center gap-x-1">
                        <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>
                      </div>
                      <div>
                          <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-snug">
          شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه‌ گروه کاغذ پارس
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">شوش، استان خوزستان، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-start gap-x-1 pt-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                      <svg class="h-4 w-4 text-teal-700">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          انجام تحقیقات و تحلیل‌های بازار به‌منظور شناسایی فرصت‌های محصول جدید و توسعه مفاهیم نوآورانه با هدف ارتقای رقابت‌پذیری شرکت. طراحی و ارائه راه‌حل‌های داده‌محور و منطبق با صنعت
        </span>
                    </div>
                  </div>

                </div>
              </div>


              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg1.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/harrir.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">ارائه‌دهنده طرح‌های توسعه و تحقیقاتی | خط تولید خمیرسازی باگاس</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center">
                        <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#fac"></use>
                          </svg>
                        </div>

                      </div>
                      <div>
                        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-snug">
          شرکت حریر خوزستان زیر مجموعه هلدینگ تاپیکو
        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">شوش، استان خوزستان، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">فروردین ۱۴۰۲ – خرداد ۱۴۰۲ / ۳ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-start gap-x-1 mb-28">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          تحقیق و پژوهش در رابطه با امکان‌پذیری اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان. مذاکره با شرکت‌های طراح و سازنده تجهیزات و تأسیسات صنایع سلولزی اروپایی و شرق آسیایی.
        </span>
                    </div>
                  </div>

                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg2.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/naft.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">مدیر پروژه | همیار نفت</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">وزارت نفت - شرکت نفت</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">تهران، استان تهران، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">مرداد ۱۳۹۷ – تیر ۱۳۹۹ / ۱ سال و ۱۱ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-start gap-x-1 mb-20">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          برنامه‌ریزی و مدیریت پروژه – رهبری تیم پروژه – کنترل کیفیت و نظارت – مدیریت ریسک – بهینه‌سازی فرآیندها – مستندسازی و گزارش‌دهی
        </span>
                    </div>
                  </div>

                </div>
              </div>

              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">
                <!-- بک‌گراند -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/industry/bg3.jpg" alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>

                <!-- محتوای کارت -->
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">
                    <img class="w-14 h-14" src="/src/assets/image/factory/bime.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">مدیر پروژه | بیمه روستایی</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">سازمان مرکزی تعاون روستایی ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">تهران، استان تهران، ایران</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>
                      </div>
                      <span class="font-IrRegular text-[10px] text-gray-900 text-shadow-sm">اردیبهشت ۱۳۹۶ – خرداد ۱۳۹۷ / ۱ سال و ۲ ماه</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-start gap-x-1 mb-20">
                      <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#paper"></use>
                        </svg>
                      </div>

                    </div>
                    <div class="w-full max-w-full text-right">
        <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-relaxed break-words">
          برنامه‌ریزی و مدیریت پروژه – رهبری تیم پروژه – کنترل کیفیت و نظارت – مدیریت ریسک – بهینه‌سازی فرآیندها – مستندسازی و گزارش‌دهی
        </span>
                    </div>
                  </div>

                </div>
              </div>


            </div>
          </div>


        </div>


      </section>




      <section id="education" class="flex min-w-max  min-h-screenbg-gray-200 cursor-default">

        <div class="hidden  lg:flex container">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Education</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">MBA</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[75px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2025 – Present</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">University of Tehran</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-72 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Business Administration and Management – General</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Chemical Engineering</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[105px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2013 – 2017</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Islamic Azad University</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-72 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Bachelor's Degree</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تحصیلات</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مدیریت</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[95px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۴۰۳</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه تهران</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-96 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مدیریت کسب‌وکار و مدیریت – گرایش عمومی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مهندسی شیمی</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه آزاد</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-96 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مقطع کارشناسی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>


        <div class="hidden lg:hidden md:flex container">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Education</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14">

                <div class="relative w-[700px] h-44  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-4">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">MBA</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[75px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2025 – Present</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">University of Tehran</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-60 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Business Administration and Management – General</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-4">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Chemical Engineering</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[105px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2013 – 2017</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Islamic Azad University</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-44 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Bachelor's Degree</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تحصیلات</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14 animate-fade-left animate-ease-linear">

                <div class="relative w-[700px] h-44  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-4">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مدیریت</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[95px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۴۰۳</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه تهران</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-72 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مدیریت کسب‌وکار و مدیریت – گرایش عمومی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-4">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مهندسی شیمی</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[117px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه آزاد</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-72 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مقطع کارشناسی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>
        </div>



        <div class="hidden md:hidden sm:flex container p-8">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Education</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14">

                <div class="relative w-[550px] h-56  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">MBA</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[75px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2025 – Present</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">University of Tehran</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-28 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Tehran, Tehran Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Business Administration and Management – General</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[550px] h-56  rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Chemical Engineering</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[105px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2013 – 2017</span>
                        </div>

                      </div>

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Islamic Azad University</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-16 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Bachelor's Degree</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#uni"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تحصیلات</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-14">

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e4.jpeg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/teh.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مدیریت</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[95px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۴۰۳</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه تهران</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-32 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">تهران , استان تهران , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مدیریت کسب‌وکار و مدیریت – گرایش عمومی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="w-16 h-16" src="/src/assets/image/edu/azad.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">مهندسی شیمی</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دانشگاه آزاد</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">مقطع کارشناسی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>


        <div class="flex flex-col sm:hidden w-[280px] max-w-sm mx-auto px-2 py-6 overflow-x-hidden">


          <div class="sm:hidden flex flex-col items-center mt-16 space-y-4" v-show="locale === 'en'">
            <!-- عنوان Education -->
            <div class="w-full mt-2">
              <div class="relative w-[280px] max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/edu/e3.jpg" alt=""
                       class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white text-shadow-sm">Education</span>
                  </div>
                </div>
              </div>
            </div>

              <!-- کارت اول: University of Tehran -->
              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
                <div class="absolute inset-0 z-0">
                  <img src="/src/assets/image/edu/e4.jpeg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                    <img class="w-12 h-12" src="/src/assets/image/edu/teh.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-4">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">MBA | University of Tehran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Business Administration & Management</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Tehran, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">2025 – Present</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex gap-x-0.5">
                    <div class="flex items-start">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700"><use href="#paper"></use></svg>
                      </div>
                    </div>
                    <div class="w-full max-w-full">
          <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words w-[280px]">
            Business Administration and Management – General
          </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- کارت دوم: Islamic Azad University -->
              <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                <div class="absolute inset-0 z-0">
                  <img src="/src/assets/image/edu/e2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <!-- لوگو -->
                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                    <img class="w-12 h-12" src="/src/assets/image/edu/azad.png" alt="">
                  </div>

                  <!-- اطلاعات -->
                  <div class="space-y-4">
                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                      </div>
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Chemical Engineering | Azad University</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Bachelor's Degree</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">Dezful, Iran</span>
                    </div>

                    <div class="flex items-center gap-x-1">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                        <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                      </div>
                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">2013 – 2017</span>
                    </div>
                  </div>

                  <!-- توضیحات -->
                  <div class="flex gap-x-0.5">
                    <div class="flex items-start">
                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                        <svg class="h-4 w-4 text-teal-700"><use href="#paper"></use></svg>
                      </div>
                    </div>
                    <div class="w-full max-w-full">
          <span class="font-IrRegular text-xs text-gray-900 text-justify text-shadow-sm leading-relaxed break-words w-[280px]">
Bachelor's Degree
          </span>
                    </div>
                  </div>
                </div>
              </div>

          </div>

          <div dir="rtl" class="sm:hidden flex flex-col items-center mt-16" v-show="locale === 'fa'">
            <!-- عنوان تحصیلات -->
            <div class="relative w-[280px] h-14 max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out mb-6">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/edu/e3.jpg" alt="" class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                    <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                      <use href="#uni"></use>
                    </svg>
                  </div>
                  <span class="font-IrBold text-[14px] tracking-wide text-gray-800 text-shadow-sm">تحصیلات</span>
                </div>
              </div>
            </div>

            <!-- کارت اول: دانشگاه تهران -->
            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/edu/e4.jpeg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12" src="/src/assets/image/edu/teh.png" alt="">
                </div>
                <div class="space-y-4">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">مدیریت | دانشگاه تهران</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">مدیریت کسب‌وکار – گرایش عمومی</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">تهران، استان تهران، ایران</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">۱۴۰۳</span>
                  </div>
                </div>
                <div class="flex gap-x-0.5">
                  <div class="flex items-start">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                      <svg class="h-4 w-4 text-teal-700"><use href="#paper"></use></svg>
                    </div>
                  </div>
                  <div class="w-full max-w-full">
          <span class="font-IrRegular text-xs text-gray-800 text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
مدیریت کسب‌وکار و مدیریت – گرایش عمومی
          </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- کارت دوم: دانشگاه آزاد -->
            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/edu/e2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12" src="/src/assets/image/edu/azad.png" alt="">
                </div>
                <div class="space-y-4">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">مهندسی شیمی | دانشگاه آزاد</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">مقطع کارشناسی</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">دزفول، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">۱۳۹۶</span>
                  </div>
                </div>
                <div class="flex gap-x-0.5">
                  <div class="flex items-start">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white mt-1">
                      <svg class="h-4 w-4 text-teal-700"><use href="#paper"></use></svg>
                    </div>
                  </div>
                  <div class="w-full max-w-full">
          <span class="font-IrRegular text-xs text-gray-800 text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
مقطع کارشناسی
          </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </section>





      <section id="certification" class="flex min-w-max  min-h-screen   bg-sky-100 cursor-default">

        <div class="hidden  lg:flex container">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Certification</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">GMP (Good Manufacturing Practice)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-80 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">HACCP (Hazard Analysis Critical Control Point)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-80 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">ICDL Core & Advanced Modules</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[152px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2018</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Technical and Vocational Course</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-60 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Research & Methodology Workshop</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2017</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
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
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Introductory & Advanced Course in Aspen HYSYS</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2016</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">دوره ها</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره GMP (عملیات تولید خوب)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[118px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-96 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره HACCP (تجزیه و تحلیل خطر و نقاط کنترل بحرانی)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[118px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-96 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره ICDL مقدماتی و پیشرفته</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[115px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۷</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">سازمان آموزش فنی و حرفه ای کشور</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-[270px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">شوش , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">کارگاه روش تحقیق و پژوهش</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-60 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[800px] h-32 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
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
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره مقدماتی و پیشرفته نرم افزار Aspen Hysys </span>
                        </div>


                        <div class="flex gap-x-1 items-center  ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۴</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-60 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>

        <div class="hidden lg:hidden md:flex container">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Certification</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">GMP (Good Manufacturing Practice)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-52 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">HACCP (Hazard Analysis Critical Control Point)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-56 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">ICDL Core & Advanced Modules</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[152px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2018</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Technical and Vocational Course</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Research & Methodology Workshop</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2017</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-16 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Introductory & Advanced Course in Aspen HYSYS</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2016</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-16 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">دوره ها</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره GMP (عملیات تولید خوب)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[118px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-60 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره HACCP (تجزیه و تحلیل خطر و نقاط کنترل بحرانی)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[118px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-72 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره ICDL مقدماتی و پیشرفته</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[115px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۷</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">سازمان آموزش فنی و حرفه ای کشور</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-[170px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">شوش , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">کارگاه روش تحقیق و پژوهش</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره مقدماتی و پیشرفته نرم افزار Aspen Hysys </span>
                        </div>


                        <div class="flex gap-x-1 items-center  ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۴</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>

        <div class="hidden md:hidden sm:flex container p-8">

          <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Certification</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">GMP (Good Manufacturing Practice)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-24 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">HACCP (Hazard Analysis Critical Control Point)</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[145px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2021</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Narin Sanat Dez Co.</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-24 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">ICDL Core & Advanced Modules</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[155px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2018</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Technical and Vocational Course</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-2 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Research & Methodology Workshop</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[150px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2017</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-10 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base text-white mt-0.5 text-shadow-sm">Introductory & Advanced Course in Aspen HYSYS</span>
                        </div>


                        <div class="flex gap-x-1 items-center mr-[158px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">2016</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Nowandish Gostar Academy</span>
                        </div>

                        <div class="flex gap-x-1 items-center ml-8 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">Specialized Training</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>


          <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


            <div class="flex-wrap items-end">

              <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>


                <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-2">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                        <use href="#paper"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">دوره ها</span>
                  </div>
                </div>

              </div>

              <div class="mt-6 space-y-6 animate-fade-left animate-ease-linear">

                <div class="relative  w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/c1.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره GMP (عملیات تولید خوب)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[118px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-36 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative  w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/edu/e2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره HACCP (تجزیه و تحلیل خطر و نقاط کنترل بحرانی)</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[125px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۹</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">نارین صنعت دز</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-40 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="relative  w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/ic.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره ICDL مقدماتی و پیشرفته</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[115px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۷</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">سازمان آموزش فنی و حرفه ای کشور</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-[50px] mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">شوش , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative  w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/re.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">کارگاه روش تحقیق و پژوهش</span>
                        </div>


                        <div class="flex gap-x-1 items-center ml-[116px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۶</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-2 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                <div class="relative  w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/ce/de.jpg" alt=""
                         class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                    <div class="flex items-center gap-x-2">
                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                        <img class="20 20  rounded-md" src="/src/assets/image/ce/as.png" alt="">
                      </div>

                    </div>
                    <div class=" flex-wrap space-y-6">

                      <div class="flex items-center justify-between">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#pos"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-sm text-white mt-0.5 text-shadow-sm">دوره مقدماتی و پیشرفته نرم افزار Aspen Hysys </span>
                        </div>


                        <div class="flex gap-x-1 items-center  ml-[128px]">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-teal-700">
                              <use href="#cal"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white mt-0.5 text-shadow-sm">۱۳۹۴</span>
                        </div>

                      </div>

                      <div class="flex items-center">

                        <div class="flex gap-x-1 items-center">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#un"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">آکادمی نواندیش گستر بین الملل ایرانیان</span>
                        </div>

                        <div class="flex gap-x-1 items-center mr-4 mt-0.5">
                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#loc"></use>
                            </svg>
                          </div>
                          <span class="font-IrRegular text-xs text-white  text-shadow-sm">دزفول , استان خوزستان , ایران</span>
                        </div>

                      </div>

                      <div class="flex gap-x-1 items-center">
                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#madrak"></use>
                          </svg>
                        </div>
                        <div class="w-full">
                          <span class="font-IrRegular text-sm text-white  text-shadow-sm">دوره تخصصی</span>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>


        <div class="flex flex-col sm:hidden w-[280px] max-w-sm mx-auto px-2 py-6 overflow-x-hidden">

          <div class="sm:hidden flex flex-col items-center mt-16 space-y-4" v-show="locale === 'en'">

            <div class="w-full mt-2">
              <div class="relative w-[280px] max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                  <img src="/src/assets/image/ce/c2.jpg" alt=""
                       class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                </div>
                <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-sky-700 animate-spin animate-duration-[4000ms]">
                        <use href="#set"></use>
                      </svg>
                    </div>
                    <span class="font-IrBold text-base tracking-widest text-white text-shadow-sm">Certification</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- کارت اول: GMP -->
            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/c1.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">GMP (Good Manufacturing Practice)</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Narin Sanat Dez Co.</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">2021</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#madrak"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Specialized Training</span>
                  </div>
                </div>
              </div>
            </div>


            <!-- کارت دوم: HACCP -->
            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/edu/e2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos"></use></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">HACCP (Hazard Analysis Critical Control Point)</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Narin Sanat Dez Co.</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">2021</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#madrak"></use></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Specialized Training</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/ic.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">ICDL Core & Advanced Modules</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Technical and Vocational Course</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Shoush, Khuzestan Province, Iran</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">2018</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Specialized Training</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/industry/bg2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/re.png" alt="">
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">Research & Methodology Workshop</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">2017</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Specialized Training</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/de.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/as.png" alt="">
                </div>
                <div class="space-y-2">
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-gray-800 text-shadow-sm">Introductory & Advanced Course in Aspen HYSYS</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Nowandish Gostar International Iranian Academy</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Dezful, Khuzestan Province, Iran</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">2016</span>
                  </div>
                  <div class="flex items-center gap-x-1">
                    <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                      <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-gray-800 text-shadow-sm">Specialized Training</span>
                  </div>
                </div>
              </div>
            </div>


          </div>


          <div dir="rtl" class="sm:hidden flex flex-col items-center mt-16" v-show="locale === 'fa'">

            <div class="relative w-[280px] h-14 max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out mb-6">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/c2.jpg" alt="" class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center gap-x-2">
                  <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                    <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                      <use href="#uni"></use>
                    </svg>
                  </div>
                  <span class="font-IrBold text-[14px] tracking-wide text-gray-800 text-shadow-sm">دوره ها</span>
                </div>
              </div>
            </div>


            <div dir="rtl" class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/c1.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <!-- آیکن مرکزی -->
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-12 h-12 rounded-md" src="/src/assets/image/ce/gmp.png" alt="">
                </div>

                <!-- اطلاعات دوره -->
                <div class="space-y-4">
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-white text-shadow-sm">دوره GMP | نارین صنعت دز</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">عملیات تولید خوب – تخصصی</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">دزفول، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">۱۳۹۹</span>
                  </div>
                </div>

                <!-- توضیح پایانی -->
                <div class="flex items-start gap-x-2">
                  <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                    <svg class="h-4 w-4 text-teal-700"><use href="#paper" /></svg>
                  </div>
                  <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-white text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
دوره تخصصی عملیات تولید خوب (GMP) در واحد صنعتی نارین صنعت دز
        </span>
                  </div>
                </div>
              </div>
            </div>

            <div dir="rtl" class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/edu/e2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <!-- آیکن مرکزی -->
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-14 h-12 rounded-md" src="/src/assets/image/ce/HACCP.jpg" alt="">
                </div>

                <!-- اطلاعات دوره -->
                <div class="space-y-4">
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-white text-shadow-sm">دوره HACCP | نارین صنعت دز</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">تحلیل خطر و کنترل بحرانی – تخصصی</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">دزفول، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">۱۳۹۹</span>
                  </div>
                </div>

                <!-- توضیح پایانی -->
                <div class="flex items-start gap-x-2">
                  <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                    <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                  </div>
                  <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-white text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
دوره تخصصی HACCP برای تجزیه و تحلیل خطر و نقاط کنترل بحرانی در واحد صنعتی نارین صنعت دز
        </span>
                  </div>
                </div>
              </div>
            </div>

            <div dir="rtl" class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/ic.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-14 h-12 rounded-md" src="/src/assets/image/ce/icdl.png" alt="">
                </div>
                <div class="space-y-4">
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-white text-shadow-sm">دوره ICDL | فنی و حرفه‌ای کشور</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">مهارت‌های هفت‌گانه – مقدماتی و پیشرفته</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">شوش، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">۱۳۹۷</span>
                  </div>
                </div>
                <div class="flex items-start gap-x-2">
                  <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                    <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                  </div>
                  <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-white text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
دوره تخصصی ICDL در سطح مقدماتی و پیشرفته، برگزارشده توسط سازمان آموزش فنی و حرفه‌ای کشور
        </span>
                  </div>
                </div>
              </div>
            </div>

            <div dir="rtl" class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/industry/bg2.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-14 h-12 rounded-md" src="/src/assets/image/ce/re.png" alt="">
                </div>
                <div class="space-y-4">
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-white text-shadow-sm">کارگاه روش تحقیق | نواندیش گستر</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">پژوهش صنعتی و دانشگاهی – تخصصی</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">دزفول، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">۱۳۹۶</span>
                  </div>
                </div>
                <div class="flex items-start gap-x-2">
                  <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                    <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                  </div>
                  <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-white text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
کارگاه تخصصی روش تحقیق و پژوهش با تمرکز بر پروژه‌های صنعتی و مطالعات دانشگاهی
        </span>
                  </div>
                </div>
              </div>
            </div>

            <div dir="rtl" class="relative w-[280px] max-w-full h-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-10">
              <div class="absolute inset-0 z-0">
                <img src="/src/assets/image/ce/de.jpg" alt="" class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
              </div>
              <div class="relative flex flex-col gap-y-3 p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                <!-- آیکن مرکزی -->
                <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto">
                  <img class="w-14 h-12 rounded-md" src="/src/assets/image/ce/as.png" alt="">
                </div>

                <!-- اطلاعات دوره -->
                <div class="space-y-4">
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#pos" /></svg>
                    </div>
                    <span class="font-IrBold text-xs text-white text-shadow-sm">دوره Aspen Hysys | نواندیش گستر</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#un" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">شبیه‌سازی فرآیندهای صنعتی – تخصصی</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-4 w-4 text-teal-700"><use href="#loc" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">دزفول، استان خوزستان، ایران</span>
                  </div>
                  <div class="flex items-center justify-start gap-x-2">
                    <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg">
                      <svg class="h-5 w-5 text-teal-700"><use href="#cal" /></svg>
                    </div>
                    <span class="font-IrRegular text-xs text-white text-shadow-sm">۱۳۹۴</span>
                  </div>
                </div>

                <!-- توضیح پایانی -->
                <div class="flex items-start gap-x-2">
                  <div class="flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-lg mt-1">
                    <svg class="h-4 w-4 text-teal-700"><use href="#madrak" /></svg>
                  </div>
                  <div class="w-full max-w-full">
        <span class="font-IrRegular text-xs text-white text-justify text-shadow-sm leading-relaxed break-words w-[260px]">
دوره تخصصی شبیه‌سازی فرآیندهای صنعتی با نرم‌افزار Aspen Hysys در سطح مقدماتی و پیشرفته، برگزارشده توسط آکادمی نواندیش گستر بین‌الملل ایرانیان
        </span>
                  </div>
                </div>
              </div>
            </div>


          </div>



        </div>

      </section>



      <section id="contact" class="flex min-w-max min-h-screen relative bg-gray-100 cursor-default">

              <div class="hidden  lg:flex container">

                <div class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'en'">


                  <div class="flex-wrap items-end">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Contact Me</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[800px] h-40 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-6">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">Phone Number: +98 939 390 6096</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">Email: ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>

                  </div>


                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">Designed & Developed by Ali Radmehr · ©2025</span>

                    </div>
                  </div>

                </div>


                <div dir="rtl" class="flex items-center justify-between w-full mt-28  mb-28" v-show="locale === 'fa'">


                  <div class="flex-wrap w-full p-4">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تماس با من</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[800px] h-40 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-6">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">شماره تماس : ۰۹۳۹۳۹۰۶۰۹۶</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">ایمیل : ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">لینکدین : linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>


                  </div>

                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">طراحی و توسعه توسط علی رادمهر - ۱۴۰۴</span>

                    </div>
                  </div>


                </div>

              </div>

              <div class="hidden lg:hidden md:flex container">

                <div class="flex items-center justify-between p-2 w-full mt-28  mb-28" v-show="locale === 'en'">


                  <div class="flex-wrap items-end">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Contact Me</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-6">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">Phone Number: +98 939 390 6096</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">Email: ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>

                  </div>


                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">Designed & Developed by Ali Radmehr · ©2025</span>

                    </div>
                  </div>

                </div>


                <div dir="rtl" class="flex items-center justify-between p-2 w-full mt-28  mb-28" v-show="locale === 'fa'">


                  <div class="flex-wrap items-end">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تماس با من</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[700px] h-44 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-6">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">شماره تماس : ۰۹۳۹۳۹۰۶۰۹۶</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">ایمیل : ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">لینکدین : linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>


                  </div>

                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">طراحی و توسعه توسط علی رادمهر - ۱۴۰۴</span>

                    </div>
                  </div>


                </div>

              </div>


              <div class="hidden md:hidden sm:flex container">

                <div class="flex items-center justify-between p-2 w-full mt-28  mb-28" v-show="locale === 'en'">


                  <div class="flex-wrap items-end">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">Contact Me</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-10">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">Phone Number: +98 939 390 6096</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">Email: ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>

                  </div>


                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">Designed & Developed by Ali Radmehr · ©2025</span>

                    </div>
                  </div>

                </div>


                <div dir="rtl" class="flex items-center justify-between p-2 w-full mt-28  mb-28" v-show="locale === 'fa'">


                  <div class="flex-wrap items-end">

                    <div class="relative w-60 h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">


                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover  blur-none opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>


                      <div class="relative flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-2">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-[14px] tracking-widest text-white mt-0.5 text-shadow-sm">تماس با من</span>
                        </div>
                      </div>

                    </div>

                    <div class="mt-12 space-y-6 animate-fade-left animate-ease-linear">

                      <div class="relative w-[550px] h-56 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md ">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover  blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>


                        <div class="relative gap-x-2 flex items-center p-1 w-full h-full bg-sky-200/10 backdrop-blur-xs  rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-2">
                            <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">
                              <img class="20 20 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                            </div>

                          </div>
                          <div class=" flex-wrap space-y-10">

                            <div class="flex items-center justify-between">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#phone"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800 mt-0.5 text-shadow-sm">شماره تماس : ۰۹۳۹۳۹۰۶۰۹۶</span>
                              </div>


                            </div>

                            <div class="flex items-center">

                              <div class="flex gap-x-1 items-center">
                                <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                  <svg class="h-4 w-4 text-teal-700">
                                    <use href="#mail"></use>
                                  </svg>
                                </div>
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">ایمیل : ali.radmeehr@gmail.com</span>
                              </div>



                            </div>

                            <div class="flex gap-x-1 items-center">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <div class="w-full">
                                <span class="font-IrBold text-sm text-gray-800  text-shadow-sm">لینکدین : linkedin.com/in/ali-radmehr</span>
                              </div>
                            </div>

                          </div>

                        </div>

                      </div>



                    </div>


                  </div>

                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">طراحی و توسعه توسط علی رادمهر - ۱۴۰۴</span>

                    </div>
                  </div>


                </div>

              </div>


              <div class="flex flex-col sm:hidden w-[280px] max-w-sm mx-auto px-2 py-6 overflow-x-hidden">

                <div class="flex items-center justify-between p-2 w-full mt-14 mb-28" v-show="locale === 'en'">


                  <div class="flex-wrap w-full space-y-6">

                    <div class="w-full mt-2">
                    <div class="relative w-[280px] max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                      <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                        <img src="/src/assets/image/call/ca1.jpg" alt=""
                             class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                      </div>
                      <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                        <div class="flex items-center gap-x-1">
                          <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                              <use href="#phone"></use>
                            </svg>
                          </div>
                          <span class="font-IrBold text-base tracking-widest text-white text-shadow-sm">Contact Me</span>
                        </div>
                      </div>
                    </div>
                  </div>

                    <div class="relative w-full max-w-sm mx-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-6">

                      <div class="relative w-full h-[360px] sm:h-[370px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>

                        <div class="relative flex flex-col sm:flex-row gap-4 p-3 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                          <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md shrink-0 mx-auto sm:mx-0">
                            <img class="w-14 h-14 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                          </div>

                          <div class="flex flex-col justify-center gap-4 space-y-10 mt-4 w-full">

                            <div class="flex items-center gap-2">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#phone"></use>
                                </svg>
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">+98 939 390 6096</span>
                            </div>

                            <div class="flex items-center gap-2">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#mail"></use>
                                </svg>
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">ali.radmeehr@gmail.com</span>
                            </div>

                            <div class="flex items-center gap-2">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">linkedin.com/in/ali-radmehr</span>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>


                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">Designed & Developed by Ali Radmehr · ©2025</span>

                    </div>
                  </div>

                </div>


                <div dir="rtl" class="flex items-center  justify-between p-2 w-full mt-16" v-show="locale === 'fa'">


                  <div dir="rtl" class="flex-wrap w-full space-y-6">

                    <!-- عنوان بخش -->
                    <div class="w-full mt-2">
                      <div class="relative w-[280px] max-w-full h-14 rounded-tl-xl rounded-br-xl overflow-hidden shadow-md animate-jump animate-ease-out">
                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca1.jpg" alt=""
                               class="w-full h-full object-cover opacity-75 rounded-tl-xl rounded-br-xl" />
                        </div>
                        <div class="relative flex items-center p-2 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">
                          <div class="flex items-center gap-x-1">
                            <div class="flex items-center justify-center rounded-full border border-gray-300 w-6 h-6 bg-white">
                              <svg class="h-5 w-5 text-sky-700 animate-wiggle animate-infinite animate-duration-[800ms] animate-ease-in-out">
                                <use href="#phone"></use>
                              </svg>
                            </div>
                            <span class="font-IrBold text-base tracking-wide text-white text-shadow-sm">تماس با من</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- کارت تماس -->
                    <div class="relative w-full max-w-sm mx-auto rounded-tl-xl rounded-br-xl overflow-hidden shadow-md mb-6">
                      <div class="relative w-full h-[360px] sm:h-[370px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">
                        <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                          <img src="/src/assets/image/call/ca7.jpg" alt=""
                               class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                        </div>

                        <div class="relative flex flex-col sm:flex-row gap-4 p-3 w-full h-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">

                          <!-- آیکن مرکزی -->
                          <div class="flex items-center justify-center w-16 h-16 bg-white rounded-md border border-gray-200 shadow-md shrink-0 mx-auto sm:mx-0">
                            <img class="w-14 h-14 p-1 rounded-md" src="/src/assets/image/call/con.png" alt="">
                          </div>

                          <!-- اطلاعات تماس -->
                          <div class="flex flex-col justify-center gap-4 space-y-10 mt-4 w-full text-right">

                            <div class="flex items-center gap-x-2 justify-start">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#phone"></use>
                                </svg>
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">۰۹۳۹۳۹۰۶۰۹۶</span>
                            </div>

                            <div class="flex items-center gap-x-2 justify-start">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#mail"></use>
                                </svg>
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">ali.radmeehr@gmail.com</span>
                            </div>

                            <div class="flex items-center gap-x-2 justify-start">
                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white ">
                                <svg class="w-3 h-3 text-teal-700" viewBox="0 0 382 382" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
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
                              </div>
                              <span class="font-IrBold text-sm text-gray-800 text-shadow-sm">linkedin.com/in/ali-radmehr</span>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>

                  </div>


                  <div class="w-full absolute h-16 bg-gray-700 bottom-0 left-0 right-0">
                    <div class="flex items-center justify-center w-full h-full">
                      <span class="flex items-center justify-center text-white text-shadow-md font-IrRegular text-sm ">طراحی و توسعه توسط علی رادمهر - ۱۴۰۴</span>

                    </div>
                  </div>

                </div>

              </div>

            </section>





    </main>

  </div>

</template>






<script setup>
import HeaderComponent from "@/views/HeaderComponent.vue"
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import emblaCarouselVue from 'embla-carousel-vue'
import AutoScroll from 'embla-carousel-auto-scroll'

const { t, locale } = useI18n()

onMounted(() => {
  document.title = t('name')
    if (window._paq) {
      window._paq.push(['setCustomUrl', window.location.pathname])
      window._paq.push(['setDocumentTitle', 'Ali Radmehr | علی رادمهر'])
      window._paq.push(['trackPageView'])
    }
})

watch(locale, () => {
  document.title = t('name')
})


const [emblaRef0, emblaApi0] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)
const [emblaRef1, emblaApi1] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)

const [emblaRef2, emblaApi2] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)

const [emblaRef3, emblaApi3] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)

const [emblaRef4, emblaApi4] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)

const [emblaRef5, emblaApi5] = emblaCarouselVue(
    { loop: true },
    [AutoScroll({ playOnInit: true, speed: 1 })]
)


onMounted(() => {
  if (emblaApi0.value) {
    // embla 1 is ready
  }
  if (emblaApi1.value) {
    // embla 1 is ready
  }
  if (emblaApi2.value) {
    // embla 2 is ready
  }
  if (emblaApi3.value) {
    // embla 3 is ready
  }
  if (emblaApi4.value) {
    // embla 4 is ready
  }
  if (emblaApi5.value) {
    // embla 4 is ready
  }
})


</script>


<style>
html {
  scroll-behavior: smooth;
}

.align-right { text-align: right; float: right; }
.align-left { text-align: left; float: left; }

</style>
