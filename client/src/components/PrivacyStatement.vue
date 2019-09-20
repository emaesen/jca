<template>
  <div class="policy">
    <h4>Privacy Statement</h4>
    <div class="legal">
      We value and respect your security and privacy and therefor this website (https://JeffersonCenterForTheArts.com):
      <ul class="bullet">
        <li>is served over a secure connection;
          <ul>
            <li>("https" - identified by a padlock or similar icon next to this site's URL in your browser window)</li>
          </ul>
        </li>
        <li>processes the minimum amount of information required to operate and display content on this site</li>
      </ul>
    </div>
    <div class="legal">
      This website does not:
      <ul class="bullet">
        <li>use data-transmitting "cookies" or "web beacons"</li>
        <li>collect a visitor's personal information</li>
        <li>embed analytics trackers</li>
        <li>embed social networks</li>
        <li>display ads or connect to an ad network</li>
      </ul>
    </div>
    <div class="legal">
      This website does:
      <ul class="bullet">
        <li>store standard non-personal internet-access information on its server;
          <ul>
            <li>(this is information collected and transmitted by your browser –not this website– when you visit this website)</li>
            <li>(this is standard operational practice for each website)</li>
            <li>(this information may be aggregated in anonymous statistical access data)</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="legal">
      This website may:
      <ul class="bullet">
        <li>store a copy of its pages on your local device;
          <ul>
            <li>(this is standard operational practice done by your browser)</li>
            <li>(you may remove this copy by selecting "clear cache" in your browser's settings)</li>
          </ul>
        </li>
        <li>transfer site information to your local email program;
          <ul>
            <li>(only after you intentionally click the "Open email", "Contact Us" or "I'd like to volunteer!" button)</li>
            <li>(you have full control over what information you send to us via your email)</li>
          </ul>
        </li>
        <li>embed a Mailchimp email newsletter subscription form;
          <ul>
            <li>(only after you intentionally click the "Subscribe" button)</li>
            <li>(we ask for your email and name)</li>
            <li>(you can unsubscribe at any time by clicking an unsubscribe link in the email newsletter)
            <li>(<link-outbound to="https://mailchimp.com/legal/">About Mailchimp's privacy practices.</link-outbound>)</li>
          </ul>
        </li>
        <li>embed a ThunderTix ticket purchase form;
          <ul>
            <li>(only after you intentionally click the "Buy ticket" button)</li>
            <li>(ThunderTix handles the financial transaction)</li>
            <li>(<link-outbound to="https://www.thundertix.com/privacy-policy/">About ThunderTix's privacy practices.</link-outbound>)</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import LinkOutbound from '@/components/LinkOutbound.vue';

export default {
  name: 'PrivacyStatement',
  components: {
    LinkOutbound,
  },
};
</script>

<style lang="less" scoped>
.policy {
  margin-top: 15em;
}
.legal {
  font-size: 80%;
}
</style>
