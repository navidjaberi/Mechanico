<template>
  <BaseErrorAlert :errorActive="error" @update:errorActive="updateErrorAlert" />
  <BaseInfoAlert
    :alertActive="resendCodeSuccessful"
    @update:alertActive="updateInfoAlert"
    text="کد مجدد ارسال شد"
  />
  <div class="size-full grid grid-cols-1 place-content-center">
    <v-form>
      <v-col class="text-center mt-5">
        <p class="mb-5 md:text-xl text-sm">کد تایید را وارد کنید</p>

        <OTPParent
          :numInputs="4"
          :value="otp"
          inputType="number"
          inputmode="numeric"
          @on-complete="submit"
          @update:value="changes"
          :shouldAutoFocus="true"
          :isDisabled="codeLoading"
          :inputClasses="[codeError ? 'code-error' : '']"
        />
        <v-col cols="8" class="d-flex pa-0 mx-auto mt-7 justify-center"> </v-col>
        <p class="md:text-xl text-sm text-body-2 mb-4" v-if="codeError">
          کد وارد شده صحیح نیست دوباره تلاش کنید
        </p>
        <p class="md:text-xl text-sm">کد به شماره ۰۹۱۲۲۲۲۲۲ فرستاده شد</p>

        <v-btn
          class="text-primary mt-4"
          size="large"
          :disabled="codeLoading"
          v-if="resendCode"
          @click="resendCodeHandler"
          >ارسال مجدد کد</v-btn
        >
        <p v-else class="mt-4">ارسال مجدد کد در : {{ timer }}</p>
      </v-col>
      <v-col cols="10" md="3" class="d-flex flex-col mx-auto p-0 mt-5">
        <v-img :width="150" aspect-ratio="1/1" cover :src="logo" class="mx-auto"></v-img>
        <v-col class="d-flex align-center justify-end">
          <v-btn class="text" color="primary" variant="text" @click="changeNumber">ویرایش</v-btn>
          <p>شماره اشتباه است؟</p>
        </v-col>
        <v-col class="p-0 mx-auto" cols="6">
        <v-btn
          :disabled="otp.length < 4 || codeLoading"
          block
          :loading="codeLoading"
          type="submit"
          rounded="xl"
          variant="flat"
          color="primary"
          size="large"
  
          >تایید</v-btn
        >
      </v-col>
      </v-col>
    </v-form>
  </div>
</template>
<script setup lang="ts">
import logo from "~/assets/img/icon/logoMechanicoFull.png";
import OTPParent from "~/components/OTP/OTPParent.vue";
const router = useRouter();
const twoYearsInSeconds = 2 * 365 * 24 * 60 * 60;
//set two years expiration for cookie
const cookieExpiration = new Date().getTime() + twoYearsInSeconds * 1000;
const tokenCookie = useCookie("userToken", {
  maxAge: cookieExpiration,
});
//   const idCookie = useCookie("userId", {
//     maxAge: cookieExpiration,
//   });
const config = useRuntimeConfig();
const otp = ref("");
const codeLoading = ref(false);
const codeError = ref(false);
const resendCode = ref(false);
const resendCodeSuccessful = ref(false);
const timer = ref("00" + ":" + "59");
//   const phoneNum = computed(() => {
//     return store.PhoneNumberGet;
//   });
const error = ref(false);
const updateErrorAlert = (newVal) => {
  error.value = newVal;
};
const updateInfoAlert = (newVal) => {
  resendCodeSuccessful.value = newVal;
};
//resend the otp code and set a new timer
const resendCodeHandler = async () => {
  //     try {
  //       const data = await useMyFetch(
  //         `/send-sms?phoneNumber=${phoneNum.value}`,
  //         codeLoading,
  //         error,
  //         "get"
  //       );
  //       if (!error.value) {
  //         resendCodeSuccessful.value = true;
  //         codeError.value = false;
  //         resendCode.value = !resendCode.value;
  //         timer.value = "00" + ":" + "59";
  //         startTimer();
  //         otp.value = "";
  //       }
  //     } catch (err) {
  //       error.value = true;
  //       console.error("Error fetching data:", err);
  //     }
  //   };
  //set auto submit for otp input
  // watch(otp, (newVal) => {
  //   if (newVal.length >= 4) {
  //     confirmCode();
  //   }
  // });
};
//make a request for submit the code and store the user's token and ID
const confirmCode = async () => {
  //   codeLoading.value = true;
  //   if (otp.value.length >= 4) {
  //     let response;
  //     try {
  //       response = await useFetch(config.public.baseURL + "/check-sms", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           phoneNumber: phoneNum.value,
  //           code: otp.value,
  //         }),
  //       });
  //     } catch (e) {
  //       console.log(e);
  //       error.value = true;
  //     }
  //     if (response.status.value === "success") {
  //       codeLoading.value = false;
  //       router.push("/home");
  //       store.accessToken = response.data.value.Token; // store user's token in store
  //       tokenCookie.value = response.data.value.Token; // store user's token in cookie
  //       store.userId = response.data.value.Id; //store user's Id in store
  //       idCookie.value = response.data.value.Id; //store user's Id in cookie
  //     } else if (response.error.value) {
  //       codeLoading.value = false;
  //       if (response.error.value.data) {
  //         codeError.value = true;
  //       } else {
  //         error.value = true;
  //       }
  //     }
  //   }
};
//go one step backward for changing the number
const changeNumber = () => {
  router.push("/user/login");
};
const submit = (e) => {
  otp.value = e;
  confirmCode();
};
const changes = (e) => {
  otp.value = e;
};
//timer configs
function startTimer() {
  let presentTime = timer.value;
  let timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  let s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    resendCode.value = true;
    return;
  }
  timer.value = m + ":" + s;
  setTimeout(startTimer, 1000);
}
//timer's seconds configs
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
onMounted(() => {
  startTimer();
});
</script>
<style>
.code-error {
  border: 1px solid red !important;
}
</style>
