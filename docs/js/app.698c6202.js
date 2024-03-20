(function(){"use strict";var e={5327:function(e,a,r){var t=r(6848),l=function(){var e=this,a=e._self._c;return a("div",{attrs:{id:"app"}},[a("form",{staticClass:"form",on:{submit:function(a){return a.preventDefault(),e.submitForm.apply(null,arguments)}}},[e._l(e.formData,(function(r,t){return a("div",{key:r.name,staticClass:"form__data"},[a("h3",[e._v(e._s(r.name))]),e._l(r.inputs,(function(l,o){return a("div",{key:o,staticClass:"form-group"},["text"==l.type||"date"==l.type||"checkbox"==l.type?a("label",{staticClass:"form-group__label",attrs:{for:o}},[e._v(e._s(l.label)),"checkbox"===l.type?a("input",{directives:[{name:"model",rawName:"v-model",value:l.value,expression:"input.value"}],staticClass:"form-group__input",attrs:{placeholder:l.placeholder,id:o,required:!!l?.required,type:"checkbox"},domProps:{checked:Array.isArray(l.value)?e._i(l.value,null)>-1:l.value},on:{blur:function(a){l.validation&&e.$v.formData[t].inputs[o].$touch()},input:()=>e.allowance(l,o),change:function(a){var r=l.value,t=a.target,o=!!t.checked;if(Array.isArray(r)){var n=null,u=e._i(r,n);t.checked?u<0&&e.$set(l,"value",r.concat([n])):u>-1&&e.$set(l,"value",r.slice(0,u).concat(r.slice(u+1)))}else e.$set(l,"value",o)}}}):"radio"===l.type?a("input",{directives:[{name:"model",rawName:"v-model",value:l.value,expression:"input.value"}],staticClass:"form-group__input",attrs:{placeholder:l.placeholder,id:o,required:!!l?.required,type:"radio"},domProps:{checked:e._q(l.value,null)},on:{blur:function(a){l.validation&&e.$v.formData[t].inputs[o].$touch()},input:()=>e.allowance(l,o),change:function(a){return e.$set(l,"value",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:l.value,expression:"input.value"}],staticClass:"form-group__input",attrs:{placeholder:l.placeholder,id:o,required:!!l?.required,type:l.type},domProps:{value:l.value},on:{blur:function(a){l.validation&&e.$v.formData[t].inputs[o].$touch()},input:[function(a){a.target.composing||e.$set(l,"value",a.target.value)},()=>e.allowance(l,o)]}})]):"gender"==o?a("label",{staticClass:"form-group__label"},[e._v("Пол: "),a("label",{staticClass:"form-group__label",attrs:{for:"male"}},[e._v("Мужской "),a("input",{directives:[{name:"model",rawName:"v-model",value:l.value,expression:"input.value"}],staticClass:"form-group__input-radio",attrs:{type:"radio",id:"male",value:"male"},domProps:{checked:e._q(l.value,"male")},on:{change:function(a){return e.$set(l,"value","male")}}})]),a("label",{staticClass:"form-group__label",attrs:{for:"female"}},[e._v("Женский "),a("input",{directives:[{name:"model",rawName:"v-model",value:l.value,expression:"input.value"}],staticClass:"form-group__input-radio",attrs:{type:"radio",id:"female",value:"female"},domProps:{checked:e._q(l.value,"female")},on:{change:function(a){return e.$set(l,"value","female")}}})])]):"select"==l.type?a("label",{staticClass:"form-group__label"},[e._v(e._s(l.label)+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:r.inputs[o].value,expression:"item.inputs[inputKey].value"}],staticClass:"form-group__select",attrs:{id:o,multiple:!!l?.multiple,required:!!l?.required},on:{blur:function(a){l.validation&&e.$v.formData[t].inputs[o].$touch()},change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.$set(r.inputs[o],"value",a.target.multiple?t:t[0])}}},e._l(l.options,(function(r){return a("option",{key:r,domProps:{value:r}},[e._v(e._s(r))])})),0)]):e._e(),a("Transition",{attrs:{name:"slide-fade"}},[l?.validation&&e.$v.formData[t].inputs[o].value.$error?a("span",{staticClass:"error"},[e.$v.formData[t].inputs[o].value.required?e.$v.formData[t].inputs[o].value.minLength&&e.$v.formData[t].inputs[o].value.maxLength||"phoneNumber"!=o?e._e():a("span",[e._v(" Поле должно содержать 10 цифр ")]):a("span",{staticClass:"error__message"},[e._v("*Поле обязательное для заполнения.")])]):e._e()])],1)}))],2)})),a("button",{staticClass:"form__submit-btn",attrs:{type:"submit"}},[e._v("Отправить")])],2)])},o=[],n=r(6049),u={data(){return{formData:t.Ay.observable({basicInfo:t.Ay.observable({name:"Основные данные",inputs:{surname:{type:"text",value:"",errorMessage:"",label:"Фамилия*:",required:!0,placeholder:"Иванов",validation:!0,realType:"string"},name:{type:"text",value:"",errorMessage:"",label:"Имя*:",required:!0,placeholder:"Иван",validation:!0,realType:"string"},patronymic:{type:"text",value:"",errorMessage:"",label:"Отчество:",placeholder:"Иванович",realType:"string"},birthdate:{type:"date",value:"",errorMessage:"",label:"День рождения*:",required:!0,validation:!0},phoneNumber:{type:"text",value:"",errorMessage:"",label:"Номер телефона*: +7",required:!0,placeholder:"8005550505",validation:!0,realType:"number"},gender:{type:"radio",value:"",label:"Пол:"},customerGroup:{type:"select",options:["VIP","Проблемные","ОМС"],value:[],errorMessage:"",label:"Группа клиентов*:",multiple:!0,validation:!0},doctor:{type:"select",options:["Иванов","Захаров","Чернышева"],value:"",errorMessage:"",label:"Лечящий врач:"},noSms:{type:"checkbox",value:!1,label:"Не отправлять СМС:"}}}),address:t.Ay.observable({name:"Адресные данные",inputs:{index:{type:"text",value:"",errorMessage:"",label:"Индекс:",placeholder:"123456",realType:"number"},country:{type:"text",value:"",errorMessage:"",label:"Страна:",placeholder:"Россия",realType:"string"},region:{type:"text",value:"",errorMessage:"",label:"Регион:",placeholder:"Россиская Федерация",realType:"string"},city:{type:"text",value:"",errorMessage:"",label:"Город*:",required:!0,placeholder:"Москва",validation:!0,realType:"string"},street:{type:"text",value:"",errorMessage:"",label:"Улица:",placeholder:"Пушкина"},house:{type:"text",value:"",errorMessage:"",label:"Дом:",placeholder:"11а"}}}),passport:t.Ay.observable({name:"Паспортные данные",inputs:{documentType:{type:"select",options:["Паспорт","Свидетельство о рождении","Вод.удостоверение"],value:"",errorMessage:"",label:"Тип документа:"},series:{type:"text",value:"",errorMessage:"",label:"Серия:",placeholder:"7720",realType:"number"},number:{type:"text",value:"",errorMessage:"",label:"Номер:",placeholder:"1234 1234 123456",realType:"number"},issuedBy:{type:"text",value:"",errorMessage:"",label:"Кем выдан:",placeholder:"МВД РОССИИ",realType:"string"},issueDate:{type:"date",value:"",errorMessage:"",label:"Дата выдачи*:",required:!0,validation:!0}}})})}},methods:{submitForm(){console.log("Отправка формы",this.formData)},allowance(e,a){if(console.log("ok"),"number"==e.realType){let r=e.value.replace(/\D+/g,"");console.log(a,r),"phoneNumber"==a&&(r=r.match(/\d{1,10}/)),e.value=r}else"string"==e.realType&&(e.value=e.value.match(/\p{L}+/iu))}},validations:{formData:{basicInfo:{inputs:{phoneNumber:{value:{required:n.mw,maxLength:(0,n.Ru)(10),minLength:(0,n.Bp)(10),numeric:n.sH}},surname:{value:{required:n.mw}},name:{value:{required:n.mw}},birthdate:{value:{required:n.mw}},customerGroup:{value:{required:e=>!!e.length}}}},address:{inputs:{city:{value:{required:n.mw}}}},passport:{inputs:{issueDate:{value:{required:n.mw}}}}}}},i=u,s=r(1656),p=(0,s.A)(i,l,o,!1,null,null,null),c=p.exports,v=r(6529);t.Ay.config.productionTip=!1,t.Ay.config.devtools=!0,t.Ay.use(v.Ay),new t.Ay({render:e=>e(c)}).$mount("#app")}},a={};function r(t){var l=a[t];if(void 0!==l)return l.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(a,t,l,o){if(!t){var n=1/0;for(p=0;p<e.length;p++){t=e[p][0],l=e[p][1],o=e[p][2];for(var u=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[i])}))?t.splice(i--,1):(u=!1,o<n&&(n=o));if(u){e.splice(p--,1);var s=l();void 0!==s&&(a=s)}}return a}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[t,l,o]}}(),function(){r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,{a:a}),a}}(),function(){r.d=function(e,a){for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={524:0};r.O.j=function(a){return 0===e[a]};var a=function(a,t){var l,o,n=t[0],u=t[1],i=t[2],s=0;if(n.some((function(a){return 0!==e[a]}))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(i)var p=i(r)}for(a&&a(t);s<n.length;s++)o=n[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(p)},t=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(5327)}));t=r.O(t)})();
//# sourceMappingURL=app.698c6202.js.map