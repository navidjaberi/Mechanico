<template>
  <v-row>
    <v-col cols="12" class="flex justify-between md:justify-around items-center px-7 mt-6 py-0">
      <v-btn variant="text" prepend-icon="mdi-chevron-left">مشاهده همه</v-btn>
      <p class="text-sm font-bold">دسته بندی خدمات</p>
    </v-col>
    <v-col class="p-0">
      <v-item-group>
        <v-row no-gutters>
          <v-col md="7" class="mx-auto">
            <v-slide-group
              v-model="selectedCategory"
              class="px-4"
              center-active
              :show-arrows="false"
            >
              <v-slide-group-item
                v-for="i in category"
                :key="i"
                v-slot="{ isSelected, toggle, selectedClass }"
              >
                <v-card
                  :class="[
                    isSelected ? 'md:w-72 md:h-72 w-36 h-44' : 'md:w-60 md:h-64 w-24 h-36'
                    ,
                    'd-flex align-center mx-2 relative items-center justify-center border border-black	rounded-xl ',
                    selectedClass,
                  ]"
                  class="bg-black"
                  justify-center
                  @click="toggle"
                >
                  <p class="absolute z-10 font-bold text-sm" v-if="isSelected">{{ i.title }}</p>
                  <v-img :src="i.img" cover :height="300" class="opacity-70"> </v-img>
                </v-card>
              </v-slide-group-item>
            </v-slide-group>
          </v-col>
        </v-row>
      </v-item-group>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import carFirst from "~/assets/img/pics/jac.jpeg";
import carSec from "~/assets/img/pics/shahin.jpg";
import carThird from "~/assets/img/pics/samand.jpg";
const selectedCategory = ref(1);
const category = [
  {
    title: "خدمات صافکاری",
    img: carFirst,
    link: "",
  },
  {
    title: "خدمات مکانیکی",
    img: carSec,
    link: "",
  },
  {
    title: "خدمات برقی",
    img: carThird,
    link: "",
  },
  {
    title: "خدمات صافکاری",
    img: carFirst,
    link: "",
  },
  {
    title: "خدمات مکانیکی",
    img: carSec,
    link: "",
  },
  {
    title: "خدمات برقی",
    img: carThird,
    link: "",
  },
];
function updateSelectedCategory() {
  selectedCategory.value += 1;
  // Reset selectedCategory to 0 when it reaches the length of the category array
  if (selectedCategory.value === category.length) {
    selectedCategory.value = 0;
  }
}

onMounted(() => {
  const intervalId = setInterval(updateSelectedCategory, 5000);
});
</script>
