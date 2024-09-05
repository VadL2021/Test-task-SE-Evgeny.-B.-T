(()=>{"use strict";const e=[{image:"./images/main__menu-tab-1.svg",text:"Имущество",tabName:"Property"},{image:"./images/main__menu-tab-2.svg",text:"Инвентаризация",tabName:"Inventory"},{image:"./images/main__menu-tab-3.svg",text:"Сотрудники",tabName:"Employees"},{image:"./images/main__menu-tab-4.svg",text:"Уведомления",tabName:"Notices"},{image:"./images/main__menu-tab-5.svg",text:"Локации",tabName:"Locations"},{image:"./images/main__menu-tab-6.svg",text:"Настройки",tabName:"Settings"}];function t(){const e=document.querySelector(".main__navigation-buttons");if(e){e.remove();const t=document.createElement("div"),n=document.querySelector(".main__navigation-wrapper");t.className="main__navigation-buttons",n.append(t)}}function n(){let e=document.querySelector(".main__menu-info");e&&e.remove();const t=document.createElement("div");let n=localStorage.getItem("currentTabSection").split(",")[1],a=localStorage.getItem("currentTab");t.innerHTML=` ${a} / ${n}`,t.className="main__menu-info",document.querySelector(".main__navigation-wrapper").prepend(t)}function a(e,t=null,n=null,a=null){const o=document.createElement("div");if(o.className="button",n&&o.classList.add(n),t){const e=document.createElement("img");e.className="button-image",e.src=t,o.append(e)}const c=document.createElement("span");if(c.className="button-text",c.innerHTML=e,o.append(c),a){const e=document.createElement("div");e.className="button-date",e.innerHTML="(17.05.2024 15:22:21)",o.append(e)}return o}function o(){document.querySelector(".main__current-tab-content").remove();const e=document.createElement("div");e.className="main__current-tab-content",document.querySelector(".main__current-tab").append(e)}const c=[{name:"locations",text:"Все локации"},{name:"import/export",text:"Импорт/Экспорт"},{name:"settings",text:"Настройки"}];function s(){const e=localStorage.getItem("savedLocations");if(e)return JSON.parse(e);{const e=[{id:"1",name:"Локация 1",barcode:"1231231231233",RFID:"1231231231233",nesting:"root",isVirtual:"false",isForlosses:"false"},{id:"2",name:"Локация 2",barcode:"1231231231233",RFID:"1231231231233",nesting:"root",isVirtual:"false",isForlosses:"false"},{id:"3",name:"Локация 3",barcode:"1231231231233",RFID:"1231231231233",nesting:"root",isVirtual:"false",isForlosses:"false"},{id:"4",name:"Подраздел 1",barcode:"1231231231233",RFID:"1231231231233",nesting:"1",isVirtual:"false",isForlosses:"true"},{id:"5",name:"Подраздел 2",barcode:"1231231231233",RFID:"1231231231233",nesting:"1",isVirtual:"false",isForlosses:"false"},{id:"6",name:"Подраздел 3",barcode:"1231231231233",RFID:"1231231231233",nesting:"1",isVirtual:"false",isForlosses:"false"},{id:"7",name:"Подподраздел 1",barcode:"none",RFID:"1231231231233",nesting:"5",isVirtual:"true",isForlosses:"false"},{id:"8",name:"Подраздел 4",barcode:"1231231231233",RFID:"1231231231233",nesting:"2",isVirtual:"false",isForlosses:"false"},{id:"9",name:"Подраздел 5",barcode:"1231231231233",RFID:"1231231231233",nesting:"3",isVirtual:"false",isForlosses:"false"},{id:"10",name:"Подподраздел 2",barcode:"none",RFID:"1231231231233",nesting:"4",isVirtual:"true",isForlosses:"false"},{id:"11",name:"Подподраздел 3",barcode:"none",RFID:"1231231231233",nesting:"6",isVirtual:"true",isForlosses:"false"}];return localStorage.setItem("savedLocations",JSON.stringify(e)),e}}function i(){const e=document.querySelector(".main__current-tab-content"),t=a("СОЗДАТЬ ЛОКАЦИЮ","./images/create-location-button-image.svg","button_type_add-new");t.onclick=()=>{!function(){const e=s(),t=document.createElement("div");t.classList.add("pop-up__wrapper");const n=document.createElement("div");n.className="pop-up_type_add-location__form-name",n.textContent="Создать локацию";const a=document.createElement("input");a.className="pop-up_type_add-location__input",a.placeholder="Название",a.id="newLocationName",a.type="text";const c=document.createElement("input");c.className="pop-up_type_add-location__input",c.placeholder="Штрихкод",c.id="newLocationBarCode",c.type="text";const l=document.createElement("input");l.className="pop-up_type_add-location__input",l.placeholder="RFID",l.id="newLocationRFID",l.type="text";const m=document.createElement("select");m.className="pop-up_type_add-location__select",m.placeholder="Вложенность",m.id="newLocationParent";let d=document.createElement("option");d.textContent="root",m.append(d),e.forEach((e=>{let t=document.createElement("option");t.textContent=e.name,t.value=e.id,m.append(t)}));const r=document.createElement("div");r.className="pop-up_type_add-location__toggle",r.id="newLocationIsVirtualToggle",r.textContent="Виртуальная локация",r.onclick=()=>{switch(r.className){case"pop-up_type_add-location__toggle":r.className="pop-up_type_add-location__toggle_active";break;case"pop-up_type_add-location__toggle_active":r.className="pop-up_type_add-location__toggle"}};const p=document.createElement("div");p.className="pop-up_type_add-location__toggle",p.id="newLocationIsForlossesToggle",p.textContent="Локация для утерь",p.onclick=()=>{switch(p.className){case"pop-up_type_add-location__toggle":p.className="pop-up_type_add-location__toggle_active";break;case"pop-up_type_add-location__toggle_active":p.className="pop-up_type_add-location__toggle"}};const u=document.createElement("div");u.className="pop-up_type_add-location__buttons-wrapper";const _=document.createElement("div");_.classList.add("button"),_.classList.add("pop-up_type_add-location__save-button");const g=document.createElement("img");g.className="button-image",g.src="src/common.blocks/pop-up/_type/_add-location/images/pop-up_type_add-location.svg";const b=document.createElement("div");b.className="button-text",b.textContent="СОЗДАТЬ",b.onclick=()=>{let t=null,n=null;t="pop-up_type_add-location__toggle_active"==r.className?"true":"false",n="pop-up_type_add-location__toggle_active"==p.className?"true":"false";let s=0;e.forEach((e=>{s<=e.id&&(s=+e.id+1)}));const d={id:String(s),name:a.value,barcode:c.value,RFID:l.value,nesting:m.value,isVirtual:t,isForlosses:n};e.push(d),localStorage.setItem("savedLocations",JSON.stringify(e)),o(),i(),document.querySelector(".pop-up").remove()},_.append(g,b);const v=document.createElement("div");v.classList.add("button"),v.classList.add("pop-up_type_add-location__cancel-button");const N=document.createElement("div");N.className="button-text",N.textContent="ОТМЕНИТЬ",v.onclick=()=>{document.querySelector(".pop-up").remove()},v.append(N),u.append(_,v);const y=document.createElement("div");y.classList.add("pop-up"),y.classList.add("pop-up_type_add-location"),t.append(n),t.append(a),t.append(c),t.append(l),t.append(m),t.append(r),t.append(p),t.append(u),y.append(t),document.querySelector("body").append(y)}()},e.append(t);const n=function(e=null){const t=document.createElement("div");return t.classList.add("checkbox"),e&&t.classList.add(e),t.onclick=()=>{t.classList.contains("checkbox_active")?t.classList.remove("checkbox_active"):t.classList.add("checkbox_active")},t}("checkbox_labeled"),c=document.createElement("span");c.className="label",c.textContent="Поиск по точному вхождению";const l=function(){const e=document.createElement("div");e.className="search-bar";const t=document.createElement("img");t.className="search-bar-image",t.src="./images/search-bar-loop-image.svg";const n=document.createElement("input");return n.className="search-bar-input",n.placeholder="ПОИСК",e.append(t,n),e}();e.append(n,c,l);const m=document.createElement("div");m.className="content-list",m.id="root",e.append(m);const d=[],r=s();r.forEach((e=>{console.log("this is me: "+r);const t=document.createElement("div");t.className="content-list__item",t.id=e.id,t.classList.add("content-list__item_colapsed"),d.push(t)})),r.forEach((e=>{const t=d.find((t=>t.id==e.id)),n=document.createElement("div");n.className="content-list__item-inner-wrapper",t.append(n);const c=document.createElement("div");c.className="content-list__expand-switch";let s=null;r.forEach((t=>{t.nesting==e.id&&(s=!0)})),s||(c.className="content-list__expand-switch_hidden"),c.onclick=()=>{t.classList.contains("content-list__item_colapsed")?(t.classList.remove("content-list__item_colapsed"),c.className="content-list__expand-switch_active"):(t.classList.add("content-list__item_colapsed"),c.className="content-list__expand-switch")},n.append(c);const l=document.createElement("div");l.className="content-list__three-dots",n.append(l);const m=document.createElement("div");m.className="content-list__location-name",m.textContent=e.name,n.append(m);const p=document.createElement("div");if(p.className="content-list__location-RFID",p.textContent=e.RFID,n.append(p),"true"==e.isForlosses){const e=document.createElement("div");e.className="content-list__parameter-indicator",e.textContent="Для утерь",n.append(e)}if("true"==e.isVirtual){const e=document.createElement("div");e.className="content-list__parameter-indicator",e.textContent="Виртуальная",n.append(e)}if("none"==e.barcode){const e=document.createElement("div");e.className="content-list__no-barcode-warning",e.textContent="Без штрихкода",n.append(e)}const u=a("Редактировать","./images/redact-location-button.svg","content-list__interaction-button"),_=a("Удалить","./images/delete-location-button.svg","content-list__interaction-button");_.onclick=()=>{let t=r.filter((t=>t.id!=e.id));t=t.filter((t=>t.nesting!=e.id)),localStorage.setItem("savedLocations",JSON.stringify(t)),o(),i()},n.append(u,_),document.getElementById(e.nesting).append(t)}))}function l(){const e=a("СИНХРОНИЗАЦИЯ","./images/sync-button-image.svg","button_type_synchronization","(17.05.2024 15:22:21)");!function(e,t=null){const n=document.querySelector(".main__navigation-buttons");n||(document.createElement("div").className="main__navigation-buttons"),e.forEach((e=>{const t=document.createElement("div");t.innerHTML=e.text,t.className="button_type_switch",t.onclick=()=>{const n=document.getElementsByClassName("button_active");n[0]&&n[0].classList.remove("button_active"),t.classList.add("button_active"),localStorage.setItem("currentTabSection",`${e.name}, ${e.text}`)},n.append(t)})),t&&n.append(t)}(c,e),document.querySelectorAll(".button_type_switch").forEach((e=>{e.addEventListener("click",(()=>{n(),function(){switch(localStorage.getItem("currentTabSection").split(",")[0]){case"locations":o(),i();break;case"import/export":case"settings":o()}}()}))}))}!function(){e.forEach((e=>{const c=a(e.text,e.image,"main__menu-tab");c.onclick=()=>{const a=document.getElementsByClassName("main__menu-tab_active");switch(a[0]&&a[0].classList.remove("main__menu-tab_active"),c.classList.add("main__menu-tab_active"),localStorage.setItem("currentTab",e.text),localStorage.setItem("currentTabSection",["",""]),n(),o(),e.tabName){case"Locations":t(),l();break;case"Property":case"Inventory":case"Employees":case"Notices":case"Settings":t()}},document.querySelector(".main__menu").append(c)}));const c=a("Скрыть меню","./images/hide-menu-button.svg","main__menu-button"),s=document.querySelector(".main__menu");c.onclick=()=>{s.style.display="none"},s.append(c)}(),function(){const e=document.createElement("div");e.className="main__locations";const t=document.createElement("div");t.className="main__navigation-wrapper",e.append(t);const n=document.createElement("div");n.className="main__navigation-info";const a=document.createElement("div");a.className="main__navigation-buttons",t.append(n,a);const o=document.createElement("div");o.className="main__current-tab-content",document.querySelector(".main__current-tab").append(t,o)}()})();