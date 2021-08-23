<template>
  <div class="container">
    <h3 class="text-center mt-3">Vuelidate ile Form Kontrolü</h3>
    <div class="d-flex justify-content-center align-content-center flex-row">
      <div class="card p-4 mr-4 mt-3  shadow">
        <form style="width: 350px" @submit.prevent="onSubmit">
          <div class="form-group">
            <label>E-posta Adresiniz</label>
            <input
              @blur="$v.email.$touch()"
              v-model="email"
              type="email"
              class="form-control"
              :class="{'is-invalid' : $v.email.$error}"
              placeholder="E-posta adresini giriniz"
            >
            <small v-if="!$v.email.required" class="form-text text-danger">Bu alan zorunludur!</small>
            <small v-if="!$v.email.email" class="form-text text-danger">Geçerli bir e-posta adresi giriniz!</small>
            <small v-if="!$v.email.unique" class="form-text text-danger">Lütfen farklı bir e-posta adresi giriniz!</small>
          </div>
          <div class="form-group">
            <label>Şifre</label>
            <input
              v-model="$v.password.$model"
              type="password"
              class="form-control"
              :class="{'is-invalid' : $v.password.$error}"
              placeholder="Şifrenizi giriniz"
            >
            <small v-if="!$v.password.required" class="form-text text-danger">Bu alan zorunludur!</small>
            <small v-if="!$v.password.numeric" class="form-text text-danger">Şifreniz rakamlardan oluşmalıdır!</small>
            <small v-if="!$v.password.minLength" class="form-text text-danger">Min {{ $v.password.$params.minLength.min }} karakter içermelidir!</small>
            <small v-if="!$v.password.maxLength" class="form-text text-danger">Maks {{ $v.password.$params.maxLength.max }} karakteri geçmemelidir!</small>
          </div>
          <div class="form-group">
            <label>Şifre Tekrar</label>
            <input v-model="$v.repassword.$model" type="password" class="form-control" placeholder="Şifrenizi tekrar giriniz">
            <small v-if="!$v.repassword.required" class="form-text text-danger">Bu alan zorunludur!</small>
            <small v-if="!$v.repassword.numeric" class="form-text text-danger">Şifreniz rakamlardan oluşmalıdır!</small>
            <small v-if="!$v.repassword.minLength" class="form-text text-danger">Min {{ $v.repassword.$params.minLength.min }} karakter içermelidir!</small>
            <small v-if="!$v.repassword.maxLength" class="form-text text-danger">Maks {{ $v.repassword.$params.maxLength.max }} karakteri geçmemelidir!</small>
            <small v-if="!$v.repassword.sameAs" class="form-text text-danger">Şifreler uyuşmuyor!</small>
          </div>
          <div class="form-group">
            <label>Yaş</label>
            <input v-model="$v.age.$model" type="text" class="form-control" placeholder="Yaşınız">
            <small v-if="!$v.age.required" class="form-text text-danger">Bu alan zorunludur!</small>
            <small v-if="!$v.age.numeric" class="form-text text-danger">Yaş alanı rakamlardan oluşmalıdır!</small>
            <small v-if="!$v.age.between" class="form-text text-danger">Yaş alanı {{ $v.age.$params.between.min}} {{ $v.age.$params.between.max}} arasında olmalıdır!</small>
          </div>
          <div class="form-group">
            <label>Kayıt olmak istediğiniz kategori</label>
            <select v-model="$v.selectedCategory.$model" class="form-control">
              <option :key="category" v-for="category in categories" :value="category">{{ category }}</option>
            </select>
            <small v-if="!$v.selectedCategory.checked" class="form-text text-danger">Sadece yazılım alanı seçilebilir!</small>
          </div>

          <a @click="newHobby" class="text-white btn btn-secondary rounded-0 btn-sm">İlgi Alanı Ekle</a>

          <small v-if="!$v.hobbies.required" class="form-text text-danger">Bu alan zorunludur!</small>
          <small v-if="!$v.hobbies.minLength" class="form-text text-danger">Min {{ $v.hobbies.$params.minLength.min }} karakter içermelidir!</small>
          <ul class="list-group mt-3 mb-3 border-0">
            <li :key="index" v-for="(hobby,index) in hobbies" class="list-group-item d-flex pl-2">
              <input
                type="text"
                class="form-control mr-2"
                :class="{'is-invalid': $v.hobbies.$each[index].$error}"
                @blur="$v.hobbies.$each[index].value.$touch()"
                v-model="hobby.value">
              <button class="btn btn-sm btn-danger rounded-0" @click="hobbies.splice(index, 1)">Sil</button>
            </li>
          </ul>
         
          <button :disabled="$v.$invalid" class="btn btn-outline-secondary rounded-0">Kaydet</button>
        </form>
      </div>
      <div class="card p-4 mt-3 shadow" style="width: 400px">
        {{ $v }}
      </div>
    </div>
  </div>
</template>
<script>
  import { required, email, numeric, minLength, maxLength, sameAs, between } from 'vuelidate/lib/validators';
  export default {
    data() {
      return {
        email : null,
        password : null,
        repassword : null,
        selectedCategory : "Yazılım",
        age: null,
        categories : ["Yazılım", "Donanım", "Cloud", "Sunucular", "Unix", "Linux", "Mac OS", "Windows"],
        hobbies: []
      }
    },
    validations: {
      email: {
        required,
        email,
        unique(val, vm) {
          return val === 'kilincaslanmesut@gmail.com' ? false : true; // False means the error can appear
        },
        // Async example
        /*
        unique: async function (val, vm) {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(val !== 'kilincaslanmesut@gmail.com'); // False means the error can appear
            }, 1000);
          });
        }
        */
      },
      password: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(8)
      },
      repassword: {
        required,
        numeric,
        minLength: minLength(6),
        maxLength: maxLength(8),
        sameAs: sameAs('password')
      },
      age: {
        required,
        numeric,
        between:  between(18, 60)
      },
      selectedCategory: {
        checked(val, vm) {
          return vm.selectedCategory === 'Yazılım' ? true : false;
        }
      },
      hobbies: {
        // Array validation
        required,
        minLength: minLength(2),
        $each: {
          // Array elements
          value: {
            required,
            minLength: minLength(5)
          }
        }
      }
    },
    methods: {
      onSubmit(){
        let form = {
          email : this.email,
          password : this.password,
          category : this.category,
          hobbies : this.hobbies,
        }
        console.log(form)
      },
      newHobby(){
        let hobby = {
          id: Math.random() * Math.random() * 1000,
          value: ''
        }
        this.hobbies.push(hobby)
      }
    }
  }
</script>
