<template>
  <div class="container-fluid d-none d-lg-block border bg-primary" style="height: 100vh;">
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
                                              <div class="">Photo</div>
                                              <label class="btn btn-default m-0 p-0">
                                                  <img src="" class="avatar-edit" id="avatarImage" style="max-width: 120px;" alt="">
                                                  <input type="file" id="uploadAvatar" hidden>
                                              </label>  
                                          </div>
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column justify-content-between">
                                          <div class="d-flex justify-content-between">
                                              <div class="ps-2">
                                                  <label for="Name">Name</label>
                                                  <input v-model="FirstName" type="text" class="form-control" id="Name" name="Name" placeholder="" autocomplete="name">
                                              </div>
                                              <div class="ps-2">
                                                  <label for="Surname">Surname</label>
                                                  <input v-model="LastName" type="text" class="form-control" id="Surname" placeholder="" autocomplete="given-name">
                                              </div>
                                          </div>
                                          <div class="ps-2">
                                              <label for="Email">Email</label>
                                              <input type="email" class="form-control" id="Email" placeholder="" autocomplete="email">
                                          </div>
                                          <div class="ps-2">
                                              <label for="BirthDate">Дата рождения</label>
                                              <VueDatePicker v-model="BirthDate" id="BirthDate" locale="ru" cancelText="отмена" selectText="Ок" :enable-time-picker="false" :format="formatDate"></VueDatePicker>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex flex-column pt-2">
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Headline">Headline</label>
                                          <input v-model="HeadLine" type="text" class="form-control" id="Headline" placeholder="">
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Telephone">Telephone</label>
                                          <input v-model="Phone" type="tel" class="form-control" id="Telephone" placeholder="">
                                      </div>
                                      <div class="d-flex flex-grow-1 flex-column pb-2">
                                          <label for="Address">Address</label>
                                          <input v-model="Address" type="text" class="form-control" id="Address" placeholder="" autocomplete="address-line1">
                                      </div>
                                      <div class="d-flex flex-row justify-content-between gap-2">
                                          <div class="flex-grow-1">
                                              <label for="PostCode">PostCode</label>
                                              <input v-model="PostCode" type="number" class="form-control" id="PostCode" placeholder="">
                                          </div>
                                          <div class="flex-grow-1">
                                              <label for="City">City</label>
                                              <input v-model="City" type="text" class="form-control" id="City" placeholder="">
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex flex-column">
                                      <div id="placeOfBirthId" class="collapse pt-3">
                                          <label for="placeOfBirth">Place of birth</label>
                                          <div class="d-flex gap-2 ">
                                              <input v-model="BirthPlace" type="text" class="form-control" id="placeOfBirth">
                                              <button href="#placeOfBirthId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="driverLicenceId" class="collapse pt-3">
                                          <label for="driverLicence">Driver Licence</label>
                                          <div class="d-flex gap-2 ">
                                              <input type="text" class="form-control" id="driverLicence">
                                              <button href="#driverLicenceId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="genderId" class="collapse pt-3">
                                          <label for="gender">Пол</label>
                                          <div class="d-flex flex-row gap-2">
                                              <div>
                                                <Gender-component v-model="Gender"></Gender-component>
                                              </div>
                                              <div class="ms-auto">
                                                <button href="#genderId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                              </div>
                                          </div>
                                      </div>
                                      <div id="nationalityId" class="collapse pt-3">
                                          <label for="nationality">Nationality</label>
                                          <div class="d-flex gap-2">
                                              <input v-model="Nationality" type="text" class="form-control" id="nationality">
                                              <button href="#nationalityId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="civilStatusId" class="collapse pt-3">
                                          <label for="civilStatus">Civil status</label>
                                          <div class="d-flex gap-2">
                                              <input type="text" class="form-control" id="civilStatus">
                                              <button href="#civilStatusId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="websiteId" class="collapse pt-3">
                                          <label for="website">Website</label>
                                          <div class="d-flex gap-2">
                                              <input v-model="Website" type="text" class="form-control" id="website">
                                              <button href="#websiteId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                      <div id="telegramId" class="collapse pt-3">
                                          <label for="telegram">Telegram</label>
                                          <div class="d-flex gap-2">
                                              <input v-model="TgLink" type="text" class="form-control" id="telegram">
                                              <button href="#telegramId" type="button" role="button" class="btn btn-outline-secondary" data-bs-toggle="collapse"><i class="bi bi-trash3"></i></button>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="d-flex gap-2 flex-wrap pt-3">
                                      <button href="#placeOfBirthId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Place of birth <i class="bi bi-plus-circle"></i></button>
                                      <button href="#driverLicenceId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Driver Licence <i class="bi bi-plus-square"></i></button>
                                      <button href="#genderId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Gender <i class="bi bi-plus-circle-dotted"></i></button>
                                      <button href="#nationalityId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Nationality <i class="bi bi-plus-square-dotted"></i></button>
                                      <button href="#civilStatusId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Civil status <i class="bi bi-plus-circle-fill"></i></button>
                                      <button href="#websiteId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Website <i class="bi bi-plus-square-fill"></i></button>
                                      <button href="#telegramId" type="button" class="btn btn-outline-secondary" data-bs-toggle="collapse">Telegram <i class="bi bi-node-plus"></i></button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!--Education-->
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="Education">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEducation" aria-expanded="false" aria-controls="collapseEducation">
                              Education
                              </button>
                          </h2>
                          <div id="collapseEducation" class="accordion-collapse collapse">
                              <div class="accordion-body">
                              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                          </div>
                      </div>
                      <!--Employment-->
                      <div class="accordion-item">
                          <h2 class="accordion-header" id="Employment">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEmployment" aria-expanded="false" aria-controls="collapseEmployment">
                              Employment
                              </button>
                          </h2>
                          <div id="collapseEmployment" class="accordion-collapse collapse">
                              <div class="accordion-body">
                              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!--Right area-->
          <div class="col m-0">
              <div class="d-flex justify-content-center">
                  <page size="A4" class="mt-4" >
                      <div class="h-100" id="wrapper">
                          <div class="d-flex flex-row gap-3 page-header">
                              <div class="flex-shrink-0">
                                  <img src="" id="avatarShow" class="" style="max-width: 150px;" alt="">
                              </div>
                              <div class="d-flex flex-grow-1 ms-2 flex-column gap-1 justify-content-center">
                                  <div class="d-flex justify-content-between">
                                      <div class="d-flex h3 text-light gap-2 ">
                                          <div id="showName">{{ LastName }}</div>
                                          <div id="showSurname">{{FirstName}}</div>
                                          <div id="showName">{{MiddleName}}</div>
                                          <div id="showName">Пол: {{Gender}}</div>
                                      </div>
                                  </div>
                                  <div class="h-4 text-light" id="showHeadline">
                                    Дата рождения: {{ formatDate }}
                                  </div>
                                  <div class="h-4 text-light" id="showHeadline">
                                      {{HeadLine}}
                                  </div>
                                  <div class="d-flex text-light gap-2 pt-3" style="font-size: 0.8em;">
                                      <i class="bi bi-envelope"></i>
                                      <div id="showEmail">{{Email}}</div>
                                      <i class="bi bi-telephone"></i>
                                      <div id="showTelephone">{{Phone}}</div>
                                      <i class="bi bi-house"></i>
                                      <div id="showPostcode">{{PostCode}}</div>
                                      <div id="showCity">{{City}}</div>
                                      <div id="showAddress">{{Address}}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="row pt-3 border">
                              <div class="col-8 border ">
                                  Personal details
                              </div>
                              <div class="col-4 border ">
                                  <div class="row" style="visibility: hidden;">
                                      {{BirthPlace}}
                                      <div id="showPalceOfBirth"></div>
                                  </div>
                                  <div class="row" style="visibility: hidden;">
                                      Driver licence
                                      <div id="showDriverLicence"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </page>
              </div>
          </div>
          <!--
          <div class="fab-container">
            <div class="sub-button shadow">
              <button type="button" class="btn btn-primary" onclick="toPDF()" style="border-radius: 50%;">
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
          -->
      </div>
  </div>  
</template>

<script>
import Gender from './components/Gender.vue';

  export default {
    data() {
      return {
        FirstName: 'Unknown',
        LastName: 'Unknown',
        MiddleName: 'Unknown',
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
    }
  }
</script>

<style scoped>

</style>
