<template>
  <div>
    <BasePageLayout title="تاریخچه مراجعات" @baseRouteBackHandler="preRouteHandler" />
    <v-row noGutters>
      <v-col class="px-4">
        <VisitHistoryBaseCard
        class="mt-5"
          v-for="i in visitingHistory"
          :key="i.id"
          :img="i.image"
          :title="i.title"
          :visitDate="i.visitDate"
          :address="i.address"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import firstLocation from "~/assets/img/pics/location-test1.jpg";
import secondLocation from "~/assets/img/pics/location-test2.jpeg";
import thirdLocation from "~/assets/img/pics/location-test3.jpeg";
const router = useRouter();
const preRouteHandler = () => {
  router.push({ path: "/user/home" });
};
const visitingHistory = ref([
  {
    image: firstLocation,
    title: "تعمیرگاه جواد",
    visitDate: '۱۴۰۲/۱۲/۱۲',
    address: "خیابان دماوند-بعدازچهارراه تهرانپارس",
    id: 1,
  },
  {
    image: secondLocation,
    title: "تعمیرگاه بهراد",
    visitDate: "۱۴۰۳/۰۱/۱۵",
    address: "تهران،شکوفه،خ. شکوفه،خ. صدرا",
    id: 2,
  },
  {
    image: thirdLocation,
    title: "تعمیرگاه ناظری",
    visitDate: "۱۴۰۲/۰۲/۱۲",
    address: "تهران،چیتگر جنوبی،کنار‌گذر لشگری،خ. چهل و ششم",
    id: 3,
  },
]);
</script>

<style></style>
