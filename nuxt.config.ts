import type { NuxtPage } from "nuxt/schema";
import vuetify from "vite-plugin-vuetify";
const title = "Mechanico";
const shortTitle = "Mechanico";
const description = "Services App";
const image = "~/assets/img/icon/logoMechanicoFull.png";
const url ="~/assets/img/icon/logoMechanicoFull.png";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],

  typescript: {
     shim: false,
     strict:true,
    tsConfig:{
      compilerOptions:{
        lib:["es6","dom","es2017"]
      }
    }
    
    },
  build: { transpile: ["vuetify"] },

  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://asiasalamat.ir",
    },
  },
  
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
    "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "Mechanico",
      titleTemplate: "Mechanico",
      link: [
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      htmlAttrs: { dir: "rtl", lang: "fa" },
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
      ],
    },
  },
  pwa: {
    icon:
    {
      source: "~/assets/img/icon/logoMechanico.png",
      fileName: "logoMechanico.png",
      sizes:[144, 152, 192],
      purpose: 'maskable',
      splash:{
        backgroundColor:'white'
      }
        
    },
    meta: {
      name: shortTitle,
      author: "Navid jaberi",
      theme_color: "white",
      description: description,
      mobileAppIOS: true,
        
    },
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      theme_color: "white",
      description: description,
      background_color:'white'
    },
  },
});

