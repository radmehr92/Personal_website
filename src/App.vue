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
                      <span class="text-shadow-md text-sky-600">Quality Management</span>
                      <span class="text-gray-800 text-shadow-md">& </span>
                      <span class="text-teal-600 text-shadow-md">Project Management</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-2/4 text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                    <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-2/4 text-gray-900">
                  <span class="text-justify leading-7">
                    فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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
                    <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                        <span class="text-shadow-md text-sky-600">Quality Management</span>
                        <span class="text-gray-800 text-shadow-md">&</span>
                        <span class="text-shadow-md text-teal-600">Project Management</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[550px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                      <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <div class="flex font-IrBold text-2xl gap-x-3 tracking-widest">
                        <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                        <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                        <span class="text-gray-800 text-shadow-md">و</span>
                        <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[500px] text-gray-900">
                     <span class="text-justify leading-7">
                    فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌ های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌ های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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
                      <img class="rounded-full border border-sky-600/50 w-72 h-72" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                        <span class="text-shadow-md text-sky-600">Quality Management</span>
                        <span class="text-gray-800 text-shadow-md">&</span>
                        <span class="text-shadow-md text-teal-600">Project Management</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[450px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                      <img class="rounded-full border border-sky-600/50 w-52 h-52" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                        <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                        <span class="text-gray-800 text-shadow-md">و</span>
                        <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                      </div>

                      <div class="flex font-IrRegular text-base justify-center w-[400px] text-gray-900">
                  <span class="text-justify leading-7">
                    فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌ های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌ های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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
                      <img class="rounded-full border border-sky-600/50 w-52 h-52" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <span class="text-shadow-md text-sky-600">Quality Management</span>
                      <span class="text-gray-800 text-shadow-md">&</span>
                      <span class="text-shadow-md text-teal-600">Project Management</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[600px] text-gray-900">
                  <span class="text-justify leading-7">
                    Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-[600px] text-gray-900">
                  <span class="text-justify leading-7">
                    فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌ های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌ های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <span class="text-shadow-md text-sky-600">Quality Management</span>
                      <span class="text-gray-800 text-shadow-md">&</span>
                      <span class="text-shadow-md text-teal-600">Project Management</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[550px] text-gray-900">
                  <span class="text-justify leading-7">
Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                    <img class="rounded-full border border-sky-600/50 w-40 h-40" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                      <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                    </div>

                    <div class="flex font-IrRegular text-base justify-center w-[550px] text-gray-900">
                  <span class="text-justify leading-7">
فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌ های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌ های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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
                    <img class="rounded-full border border-sky-600/50 w-28 h-28" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                    <div class="flex font-IrBold text-[10px] gap-x-1">
                      <span class="text-gray-800 text-shadow-md">Professional in</span>
                      <span class="text-shadow-md text-sky-600">Quality Management</span>
                      <span class="text-gray-800 text-shadow-md">&</span>
                      <span class="text-shadow-md text-teal-600">Project Management</span>
                    </div>

                    <div class="flex font-IrRegular text-xs justify-center w-[280px] text-gray-900">
                  <span class="text-justify leading-5">
                   Chemical Engineering graduate with an MBA from the University of Tehran, with extensive experience in Quality Management across industrial and manufacturing environments. Experienced in leading quality control teams, managing quality operations, implementing quality standards and systems, and driving continuous improvement through CAPA, SPC, FMEA, and root cause analysis. Experienced in integrating quality control and assurance into project execution, while leveraging technical and R&D expertise to improve processes, product quality, and operational performance.
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
                    <img class="rounded-full border border-sky-600/50 w-28 h-28" src="/src/assets/image/a.png" alt="Ali Radmehr" />
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
                    <div class="flex font-IrBold text-sm gap-x-1 tracking-wide">
                      <span class="text-gray-800 text-shadow-md">فعال در حوزه</span>
                      <span class="text-sky-600 text-shadow-md">مدیریت کیفیت</span>
                      <span class="text-gray-800 text-shadow-md">و</span>
                      <span class="text-shadow-md text-teal-600">مدیریت پروژه</span>
                    </div>

                    <div class="flex font-IrRegular text-sm justify-center w-[280px] text-gray-900">
                  <span class="text-justify leading-7">
                    فارغ‌ التحصیل مهندسی شیمی با مدرک MBA از دانشگاه تهران، با تجربه گسترده در مدیریت کیفیت در محیط‌ های صنعتی و تولیدی. دارای تجربه در رهبری تیم‌ های کنترل کیفیت، مدیریت عملیات کیفیت، اجرای استاندارد ها و سیستم‌ های کیفیت و بهبود مستمر از طریق CAPA، SPC، FMEA و تحلیل علل ریشه‌ ای. دارای تجربه در یکپارچه‌ سازی کنترل و تضمین کیفیت در اجرای پروژه‌ ها و بهره‌ گیری از دانش فنی و تحقیق و توسعه برای بهبود فرآیند ها، کیفیت محصول و عملکرد عملیاتی.
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


                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">



                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                Quality Control Manager | Rata

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

                Rata Company

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Oct 2025 - Present

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Isfahan, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

            Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Built and led the Quality Control department by defining roles, forming a professional team, and developing an efficient organizational structure.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Aligned quality processes with ISO 9001 standards through SOP redesign, internal audits, and operational improvements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Designed and implemented digital quality forms for real-time tracking, reporting, and data-driven analysis.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Established advanced CAPA systems using 5Why and Fishbone analysis for root cause elimination.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Trained three-shift QC teams through ISO 9001 and CAPA programs to improve operational independence.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Optimized production quality through modern inspection protocols and continuous improvement initiatives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Implemented FMEA-based risk management to identify failure modes and preventive actions.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Improved measurement system reliability through MSA implementation and testing accuracy control.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>

                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">



                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                Quality & Project Manager | Sanat Express

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

               Borna Varna Sanat Technology Development Company

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Jul 2024 - Sep 2025 · 1 yr 1 mo

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Tehran, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

            Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Led project quality management by designing and implementing Quality Planning, Quality Assurance, and Quality Control processes based on PMBOK standards and industry requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed the complete project lifecycle from initiation to final delivery, ensuring achievement of time, cost, and quality objectives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Established inspection, testing, and quality monitoring processes to ensure deliverables compliance with customer requirements and technical standards.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Coordinated cross-functional project teams to improve execution efficiency, resolve operational challenges, and achieve project objectives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Applied continuous improvement methodologies including PDCA, inspection checklists, and root cause analysis to optimize processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed quality risks, analyzed process issues, and implemented corrective and preventive actions (CAPA) to enhance project performance.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>

                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

Quality Control Manager | Sugas

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

Pars Tabiat Cellulose Company (Subsidiary of Pars Paper Group)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Aug 2020 - Jul 2024 · 4 yrs

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Led Quality Control operations with a team of 45 employees across three shifts, ensuring compliance with ISO 9001 quality standards throughout production processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Designed and implemented Statistical Process Control (SPC) systems, reducing production waste and improving process accuracy through data-driven quality management and CAPA integration.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Built, trained, and managed Quality Control teams while enhancing technical capabilities through structured training programs focused on HACCP principles and risk prevention.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Optimized quality processes by redesigning inspection protocols, reducing inspection time, and improving production line efficiency in alignment with GMP practices.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Developed and implemented new quality standards aligned with industry requirements, ensuring compliance across all production shifts through periodic evaluations.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Implemented FMEA-based risk management systems to identify potential failure modes, prioritize risks, and establish preventive actions for critical production processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Presented periodic quality performance reports to senior management and the board of directors, providing improvement strategies based on ISO 9001 and CAPA indicators.

            </span>

                          </div>







                        </div>



                      </div>



                    </div>





                  </div>



                </div>

                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

Technical Responsible Person | Sugas

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

Pars Tabiat Cellulose Company (Subsidiary of Pars Paper Group)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Dec 2020 - Jul 2024 · 3 yrs 8 mos

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Managed technical operations at Pars Tabiat Cellulose Company (Sugas), supervising engineering, technical, and production support activities in compliance with industrial standards and organizational requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Managed and coordinated the process of obtaining and maintaining official licenses, including operating permits, health certificates, Sib-e Salamat certification, and import approvals for raw materials from relevant authorities.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Established effective communication with governmental and regulatory organizations to accelerate licensing procedures, renew approvals, and ensure continuous production operations.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Reviewed and approved technical requirements for raw materials, product specifications, and manufacturing processes in collaboration with Quality Control and Production departments.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Developed, reviewed, and managed technical documentation, operational procedures, and production-related requirements while contributing to corrective actions and continuous improvement initiatives.

            </span>

                          </div>







                        </div>



                      </div>



                    </div>





                  </div>



                </div>


                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

Research & Development Project Provider | Harir Khuzestan

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

Harir Khuzestan Company (Subsidiary of Taseeko - Tapico Holding)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Apr 2023 - Jun 2023 · 3 mos

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 h-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Conducted research and technical feasibility studies for the implementation of a compact white bagasse pulp production line project at Harir Khuzestan Company, including technology assessment, production process evaluation, and technical requirement analysis.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Established technical communication and negotiations with European and East Asian pulp and paper industry equipment designers and manufacturers to evaluate proposed solutions and identify suitable technologies.

            </span>

                          </div>







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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project & Qc Manager | Hamyar Naft</span>
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

                <div dir="rtl" class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>





                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>








                      <!-- Information Area -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>


                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                مدیر واحد کنترل کیفیت | راتا

              </span>


                            </div>






                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-sm text-slate-800">

                شرکت راتا

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مهر ۱۴۰۴ – تاکنون

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                اصفهان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->

                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Description Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>



                        </div>









                        <!-- Achievements -->

                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              ساختارسازی و رهبری واحد کنترل کیفیت با تعریف نقش‌ها، تشکیل تیم تخصصی و ایجاد ساختار سازمانی کارآمد.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              هم‌راستاسازی فرآیندهای کیفی با استاندارد ISO 9001 از طریق بازطراحی دستورالعمل‌ها و اجرای ممیزی داخلی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و استقرار فرم‌های دیجیتال کنترل کیفیت جهت ردیابی لحظه‌ای، گزارش‌دهی و تحلیل داده‌ها.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم CAPA با استفاده از ابزارهای 5Why و Fishbone برای حذف ریشه‌ای مشکلات.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              آموزش و توانمندسازی تیم سه شیفت کنترل کیفیت با تمرکز بر ISO 9001 و استقلال عملیاتی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی مستمر خطوط تولید با اجرای پروتکل‌های نوین کنترل کیفیت و افزایش کیفیت محصول.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              استقرار مدیریت ریسک مبتنی بر FMEA برای شناسایی خرابی‌ها و اقدامات پیشگیرانه.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم تحلیل اندازه‌گیری (MSA) جهت افزایش دقت ابزارها و کاهش خطاهای آزمون.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>


                <div class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">



                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                مدیر کیفیت و پروژه | صنعت اکسپرس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

                    شرکت توسعه صنعت ورنا فناوری برنا

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مرداد ۱۴۰۳ - شهریور ۱۴۰۴ · ۱ سال و ۱ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                تهران، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

            دستاوردهای کلیدی

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و اجرای برنامه مدیریت کیفیت پروژه شامل برنامه‌ریزی کیفیت، تضمین کیفیت و کنترل کیفیت بر اساس استانداردهای PMBOK و الزامات صنعتی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              مدیریت کامل چرخه حیات پروژه از مرحله تعریف تا تحویل نهایی با تمرکز بر دستیابی به اهداف زمانی، هزینه‌ای و کیفی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              ایجاد فرآیندهای بازرسی، تست و پایش کیفیت جهت اطمینان از انطباق خروجی‌های پروژه با الزامات مشتری و استانداردهای فنی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              رهبری و هماهنگی تیم‌های چندرشته‌ای پروژه برای افزایش بهره‌وری اجرا، حل چالش‌های عملیاتی و دستیابی به اهداف پروژه.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی فرآیندها با استفاده از ابزارهای بهبود مستمر شامل PDCA، چک‌لیست‌های بازرسی و تحلیل ریشه‌ای مشکلات.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              مدیریت ریسک‌های کیفی، تحلیل مشکلات فرآیندی و اجرای اقدامات اصلاحی و پیشگیرانه (CAPA) جهت ارتقای عملکرد پروژه.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>

                <div dir="rtl" class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

مدیر واحد کنترل کیفیت | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

مرداد ۱۳۹۹ – تیر ۱۴۰۳ / ۴ سال

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

دستاوردهای کلیدی

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

رهبری و مدیریت عملیات کنترل کیفیت با هدایت واحدی شامل ۴۵ نفر پرسنل در سه شیفت کاری و نظارت بر اجرای استاندارد ISO 9001 در تمامی مراحل تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

طراحی و استقرار سیستم کنترل کیفیت آماری (SPC) با هدف کاهش ضایعات تولید، افزایش دقت فرآیندها و ادغام سیستم CAPA برای اقدامات اصلاحی و پیشگیرانه مبتنی بر داده.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

تشکیل، آموزش و هدایت تیم‌های کنترل کیفیت و ارتقای مهارت‌های فنی کارکنان از طریق برنامه‌های آموزشی منظم با تمرکز بر فرهنگ HACCP و پیشگیری از ریسک‌های بهداشتی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

بازطراحی پروتکل‌های کنترل کیفیت، کاهش زمان بازرسی‌ها و افزایش بهره‌وری خطوط تولید با انطباق فرآیندها با الزامات GMP.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

تدوین و اجرای استانداردهای کیفی جدید هماهنگ با الزامات صنعتی و نظارت بر انطباق فرآیندها در تمامی شیفت‌های تولید از طریق ارزیابی‌های دوره‌ای.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

پیاده‌سازی سیستم مدیریت ریسک مبتنی بر FMEA جهت شناسایی حالات بالقوه خرابی، اولویت‌بندی ریسک‌ها و طراحی اقدامات پیشگیرانه در فرآیندهای کلیدی تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

ارائه گزارش‌های دوره‌ای عملکرد کیفی به مدیریت ارشد و هیئت مدیره و پیشنهاد راهکارهای بهبود مبتنی بر شاخص‌های ISO 9001 و CAPA برای تصمیم‌گیری‌های استراتژیک.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>


                <div dir="rtl" class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

مسئول فنی | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

شرکت پارس طبیعت سلولز (سوگاس) زیرمجموعه گروه کاغذ پارس

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

وظایف و دستاوردها

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مدیریت امور فنی و تکنیکال شرکت پارس طبیعت سلولز (سوگاس) و نظارت بر انطباق فرآیندهای تولید با الزامات فنی، استانداردهای صنعتی و دستورالعمل‌های سازمانی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مدیریت و پیگیری دریافت مجوزها و گواهینامه‌های قانونی شامل پروانه بهره‌برداری، پروانه بهداشت، گواهی سیب سلامت و مجوزهای مرتبط با واردات مواد اولیه از مراجع ذی‌صلاح.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

برقراری ارتباط و هماهنگی با سازمان‌های نظارتی و اجرایی جهت تسریع فرآیندهای قانونی، تمدید مجوزها و اطمینان از استمرار فعالیت تولیدی مطابق الزامات کشور.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

بررسی و تأیید الزامات فنی مواد اولیه، مشخصات محصولات و فرآیندهای تولیدی با همکاری واحدهای کنترل کیفیت و تولید به‌منظور تضمین انطباق و بهبود عملکرد عملیاتی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

تدوین، بازنگری و مدیریت مستندات فنی، دستورالعمل‌های اجرایی و الزامات مرتبط با فرآیندهای تولید، همچنین مشارکت در اقدامات اصلاحی و بهبود مستمر سیستم‌های فنی کارخانه.

            </span>

                          </div>







                        </div>



                      </div>



                    </div>





                  </div>



                </div>




                <div dir="rtl" class="relative w-[800px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

ارائه دهنده طرح تحقیقاتی و توسعه خط خمیرسازی | حریر خوزستان

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

شرکت حریر خوزستان (زیر مجموعه هلدینگ تاسیکو - تاپیکو)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

فروردین ۱۴۰۲ – خرداد ۱۴۰۲ / ۳ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

وظایف و دستاوردها

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

انجام مطالعات تحقیقاتی و امکان‌ سنجی فنی اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان، شامل بررسی فناوری‌ های موجود، فرآیند تولید و ارزیابی الزامات فنی پروژه.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مذاکره و برقراری ارتباطات فنی با شرکت‌ های طراح و سازنده تجهیزات و تأسیسات صنایع سلولزی اروپایی و شرق آسیایی، به‌ منظور بررسی راهکار های اجرایی و ارزیابی فناوری‌ های پیشنهادی.

            </span>

                          </div>







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
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه و کنترل کیفیت |  همیار نفت</span>
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

                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                Quality Control Manager | Rata

              </span>


                            </div>






                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-800">

                Rata Holding

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Oct 2025 - Present

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Isfahan, Isfahan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

            Key Achievements

          </span>


                        </div>







                        <!-- Achievements -->

                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-[11px] text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Built and led the Quality Control department by defining roles, forming a professional team, and developing an efficient organizational structure.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Aligned quality processes with ISO 9001 standards through SOP redesign, internal audits, and operational improvements.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Designed and implemented digital quality forms for real-time tracking, reporting, and data-driven analysis.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Established advanced CAPA systems using 5Why and Fishbone analysis for root cause elimination.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Trained three-shift QC teams through ISO 9001 and CAPA programs to improve operational independence.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Optimized production quality through modern inspection protocols and continuous improvement initiatives.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Implemented FMEA-based risk management to identify failure modes and preventive actions.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Improved measurement system reliability through MSA implementation and testing accuracy control.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>


                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">



                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                Quality & Project Manager | Sanat Express

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

                Borna Varna Sanat Technology Development Company

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Jul 2024 - Sep 2025 · 1 yr 1 mo

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Tehran, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

            Key Achievements

          </span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Led project quality management by designing and implementing Quality Planning, Quality Assurance, and Quality Control processes based on PMBOK standards and industry requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed the complete project lifecycle from initiation to final delivery, ensuring achievement of time, cost, and quality objectives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Established inspection, testing, and quality monitoring processes to ensure deliverables compliance with customer requirements and technical standards.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Coordinated cross-functional project teams to improve execution efficiency, resolve operational challenges, and achieve project objectives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Applied continuous improvement methodologies including PDCA, inspection checklists, and root cause analysis to optimize processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed quality risks, analyzed process issues, and implemented corrective and preventive actions (CAPA) to enhance project performance.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>



                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">



                        <div class="flex items-start justify-between">






                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

      Research & Development Project Proposal Provider | Harir Khuzestan

    </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

      Harir Khuzestan Company (Subsidiary of TAPPICO Holding - TOSICO)

    </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

      Apr 2023 - Jun 2023 · 3 mos

    </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

      Shoush, Khuzestan Province, Iran

    </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

  Key Achievements

</span>



                        </div>









                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

    Conducted research studies and technical feasibility assessments for the implementation of the Compact White Bagasse Pulping Line Project at Harir Khuzestan Company, including evaluation of available technologies, production processes, and technical project requirements.

  </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

    Established technical communications and negotiations with European and East Asian pulp industry equipment designers and manufacturers to evaluate implementation approaches and assess proposed technologies.

  </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>


                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">






                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

Technical Responsible Person | Sugas

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

Pars Tabiat Cellulose Company (Subsidiary of Pars Paper Group)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Dec 2020 - Jul 2024 · 3 yrs 8 mos

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

Key Achievements

          </span>


                        </div>








                        <!-- Content -->

                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Managed technical operations at Pars Tabiat Cellulose Company (Sugas), overseeing technical activities and ensuring compliance with industrial standards, regulatory requirements, and organizational procedures.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Managed and coordinated the process of obtaining official licenses and regulatory approvals, including operating permits, health certificates, Sib-e Salamat certification, and import permissions for raw materials from relevant authorities.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Established communication and coordination with governmental and regulatory organizations to accelerate legal procedures, renew licenses, and ensure continuous production operations in compliance with national requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Reviewed and approved technical requirements for raw materials, product specifications, and manufacturing processes in collaboration with Quality Control and Production departments to ensure compliance and improve operational performance.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

Developed, reviewed, and managed technical documentation, operational procedures, and production-related requirements while contributing to corrective actions and continuous improvement initiatives within the technical system.

            </span>

                          </div>







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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project & Qc Manager | Hamyar Naft</span>
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

                <div dir="rtl" class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">






                    <!-- Header -->

                    <div class="flex items-center gap-x-3">






                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">






                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                مدیر واحد کنترل کیفیت | راتا

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

                شرکت راتا

              </span>


                            </div>




                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مهر ۱۴۰۴ – تاکنون

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                اصفهان، استان اصفهان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>


                        </div>







                        <!-- Achievements -->

                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-[11px] text-slate-800 leading-relaxed text-justify">






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              ساختارسازی و رهبری واحد کنترل کیفیت با تعریف نقش‌ها، تشکیل تیم تخصصی و ایجاد ساختار سازمانی کارآمد.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              هم‌راستاسازی فرآیندهای کیفی با استاندارد ISO 9001 از طریق بازطراحی دستورالعمل‌ها و اجرای ممیزی داخلی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و استقرار فرم‌های دیجیتال کیفیت برای ردیابی لحظه‌ای، گزارش‌دهی و تحلیل داده‌های کیفی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم CAPA پیشرفته با استفاده از ابزارهای 5Why و Fishbone برای حذف ریشه‌ای مشکلات.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              آموزش و توانمندسازی تیم سه شیفت کنترل کیفیت با تمرکز بر ISO 9001 و CAPA.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی خطوط تولید با اجرای پروتکل‌های نوین کنترل کیفیت و برنامه‌های بهبود مستمر.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم مدیریت ریسک مبتنی بر FMEA برای شناسایی خرابی‌ها و اقدامات پیشگیرانه.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              استقرار سیستم تحلیل اندازه‌گیری (MSA) جهت افزایش دقت ابزارها و کاهش خطاهای آزمون.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>



                </div>

                <div dir="rtl" class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>





                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">



                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>






                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>


                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                مدیر کیفیت و پروژه | صنعت اکسپرس

              </span>


                            </div>






                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-sm text-slate-800">

                شرکت توسعه صنعت ورنا فناوری برنا

              </span>


                            </div>



                          </div>








                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مرداد ۱۴۰۳ – شهریور ۱۴۰۴ / ۱ سال و ۱ ماه

              </span>


                            </div>






                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                تهران، استان تهران، ایران

              </span>


                            </div>



                          </div>



                        </div>


                      </div>



                    </div>








                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>


                        </div>







                        <!-- Achievements -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-[11px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              برنامه‌ریزی و مدیریت چرخه کامل پروژه از تعریف تا تحویل نهایی با تمرکز بر دستیابی به اهداف زمانی و بودجه‌ای.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              رهبری و هماهنگی تیم‌های چندرشته‌ای پروژه برای اجرای کارآمد فعالیت‌ها و مدیریت تعارضات.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و اجرای برنامه مدیریت کیفیت پروژه شامل برنامه‌ریزی، تضمین و کنترل کیفیت بر اساس استاندارد PMBOK و الزامات صنعتی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              نظارت مستمر بر فرآیندهای کنترل کیفیت، بازرسی‌ها، تست‌ها و انطباق خروجی‌ها با استانداردهای کیفی و الزامات مشتری.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی فرآیندها و اجرای برنامه‌های بهبود مستمر با استفاده از ابزارهای کیفیت مانند PDCA، چک‌لیست‌های بازرسی و تحلیل ریشه‌ای مشکلات.

            </span>

                          </div>





                        </div>



                      </div>



                    </div>





                  </div>


                </div>

                <div dir="rtl" class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Position + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

                مدیر واحد کنترل کیفیت | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

                شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مرداد ۱۳۹۹ – تیر ۱۴۰۳ / ۴ سال

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>


                        </div>








                        <!-- Content -->

                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              رهبری و مدیریت واحد کنترل کیفیت شامل ۴۵ نفر پرسنل در سه شیفت کاری، با نظارت بر اجرای استاندارد ISO 9001 در تمامی مراحل تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و استقرار سیستم کنترل کیفیت آماری (SPC) جهت کاهش ضایعات تولید و افزایش دقت فرآیندها با استفاده از تحلیل داده‌های کیفی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم CAPA برای اقدامات اصلاحی و پیشگیرانه بر اساس نتایج تحلیل آماری و شاخص‌های عملکرد کیفیت.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              تشکیل، آموزش و هدایت تیم‌های کنترل کیفیت و ارتقای مهارت‌های فنی پرسنل از طریق برنامه‌های آموزشی منظم با تمرکز بر HACCP.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بازطراحی پروتکل‌های کنترل کیفیت، کاهش زمان بازرسی‌ها و افزایش بهره‌وری خطوط تولید با رویکرد GMP.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              تدوین و اجرای استانداردهای کیفی جدید و نظارت بر انطباق فرآیندها در تمامی شیفت‌های تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی مدیریت ریسک مبتنی بر FMEA جهت شناسایی خرابی‌های بالقوه و طراحی اقدامات پیشگیرانه در فرآیندهای کلیدی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              ارائه گزارش‌های تحلیلی عملکرد کیفیت به مدیریت ارشد و پیشنهاد راهکارهای بهبود مستمر بر اساس ISO 9001 و شاخص‌های CAPA.

            </span>

                          </div>





                        </div>



                      </div>


                    </div>






                  </div>


                </div>


                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>








                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

مسئول فنی | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

شرکت پارس طبیعت سلولز (زیرمجموعه گروه کاغذ پارس)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

آذر ۱۳۹۹ - تیر ۱۴۰۳ / ۳ سال و ۸ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

وظایف و دستاوردها

          </span>


                        </div>








                        <!-- Content -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مدیریت امور فنی و تکنیکال شرکت پارس طبیعت سلولز (سوگاس) و نظارت بر انطباق فرآیندهای تولید با الزامات فنی، استانداردهای صنعتی و دستورالعمل‌های سازمانی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مدیریت و پیگیری دریافت مجوزها و گواهینامه‌های قانونی شامل پروانه بهره‌برداری، پروانه بهداشت، گواهی سیب سلامت و مجوزهای مرتبط با واردات مواد اولیه از مراجع ذی‌صلاح.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

برقراری ارتباط و هماهنگی با سازمان‌های نظارتی و اجرایی جهت تسریع فرآیندهای قانونی، تمدید مجوزها و اطمینان از استمرار فعالیت تولیدی مطابق الزامات کشور.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

بررسی و تأیید الزامات فنی مواد اولیه، مشخصات محصولات و فرآیندهای تولیدی با همکاری واحدهای کنترل کیفیت و تولید به‌منظور تضمین انطباق و بهبود عملکرد عملیاتی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

تدوین، بازنگری و مدیریت مستندات فنی، دستورالعمل‌های اجرایی و الزامات مرتبط با فرآیندهای تولید و مشارکت در اقدامات اصلاحی و بهبود مستمر سیستم‌های فنی کارخانه.

            </span>

                          </div>







                        </div>



                      </div>


                    </div>






                  </div>


                </div>



                <div class="relative w-[700px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>








                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-base text-gray-950 text-shadow-sm">

ارائه دهنده طرح های توسعه و تحقیقاتی | خط تولید خمیرسازی باگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-sm text-slate-800">

شرکت حریر خوزستان (زیر مجموعه هلدینگ تاسیکو - تاپیکو)

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

فروردین ۱۴۰۲ - خرداد ۱۴۰۲ / ۳ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

شوش، استان خوزستان، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 h-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">

وظایف و دستاوردها

          </span>


                        </div>








                        <!-- Content -->


                        <div class="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

انجام مطالعات تحقیقاتی و امکان سنجی فنی اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان، شامل بررسی فناوری های موجود، فرآیند تولید و ارزیابی الزامات فنی پروژه.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

مذاکره و برقراری ارتباطات فنی با شرکت های طراح و سازنده تجهیزات و تأسیسات صنایع سلولزی اروپایی و شرق آسیایی، به منظور بررسی راهکار های اجرایی و ارزیابی فناوری های پیشنهادی.

            </span>

                          </div>







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
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه و کنترل کیفیت |  همیار نفت</span>
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

                <div class="relative w-[550px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>




                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">



                    <!-- Header -->

                    <div class="flex items-center gap-x-3">


                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>





                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">



                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2">


                            <!-- Job Title -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>
                              </div>


                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">
                Quality Control Manager | Rata
              </span>

                            </div>





                            <!-- Company -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>
                              </div>


                              <span class="font-IrRegular text-xs text-slate-800">
                Rata Holding
              </span>

                            </div>


                          </div>







                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">



                            <!-- Date -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>
                              </div>


                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">
                Oct 2025 - Present
              </span>

                            </div>






                            <!-- Location -->

                            <div class="flex items-center gap-x-1">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>
                              </div>


                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">
                Isfahan, Isfahan Province, Iran
              </span>

                            </div>


                          </div>


                        </div>


                      </div>


                    </div>







                    <!-- Achievements -->

                    <div class="mt-3 border-t border-white/50 pt-3">


                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">



                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">
                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>
                          </div>


                          <span class="font-IrBold text-sm text-gray-950 tracking-wide">
            Key Achievements
          </span>


                        </div>






                        <!-- Content -->

                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed">



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Built and led the Quality Control department by defining roles, forming a professional team, and developing an efficient organizational structure.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Aligned quality processes with ISO 9001 standards through SOP redesign, internal audits, and operational improvements.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Designed and implemented digital quality forms for real-time tracking, reporting, and data-driven analysis.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Established advanced CAPA systems using 5Why and Fishbone analysis for root cause elimination.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Trained three-shift QC teams through ISO 9001 and CAPA programs to improve operational independence.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Optimized production quality through modern inspection protocols and continuous improvement initiatives.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Implemented FMEA-based risk management to identify failure modes and preventive actions.
            </span>
                          </div>



                          <div class="flex gap-x-2">
                            <span class="text-teal-600 font-bold">●</span>
                            <span class="font-IrRegular">
              Improved measurement system reliability through MSA implementation and testing accuracy control.
            </span>
                          </div>



                        </div>


                      </div>


                    </div>



                  </div>


                </div>


                <div class="relative w-[550px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Position + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                Quality & Project Manager | Sanat Express

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-800">

                Varna Sanat Technology Development Company

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Jul 2024 – Sep 2025

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                Tehran, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            Key Achievements

          </span>


                        </div>







                        <!-- Content -->


                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed the complete project lifecycle from planning to final delivery with focus on schedule, budget, and quality objectives.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Led cross-functional project teams and coordinated activities to ensure effective execution and project alignment.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Designed and implemented project Quality Management Plans including Quality Planning, Assurance, and Control based on PMBOK standards and industry requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Supervised quality control processes, inspections, testing activities, and compliance of deliverables with customer requirements.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Optimized processes and implemented continuous improvement initiatives using PDCA, inspection checklists, and root cause analysis tools.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              Managed project risks, prepared management reports, and improved coordination between technical, operational, and quality teams.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>

                <div class="relative w-[550px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1 min-w-0">


                        <div class="flex items-start justify-between gap-x-3">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2 min-w-0 flex-1">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

Quality Control Manager | Sugas

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-800 leading-tight">

Pars Tabiat Cellulose Company - Subsidiary of Pars Paper Group

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 w-[155px] flex-shrink-0">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-700 whitespace-nowrap">

Aug 2020 – Jul 2024 · 4 yrs

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-700 leading-tight">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>




                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Key Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

Key Achievements

          </span>


                        </div>







                        <!-- Content -->


                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Managed Quality Control operations with 45 personnel across three shifts, ensuring ISO 9001 compliance throughout production processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Designed and implemented Statistical Process Control (SPC) systems integrated with CAPA to reduce production waste and improve process accuracy.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Built, trained, and supervised Quality Control teams while developing technical skills and promoting HACCP-based risk prevention culture.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Optimized quality inspection processes, reduced inspection time, and improved production efficiency through GMP-aligned practices.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Developed and implemented new quality standards aligned with industry requirements and monitored compliance across all shifts.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Implemented FMEA-based risk management to identify potential failures and establish preventive actions in critical production processes.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Prepared quality performance reports for senior management, supporting strategic decisions through ISO 9001 and CAPA indicators.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>


                <div class="relative w-[550px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">
                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />
                  </div>


                  <div class="relative p-2.5 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">


                    <div class="flex items-center gap-x-3">


                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>



                      <div class="flex-1 min-w-0">


                        <div class="flex items-start justify-between gap-x-2">


                          <div class="flex flex-col gap-y-1.5 min-w-0 flex-1">


                            <div class="flex items-center gap-x-1 min-w-0">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>


                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm truncate">

Technical Responsible Person | Sugas

              </span>

                            </div>




                            <div class="flex items-center gap-x-1 min-w-0">

                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-[10px] text-slate-800 leading-tight">

Pars Tabiat Cellulose Company - Subsidiary of Pars Paper Group

              </span>

                            </div>


                          </div>





                          <div class="flex flex-col gap-y-1.5 w-[120px] flex-shrink-0">


                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-[9px] text-slate-700 leading-tight">

Dec 2020 – Jul 2024
<br>
3 yrs 8 mos

              </span>


                            </div>





                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>


                              <span class="font-IrRegular text-[10px] text-slate-700 leading-tight">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>


                          </div>


                        </div>


                      </div>


                    </div>





                    <div class="mt-2.5 border-t border-white/50 pt-2.5">


                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">


                        <div class="flex items-center gap-x-2 mb-1.5">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>


                          <span class="font-IrBold text-xs text-gray-950">

Key Achievements

          </span>


                        </div>





                        <div class="flex flex-col gap-y-1 text-[10px] text-slate-800 leading-relaxed text-justify">


                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Managed technical operations and supervised engineering, laboratory, and production support activities to ensure compliance with technical standards.

            </span>

                          </div>



                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Managed obtaining regulatory licenses including operating permit, health permit, Sib Salamat certificate, and raw material import approvals.

            </span>

                          </div>



                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Coordinated with regulatory authorities for licensing processes, renewals, and maintaining continuous production compliance.

            </span>

                          </div>



                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Reviewed technical requirements of raw materials, products, and manufacturing processes with Quality Control and Production teams.

            </span>

                          </div>



                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

Developed technical documents, procedures, and compliance requirements while supporting corrective actions and continuous improvement.

            </span>

                          </div>


                        </div>


                      </div>


                    </div>


                  </div>


                </div>




                <div class="relative w-[550px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>





                  <div class="relative p-2.5 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <div class="flex items-center gap-x-3">





                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>







                      <div class="flex-1 min-w-0">



                        <div class="flex items-start justify-between gap-x-2">





                          <div class="flex flex-col gap-y-1.5 min-w-0 flex-1">





                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm truncate">

Research & Development Project Provider | Compact White Bagasse Pulping Line

              </span>


                            </div>







                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-800 leading-tight">

Harir Khuzestan Company (Subsidiary of TASICO - TAPICO Holding)

              </span>


                            </div>



                          </div>









                          <div class="flex flex-col gap-y-1.5 w-[120px] flex-shrink-0">





                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 h-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[9px] text-slate-700 leading-tight">

Apr 2023 – Jun 2023
<br>
3 mos

              </span>


                            </div>







                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 h-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-700 leading-tight">

Shoush, Khuzestan Province, Iran

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <div class="mt-2.5 border-t border-white/50 pt-2.5">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                        <div class="flex items-center gap-x-2 mb-1.5">



                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>





                          <span class="font-IrBold text-xs text-gray-950">

Key Achievements

          </span>


                        </div>








                        <div class="flex flex-col gap-y-1 text-[10px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-1.5">


                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>



                            <span class="font-IrRegular">

Conducted technical feasibility studies for implementing the Compact White Bagasse Pulping Line project at Harir Khuzestan Company, including evaluation of available technologies, production processes, and technical project requirements.

            </span>


                          </div>








                          <div class="flex gap-x-1.5">


                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>



                            <span class="font-IrRegular">

Established technical communication and negotiations with European and East Asian pulp industry equipment designers and manufacturers to evaluate implementation solutions and assess proposed technologies.

            </span>


                          </div>





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
                          <span class="font-IrBold text-base text-gray-900 mt-0.5 text-shadow-sm">Project & Qc Manager | Hamyar Naft</span>
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

                <div dir="rtl" class="relative w-[550px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/rata.jpg"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">






                          <!-- Position + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                مدیر واحد کنترل کیفیت | راتا

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-800">

                شرکت راتا

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مهر ۱۴۰۴ – تاکنون

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                اصفهان، استان اصفهان، ایران

              </span>


                            </div>



                          </div>






                        </div>


                      </div>



                    </div>









                    <!-- Achievements -->

                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">






                        <!-- Title -->

                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>


                        </div>







                        <!-- Content -->

                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed text-justify">






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              ساختارسازی و رهبری واحد کنترل کیفیت با تعریف نقش‌ها، تشکیل تیم تخصصی و ایجاد ساختار سازمانی کارآمد.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              هم‌راستاسازی فرآیندهای کیفی با استاندارد ISO 9001 از طریق بازطراحی دستورالعمل‌ها و اجرای ممیزی داخلی.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و استقرار فرم‌های دیجیتال کیفیت برای ردیابی لحظه‌ای، گزارش‌دهی و تحلیل داده‌ها.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی سیستم CAPA پیشرفته با استفاده از ابزارهای 5Why و Fishbone برای حذف ریشه‌ای مشکلات.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              آموزش و توانمندسازی تیم سه شیفت کنترل کیفیت با تمرکز بر ISO 9001 و CAPA.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی خطوط تولید با اجرای پروتکل‌های نوین کنترل کیفیت و بهبود مستمر فرآیندها.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              پیاده‌سازی مدیریت ریسک مبتنی بر FMEA برای شناسایی خرابی‌ها و اقدامات پیشگیرانه.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              استقرار سیستم تحلیل اندازه‌گیری (MSA) جهت افزایش دقت ابزارها و کاهش خطاهای آزمون.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>


                <div dir="rtl" class="relative w-[550px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>






                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/sanat.png"
                             alt="">

                      </div>







                      <!-- Information -->

                      <div class="flex-1">


                        <div class="flex items-start justify-between">





                          <!-- Position + Company -->

                          <div class="flex flex-col gap-y-2">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm">

                مدیر کیفیت و پروژه | صنعت اکسپرس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-800">

                شرکت توسعه صنعت ورنا فناوری برنا

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 items-start">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                مرداد ۱۴۰۳ – شهریور ۱۴۰۴

              </span>


                            </div>







                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-xs text-slate-700 text-shadow-sm">

                تهران، استان تهران، ایران

              </span>


                            </div>



                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Achievements -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

            دستاوردهای کلیدی

          </span>


                        </div>







                        <!-- Content -->


                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              مدیریت چرخه کامل پروژه از برنامه‌ریزی تا تحویل نهایی با تمرکز بر اهداف زمانی، بودجه‌ای و الزامات کیفی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              رهبری تیم‌های چندرشته‌ای پروژه و هماهنگی فعالیت‌ها برای اجرای اثربخش و دستیابی به اهداف پروژه.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              طراحی و اجرای برنامه مدیریت کیفیت پروژه شامل برنامه‌ریزی، تضمین و کنترل کیفیت بر اساس استانداردهای PMBOK و الزامات صنعتی.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              نظارت بر فرآیندهای کنترل کیفیت، بازرسی‌ها، تست‌ها و انطباق خروجی‌ها با استانداردهای کیفی و نیازمندی‌های مشتری.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              بهینه‌سازی فرآیندها و اجرای برنامه‌های بهبود مستمر با استفاده از ابزارهای کیفیت مانند PDCA، چک‌لیست‌های بازرسی و تحلیل ریشه‌ای مشکلات.

            </span>

                          </div>






                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold">●</span>

                            <span class="font-IrRegular">

              مدیریت ریسک پروژه، مستندسازی فعالیت‌ها و تهیه گزارش‌های مدیریتی برای افزایش شفافیت و بهره‌وری.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>

                <div dir="rtl" class="relative w-[550px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg2.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-3 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1 min-w-0">


                        <div class="flex items-start justify-between gap-x-3">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-2 min-w-0">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm truncate">

مدیر واحد کنترل کیفیت | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-800 truncate">

شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-2 w-[160px] flex-shrink-0">





                            <!-- Date -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-700 text-shadow-sm whitespace-nowrap">

مرداد ۱۳۹۹ – تیر ۱۴۰۳ / ۴ سال

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-center gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[11px] text-slate-700 truncate">

شوش، استان خوزستان، ایران

              </span>


                            </div>




                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-3 border-t border-white/50 pt-3">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2.5 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-2">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-sm text-gray-950">

شرح مسئولیت‌ها و دستاوردها

          </span>


                        </div>







                        <!-- Content -->


                        <div class="flex flex-col gap-y-1.5 text-[11px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

رهبری و مدیریت عملیات کنترل کیفیت در شرکت پارس طبیعت سلولز (سوگاس) با مسئولیت مستقیم بر ۴۵ نفر پرسنل در سه شیفت کاری و نظارت بر اجرای استاندارد ISO 9001 در فرآیندهای تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

طراحی، استقرار و توسعه سیستم کنترل کیفیت آماری (SPC) و اجرای اقدامات اصلاحی و پیشگیرانه (CAPA) با هدف کاهش ضایعات، افزایش دقت فرآیندها و بهبود مستمر عملکرد تولید.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

آموزش، هدایت و توسعه تیم‌های کنترل کیفیت، ایجاد فرهنگ پیشگیری از خطا بر پایه HACCP و مدیریت ریسک فرآیندها با رویکرد FMEA.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

بهینه‌سازی فرآیندهای بازرسی و کنترل کیفیت، تدوین استانداردهای کیفی، کاهش زمان بازرسی و افزایش بهره‌وری خطوط تولید مطابق الزامات GMP.

            </span>

                          </div>







                          <div class="flex gap-x-2">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

تهیه و ارائه گزارش‌های تحلیلی عملکرد کیفیت به مدیریت ارشد بر اساس شاخص‌های ISO 9001، CAPA و نتایج پایش فرآیندهای تولید.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>


                <div dir="rtl" class="relative w-[550px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <!-- Background -->

                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg3.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>







                  <!-- Main Card -->

                  <div class="relative p-2.5 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <!-- Header -->

                    <div class="flex items-center gap-x-3">





                      <!-- Logo -->

                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                             alt="">

                      </div>








                      <!-- Information -->

                      <div class="flex-1 min-w-0">


                        <div class="flex items-start justify-between gap-x-2">





                          <!-- Job + Company -->

                          <div class="flex flex-col gap-y-1.5 min-w-0 flex-1">





                            <!-- Position -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm truncate">

مسئول فنی | سوگاس

              </span>


                            </div>







                            <!-- Company -->

                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-800 leading-tight">

شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

              </span>


                            </div>



                          </div>









                          <!-- Date + Location -->

                          <div class="flex flex-col gap-y-1.5 w-[120px] flex-shrink-0">





                            <!-- Date -->

                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[9px] text-slate-700 leading-tight">

آذر ۱۳۹۹ – تیر ۱۴۰۳
<br>
۳ سال و ۸ ماه

              </span>


                            </div>








                            <!-- Location -->

                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-700 leading-tight">

شوش، استان خوزستان، ایران

              </span>


                            </div>




                          </div>





                        </div>


                      </div>



                    </div>









                    <!-- Description -->


                    <div class="mt-2.5 border-t border-white/50 pt-2.5">



                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                        <!-- Title -->


                        <div class="flex items-center gap-x-2 mb-1.5">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-xs text-gray-950">

وظایف و دستاوردها

          </span>


                        </div>







                        <!-- Content -->


                        <div class="flex flex-col gap-y-1 text-[10px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

مدیریت امور فنی و تکنیکال شرکت پارس طبیعت سلولز (سوگاس) و نظارت بر انطباق فرآیندهای تولید با الزامات فنی، استانداردهای صنعتی و دستورالعمل‌های سازمانی.

            </span>

                          </div>







                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

مدیریت و پیگیری دریافت مجوزها و گواهینامه‌های قانونی شامل پروانه بهره‌برداری، پروانه بهداشت، گواهی سیب سلامت و مجوزهای مرتبط با واردات مواد اولیه.

            </span>

                          </div>







                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

هماهنگی با سازمان‌های نظارتی و اجرایی جهت تمدید مجوزها، تسریع فرآیندهای قانونی و استمرار فعالیت تولیدی مطابق الزامات کشور.

            </span>

                          </div>







                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

بررسی و تأیید الزامات فنی مواد اولیه، محصولات و فرآیندهای تولیدی با همکاری واحدهای کنترل کیفیت و تولید به منظور تضمین انطباق.

            </span>

                          </div>







                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

تدوین، بازنگری و مدیریت مستندات فنی، دستورالعمل‌های اجرایی و الزامات مرتبط با فرآیندهای تولید، همچنین مشارکت در اقدامات اصلاحی و بهبود مستمر سیستم‌های فنی کارخانه.

            </span>

                          </div>





                        </div>


                      </div>


                    </div>






                  </div>


                </div>





                <div dir="rtl" class="relative w-[550px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                  <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                    <img src="/src/assets/image/industry/bg1.jpg"
                         alt=""
                         class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                  </div>





                  <div class="relative p-2.5 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                    <div class="flex items-center gap-x-3">





                      <div class="flex items-center justify-center w-20 h-20 bg-white rounded-md border border-gray-200 shadow-md flex-shrink-0">

                        <img class="w-16 h-14"
                             src="/src/assets/image/factory/harrir.png"
                             alt="">

                      </div>








                      <div class="flex-1 min-w-0">


                        <div class="flex items-start justify-between gap-x-2">





                          <div class="flex flex-col gap-y-1.5 min-w-0 flex-1">





                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#pos"></use>
                                </svg>

                              </div>



                              <span class="font-IrBold text-sm text-gray-950 text-shadow-sm truncate">

ارائه دهنده طرح های توسعه و تحقیقاتی | خط تولید خمیرسازی باگاس

              </span>


                            </div>







                            <div class="flex items-center gap-x-1 min-w-0">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#fac"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-800 leading-tight">

شرکت حریر خوزستان (زیر مجموعه هلدینگ تاسیکو - تاپیکو)

              </span>


                            </div>



                          </div>









                          <div class="flex flex-col gap-y-1.5 w-[120px] flex-shrink-0">





                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-5 w-5 text-teal-700">
                                  <use href="#cal"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[9px] text-slate-700 leading-tight">

فروردین ۱۴۰۲ – خرداد ۱۴۰۲
<br>
۳ ماه

              </span>


                            </div>








                            <div class="flex items-start gap-x-1">


                              <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                                <svg class="h-4 w-4 text-teal-700">
                                  <use href="#loc"></use>
                                </svg>

                              </div>



                              <span class="font-IrRegular text-[10px] text-slate-700 leading-tight">

شوش، استان خوزستان، ایران

              </span>


                            </div>




                          </div>





                        </div>


                      </div>



                    </div>





                    <div class="mt-2.5 border-t border-white/50 pt-2.5">


                      <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                        <div class="flex items-center gap-x-2 mb-1.5">


                          <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                            <svg class="h-4 w-4 text-teal-700">
                              <use href="#paper"></use>
                            </svg>

                          </div>



                          <span class="font-IrBold text-xs text-gray-950">

شرح مسئولیت‌ها و دستاوردها

          </span>


                        </div>







                        <div class="flex flex-col gap-y-1 text-[10px] text-slate-800 leading-relaxed text-justify">





                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

انجام مطالعات تحقیقاتی و امکان سنجی فنی اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان، شامل بررسی فناوری های موجود، فرآیند تولید و ارزیابی الزامات فنی پروژه.

            </span>

                          </div>







                          <div class="flex gap-x-1.5">

                            <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                            <span class="font-IrRegular">

مذاکره و برقراری ارتباطات فنی با شرکت های طراح و سازنده تجهیزات و تأسیسات صنایع سلولزی اروپایی و شرق آسیایی، به منظور بررسی راهکار های اجرایی و ارزیابی فناوری های پیشنهادی.

            </span>

                          </div>





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
                          <span class="font-IrBold text-sm text-gray-900 mt-0.5 text-shadow-sm">مدیر پروژه و کنترل کیفیت |  همیار نفت</span>
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

              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg2.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>







                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/rata.jpg"
                         alt="">

                  </div>







                  <!-- Information -->

                  <div class="flex flex-col gap-y-2">





                    <!-- Position -->

                    <div class="flex items-center gap-x-1">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-950 text-shadow-sm">

          Quality Control Manager | Rata

        </span>


                    </div>







                    <!-- Company -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          Rata Company

        </span>


                    </div>







                    <!-- Location -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800 leading-tight">

          Isfahan, Isfahan Province, Iran

        </span>


                    </div>







                    <!-- Date -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          Oct 2025 - Present

        </span>


                    </div>



                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

            Key Achievements

          </span>


                      </div>







                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Built and led the Quality Control department by defining roles and creating an efficient organizational structure.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Aligned quality processes with ISO 9001 standards through SOP redesign and internal audits.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Implemented digital quality forms for real-time tracking and data analysis.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Established CAPA systems using 5Why and Fishbone root cause analysis.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Trained three-shift QC teams through ISO 9001 and CAPA programs.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Optimized production quality through continuous improvement initiatives.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Implemented FMEA-based risk management for preventive actions.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Improved measurement accuracy through MSA implementation.

            </span>

                        </div>





                      </div>



                    </div>



                  </div>






                </div>



              </div>

              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg1.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>







                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">






                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/sanat.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2">






                    <!-- Position -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>



                      <span class="font-IrBold text-xs text-gray-950 text-shadow-sm">

          Quality & Project Manager | Sanat Express

        </span>


                    </div>








                    <!-- Company -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          Varna Sanat Technology Development Company

        </span>


                    </div>








                    <!-- Location -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800 leading-tight">

          Tehran, Tehran Province, Iran

        </span>


                    </div>








                    <!-- Date -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          Jul 2024 - Sep 2025

        </span>


                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">






                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

            Key Achievements

          </span>


                      </div>








                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed">






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Managed complete project lifecycle from planning to final delivery with focus on quality, schedule, and budget objectives.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Led cross-functional project teams and coordinated activities for effective execution.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Designed and implemented Quality Management Plans based on PMBOK standards and industrial requirements.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Supervised inspections, testing processes, and compliance with customer quality requirements.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              Improved processes through PDCA, inspection checklists, and root cause analysis tools.

            </span>

                        </div>






                      </div>



                    </div>



                  </div>







                </div>



              </div>

              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">

                <!-- Background -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg2.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>





                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

          Quality Control Manager | Sugas

        </span>

                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

          Pars Tabiat Cellulose Company (Sugas) – Subsidiary of Pars Paper Group

        </span>

                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

          Shoush, Khuzestan Province, Iran

        </span>

                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">

          Aug 2020 – Jul 2024 · 4 yrs

        </span>

                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>


                        <span class="font-IrBold text-xs text-gray-950">

            Key Achievements

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Led Quality Control operations at Pars Tabiat Cellulose Company (Sugas) with a team of 45 employees across three shifts, ensuring ISO 9001 compliance throughout production processes.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Designed and implemented Statistical Process Control (SPC) systems integrated with CAPA to reduce production waste and improve process accuracy through data-driven quality management.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Managed, trained, and supervised Quality Control teams while developing technical skills and promoting a continuous improvement culture.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Supervised laboratory operations, quality inspections, and production monitoring activities while maintaining compliance with industrial standards.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Optimized quality processes using GMP, HACCP, and FMEA-based risk management approaches to improve product quality and operational performance.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Developed quality standards, inspection procedures, and corrective and preventive actions (CAPA) to enhance production reliability.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              Prepared analytical quality reports for senior management, supporting decision-making through ISO 9001 indicators and continuous improvement initiatives.

            </span>

                        </div>





                      </div>



                    </div>


                  </div>






                </div>


              </div>


              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow_hidden shadow-md">

                <!-- Background -->
                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg2.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>





                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

Technical Responsible Person | Sugas

        </span>

                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

Pars Tabiat Cellulose Company (Sugas) – Subsidiary of Pars Paper Group

        </span>

                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

Shoush, Khuzestan Province, Iran

        </span>

                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">

                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight">

Dec 2020 – Jul 2024 · 3 yrs 8 mos

        </span>

                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>


                        <span class="font-IrBold text-xs text-gray-950">

Key Achievements

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Managed technical operations and supervised engineering, laboratory, and production support activities to ensure compliance with technical standards and regulatory requirements.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Managed and followed up on obtaining regulatory licenses including operating permit, health permit, Sib Salamat certificate, and raw material import approvals.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Coordinated with regulatory authorities for licensing procedures, renewals, and maintaining continuous production compliance.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Reviewed technical requirements of raw materials, products, and manufacturing processes in cooperation with Quality Control and Production teams.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Developed and managed technical documents, operational procedures, and compliance requirements while supporting corrective actions and continuous improvement initiatives.

            </span>

                        </div>





                      </div>



                    </div>


                  </div>






                </div>


              </div>


              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg1.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>









                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/harrir.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

Development & Research Project Provider | Bagasse Pulp Production Line

        </span>


                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

Harir Khuzestan Company – Subsidiary of TAPICO Holding

        </span>


                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

Shoush, Khuzestan Province, Iran

        </span>


                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>


                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

Apr 2023 – Jun 2023 · 3 mos

        </span>


                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">


                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>


                        <span class="font-IrBold text-xs text-gray-950">

Key Achievements

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Conducted research studies and technical feasibility assessments for implementing Harir Khuzestan’s compact white bagasse pulp production line project.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Evaluated available technologies, production processes, and technical requirements for the proposed pulp manufacturing project.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

Established technical communications and negotiations with European and East Asian cellulose industry equipment designers and manufacturers.

            </span>

                        </div>







                      </div>



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
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">Project & Qc Manager | Hamyar Naft</span>
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

              <div dir="rtl" class="relative w-[280px] max-w-full rounded-tل-xl rounded-br-xl overflow-hidden shadow-md">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg1.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>







                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/rata.jpg"
                         alt="">

                  </div>








                  <!-- Information -->

                  <div class="flex flex-col gap-y-2">





                    <!-- Position -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>



                      <span class="font-IrBold text-xs text-gray-950 text-shadow-sm">

          مدیر واحد کنترل کیفیت | راتا

        </span>


                    </div>







                    <!-- Company -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          شرکت راتا

        </span>


                    </div>







                    <!-- Location -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800 leading-tight">

          اصفهان، استان اصفهان، ایران

        </span>


                    </div>







                    <!-- Date -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          مهر ۱۴۰۴ – تاکنون

        </span>


                    </div>



                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">






                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

            دستاوردهای کلیدی

          </span>


                      </div>








                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed text-justify">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              ساختارسازی و رهبری واحد کنترل کیفیت و ایجاد ساختار سازمانی کارآمد.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              هم‌راستاسازی فرآیندها با استاندارد ISO 9001 و اجرای ممیزی داخلی.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              طراحی فرم‌های دیجیتال کیفیت برای ردیابی و تحلیل داده‌ها.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              پیاده‌سازی سیستم CAPA با ابزارهای 5Why و Fishbone.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              آموزش تیم سه شیفت کنترل کیفیت و ارتقای استقلال عملیاتی.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              بهینه‌سازی فرآیندهای تولید با رویکرد بهبود مستمر.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              مدیریت ریسک مبتنی بر FMEA و اجرای اقدامات پیشگیرانه.

            </span>

                        </div>






                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              استقرار MSA برای افزایش دقت ابزارهای اندازه‌گیری.

            </span>

                        </div>





                      </div>



                    </div>



                  </div>






                </div>



              </div>

              <div dir="rtl" class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg1.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>








                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">







                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/sanat.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2">







                    <!-- Position -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>



                      <span class="font-IrBold text-xs text-gray-950 text-shadow-sm">

          مدیر پروژه و کنترل کیفیت | صنعت اکسپرس

        </span>


                    </div>








                    <!-- Company -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          شرکت توسعه صنعت ورنا فناوری برنا

        </span>


                    </div>








                    <!-- Location -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800 leading-tight">

          تهران، استان تهران، ایران

        </span>


                    </div>








                    <!-- Date -->

                    <div class="flex items-center gap-x-1">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-slate-800">

          مرداد ۱۴۰۳ – شهریور ۱۴۰۴

        </span>


                    </div>






                  </div>









                  <!-- دستاوردهای کلیدی -->

                  <div class="border-t border-white/50 pt-2">



                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">







                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

            دستاوردهای کلیدی

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed text-justify">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              مدیریت چرخه کامل پروژه از برنامه‌ریزی تا تحویل نهایی با تمرکز بر زمان، هزینه و کیفیت.

            </span>

                        </div>








                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              رهبری تیم‌های چندرشته‌ای پروژه و هماهنگی فعالیت‌ها برای اجرای اثربخش.

            </span>

                        </div>








                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              طراحی و اجرای برنامه مدیریت کیفیت پروژه بر اساس استانداردهای PMBOK و الزامات صنعتی.

            </span>

                        </div>








                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              نظارت بر کنترل کیفیت، بازرسی‌ها، تست‌ها و انطباق خروجی‌ها با نیازمندی مشتری.

            </span>

                        </div>








                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold">●</span>

                          <span class="font-IrRegular">

              بهینه‌سازی فرآیندها و اجرای بهبود مستمر با ابزارهای PDCA و تحلیل ریشه‌ای مشکلات.

            </span>

                        </div>





                      </div>



                    </div>



                  </div>







                </div>



              </div>

              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg2.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>









                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

          مدیر واحد کنترل کیفیت | سوگاس

        </span>


                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

          شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

        </span>


                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

          شوش، استان خوزستان، ایران

        </span>


                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 h-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm">

          مرداد ۱۳۹۹ – تیر ۱۴۰۳ / ۴ سال

        </span>


                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">


                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

            دستاوردهای کلیدی

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed text-right">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              رهبری عملیات کنترل کیفیت شرکت پارس طبیعت سلولز (سوگاس) با مدیریت ۴۵ نفر پرسنل در سه شیفت کاری و تضمین انطباق فرآیندهای تولید با الزامات استاندارد ISO 9001.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              طراحی و پیاده‌سازی سیستم کنترل فرآیند آماری (SPC) همراه با اجرای اقدامات اصلاحی و پیشگیرانه (CAPA) جهت کاهش ضایعات و افزایش دقت فرآیندهای تولید.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              مدیریت، آموزش و توسعه تیم‌های کنترل کیفیت، ارتقای مهارت‌های فنی کارکنان و ایجاد فرهنگ بهبود مستمر در سازمان.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              نظارت بر فرآیندهای آزمایشگاهی، بازرسی‌های کیفی و پایش تولید با حفظ انطباق با استانداردهای صنعتی و الزامات مشتریان.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              بهینه‌سازی فرآیندهای کنترل کیفیت با استفاده از رویکردهای GMP، HACCP و مدیریت ریسک مبتنی بر FMEA جهت ارتقای کیفیت محصول.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              تدوین استانداردهای کیفی، دستورالعمل‌های بازرسی و اجرای اقدامات اصلاحی و پیشگیرانه (CAPA) برای افزایش پایداری فرآیندهای تولید.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

              تهیه گزارش‌های تحلیلی عملکرد کیفیت برای مدیریت ارشد با استفاده از شاخص‌های ISO 9001 و تحلیل داده‌های بهبود مستمر.

            </span>

                        </div>





                      </div>



                    </div>


                  </div>






                </div>


              </div>

              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg2.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>









                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/Sugas-Logo_Sugas-En8080.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

مسئول فنی | سوگاس

        </span>


                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

شرکت پارس طبیعت سلولز (سوگاس) زیر مجموعه گروه کاغذ پارس

        </span>


                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

شوش، استان خوزستان، ایران

        </span>


                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight">

آذر ۱۳۹۹ – تیر ۱۴۰۳ / ۳ سال و ۸ ماه

        </span>


                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">


                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

دستاوردهای کلیدی

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed text-right">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

مدیریت امور فنی و تکنیکال شرکت پارس طبیعت سلولز (سوگاس) و نظارت بر انطباق فرآیندهای تولید با الزامات فنی و استانداردهای صنعتی.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

مدیریت و پیگیری دریافت مجوزهای قانونی شامل پروانه بهره‌برداری، پروانه بهداشت، گواهی سیب سلامت و مجوزهای واردات مواد اولیه.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

هماهنگی با سازمان‌های نظارتی و اجرایی جهت اخذ، تمدید و حفظ مجوزهای مورد نیاز برای استمرار فعالیت تولیدی.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

بررسی الزامات فنی مواد اولیه، محصولات و فرآیندهای تولیدی با همکاری واحدهای کنترل کیفیت و تولید جهت تضمین انطباق.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

تدوین و مدیریت مستندات فنی، دستورالعمل‌های اجرایی و مشارکت در اقدامات اصلاحی و بهبود مستمر سیستم‌های فنی.

            </span>

                        </div>





                      </div>



                    </div>


                  </div>






                </div>


              </div>


              <div class="relative w-[280px] max-w-full rounded-tl-xl rounded-br-xl overflow-hidden shadow-md" dir="rtl">


                <!-- Background -->

                <div class="absolute inset-0 z-0 rounded-tl-xl rounded-br-xl">

                  <img src="/src/assets/image/industry/bg1.jpg"
                       alt=""
                       class="w-full h-full object-cover blur-sm opacity-70 rounded-tl-xl rounded-br-xl" />

                </div>









                <!-- Main Card -->

                <div class="relative flex flex-col gap-y-3 p-2 w-full bg-sky-200/10 backdrop-blur-xs rounded-tl-xl rounded-br-xl shadow-md border border-gray-50 z-10">





                  <!-- Logo -->

                  <div class="flex items-center justify-center w-14 h-14 bg-white rounded-md border border-gray-200 shadow-md mx-auto flex-shrink-0">

                    <img class="w-12 h-12"
                         src="/src/assets/image/factory/harrir.png"
                         alt="">

                  </div>









                  <!-- Information -->

                  <div class="flex flex-col gap-y-2 min-w-0">





                    <!-- Position -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 w-5 text-teal-700">
                          <use href="#pos"></use>
                        </svg>

                      </div>


                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm leading-tight break-words">

ارائه دهنده طرح های توسعه و تحقیقاتی | خط تولید خمیرسازی باگاس

        </span>


                    </div>









                    <!-- Company -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#fac"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-[11px] text-gray-900 text-shadow-sm leading-tight break-words">

شرکت حریر خوزستان (زیر مجموعه هلدینگ تاسیکو - تاپیکو)

        </span>


                    </div>









                    <!-- Location -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-4 w-4 text-teal-700">
                          <use href="#loc"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

شوش، استان خوزستان، ایران

        </span>


                    </div>









                    <!-- Date -->

                    <div class="flex items-start gap-x-1 min-w-0">


                      <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                        <svg class="h-5 h-5 text-teal-700">
                          <use href="#cal"></use>
                        </svg>

                      </div>



                      <span class="font-IrRegular text-xs text-gray-900 text-shadow-sm leading-tight break-words">

فروردین ۱۴۰۲ – خرداد ۱۴۰۲ / ۳ ماه

        </span>


                    </div>





                  </div>









                  <!-- Key Achievements -->


                  <div class="border-t border-white/50 pt-2">


                    <div class="bg-white/25 backdrop-blur-sm rounded-lg p-2 shadow-sm">





                      <!-- Title -->

                      <div class="flex items-center gap-x-2 mb-2">


                        <div class="flex items-center justify-center rounded-lg border border-gray-300 w-6 h-6 bg-white flex-shrink-0">

                          <svg class="h-4 w-4 text-teal-700">
                            <use href="#paper"></use>
                          </svg>

                        </div>



                        <span class="font-IrBold text-xs text-gray-950">

وظایف و دستاوردها

          </span>


                      </div>









                      <!-- Content -->

                      <div class="flex flex-col gap-y-1.5 text-[10px] text-slate-800 leading-relaxed text-right">





                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

انجام مطالعات تحقیقاتی و امکان‌سنجی فنی اجرای طرح خط خمیرسازی باگاس سفید کامپکت شرکت حریر خوزستان شامل بررسی فناوری‌ها، فرآیند تولید و الزامات فنی پروژه.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

مذاکره و برقراری ارتباطات فنی با شرکت‌های طراح و سازنده تجهیزات و تأسیسات صنایع سلولزی اروپایی و شرق آسیایی جهت بررسی راهکارهای اجرایی.

            </span>

                        </div>







                        <div class="flex gap-x-1">

                          <span class="text-teal-600 font-bold flex-shrink-0">●</span>

                          <span class="font-IrRegular">

ارزیابی فناوری‌های پیشنهادی و بررسی امکان‌پذیری اجرای پروژه مطابق الزامات فنی و صنعتی.

            </span>

                        </div>





                      </div>



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
                      <span class="font-IrBold text-xs text-gray-900 text-shadow-sm">مدیر پروژه و کنترل کیفیت | همیار نفت</span>
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

(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105841822', 'ym');

ym(105841822, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});

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
