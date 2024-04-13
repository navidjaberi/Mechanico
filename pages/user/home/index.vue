<template>
  <v-card>
    <v-layout>
      <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
      <v-app-bar elevation prominent>
        <v-col>
          <v-img :src="tools" aspect-ratio="1/1" :width="40" />
        </v-col>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" location="right" temporary elevation>
        <div class="h-full">
          <div class="h-2/6 flex flex-col items-center justify-center bg-primary">
            <div class="size-32 grid place-items-center">
              <v-img
                :src="account"
                aspect-ratio="1/1"
                cover
                :width="100"
                class="rounded-full"
              ></v-img>
            </div>

            <p class="text-lg font-bold">احسان فرود</p>
          </div>

          <v-list class="text-right -mt-3" lines="two">
            <v-list-item
              v-for="item in listItems"
              :key="item"
              class="border cursor-pointer hover:bg-slate-100"
            >
            <NuxtLink :to="item.link">
              <div class="size-full relative flex items-center justify-center">
               
                <div>
                  <p class="text-center text-sm font-semibold">{{ item.title }}</p>
                </div>
                <div class="absolute right-0"><v-icon :icon="item.icon"></v-icon></div>
         
              </div>
            </NuxtLink>
            </v-list-item>
          </v-list>
        </div>
      </v-navigation-drawer>
      <v-main>
        <div class="w-full">
          <div class="border-[#1F195F] border-4 w-1/2 mx-auto mt-4">
            <v-img
              :src="logoTypo"
              aspect-ratio="16/9"
              :width="90"
              :height="60"
              cover
              class="mx-auto"
            ></v-img>
          </div>
        </div>
        <HomeCategorySection />
        <HomeBestServices/>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup lang="ts">
import tools from "~/assets/img/pics/tools.png";
import account from "~/assets/img/pics/account.jpg";
import logoTypo from "~/assets/img/pics/logo-typo.png";
interface listItems {
  title: string;
  icon: string;
  link:string;
}
const drawer = ref<Boolean>(false);
const listItems: listItems[] = [
  { title: "ویرایش پروفایل", icon: "mdi-account" ,link:'/user/dashboard'},
  { title: "تاریخچه مراجعات", icon: "mdi-history",link:'/user/visit-history' },
  { title: "نظرات داده شده", icon: "mdi-message-reply-text",link:'/user/comments' },
  { title: "تماس با پشتیبانی", icon: "mdi-face-agent",link:'' },
];
</script>

<style></style>
