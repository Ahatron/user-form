<template>
  <div id="app">
    <form class="form"
      @submit.prevent="submitForm">
      <div class="form__data"
        v-for="item of formData"
        :key="item.name">

        <h3>{{ item.name }}</h3>

        <div class="form-group"
          v-for="(input, key) in item.inputs"
          :key="key">
          <label v-if="input.type == 'text' || input.type == 'date' || input.type == 'checkbox'"
            class="form-group__label"
            :for="key">{{ input.label }}<input class="form-group__input"
              :placeholder="input.placeholder"
              :id="key"
              :type="input.type"
              v-model="item.inputs[key].value"
              :required="!!input?.required"></label>

          <label v-else-if="key == 'gender'"
            class="form-group__label">Пол:
            <label class="form-group__label"
              for="male">Мужской <input class="form-group__input-radio"
                type="radio"
                id="male"
                value="male"
                v-model="item.inputs[key].value"></label>

            <label class="form-group__label"
              for="female">Женский <input class="form-group__input-radio"
                type="radio"
                id="female"
                value="female"
                v-model="item.inputs[key].value"></label>
          </label>

          <label v-else-if="input.type == 'select'"
            class="form-group__label">{{ input.label }}
            <select class="form-group__select"
              v-model="item.inputs[key].value"
              :id="key"
              :multiple="!!input?.multiple"
              :required="!!input?.required">
              <option v-for="option of input.options"
                :key="option"
                :value="option">{{ option }}</option>
            </select>

          </label>


          <!-- <span v-if="$v[key].$error"
            class="error-message">{{ input.errorMessage }}</span> -->
        </div>
      </div>

      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import { required, maxLength, numeric } from 'vuelidate/lib/validators';
import Vue from 'vue';

export default {
  data() {
    return {
      formData: Vue.observable({
        basicInfo: Vue.observable({
          name: 'Основные данные',
          inputs: {
            surname: { type: 'text', value: '', errorMessage: "", label: 'Фамилия*:', required: true, placeholder: 'Иванов' },
            name: { type: 'text', value: '', errorMessage: "", label: 'Имя*:', required: true, placeholder: 'Иван' },
            patronymic: { type: 'text', value: '', errorMessage: "", label: 'Отчество:', placeholder: 'Иванович' },
            birthdate: { type: 'date', value: '', errorMessage: "", label: 'День рождения*:', required: true },
            phoneNumber: { type: 'text', value: '', errorMessage: "", label: 'Номер телефона*: +7', required: true, placeholder: '8005550505' },
            gender: { type: 'radio', value: '', label: 'Пол:' },
            customerGroup: { type: 'select', options: ['VIP', 'Проблемные', 'ОМС'], value: [], errorMessage: "", label: 'Группа клиентов*:', multiple: true },
            doctor: { type: 'select', options: ['Иванов', 'Захаров', 'Чернышева'], value: '', errorMessage: "", label: 'Лечящий врач:' },
            noSms: { type: 'checkbox', value: false, label: 'Не отправлять СМС:' }
          }
        }),
        address: Vue.observable({
          name: 'Адресные данные',
          inputs: {
            index: { type: 'text', value: '', errorMessage: "", label: 'Индекс:', placeholder: '123456' },
            country: { type: 'text', value: '', errorMessage: "", label: 'Страна:', placeholder: 'Россия' },
            region: { type: 'text', value: '', errorMessage: "", label: 'Регион:', placeholder: 'Россиская Федерация' },
            city: { type: 'text', value: '', errorMessage: "", label: 'Город*:', required: true, placeholder: 'Москва' },
            street: { type: 'text', value: '', errorMessage: "", label: 'Улица:', placeholder: 'Пушкина' },
            house: { type: 'text', value: '', errorMessage: "", label: 'Дом:', placeholder: '11а' }
          }
        }),
        passport: Vue.observable({
          name: 'Паспортные данные',
          inputs: {
            documentType: { type: 'select', options: ['Паспорт', 'Свидетельство о рождении', 'Вод.удостоверение'], value: '', errorMessage: "", label: 'Тип документа:' },
            series: { type: 'text', value: '', errorMessage: "", label: 'Серия:', placeholder: '7720' },
            number: { type: 'text', value: '', errorMessage: "", label: 'Номер:', placeholder: '1234 1234 123456' },
            issuedBy: { type: 'text', value: '', errorMessage: "", label: 'Кем выдан:', placeholder: 'МВД РОССИИ' },
            issueDate: { type: 'date', value: '', errorMessage: "", label: 'Дата выдачи*:', required: true }
          }
        })
      })
    };
  },
  methods: {
    submitForm() {
      console.log('Отправка формы', this.basicInfo);
    }
  },
  validations: {
    phoneNumber: { required, maxLength: maxLength(11), numeric },
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(54, 54, 54);
  padding-bottom: 5rem;
  padding-top: 5rem;
  background-color: rgb(168, 187, 190);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
}



.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: rgb(233, 233, 233);


  @media screen and (min-width: 720px) {
    width: 60%;
  }

  @media screen and (min-width: 1080px) {
    width: 50%;
  }

  @media screen and (min-width: 1080px) {
    width: 45%;
  }


  border-radius: 1rem;
  box-shadow: 0px 1px 8px 0px black;

  &__data {
    margin-bottom: 1rem;
  }

  &-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 3rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 320px) {
      margin-right: 1rem;
    }

    &__label {
      display: inline-flex;
      justify-content: flex-end;
      font-weight: bold;
      margin-bottom: 1rem;
      width: 100%;
      text-wrap: nowrap;

      &>& {
        margin: 0;
        width: 30%;
        justify-content: start;
        margin-left: 1rem;
      }

      input[type=checkbox] {
        width: 20px;
        margin-right: 50%;
      }
    }

    &__input {
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .2rem;
      padding-bottom: .2rem;
      border-radius: .3rem;
      border: 1px solid gray;
      width: 60%;
      margin-left: 1rem;
      height: 1.3rem;
      font-size: medium;
      background-color: white;

      &:focus-visible {
        outline: 2px solid black;
      }
    }

    &__select {
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .2rem;
      padding-bottom: .2rem;
      margin-left: 1rem;
      overflow: auto;
      width: 63%;
      border-radius: .3rem;
      font-size: medium;

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
