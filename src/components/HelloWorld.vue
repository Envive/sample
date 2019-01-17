<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <b-row>
      <b-col>
        <b-form-input
          type="text"
          v-model="queryString"
          placeholder="Filter by name or ICD10" />
      </b-col>
      <b-col>
        <multiselect
          v-model="selected"
          :options="options"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          :showLabels="false"
          :showPointer="false"
          placeholder="Pick some ..."
          label="name"
          track-by="name">
          <template slot="selection" slot-scope="{ values, search, isOpen }">
            <span class="multiselect__single" v-if="values.length && !isOpen">
              {{ values.length }} options selected</span>
          </template>
          <template slot="option" slot-scope="{ option }">
            {{ option.name }} <i class="fas fa-check" />
          </template>
        </multiselect>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Multiselect from 'vue-multiselect';

@Component({
  components: {
    Multiselect,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  queryString = ''

  selected: Array<object> = []

  options = [
    {
      name: 'Keelung',
    },
    {
      name: 'Taipei',
    },
    {
      name: 'New Taipei',
    },
    {
      name: 'Yilan',
    },
    {
      name: 'Taoyuan',
    },
    {
      name: 'Hsinchu',
    },
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import '~vue-multiselect/dist/vue-multiselect.min.css';

/* stylelint-disable */
.multiselect__option i {
  display: none;
  float: right;
}
/* stylelint-enable */

/* stylelint-disable */
.multiselect__option--selected i {
  display: inline;
}
/* stylelint-enable */

h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
