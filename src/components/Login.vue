<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-7 row">
          <div class="col-lg-6 mt-5">
            <h1 class="mt-5" style="font-weight: 700;">Sign In</h1>
            <p class="mt-3">
              We're the content, research and design team at Oxford. We help
              riders move, restaurants grow and customers eat in over 200 cities
              around the world. Come find the answers with us.
            </p>
            <form class="mt-5">
              <BaseInput type="text" placeholder="Email" v-model="data.email" />
              <BaseInput
                type="password"
                placeholder="Password"
                v-model="data.password"
              />
              <BaseButton type="submit"> SIGN IN </BaseButton>
            </form>
          </div>
          <div class="col-lg-3"></div>
        </div>
        <div class="col-lg-5" id="sideguy"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        email: '',
        password: '',
      },
    };
  },
};
</script>

<style scoped>
body,
.container-fluid,
.row {
  margin: 0px;
  padding: 0px;
}
.form-control {
  border-radius: 25px;
}
.btn-send {
  background-color: #ee91bc;
  color: white;
  text-transform: uppercase;
}
#sideguy {
  background-color: #ee91bc;
}
</style>
