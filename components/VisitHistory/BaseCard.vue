<template>
  <div>
    <v-card class="mx-auto" variant="tonal" max-width="400">
      <v-img class="align-end text-white" cover :src="props.img"> </v-img>
      <v-row no-gutters class="py-3">
        <v-col cols="4" class="d-flex align-center p-0">
          <v-avatar
            :image="props.profileImg ? props.profileImg : account"
            size="80"
            class="mx-auto"
          ></v-avatar>
        </v-col>
        <v-col class="d-flex justify-center flex-col">
          <p >{{ props.title }}</p>
          <p>تاریخ مراجعه:{{ props.visitDate }}</p>
        </v-col>
      </v-row>

      <v-row class="border-t-2 py-3" no-gutters>
        <v-col cols="12 px-3">
          <p>آدرس:{{ props.address }}</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script setup>
import account from "~/assets/img/pics/account.jpg";
const props = defineProps({
  img: String,
  profileImg: String,
  title: String,
  visitDate: String,
  address: String,
});
</script>

<style></style>
