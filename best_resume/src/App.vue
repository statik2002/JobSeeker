<template>
  <div class="container-fluid d-none d-lg-block border" style="height: 100vh;">
      <div class="row h-100">
          <!--Left area-->
          <div class="col edit-column pb-3 border">
              <!--Accordion-->
              <div class="mt-3">
                  <div class="accordion" id="accordionExample">
                      <!--Personal detail-->
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="PersonalDetail">
                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePersonalDetail" aria-expanded="true" aria-controls="collapsePersonalDetail">
                              Персональные Данные
                              </button>
                          </h2>
                          <div id="collapsePersonalDetail" class="accordion-collapse collapse show">
                              <div class="accordion-body">
                                  <div class="d-flex flex-row">
                                      <div class="flex-shrink-0">
                                          <div class="d-flex flex-column">
                                              <div class="">Фотография</div>
                                              <label class="btn btn-default m-0 p-0">
                                                  <img v-bind:src=PhotoSrc class="avatar-edit" id="avatarImage" style="max-width: 120px;" alt="foto">
                                                  <input type="file" id="uploadAvatar" hidden @change="photoLoad">
                                              </label>  
                                          </div>
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column justify-content-between">
                                          <div class="d-flex justify-content-between">
                                              <div class="ps-2">
                                                  <label for="Name">Имя</label>
                                                  <input v-model="FirstName" type="text" class="form-control" id="Name" name="Name" placeholder="" autocomplete="name">
                                              </div>
                                              <div class="ps-2">
                                                  <label for="Surname">Фамилия</label>
                                                  <input v-model="LastName" type="text" class="form-control" id="Surname" placeholder="" autocomplete="given-name">
                                              </div>
                                              <div class="ps-2">
                                                  <label for="Surname">Отчество</label>
                                                  <input v-model="MiddleName" type="text" class="form-control" id="MiddleName" placeholder="" autocomplete="middle-name">
                                              </div>
                                          </div>
                                          <div class="ps-2">
                                              <label for="Email">Email</label>
                                              <input type="email" class="form-control" id="Email" placeholder="" autocomplete="email">
                                          </div>
                                          <div class="ps-2">
                                              Дата рождения:
                                              <VueDatePicker v-model="BirthDate" name="date-picker" locale="ru" cancelText="отмена" selectText="Ок" :enable-time-picker="false" :format="formatDate"></VueDatePicker>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex flex-column pt-2">
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Headline">Заголовок</label>
                                          <input v-model="HeadLine" type="text" class="form-control" id="Headline" placeholder="">
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Telephone">Телефон</label>
                                          <input v-model="Phone" type="tel" class="form-control" id="Telephone" placeholder="">
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Address">Адрес</label>
                                          <input v-model="Address" type="text" class="form-control" id="Address" placeholder="" autocomplete="address-line1">
                                      </div>
                                      <div class="d-flex flex-row justify-content-between gap-2">
                                          <div class="flex-grow-1">
                                              <label for="PostCode">Почтовый индекс</label>
                                              <input v-model="PostCode" type="number" class="form-control" id="PostCode" placeholder="">
                                          </div>
                                          <div class="flex-grow-1">
                                              <label for="City">Город</label>
                                              <input v-model="City" type="text" class="form-control" id="City" placeholder="">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex flex-column">
                                      <div id="placeOfBirthId" class="collapse pt-3">
                                          <label for="placeOfBirth">Место рождения</label>
                                          <div class="d-flex gap-2 ">
                                              <input v-model="BirthPlace" type="text" class="form-control" id="placeOfBirth">
                                              <button href="#placeOfBirthId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" @click="deleteBirthPlace"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="driverLicenceId" class="collapse pt-3">
                                          Водительские права:
                                          <div class="d-flex flex-row gap-2 ">
                                            <div class="form-check">
                                                <div>
                                                  <input class="form-check-input" type="checkbox" value="A" v-model="DriverLicence" id="categoryA">
                                                  <label class="form-check-label" for="categoryA">A</label>
                                                </div>
                                                <div>
                                                  <input class="form-check-input" type="checkbox" value="B" v-model="DriverLicence" id="categoryB">
                                                  <label class="form-check-label" for="categoryB">B</label>
                                                </div>
                                                <div>
                                                  <input class="form-check-input" type="checkbox" value="C" v-model="DriverLicence" id="categoryC">
                                                  <label class="form-check-label" for="categoryC">C</label>
                                                </div>
                                                <div>
                                                  <input class="form-check-input" type="checkbox" value="D" v-model="DriverLicence" id="categoryD">
                                                  <label class="form-check-label" for="categoryD">D</label>
                                                </div>
                                                <div>
                                                  <input class="form-check-input" type="checkbox" value="E" v-model="DriverLicence" id="categoryE">
                                                  <label class="form-check-label" for="categoryE">E</label>
                                                </div>
                                            </div>
                                            <div class="ms-auto">
                                              <button href="#driverLicenceId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" @click="deleteDriverLicence"><i class="bi bi-trash3"></i></button>
                                            </div>  
                                          </div>
                                      </div>
                                      <div id="genderId" class="collapse pt-3">
                                          Пол:
                                          <div class="d-flex flex-row gap-2">
                                              <div>
                                                <Gender-component v-model="Gender"></Gender-component>
                                              </div>
                                              <div class="ms-auto">
                                                <button href="#genderId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" @click="deleteGender"><i class="bi bi-trash3"></i></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div id="nationalityId" class="collapse pt-3">
                                          Национальность:
                                          <div class="d-flex gap-2">
                                              <input v-model="Nationality" type="text" class="form-control" id="nationality">
                                              <button href="#nationalityId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="civilStatusId" class="collapse pt-3">
                                          <div class="d-flex flex-row gap-2" id="civilStatus">
                                            Семейное положение:
                                            <div>
                                              <CivilStatus-component v-model="CivilStatus"></CivilStatus-component>
                                            </div>
                                            <div class="ms-auto">
                                              <button href="#civilStatusId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" @click="deleteCivilStatus"><i class="bi bi-trash3"></i></button>
                                            </div>
                                          </div>
                                      </div>
                                      <div id="websiteId" class="collapse pt-3">
                                          <label for="website">Сайт</label>
                                          <div class="d-flex gap-2">
                                              <input v-model="Website" type="text" class="form-control" id="website">
                                              <button href="#websiteId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="telegramId" class="collapse pt-3">
                                          <label for="telegram">Telegram</label>
                                          <div class="d-flex gap-2">
                                              <input v-model="TgLink" type="text" class="form-control" id="telegram">
                                              <button href="#telegramId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse" @click="deleteTgLink"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex gap-2 flex-wrap pt-3">
                                      <button href="#placeOfBirthId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Место раждения <i class="bi bi-plus-circle"></i></button>
                                      <button href="#driverLicenceId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Водительские права <i class="bi bi-plus-square"></i></button>
                                      <button href="#genderId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Пол <i class="bi bi-plus-circle-dotted"></i></button>
                                      <button href="#nationalityId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Национальность <i class="bi bi-plus-square-dotted"></i></button>
                                      <button href="#civilStatusId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Семейное роложение <i class="bi bi-plus-circle-fill"></i></button>
                                      <button href="#websiteId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Сайт <i class="bi bi-plus-square-fill"></i></button>
                                      <button href="#telegramId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Telegram <i class="bi bi-node-plus"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Education-->
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="Education">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                              Образование
                              </button>
                          </h2>
                          <div id="collapseEducation" class="accordion-collapse collapse">
                              <div class="accordion-body">
                                <Education-component v-model="Education"></Education-component>
                              </div>
                          </div>
                      </div>
                      <!--Employment-->
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="Employment">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmployment" aria-expanded="false" aria-controls="collapseEmployment">
                              Места работы
                              </button>
                          </h2>
                          <div id="collapseEmployment" class="accordion-collapse collapse">
                              <div class="accordion-body">
                               <Work-component v-model="Work"></Work-component>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!--Right area-->
          <div class="col m-0">
              <div class="d-flex justify-content-center mt-3">
                  <div class="page" id="print-me">
                      <div class="d-flex flex-column h-100" id="wrapper">
                          <div class="d-flex flex-row gap-3 page-header">
                            <div class="flex-shrink-0">
                                <img v-bind:src=PhotoSrc id="avatarShow" class="" style="max-width: 150px;" alt="photo">
                            </div>
                            <div class="d-flex flex-grow-1 ms-2 flex-column gap-1 justify-content-center">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex h3 text-light gap-2 ">
                                        <div id="showName">{{ LastName }}</div>
                                        <div id="showSurname">{{FirstName}}</div>
                                        <div id="showName">{{MiddleName}}</div>
                                    </div>
                                </div>
                                <div class="h-4 text-light d-flex flex-row" id="showHeadline">
                                  <div v-if="BirthDate">
                                    Дата рождения: {{ formatDate }}
                                  </div>
                                  <div class="ps-5" v-if="Gender">
                                    Пол: {{ Gender }}
                                  </div>
                                </div>
                                <div class="h-4 text-light" id="showHeadline">
                                    {{HeadLine}}
                                </div>                        
                                <div class="d-flex flex-column text-light gap-1 pt-3">
                                  <div class="d-flex gap-2">
                                      <i class="bi bi-envelope">&nbsp;{{Email}}</i>
                                      <i class="bi bi-telephone ps-2">&nbsp;{{Phone}}</i>
                                      <i class="bi bi-telegram ps-2" v-if="TgLink">&nbsp;{{ TgLink }}</i>
                                  </div>
                                  <div class="d-flex gap-2">
                                    <i class="bi bi-house">{{PostCode}}</i>
                                    <div id="showCity">{{City}}</div>
                                    <div id="showAddress">{{Address}}</div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          <div class="d-flex flex-column pt-3 border">
                            <div class="border">
                                Персональные данные
                            </div>
                            <div class="border">
                              <div class="" v-if="BirthPlace">
                                  Место рождения: {{BirthPlace}}
                              </div>
                              <div class="" v-if="Nationality">
                                  Национальность: {{Nationality}}
                              </div>
                              <div class="d-flex flex-row" v-if="DriverLicence">
                                Водительские категории: &nbsp;
                                <div class="" v-for="licence in DriverLicence.sort()">
                                  {{licence}}
                                </div>
                              </div>
                            </div>
                            <div class="d-flex" v-if="Education.length > 0">
                              <div v-for="edu in Education" class="d-flex flex-row gap-2">
                                <div class="border">
                                  <div>
                                    Образовательное учреждение: 
                                  </div>
                                  <div>
                                    {{ edu.organization }}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    Факультет: 
                                  </div>
                                  <div>
                                    {{ edu.facility }}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    годы обучения: 
                                  </div>
                                  <div>
                                    {{ edu.start }} - {{ edu.end }}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex" v-if="Work.length > 0">
                              <div v-for="wk in Work" class="d-flex flex-row gap-2">
                                <div class="border">
                                  <div>
                                    Место работы: 
                                  </div>
                                  <div>
                                    {{ wk.organization }}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    Должность: 
                                  </div>
                                  <div>
                                    {{ wk.position }}
                                  </div>
                                </div>
                                <div>
                                  <div>
                                    годы работы: 
                                  </div>
                                  <div>
                                    {{ wk.start }} - {{ wk.end }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
              </div>
              <div class="fab-container">
                      <div class="sub-button shadow">
                        <button type="button" class="btn btn-primary" @click="printResume" style="border-radius: 50%;">
                          <span class="material-icons">print</span>
                        </button>
                      </div>
                      <div class="sub-button shadow">
                        <a href="#" target="_blank">
                          <span class="material-icons">mail_outline</span>
                        </a>
                      </div>
                      <div class="sub-button shadow">
                        <a href="#" target="_blank">
                          <span class="material-icons">language</span>
                        </a>
                      </div>
                      <div class="sub-button shadow">
                        <a href="#" target="_blank">
                          <span class="material-icons">help_outline</span>
                        </a>
                      </div>
                    </div>
          </div>
      </div>
  </div>  
</template>

<script>
import EducationComponent from './components/EducationComponent.vue';
import Gender from './components/Gender.vue';
import image from "@/assets/images/avatar.webp";

  export default {
    data() {
      return {
        PhotoSrc: image,
        FirstName: 'Иван',
        LastName: 'Иванов',
        MiddleName: 'Иванович',
        Email: 'example@mail.com',
        HeadLine: 'Мойщик ватных палочек',
        Phone: '+X XXX XXX XX XX',
        Address: 'bla bla',
        City: 'Москва',
        PostCode: '000000',
        BirthPlace: '',
        Nationality: '',
        Website: '',
        TgLink: '',
        Gender: '',
        CivilStatus: '',
        Education: [],
        DriverLicence: [],
        Work: [],
        BirthDate: null,
      }
    },
    computed: {
      formatDate() {
        const date = new Date(this.BirthDate)
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}.${month}.${year}`
      },
      sortDriverLicense() {
        return this.DriverLicence.sort()
      }
    },
    methods: {
      deleteGender() {
        this.Gender = ''
      },
      deleteCivilStatus() {
        this.CivilStatus = ''
      },
      deleteBirthPlace() {
        this.BirthPlace = null
      },
      deleteDriverLicence() {
        this.DriverLicence = []
      },
      deleteTgLink() {
        this.TgLink = ''
      },
      photoLoad(event) {
        const file = event.target.files[0]
        this.PhotoSrc = URL.createObjectURL(file)
      },
      printResume() {
        let element = document.getElementById('print-me');
        let clone = element.cloneNode(true)
        clone.setAttribute('style', 'zoom: 99%')
        let options = {
            margin: 0,
            html2canvas: {scale: 2},
            jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
        }
        html2pdf().set(options).from(clone).save();
      }
    }
  }
</script>

<style scoped>

</style>
