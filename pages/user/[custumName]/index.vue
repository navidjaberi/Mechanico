<template>
  <div>
    <BasePageLayout title="مکانیکی علی" @baseRouteBackHandler="preRouteHandler" />
    <v-row no-gutters>
      <v-col>
        <v-tabs
          class="d-flex align-center mt-n2"
          bg-color="primary"
          fixed-tabs
          centered
          stacked
          v-model="tab"
        >
          <v-tab class="tabs pa-9 text-title w-1/2" value="two">اطلاعات </v-tab>
          <v-tab class="tabs pa-9 text-title w-1/2" value="one">نظرات کاربران</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="12" class="d-flex flex-column justify-center text-center py-4 border-b-2">
        <v-avatar :image="account" size="80" class="mx-auto"></v-avatar>
        <p>تعمیرگاه علی</p>
      </v-col>
 
    </v-row>
    <v-row no-gutters>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="two">
            <p>اطلاعات</p>
          </v-window-item>
          <v-window-item value="one" class="mb-10">
            <CommentsBaseCard
              class="mt-5"
              v-for="i in comments"
              :key="i.id"
              :text="i.text"
              :name="i.name"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-row>
    <v-col class="fixed bottom-0 pa-0">
        <v-btn block color="primary" rounded="0"> مسیریابی </v-btn>
      </v-col>
  </div>
</template>
<script setup>
import account from "~/assets/img/pics/account.jpg";
const router = useRouter();
const tab = ref("one");
const preRouteHandler = () => {
  router.push({ path: "/user/home" });
};
const comments = ref([
  {
    id: 1,
    name: "عباس بوعضار",
    text: "خیلی عالی بود",
  },
  {
    id: 2,
    name: "متین محمدی",
    text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.`,
  },
  {
    id: 3,
    name: " احسان فرود",
    text: "افتضاح!!",
  },
]);
</script>

<style></style>
