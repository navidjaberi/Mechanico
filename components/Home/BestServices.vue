<template>
  <v-row>
    <v-col cols="12" class="flex justify-between md:justify-around items-center px-7 mt-6 py-0">
      <v-btn variant="text" prepend-icon="mdi-chevron-left">مشاهده همه</v-btn>
      <p class="text-sm font-bold">برترین مجموعه ها</p>
    </v-col>
    <v-col md="7" class="mx-auto">
      <v-slide-group v-model="selectedCategory" class="px-4" :show-arrows="false">
        <v-slide-group-item
          v-for="i in category"
          :key="i"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-card
            :class="[
              'd-flex align-center mx-2 relative items-center justify-center  rounded-xl	w-32 h-24 md:w-44 md:h-36',
              selectedClass,
            ]"
            class="bg-black"
            justify-center
            @click="toggle"
          >
            <v-img :src="i.img" cover :height="300"> </v-img>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>

    <v-col class="px-7 mx-auto" md="7">
      <v-expand-transition>
        <v-sheet class=" size-10/12 mx-auto ">
        <v-img :src="category[selectedCategory].img" cover class="rounded-xl"> </v-img>
    </v-sheet>
      </v-expand-transition>
    </v-col>
  </v-row>
</template>
<script setup>
import firstService from "~/assets/img/pics/dena.png";
import secondService from "~/assets/img/pics/tondar.jpg";
import ThirdService from "~/assets/img/pics/samand2.png";
import forthService from "~/assets/img/pics/iran-khodro.jpg";
const selectedCategory = ref(1);
const category = [
  {
    title: "مجموعه اول",
    img: firstService,
    link: "",
  },
  {
    title: "مجموعه دوم",
    img: secondService,
    link: "",
  },
  {
    title: "مجموعه سوم",
    img: ThirdService,
    link: "",
  },
  {
    title: "مجموعه چهارم",
    img: forthService,
    link: "",
  },
  {
    title: "مجموعه پنجم",
    img: firstService,
    link: "",
  },
  {
    title: "مجموعه ششم",
    img: secondService,
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
  // const intervalId = setInterval(updateSelectedCategory, 5000);
});
</script>
