<template>
  <div>
    <ul>
      <div>
        <li>
          <router-link :to="'/login'">
            <p>Login</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/signup'">
            <p>Signup</p>
          </router-link>
        </li>
      </div>
      <div>
        <li>
          <router-link :to="'/home'">
            <p>Home</p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/sales'">
            <p>Sales</p>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
