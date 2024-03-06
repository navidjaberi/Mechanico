<template>
  <div class="h-screen w-screen pt-14">
    <div class="w-screen flex items-end justify-center h-1/5 md:mt-20 mt-10">
      <div class="bg-white flex items-center justify-center">
        <v-img
          :width="validImg ? 250 : 370"
          aspect-ratio="16/9"
          cover
          :src="validImg ? loginTrue : loginFalse"
        ></v-img>
      </div>
    </div>
    <v-row class="h-3/5 d-flex mt-5 justify-center">
      <v-col cols="12" sm="6">
        <p class="text-center">شماره تلفن همراه خود را وارد کنید</p>
        <v-form class="mx-auto items-center mt-5" ref="formRef" @submit.prevent="phoneSubmit">
          <v-row no-gutters>
            <v-col class="d-flex flex-col" cols="12">
              <v-text-field
                single-line
                variant="outlined"
                prepend-inner-icon="mdi-cellphone"
                label="تلفن همراه"
                color="#1F195F"
                placeholder="09121111111"
                class="align text-right"
                type="tel"
                :loading="loading"
                v-model="phoneNum"
                :rules="rules.Num"
              ></v-text-field>
              <v-col cols="6" class="d-flex flex-col mx-auto mt-n10">
                <v-img :width="150" aspect-ratio="1/1" cover :src="logo" class="mx-auto"></v-img>
                <v-btn rounded="xl" variant="flat" color="primary" size="large" class="mt-8" type="submit"
                :disabled="!phoneNumValid(phoneNum) || error"  
                >ورود</v-btn
                >
              </v-col>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import loginFalse from "~/assets/img/pics/loginFalse.png";
//@ts-ignore
import logo from "~/assets/img/icon/logoMechanicoFull.png";
//@ts-ignore
import loginTrue from "~/assets/img/pics/loginTrue.png";
import { ref, watch } from "vue";
const router=useRouter()
const phoneNum = ref<string>("");
const formRef = ref<any>(null);
const loading = ref<boolean>(false);
const validImg = ref<boolean>(false);
const error = ref<boolean>(false);
//phone validation
const phoneNumValid = (val: string): boolean => {
  return (
    (val?.length === 11 && /[0-9-]+/.test(val) && /^09\d{9}$/.test(val)) ||
    (/[۰-۹-]+/.test(val) && /^۰۹[۰-۹]{9}$/.test(val))
  );
};
//phone validation rules
const rules = ref({
  Num: [
    (value) => {
      if (phoneNumValid(value)) {
        validImg.value = true;
        return true;
      } else {
        validImg.value = false;
        return "شماره تلفن را به درستی وارد کنید";
      }
    },
  ],
});
    //submit the phone data
    const phoneSubmit = async () => {
      const { valid } = await formRef.value.validate();
      if (valid) {
        router.push("/user/confirm");
      }
      //   try {
      //     const data = await useMyFetch(
      //       `/send-sms?phoneNumber=${phoneNum.value}`,
      //       loading,
      //       error,
      //       "get"
      //     );
      //     if (!error.value) {
      //  
      //       store.PhoneNumber = phoneNum.value;
      //     }
      //   } catch (err) {
      //     error.value = true;
      //     console.error("Error fetching data:", err);
      //   }
      // }
    };

</script>
