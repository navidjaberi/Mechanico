<template>
  <div>
    <v-card class="mx-auto" variant="tonal" max-width="400">
      <v-row no-gutters class="py-3">
        <v-col cols="3" class=" flex flex-col items-center">
          <v-avatar
            :image="props.img ? props.img : account"
            size="50"
            class="mx-auto"
          ></v-avatar>
          <p>{{ props.name }}</p>
        </v-col>
        <v-col class="d-flex justify-center flex-col py-3">
          <p >{{ props.text }}</p>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script setup>
import account from "~/assets/img/pics/account.jpg";
const props = defineProps({
  name: String,
  img: String,
  text: String,
});
</script>

<style></style>
