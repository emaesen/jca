<template>
  <ul class="nav menu">
    <li>
      <router-link to="/" exact>Welcome</router-link>
    </li>
    <li>
      <router-link to="/events">Events</router-link>
      <ul class="submenu">
        <li>
          <router-link to="/music">Music</router-link>
        </li>
        <li>
          <router-link to="/theater">Theater</router-link>
        </li>
        <li>
          <router-link to="/visual-arts">Visual Arts</router-link>
        </li>
        <li>
          <router-link to="/venue-info-booking">Venue Info &amp; Booking</router-link>
        </li>
      </ul>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <router-link to="/get-involved">Get Involved</router-link>
    </li>
    <li>
      <router-link to="/contact">Contact Us</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  
}
</script>
