<template>
  <div id="app">
    <form class="form"
      @submit.prevent="submitForm">
      <div class="form__data">
        <h3>Основные данные</h3>
        <div class="form-group">
          <label class="form-group__label"
            for="surname">Фамилия* <input class="form-group__input"
              id="surname"
              type="text"
              v-model="basicInfo.surname"
              required></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="name">Имя* <input class="form-group__input"
              id="name"
              type="text"
              v-model="basicInfo.name"
              required></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="patronymic">Отчество <input class="form-group__input"
              id="patronymic"
              type="text"
              v-model="basicInfo.patronymic"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="birthdate">Дата рождения* <input class="form-group__input"
              id="birthdate"
              type="date"
              v-model="basicInfo.birthdate"
              required></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="phone">Номер телефона* +7<input class="form-group__input"
              id="phone"
              type="text"
              v-model="basicInfo.phoneNumber"
              @blur="$v.phoneNumber.$touch()"></label>

          <span v-if="$v.phoneNumber.$error"
            class="error-message">Введите корректный номер телефона</span>
        </div>
        <div class="form-group">
          <label class="form-group__label">Пол</label>

          <label class="form-group__label"
            for="male">Мужской <input class="form-group__input"
              type="radio"
              id="male"
              value="male"
              v-model="basicInfo.gender"></label>

          <label class="form-group__label"
            for="female">Женский <input class="form-group__input"
              type="radio"
              id="female"
              value="female"
              v-model="basicInfo.gender"></label>
        </div>
        <div class="form-group">
          <label class="form-group__label">Группа клиентов*</label>
          <select v-model="basicInfo.customerGroup"
            multiple
            required>
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-group__label">Лечащий врач</label>
          <select v-model="basicInfo.doctor">
            <option value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </div>
        <div class="form-group">

          <label class="form-group__label"
            for="noSms">Не отправлять СМС <input class="form-group__input"
              type="checkbox"
              id="noSms"
              v-model="basicInfo.noSms"></label>
        </div>
      </div>

      <div class="form__data">
        <h3>Адрес данные</h3>
        <div class="form-group">
          <label class="form-group__label"
            for="index">Индекс: <input class="form-group__input"
              id="index"
              type="text"
              v-model="address.index"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="country">Страна: <input class="form-group__input"
              id="country"
              type="text"
              v-model="address.country"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="region">Область: <input class="form-group__input"
              id="region"
              type="text"
              v-model="address.region"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="city">Город*: <input class="form-group__input"
              id="city"
              type="text"
              v-model="address.city"
              required></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="street">Улица: <input class="form-group__input"
              id="street"
              type="text"
              v-model="address.street"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="house">Дом: <input class="form-group__input"
              id="house"
              type="text"
              v-model="address.house"></label>

        </div>
      </div>

      <div class="form__data">
        <h3>Паспортные данные</h3>
        <div class="form-group">
          <label class="form-group__label"
            for="documentType">Тип документа*:</label>
          <select id="documentType"
            v-model="passport.documentType"
            required>
            <option value="Паспорт">Паспорт</option>
            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
            <option value="Вод. удостоверение">Вод. удостоверение</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="series">Серия: <input class="form-group__input"
              id="series"
              type="text"
              v-model="passport.series"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="number">Номер: <input class="form-group__input"
              id="number"
              type="text"
              v-model="passport.number"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="issuedBy">Кем выдан: <input class="form-group__input"
              id="issuedBy"
              type="text"
              v-model="passport.issuedBy"></label>

        </div>
        <div class="form-group">
          <label class="form-group__label"
            for="issueDate">Дата выдачи*: <input class="form-group__input"
              id="issueDate"
              type="date"
              v-model="passport.issueDate"
              required></label>

        </div>
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
      basicInfo: {
        surname: '',
        name: '',
        patronymic: '',
        birthdate: '',
        phoneNumber: '',
        gender: '',
        customerGroup: [],
        doctor: '',
        noSms: false
      },
      address: {
        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: ''
      },
      passport: {
        documentType: '',
        series: '',
        number: '',
        issuedBy: '',
        issueDate: ''
      }
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 5rem;
  padding-top: 5rem;
  background-color: rgb(168, 187, 190);
  box-sizing: border-box;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin: auto;
  width: 40rem;
  background-color: rgb(197, 210, 212);

  @media screen and (max-width: 620px) {
    width: 80%;
  }

  @media screen and (max-width: 620px) {
    width: 80%;
  }

  border-radius: 1rem;
  box-shadow: 0px 1px 8px 0px black;

  &-group {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 3rem;
    margin-bottom: 1rem;

    &__label {
      display: inline-flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 1rem;
      width: 100%;
    }

    &__input {
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .2rem;
      padding-bottom: .2rem;
      border-radius: .2rem;
      border: 1px solid gray;
      width: 60%;
      margin-left: 1rem;
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
