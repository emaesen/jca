<template>
  <div>
    <h1>Venue Info &amp; Booking</h1>

    <h2>Location</h2>

    <p>
      Jefferson Center for the Arts is located at just a few minutes drive from Mount Shasta city center:<br/>
      
      <a href="/img/capture-openstreetmap-jca.png" target="_blank" title="click to open map in new tab">
        <img class="streetmap" src="/img/capture-openstreetmap-jca.png" alt="street map Mount Shasta and JCA"/>
      </a>
    </p>

  </div>
</template>

<script>
export default {
  name: 'VenueInfoBooking',
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
@import '../assets/variab.less';

.streetmap {
  margin: 2em auto;
  width: 100%;
}
</style>
