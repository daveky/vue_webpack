<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-nav>

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>

      </b-collapse>
    </b-navbar>

    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>
    <!-- Main UI -->
    <div class="mt-3 mb-3">
        Submitted Names:
        <ul>
          <li v-for="n in names">{{n}}</li>
        </ul>
    </div>
    <!-- Modal Component -->
    <b-modal id="modal1" ref="modal1" title="Submit your name" @ok="handleOk" @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
      </form>
    </b-modal>

    <router-link :to="{ name: 'Hello' }" class="home-link">Home</router-link>
    <router-link to="/about">About</router-link>
    
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: {
    name: '',
    names: []
  },
  methods: {
    clearName () {
      this.name = ''
    },
    handleOk (e) {
      e.cancel()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
      this.clearName()
      this.$refs.modal1.hide()
    }
  }
}
</script>

<style lang="scss">
.about { background: blue; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .home-link { color: red; }
}
</style>
