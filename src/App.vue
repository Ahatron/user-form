<template>
  <div id="app">
    <form class="form"
      @submit.prevent="submitForm">
      <div class="form-group">
        <label class="form-group__label"
          for="surname">Фамилия*</label>
        <input class="form-group__input"
          id="surname"
          type="text"
          v-model="formData.surname"
          required>
      </div>
      <div class="form-group">
        <label class="form-group__label"
          for="name">Имя*</label>
        <input class="form-group__input"
          id="name"
          type="text"
          v-model="formData.name"
          required>
      </div>
      <div class="form-group">
        <label class="form-group__label"
          for="patronymic">Отчество</label>
        <input class="form-group__input"
          id="patronymic"
          type="text"
          v-model="formData.patronymic">
      </div>
      <div class="form-group">
        <label class="form-group__label"
          for="birthdate">Дата рождения*</label>
        <input class="form-group__input"
          id="birthdate"
          type="date"
          v-model="formData.birthdate"
          required>
      </div>
      <div class="form-group">
        <label class="form-group__label"
          for="phone">Номер телефона* +7<input class="form-group__input"
            id="phone"
            type="text"
            v-model="formData.phoneNumber"
            @blur="$v.phoneNumber.$touch()"></label>

        <span v-if="$v.phoneNumber.$error"
          class="error-message">Введите корректный номер телефона</span>
      </div>
      <div class="form-group">
        <label class="form-group__label">Пол</label>
        <input class="form-group__input"
          type="radio"
          id="male"
          value="male"
          v-model="formData.gender">
        <label class="form-group__label"
          for="male">Мужской</label>
        <input class="form-group__input"
          type="radio"
          id="female"
          value="female"
          v-model="formData.gender">
        <label class="form-group__label"
          for="female">Женский</label>
      </div>
      <div class="form-group">
        <label class="form-group__label">Группа клиентов*</label>
        <select v-model="formData.customerGroup"
          multiple
          required>
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-group__label">Лечащий врач</label>
        <select v-model="formData.doctor">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>
      <div class="form-group">
        <input class="form-group__input"
          type="checkbox"
          id="noSms"
          v-model="formData.noSms">
        <label class="form-group__label"
          for="noSms">Не отправлять СМС</label>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import { required, maxLength, numeric } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      formData: {
        surname: '',
        name: '',
        patronymic: '',
        birthdate: '',
        phoneNumber: '',
        gender: '',
        customerGroup: [],
        doctor: '',
        noSms: false
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Отправка формы', this.formData);
    }
  },
  validations: {
    phoneNumber: { required, maxLength: maxLength(11), numeric },
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 10rem;
  background-color: lightgrey;
  padding-bottom: 5rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;

  border: 2px solid lightgray;
  border-radius: 1rem;
  box-shadow: 0px 1px 8px 0px black;

  &-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    &__label {
      margin-right: 1rem;
    }

    &__input {
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .2rem;
      padding-bottom: .2rem;
      border-radius: .2rem;

      height: 1.3rem;

      &:focus-visible {
        outline: 2px solid black;
      }
    }

    .error-message {
      color: red;
    }
  }
}
</style>
