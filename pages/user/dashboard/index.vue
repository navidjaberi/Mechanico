<template>
  <div>
    <BasePageLayout title="اطلاعات کاربر" @baseRouteBackHandler="preRouteHandler" />
    <v-form class="mt-4" fast-fail>
      <v-row no-gutters class="px-3">
        <v-col xxl="5" xl="6" lg="7" md="8" cols="12" class="mx-auto">
          <div class="relative h-[55%] mx-auto">
            <label for="uploadImg" class="flex justify-center">
              <img
                class="w-64 h-64 rounded-full absolute"
                src="../../../assets/img/icon/user-icon.png"
                alt=""
              />

              <div
                class="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500"
              >
                <img
                  class="hidden group-hover:block w-12"
                  src="https://www.svgrepo.com/show/33565/upload.svg"
                  alt=""
                />
                <input type="file" hidden="" id="uploadImg" />
              </div>
            </label>
          </div>

          <div class="mt-10">
            <v-text-field
            
              variant="solo"
              label="نام و نام خانوادگی"
              v-model="info.name"
              color="primary"
              class="align py-2 px-3"
              :rules="rules.text"
            >
              <template v-slot:error>
                <p class="text-primary text-right"></p>
              </template>
            </v-text-field>
            <v-text-field
              variant="solo"
              label="شماره همراه"
              v-model="info.phoneNumber"
              color="primary"
              class="align py-2 px-3"
              :rules="rules.num"
            >
              <template v-slot:error>
                <p class="text-primary"></p>
              </template>
            </v-text-field>

            <v-text-field
              variant="solo"
              label="ایمیل"
              v-model="info.email"
              color="primary"
              class="align py-2 px-3"
            >
              <template v-slot:error>
                <p class="text-primary"></p>
              </template>
            </v-text-field>
            <v-radio-group
              :rules="rules.gender"
              inline
            
              color="primary"
              v-model="info.gender"
              label="جنسیت"
              class="border mx-3 rounded shadow-md d-flex align-items-center flex-column py-2 gender"
            >
              <v-radio label="آقا" value="male"></v-radio>
              <v-radio label="خانم" value="female"></v-radio>
            </v-radio-group>
          </div>
          <div class="mt-10">
            <v-btn block color="primary" type="submit">ذخیره</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script setup>
const router = useRouter();
const preRouteHandler = () => {
  router.push({ path: "/user/home" });
};
const info = ref({
  name: "",
  phoneNumber: "",
  email: "",
  gender: "",
});
const rules = ref({
  text: [
    (value) => {
      if (/[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF]$/.test(value)) return true;
      return "(از کیبورد فارسی استفاده کنید)فیلد اجباری را پر کنید";
    },
  ],
  num: [
    (value) => {
      if (
        (value?.length === 11 && /[0-9-]+/.test(value) && /^09\d{9}$/.test(value)) ||
        (/[۰-۹-]+/.test(value) && /^۰۹[۰-۹]{9}$/.test(value))
      )
        return true;
      return "شماره تلفن را به درستی وارد کنید";
    },
  ],
  gender: [
    (value) => {
      if (value) return true;
      return "یک گزینه را انتخاب کنید";
    },
  ],
});
</script>

<style></style>
