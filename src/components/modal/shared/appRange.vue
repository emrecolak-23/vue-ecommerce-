<template>
  <div class="range-group">
    <div class="range-value" ref="rangeValues">
      <span>{{ modelValue }}</span>
    </div>
    <input
      :value="modelValue"
      @input="updateValue"
      type="range"
      class="range-custom"
      min="140"
      max="200"
      id="customRange2"
      ref="input"
    />
    <div class="d-flex justify-content-between box-minmax">
      <span class="minmax-text" v-for="(range, index) in ranges" :key="index">{{
        range + metric
      }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
export default {
  props: ['modelValue', 'ranges', 'metric'],
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
  setup(props) {
    const rangeValues = ref(null);
    const input = ref(null);
    const position = computed(() => {
      return (
        (props.modelValue - props.ranges[0]) /
        (props.ranges[1] - props.ranges[0])
      );
    });

    onMounted(() => {
      // child.value will hold an instance of <Child />
      rangeValues.value.style.left = `${position.value * 480}px`;
    });

    watch(position, () => {
      if (position.value < 0.5 && position.value > 0.1) {
        rangeValues.value.style.left = `${
          position.value * (480 + 10 * (1 - position.value))
        }px`;
      } else if (position.value >= 0.5) {
        rangeValues.value.style.left = `${
          position.value * (480 - 10 * position.value)
        }px`;
      } else if (position.value < 0.1) {
        rangeValues.value.style.left = `${(position.value + 0.017) * 480}px`;
      }
    });

    return {
      rangeValues,
      input,
    };
  },
};
</script>

<style scoped>
.box-minmax {
  margin-top: 12px;
}
.minmax-text {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */
  display: flex;
  align-items: center;
  text-align: center;

  color: #878787;
}
.range-group {
  width: 100%;
  position: relative;
}

@media screen and (max-width: 1000px) {
  .range-group {
    width: 100%;
    position: relative;
  }
}

.range-custom {
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  max-height: 10px;
  background-color: lightgray;
  outline: none;
  border-radius: 15px;

  box-shadow: inset 0 0 3px rgba(0, 0, 0, 1);
}
.range-custom:focus {
  outline: none;
  border-radius: 15px;

  box-shadow: inset 0 0 3px rgba(0, 0, 0, 1);
}
.range-custom::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background-image: url('https://wearsv1.northeurope.cloudapp.azure.com:5000/images/Wicon1WH.png');
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  border: 1px solid #333;
  /*box-shadow: -407px 0 0 400px black;*/
}

.range-value {
  position: absolute;
  top: -30%;
}

.range-value span {
  width: 60px;
  height: 18px;
  line-height: 20px;
  text-align: center;
  background: black;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 6px;
  box-shadow: 1px solid gray;
}
.range-value span:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid black;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  margin-top: -5px;
  z-index: -1;
}
</style>
