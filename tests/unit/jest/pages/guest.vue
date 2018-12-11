<template>
  <div class="guest">
    <div class="holder bordered">
      <div class="chooser">
        <div
          class="login fwb"
          :class="{'active': mode === 'login'}"
          @click="mode = 'login'"
        >
          Login
        </div>
        <div
          class="register fwb"
          :class="{'active': mode === 'register'}"
          @click="mode = 'register'"
        >
          Register
        </div>
      </div>
      <div
        class="section register"
        v-if="mode === 'register'"
      >
        <text-input
          label="First name"
          v-model="register.model.firstName"
        ></text-input>
        <text-input
          label="Last name"
          v-model="register.model.lastName"
        ></text-input>
        <text-input
          label="Email address"
          v-model="register.model.email"
        ></text-input>
        <text-input
          label="Password"
          v-model="register.model.password"
        ></text-input>
        <m-button
          label="Register"
          state="info"
          @click="doregister"
          style="float:right;"
        ></m-button>
      </div>
      <div
        class="section login"
        v-if="mode === 'login'"
      >
        <text-input
          label="email"
          v-model="login.model.email"
        ></text-input>
        <text-input
          label="password"
          type="password"
          v-model="login.model.password"
        ></text-input>
        <div
          class="error-message"
          v-if="login.error"
        >No account with these credentials found.retry again or <span
            class="link"
            @click="mode = 'register'"
          >Register</span></div>
        <m-button
          label="Login"
          state="info"
          style="float:right;"
        ></m-button>
      </div>
    </div>
  </div>
</template>
<script>
import TextInput from "@/components/form/text_input.vue";
import MButton from "@/components/form/m_button.vue";
//import Factory from "../lib/factory/guest";
//import call from "../lib/call";
export default {
  data() {
    return {
      mode: "login",
      login: {
        model: {
          email: "sidlynx@gmail.com",
          password: "azerty"
        },
        error: false
      },
      register: {
        model: {
          firstName: "Younes",
          lastName: "Safir",
          email: "younes.safir@gmail.com",
          password: "azerty"
        },
        error: false
      }
    };
  },
  methods: {
    async doLogin() {
      console.log("oooo");
      /*
      try {
        let response = await call("auth/login", this.login.model);
        localStorage.setItem("uuid", response.uuid);
        this.$store.commit("login", response);
        this.$router.push({ name: "home" });
      } catch (e) {
        console.log(e);
      }
      //*/
    },
    doregister() {
      try {
        let response = Factory.login(this.loginModel);
        let entity = response.json;
        this.$router.push({
          name: "crud_" + Factory.name + "_view",
          params: { uuid: entity.uuid }
        });
        this.loading = false;
      } catch (e) {
        this.loding = false;
        if (e.json) {
          console.log(e.json.name);
          switch (e.json.name) {
            case "VALIDATION_ERRORS":
              this.validationErrors = e.json.payload;
              break;
            default:
              toastr.warning(
                "Verify your internet connection",
                "Connexion problem"
              );
          }
        }
      }
    }
  },
  components: {
    TextInput,
    MButton
  }
};
</script>
<style lang="scss" scoped>
@import "../style/variables";
.guest {
  position: fixed;
  background-color: #eee;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  .holder {
    width: 560px;
    padding: 3rem;
    background: white;
    box-shadow: 9px 8px 49px 1px rgba(255, 255, 255, 0.75);
    .chooser {
      display: flex;
      flex-direction: row;
      margin-bottom: 2rem;
      color: #707070;
      div {
        flex-basis: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid grey;
        height: 4rem;
        cursor: pointer;
        &.active {
          border-bottom-width: 2px;
          font-weight: 600;
          border-bottom-color: $color-secondary;
          color: #000;
        }
      }
    }
    .section {
      &.login {
        .error-message {
          text-align: center;
          font-size: 14px;
          color: red;
          margin-bottom: 1rem;
          margin-top: 1rem;
          border: 1px solid red;
          border-radius: 4px;
          padding: 1rem;
          .link {
            cursor: pointer;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
