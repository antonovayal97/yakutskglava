Vue.directive('mask', {
  inserted: function (el, binding) {

    var mask = binding.value,
        first = mask.indexOf('_'),
        fieldsL = mask.replace(/[^_]/gm, '').length,
        clean = mask.replace(/[^0-9_]/gm, ''),
        indexes = []

    for(var i = 0; i < clean.length; i++){
      if(!isNaN(clean[i])){
        indexes.push(i)
      }
    }

    el.value = mask
    el.clean = mask.replace(/[^0-9]/gm, '')

    function maskIt(event, start){
      var value = el.value,
          filtred = value.replace(/[^0-9]/gm, ''),
          result = ''

      if(value.length < first){
        value = mask + value
        filtred = value.replace(/[^0-9]/gm, '')
      }

      for(var i = 0; i < filtred.length; i++){
        if(indexes.indexOf(i) == -1){
          result += filtred[i]
        }
      }

      value = ''
      var cursor = 0

      for(var i = 0; i < mask.length; i++){
        if(mask[i] == '_' && result){
          value += result[0]
          result = result.slice(1)
          cursor = i + 1

        }else{
          value += mask[i]
        }
      }

      if(cursor < first){
        cursor = first
      }

      el.value = value

      el.clean = el.value.replace(/[^0-9]/gm, '')

      el.setSelectionRange(cursor,cursor)
    }

    el.addEventListener('focus', function(event){
      event.preventDefault()
    })

    el.addEventListener('click', function(event){
      event.preventDefault()
      var start = el.value.indexOf('_')

      if(start == -1){
        start = el.value.length
      }

      el.setSelectionRange(start,start)

    })

    el.addEventListener('paste', function(event){
      var start = el.selectionStart

      if(start < first){
        el.value = '_' + el.value
      }
    })

    el.addEventListener('input', function(event){
      var start = el.selectionStart
      maskIt(event, start)
    })

  }
})


  let submitForm = new Vue({
    el: '#submitForm',
    data() {
      return {
        done: false,
        name: {
          value: "",
          error: ""
        },
        email:
        {
          value: "",
          error: "",
          valid: false
        },
        phone: {
          value: "",
          error: ""
        },
        tema: {
          value: "",
          error: ""
        },
        text: {
          value: "",
          error: ""
        },
        checked: {
          value: false,
          error: ""
        },
        files: []

    }
  },
  methods: {
  unmaskedValue: function(){
    var val = this.$refs.input.clean
    console.log(val)
    this.phone.value = val
    this.checkPhone()
  },
  previewFiles: function () {
    this.files = this.$refs.myFiles.files
    console.log(this.files)
  },
validEmail: function () {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //  return re.test(this.email);
      this.email.valid = re.test(this.email.value)
      this.checkEmail()
    },
    checkName: function (){
      if(this.name.value == '')
      {
        this.name.error = "Необходимо заполнить имя"
      }
      else
      {
        this.name.error = ""
      }
    },
    checkEmail: function (){
      if(this.email.value == '')
      {
        this.email.error = "Необходимо заполнить email"
      }
      else
      {
        this.email.error = ""
      }
      if(!this.email.valid)
      {
        this.email.error = "Недопустимое значение поля email"
      }
      else
      {
        this.email.error = ""
      }
    },
    checkPhone: function (){
      if(this.phone.value == '')
      {
        this.phone.error = "Необходимо заполнить телефон"
      }
      else
      {
        this.phone.error = ""
      }
      if(this.phone.value.toString().length != 11)
      {
        this.phone.error = "Недопустимое значение поля телефон"
      }
      else
      {
        this.phone.error = ""
      }
    },
    checkTema: function (){
      if(this.tema.value == '')
      {
        this.tema.error = "Необходимо заполнить тему"
      }
      else
      {
        this.tema.error = ""
      }
    },
    checkText: function (){
      if(this.text.value == '')
      {
        this.text.error = "Необходимо заполнить текст"
      }
      else
      {
        this.text.error = ""
      }
    },
    checkChecked: function (){
      if(this.checked.value == false)
      {
        this.checked.error = "Необходимо согласиться на обработку персональных данных"
      }
      else
      {
        this.checked.error = ""
      }
    },
    checkAll: function (){
      this.checkName()
      this.checkEmail()
      this.checkPhone()
      this.checkTema()
      this.checkText()
      this.checkChecked()
      if(this.name.error == '' && this.email.error == '' && this.phone.error == '' && this.tema.error == '' && this.text.error == '' && this.checked.error == '')
      {
        this.done = true
      }
    }
  },
    computed:{

    },
    mounted(){

    }
  })
