<template>
  <div class="container h-screen">
    <div
      class="bg-[#1F195F] w-screen flex flex-col relative items-center justify-center h-2/5 min-h-[250px] md:rounded-b-full rounded-b-3xl"
    >
      <div
        class="rounded-full bg-white md:size-60 size-48 flex flex-row items-center justify-center"
      >
        <img :src="logo" class="md:w-[150px] w-[120px]" />
      </div>
      <div class="absolute bottom-0 text-white md:text-2xl text-md w-full">
        <nav class="flex w-3/4 md:w-1/2 mx-auto justify-between">
          <div class="relative p-3 md:px-10 px-5">
            <a>ورود</a>
            <span
              className="absolute left-0 bottom-0.5 w-0 md:h-1 h-0.5 bg-white w-full"
            ></span>
          </div>
          <div class="relative p-3 md:px-10 px-5">
            <a>ثبت نام</a>
            <span
              className="absolute left-0 bottom-0.5 w-0  md:h-1 h-0.5 bg-white w-full"
            ></span>
          </div>
        </nav>
      </div>
    </div>
    <div>
      <v-form>
        
        <v-text-field
          variant="underlined"
          prepend-inner-icon="mdi-cellphone"
          label="تلفن همراه"
          color="teal-accent-4"
          placeholder="09121111111"
          class="align"
          type="tel"
        ></v-text-field>
      </v-form>
    </div>
  </div>
</template>
<script setup>
import logo from "~/assets/img/icon/logoMechanicoFull.png";
</script>
