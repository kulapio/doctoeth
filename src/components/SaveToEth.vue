<template>
  <div class="SaveToEth">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Save to Ethereum
          </h1>
          <h2 class="subtitle">
            Permanently
          </h2>

          <section>
            <b-field label="Your Message">
              <b-input placeholder="Your message will be saved permanently on Ethereum" maxlength="200" type="textarea"></b-input>
            </b-field>

            <b-field><!-- Label left empty for spacing -->
              <p class="control">
                <button class="button is-success">
                  Save permanently
                </button>
              </p>
            </b-field>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Eth from '@/eth'

export default {
  name: 'SaveToEth',
  data () {
    return {
      eth: null,
      network: null
    }
  },
  async created () {
    this.eth = new Eth()
    await this.eth.init()
    this.network = this.eth.networkName
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
.label {
  color: white !important;
}
</style>
