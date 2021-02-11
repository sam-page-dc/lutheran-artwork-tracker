<template>
  <div class="h-screen bg-primary font-mulish text-sm">
    <h1 class="flex justify-center p-2 h-56 flex flex-wrap content-end p-8 text-lutheran font-black text-xl">Lutheran Artwork Tracker</h1>
    <div class="login h-72 flex flex-wrap content-top">
      <form class="w-login mx-auto space-y-5 p-8 bg-white shadow-lg rounded-md" @submit.prevent="onSubmit">

        <LoginField inputType="email" label="Email Address" placeholder="Email" v-model="email" />

        <LoginField inputType="password" label="Password" placeholder="*************" v-model="password" :error="error" />
        
        <div class="flex space-x-8">
          <button type="submit" class="border rounded-xl p-3 bg-babyblue-light text-white font-black">Sign In</button>
          <button type="submit" class="text-babyblue-light font-bold">Forgot password?</button>
        </div>
      </form>
    </div>
    <div class="flex mt-40 justify-center">
          <img src='../static/lutheran_services_logo.png' width="200px" height="auto" >
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
  data: () => ({
    email: "",
    password: "",
    error: "",
  }),
  created() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            console.log("Login Succeeded", tokenResult.claims);
            window.location.href = "https://projects.playables.net/keys/" // Temporary (Dashboard page added later)
            // firebase.auth().signOut() // Temporary (Log out button added later)
          });
      }
    });
  },

  methods: {
    async onSubmit() {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
      } catch (err) {
        console.log("Login Failed", err);
        // if this.email !== blah blah (..this.password !== blah blah) => make stuff all red
        this.error = err
      }
    },
  },
};
</script>