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
  </div>
    <v-form class="text-right login text-title" @submit.prevent="phoneSubmit" ref="formRef">
    <v-row class="mt-7 px-3 py-1 d-flex justify-center" no-gutters>
      <v-col xl="7" lg="7" md="8" sm="10" xs="12" cols="12"
        ><p>شماره تلفن همراه خود را وارد کنید</p></v-col
      >
      <v-col class="mt-5" xl="7" lg="7" md="8" sm="10" xs="12" cols="12">
        <v-text-field
          variant="underlined"
          prepend-inner-icon="mdi-cellphone"
          label="تلفن همراه"
          color="teal-accent-4"
          placeholder="09121111111"
          class="align"
          :loading="loading"
          v-model="phoneNum"
          type="tel"
          :rules="rules"
        ></v-text-field>
      </v-col>
      <v-col class="mt-5" xl="7" lg="7" md="8" sm="10" xs="12" cols="12">
        <p style="direction: rtl" class="text">
          با ورود و یا ثبت نام در آسیاسلامت
          <a class="text-teal-accent-4">قوانین و مقررات</a> استفاده از پلتفرم آسیاسلامت و همچنین
          قوانین مربوط به <a class="text-teal-accent-4">حریم خصوصی</a> را می پذیرید.
        </p>
      </v-col>
    </v-row>
    <v-container class="submit-btn">
      <v-row class="d-flex justify-center">
        <v-col xl="7" lg="7" md="8" sm="10" xs="12" cols="12">
          <v-btn
            color="teal-accent-4"
            :disabled="!phoneNumValid(phoneNum) || error"
            block
            :loading="loading"
            type="submit"
            >ورود/ثبت نام</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>
<script setup>
import logo from "~/assets/img/icon/logoMechanicoFull.png";
</script>
