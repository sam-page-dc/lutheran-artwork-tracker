<template>
    <div class="min-h-screen bg-primary font-mulish text-sm">
      <h1 class="flex justify-center p-2 h-40 sm:h-32 xl:h-32 2xl:h-80 flex flex-wrap content-end p-8 text-lutheran font-black text-xl">{{ client }} Artwork Tracker</h1>
      <div class="login h-72 flex flex-col content-top space-y-12">
        <form class="w-login mx-auto space-y-5 p-8 bg-white shadow-lg rounded-md" @submit.prevent="onSubmit">

          <LoginField inputType="email" label="Email Address" placeholder="Email" v-model="email"/>

          <LoginField inputType="password" label="Password" placeholder="*************" v-model="password" :error="error"/>
          
          <div class="flex space-x-8">
            <button type="submit" class="border rounded-xl p-3 bg-babyblue-light text-white font-black">Sign In</button>
            <Loading class="m-auto" v-if="loading"/>
            <ForgotPassword/>
          </div>
        </form>
        <div class="flex justify-center space-y-12">
          <img :src='require(`~/static/${clientlogo}`)' class="w-40 mb-24" >
        </div>
      </div>
    </div>
</template>

<script>
import firebase from "firebase/app"
import LoginField from "../components/LoginField"

export default {
  name: "Login",
  components: {
    LoginField
  },
  head: {
      htmlAttrs: {
        class: "bg-primary"
      },
  },
  data: () => ({
    client: process.env.CLIENT || "Client", 
    clientlogo: process.env.CLIENTLOGO || "dirty_chook_logo.png",
    email: "",
    password: "",
    error: "",
    loading: false,
  }),
  created() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            console.log("Login Succeeded", tokenResult.claims);
            //window.location.href = "https://projects.playables.net/keys/" // Temporary (Dashboard page added later)
            this.$router.push({ name: "artwork" });
            firebase.auth().signOut() // Temporary (Log out button added later)
          })
      }
    });
  },

  methods: {
    async onSubmit() {
      this.loading = true
      if (!this.email && !this.password) {
        this.error = "Please enter an email address and password";
      } else if (!this.email) {
        this.error = "Please enter an email address";
      } else if (!this.password) { 
        this.error = "Please enter a password";
      } else {
        try {
          const { user } = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
        } catch(err) {
          if (err.code == "auth/user-not-found") {
            this.error = "No account with that email address found";
          }
          else if (err.code == "auth/wrong-password") {
            this.error = "Password does not match";
          } else if (err.code == "auth/too-many-requests") {
            this.error = "Too many attempts, account temporarily locked"
          } else {
            this.error = err.message;
          }
          console.log(err);
        }
      }
      this.loading = false;
      this.password = ""
    }
  },
};
</script>