<template>
  <q-card>

    <modal-header>Add Schedule Row</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="row">
        <div class="row q-ma-xs">
          <modal-mon :mon.sync="scheduleToSubmit.mon" />
        </div>
        <div class="row q-ma-xs">
          <modal-tue :tue.sync="scheduleToSubmit.tue" />
        </div>
        <div class="row q-ma-xs">
          <modal-wed :wed.sync="scheduleToSubmit.wed" />
        </div>
        <div class="row q-ma-xs">
          <modal-thu :thu.sync="scheduleToSubmit.thu" />
        </div>
        <div class="row q-ma-xs">
          <modal-fri :fri.sync="scheduleToSubmit.fri" />
        </div>
        <div class="row q-ma-xs">
          <modal-sat :sat.sync="scheduleToSubmit.sat" />
        </div>
        <div class="row q-ma-xs">
          <modal-sun :sun.sync="scheduleToSubmit.sun" />
        </div>
      </q-card-section>

      <modal-buttons/>

      <pre>{{ scheduleToSubmit }}</pre>
    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
      return {
        scheduleToSubmit: {
          mon: "",
          tue: "",
          wed: "",
          thu: "",
          fri: "",
          sat: "",
          sun: ""
        }
      }
    },
    methods: {
      ...mapActions('schedule', ['addSchedule']),
      submitForm() {
        this.submitSchedule()
      },
      submitSchedule() {
        this.addSchedule(this.scheduleToSubmit)
        this.$emit('close')
      }
    },
    components: {
      'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
      'modal-mon': require('components/Modals/Shared/ModalMon.vue').default,
      'modal-tue': require('components/Modals/Shared/ModalTue.vue').default,
      'modal-wed': require('components/Modals/Shared/ModalWed.vue').default,
      'modal-thu': require('components/Modals/Shared/ModalThu.vue').default,
      'modal-fri': require('components/Modals/Shared/ModalFri.vue').default,
      'modal-sat': require('components/Modals/Shared/ModalSat.vue').default,
      'modal-sun': require('components/Modals/Shared/ModalSun.vue').default,
      'modal-buttons': require('components/Modals/Shared/ModalButtons.vue').default
    }
}
</script>

<style lang="scss">

</style>