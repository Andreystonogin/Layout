import { svgContactDefault} from "./img/svg.js"
import { svgAddUser } from "./img/svg.js"
import { svgDelete } from "./img/svg.js"
import {svgVk} from "./img/svg.js"
import {svgFb } from "./img/svg.js"
import { svgPhone } from "./img/svg.js"
import { svgEmail } from "./img/svg.js"
import {svgOther } from "./img/svg.js"
import { svgPreloadMain } from "./img/svg.js"

const createContactLink =(type,value,svg,item,visible)=>{
    const setTooltip = contactTooltip(type,value)
const element=document.createElement('a');
element.classList.add('contacts__link');
element.innerHTML =svg;
if(visible) {
    element.classList.add('display-none')
}





if (type ==='Email'){
    element.href =`mailto:${value.trim()}`
}else if (type === 'Телефон'){
    element.href=`tel:${value.trim()}`
    setTooltip.tooltipValue.style.color='var(--color-white'
    setTooltip.tooltipValue.style.textDecoration='none'
} else {
    element.href=value.trim()
}
element.append(setTooltip.tooltip)
item.append(element);


}




const createContactItemByType =(type,value,item,visible) => {
    switch (type) {
    
        case 'Телефон':
            let phone;
            createContactLink(type,value,svgPhone,item,visible)
            break;
            case 'Facebook':
                let fb;
                createContactLink(type,value,svgFb,item,visible)
                break;
                case 'VK':
                    let vk;
                    createContactLink(type,value,svgVk,item,visible)
                    break;
                    case 'Email':
                    let email;
                    createContactLink(type,value,svgEmail,item,visible)
                    break;
                    // case 'Age':
                    // let age;
                    // createContactLink(type,value,svgAge,item,visible)
                    // break;
                    case 'Другое':
                    let other;
                    createContactLink(type,value,svgOther,item,visible)
                    break;
            default:
                break
    }
}


const formatDate =data=> {
    const newDate =new Date(data)

    const correctDate ={
        year:'numeric',
        month: 'numeric',
        day:'numeric',
    }

    const resultDate =newDate.toLocaleString('ru',correctDate)

  return resultDate;
}

const formatTime =data=> {
    const newDate =new Date(data)

    const correctTime ={
        hour:'numeric',
        minute: 'numeric',
 
    }

    const resultTime =newDate.toLocaleString('ru',correctTime)

  return resultTime;
}



 const createClientsHeader =()=> {
    const header =document.createElement ('header')
    const logo =document.createElement('a')
    const logoImg =document.createElement('img')
    const form =document.createElement('form')
    const input =document.createElement('input')
    const container =document.createElement('div')
    const wrapper = document.createElement('div')
    const inner =document.createElement('div')
    const findList=document.createElement('ul')

    findList.classList.add('find-list','hide')
    header.classList.add('header');
    container.classList.add('container','header__container')
    logo.classList.add('logo','header__logo')
    logoImg.classList.add('logo__img')
    logoImg.src='img/logo.svg' 
    logoImg.alt='logotype Clients';
    form.classList.add('header__form')
    input.classList.add('header__input')
    wrapper.classList.add('header__wrapper')
    inner.classList.add('header__inner')
    input.placeholder='Введите запрос'
     
    inner.append(input,findList)
    header.append(container)
    logo.append(logoImg)
    form.append(inner)
    container.append(logo,form)

    return header
 }



   

 const createClientsSection =()=>{
    const section = document.createElement('section')
    const h1 = document.createElement('h1')
    const container = document.createElement('div')
    const main = document.createElement('main')
    const sortingDisplay = document.createElement('thead')
    const theadTr = document.createElement('tr')
    const sortingDisplayId=document.createElement('th')
    const sortingDisplayName = document.createElement('th')
    const sortingDisplayCreate = document.createElement('th')
    const sortingDisplayEdit = document.createElement('th')
    const sortingDisplayContacts = document.createElement('th')
    const sortingDisplayActions = document.createElement('th')
    const sortingDisplaySpan = document.createElement('span')
    const addUserBtn = document.createElement('span')
    const addUserBtnSvg = document.createElement('span')
    const tableWrapper = document.createElement('div')
    const clientsTable = document.createElement('table')
    const tbody = document.createElement('tbody')
    const createSpan =document.createElement('span')
    const editSpan =document.createElement('span')

    const sortDisplayItems =[sortingDisplayId,sortingDisplayName,sortingDisplayCreate,sortingDisplayEdit]
    
    for(const item of sortDisplayItems){
      item.addEventListener('click',()=>{
        if(item.classList.contains('sort-down')){
            item.classList.remove('sort-down');
            item.classList.add('sort-up')
        } else{
            item.classList.add('sort-down');
            item.classList.remove('sort-up');
        }
    
      })
    }
    sortingDisplayCreate.addEventListener('click',()=>{
        if(sortingDisplayCreate.classList.contains('sort-down')){
            createSpan.classList.add('sort-up');
        }else{
createSpan.classList.remove('sort-up')
        }
        
    })

    sortingDisplayEdit.addEventListener('click',()=>{
        if(sortingDisplayEdit.classList.contains('sort-down')){
            editSpan.classList.add('sort-up');
        }else{
editSpan.classList.remove('sort-up')
        }
        
    })
    sortingDisplayId.setAttribute('data-type','id')
    sortingDisplayName.setAttribute('data-type','text')
    sortingDisplayCreate.setAttribute('data-type','create')
    sortingDisplayEdit.setAttribute('data-type','update')

    section.classList.add('clients')
    tableWrapper.classList.add('clients__wrapper')
    h1.classList.add('client__heading')
    tbody.classList.add('clients__tbody')
    sortingDisplay.classList.add('clients__display','display-info')
    sortingDisplayId.classList.add('display-info__item','display-info__item--id','sort-up')
    sortingDisplayName.classList.add('display-info__item','display-info__item--name','sort-down')
    sortingDisplayCreate.classList.add('display-info__item','display-info__item--create','sort-up')
    sortingDisplayEdit.classList.add('display-info__item','display-info__item--change','sort-down')
    sortingDisplayContacts.classList.add('display-info__item','display-info__item--contacts')
    sortingDisplayActions.classList.add('display-info__item','display-info__item--actions')
    sortingDisplaySpan.classList.add('display-info__sorting')
    addUserBtn.classList.add('clients__btn','btn-reset')
    addUserBtnSvg.classList.add('display-info__sorting')
    sortingDisplaySpan.classList.add('clients__svg')
    container.classList.add('container','clients__container')
    clientsTable.classList.add('clients__table')
    main.classList.add('main')
    createSpan.classList.add('create__span')
    editSpan.classList.add('change__span')

    h1.textContent ='Клиенты'
    sortingDisplayId.textContent='id'
    sortingDisplayName.textContent='Фамилия Имя Отчество'
    sortingDisplaySpan.textContent='а-я'
    sortingDisplayCreate.textContent='Дата и время создания'
    sortingDisplayEdit.textContent='Последние изменения'
    sortingDisplayContacts.textContent='Контакты'
    sortingDisplayActions.textContent='Действия'
    addUserBtn.textContent='Добавить клиента'
    addUserBtnSvg.innerHTML=[svgAddUser]

    addUserBtn.addEventListener('click',()=>{
        document.body.append(addClientModal())
    });

    main.append(section)
    section.append(container)
    sortingDisplayName.append(sortingDisplaySpan)
    sortingDisplayCreate.append(createSpan)
    sortingDisplayEdit.append(editSpan)
    theadTr.append(
        sortingDisplayId,
        sortingDisplayName,
        sortingDisplayCreate,
        sortingDisplayEdit,
        sortingDisplayContacts,
        sortingDisplayActions,
    )
    sortingDisplay.append(theadTr)
    tableWrapper.append(clientsTable,createPreloader())
    clientsTable.append(sortingDisplay,tbody)
    addUserBtn.append(addUserBtnSvg)
    container.append(h1,tableWrapper,addUserBtn)

    return{
        main,
        clientsTable,
        tbody,
    }
}



 const createClientsForm =()=>{
    const modalTitle =document.createElement ('h2');
    const modalClose =document.createElement('button');
    const form =document.createElement('form');
    const inputName =document.createElement ('input');
    const labelName =document.createElement ('label');
    const inputSurname =document.createElement ('input');
    const labelSurname =document.createElement ('label');
    const inputLastName =document.createElement ('input');
    const labelLastName =document.createElement ('label');
    const requiredName =document.createElement ('span');
    const requiredSurname =document.createElement ('span');
    const addContactBtn =document.createElement ('button');
    const contactBtnSvgDefault =document.createElement ('span');
    const saveBtn =document.createElement ('button');
    const cancelBtn =document.createElement ('button');
    const contactsBlock =document.createElement ('div');
    const formFloatingName =document.createElement ('div');
    const formFloatingSurname=document.createElement ('div');
    const formFloatingLastName =document.createElement ('div');

    const errorBlock =document.createElement('p')
    const unacceptableLetter =document.createElement('span')
    const writeName =document.createElement('span')
    const writeSurname =document.createElement('span')
    const writeLastName =document.createElement('span')
    const requiredValuve =document.createElement('span')
    const requiredContacts =document.createElement('span')

    errorBlock.classList.add('modal__error')
    unacceptableLetter.id='unacceptableLetter'
    writeName.id='writeName'
    writeSurname.id='writeSurname'
    writeLastName.id='writeLastName'
    requiredValuve.id='requiredValuve'
    requiredContacts.id='requiredContacts'

    
  
    modalTitle.classList.add('modal__title');
    modalClose.classList.add('modal__close','btn-reset');
    form.classList.add('modal__form');
    formFloatingName.classList.add('form-floating');
    formFloatingSurname.classList.add('form-floating');
    formFloatingLastName.classList.add('form-floating');
    inputName.classList.add('modal__input');
    inputSurname.classList.add('modal__input');
    inputLastName.classList.add('modal__input');
    labelName.classList.add('modal__label');
    labelSurname.classList.add('modal__label');
    labelLastName.classList.add('modal__label');
    requiredName.classList.add('modal__label');
    requiredSurname.classList.add('modal__label');
    addContactBtn.classList.add('modal__btn-contact','modal__btn-contact--active');
    saveBtn.classList.add('modal__btn-save','btn-reset','site-btn');
    cancelBtn.classList.add('modal__btn-back','btn-reset');
    contactBtnSvgDefault.classList.add('btn-contact__svg','btn-contact__svg--default','btn-contact__svg--active');
    contactsBlock.classList.add('modal__contact');

    labelName.for='floatingName';
    labelSurname.for='floatingSurname';
    labelLastName.for='floatingLastName';
    inputName.id='floatingName';
    inputSurname.id='floatingSurname';
    inputLastName.id='floatingLastName';
    inputName.type='text';
    inputSurname.type='text';
    inputLastName.type='text';
    inputName.placeholder='Имя'
    inputSurname.placeholder='Фамилия';
    inputLastName.placeholder='Отчество';

   
    modalTitle.textContent='Новый клиент';
    labelName.textContent='Имя';
    labelSurname.textContent='Фамилия';
    labelLastName.textContent='Отчество';
    addContactBtn.textContent='Добавить контакт';
    saveBtn.textContent='Сохранить';
    cancelBtn.textContent='Отмена';
    requiredName.textContent='*';
    requiredSurname.textContent='*';
    contactBtnSvgDefault.innerHTML=svgContactDefault;


    labelName.append(requiredName)
    labelSurname.append(requiredSurname)
    formFloatingName.append(inputName,labelName)
    formFloatingSurname.append(inputSurname,labelSurname)
    formFloatingLastName.append(inputLastName,labelLastName)
    contactsBlock.append(addContactBtn)
    errorBlock.append(writeName,writeSurname,writeLastName,requiredValuve,unacceptableLetter,requiredContacts)
    form.append(
        formFloatingName,
        formFloatingSurname,
        formFloatingLastName,
        contactsBlock,
        errorBlock,
        saveBtn,
        cancelBtn
    )
    
    addContactBtn.append(contactBtnSvgDefault)

    addContactBtn.addEventListener('click',(e)=>{
      
        e.preventDefault();
        const constsItem= document.getElementsByClassName('contact')

        

        if(constsItem.length<9){
            const constsItem=createContactItem()
            contactsBlock.prepend(constsItem.contact)
            contactsBlock.style.backgroundColor= 'var(--color-athens-gray)'
           
        } else {
            const constsItem=createContactItem()
            contactsBlock.prepend(constsItem.contact)
            addContactBtn.classList.remove('modal__btn-contact--active')
        }

        

        if(constsItem.length===8){
       
            document.querySelector('.site-modal__content').style.top ='75%'
        } 
        else if (constsItem.length<8){
            document.querySelector('.site-modal__content').style.top ='50%'
        }
    })


    return{
        form,
        modalClose,
        modalTitle,
        cancelBtn,
        inputName,
        inputSurname,
        inputLastName,
        labelName,
        labelSurname,
        labelLastName,
        contactsBlock,
        addContactBtn
    }
}


 function addClientModal(){
    const createForm=createClientsForm()
    const modal =document.createElement('div')
    const modalContent = document.createElement('div')

    modal.classList.add('modal','site-modal','modal-active')
    modalContent.classList.add('modal__content','site-modal__content','modal-active')
    createForm.form.classList.add('add-client')

    modal.append(modalContent)
    modalContent.append(createForm.modalClose,createForm.modalTitle,createForm.form)

    createForm.form.addEventListener('submit', async(e)=>{
  
      if(!validateClientForm()){
        e.preventDefault()
        return
      }
  
    
        const contactTypes =document.querySelectorAll('.contact__name')
        const contactValues = document.querySelectorAll('.contact__input')
        let contacts =[]
        let clientObj={}

        for(let i=0;i<contactTypes.length;i++){
           if(!validateClientContact(contactTypes[i],contactValues[i])){
            e.preventDefault()
            return
           }
            contacts.push({
                type:contactTypes[i].innerHTML,
                value:contactValues[i].value

            })
        }
        clientObj.name=createForm.inputName.value
        clientObj.surname=createForm.inputSurname.value
        clientObj.lastName=createForm.inputLastName.value
        clientObj.contacts=contacts
        console.log(clientObj)

 


        await sendClientData(clientObj,'POST')
  
    })

    createForm.modalClose.addEventListener('click',()=>{
  
            modal.remove()
    
    })

    document.addEventListener ('click',(e)=>{
     
        if(e.target == modal){
            modal.remove()
        }
    })
    return modal;
}

function createContactItem (){
    const contact =document.createElement('div')
    const contactType =document.createElement('div')
    const contactName =document.createElement('button')
    const contactList =document.createElement('ul')
    const contactPhone =document.createElement('li')
    const contactVk =document.createElement('li')
    const contactFb =document.createElement('li')
    const contactEmail =document.createElement('li')
    const contactOther =document.createElement('li')
    const contactInput =document.createElement('Input')
    const contactDelete =document.createElement('button')
    const contactDeleteTooltip =document.createElement('span')

    contact.classList.add('contact')
    contactDeleteTooltip.classList.add('contact-tooltip','site-tooltip')
    contactType.classList.add('contact__type')
    contactName.classList.add('contact__name')
    contactList.classList.add('contact__list','list-reset')
    contactPhone.classList.add('contact__item')
    contactVk.classList.add('contact__item')
    contactFb.classList.add('contact__item')
    contactEmail.classList.add('contact__item')
    contactOther.classList.add('contact__item')
    contactInput.classList.add('contact__input')
    contactDelete.classList.add('contact__delete','btn-reset')

    contactName.textContent='Телефон'
    contactDeleteTooltip.textContent='Удалить контакт'
    contactPhone.textContent='Телефон'
    contactVk.textContent='VK'
    contactEmail.textContent='Email'
    contactFb.textContent='Facebook'
    contactOther.textContent='Другое'
    contactInput.placeholder='Введите данные контакта'
    contactInput.type='text'
    contactDelete.innerHTML=svgDelete

    contactDelete.addEventListener('click',(e)=>{
      
        e.preventDefault()
        contact.remove()
      
        document.querySelector('.modal__btn-contact').classList.add('modal__btn-contact--active')
    })

    contactName.addEventListener('click',(e)=>{
  
        e.preventDefault()

        contactList.classList.toggle('contact__list--active');
        contactName.classList.toggle('contact__list--active')
    })

    contactType.addEventListener('mouseleave',()=>{
        contactList.classList.remove('contact__list--active')
        contactName.classList.remove('contact__list--active')
    })

    const setType =(type)=> {
        type.addEventListener('click',()=>{
    
            contactName.textContent=type.textContent
            contactName.classList.remove('contact__list--active')
            contactList.classList.remove('contact__list--active')
        })
    }

    const typesArr =[contactEmail,contactFb,contactVk,contactPhone,contactOther]

    for(const type of typesArr) {
        setType(type)
    }

    contactDelete.append(contactDeleteTooltip)
    contact.append(contactType,contactInput,contactDelete)
    contactType.append(contactName,contactList)
    contactList.append(contactPhone,contactEmail,contactVk,contactFb,contactOther)

    return {
        contact,
        contactName,
        contactInput,
        contactDelete
    }
}

const getClients = async ()=>{

    try{
       const response= await fetch ('http://localhost:3000/api/clients',{
            method:'GET'
        });
                const result =await response.json()
            
                return result

    }catch(error){
        console.log(error)
    }
    }


   const  sendClientData =async(client,method,id=null)=>{
        try{
        await fetch (`http://localhost:3000/api/clients/${method==='POST' ?'': id}`,{
        
            method,
            body:JSON.stringify(client)
        });
    }catch(error){
console.log(error)
    }

    }

    const deleteClientItem =async(id)=>{
 try{
    await fetch (`http://localhost:3000/api/clients/${id}`,{
        method:'DELETE',
   
    });
 }catch{
    console.log(error)
 }
       

    }

    const findClient =async(value)=>{
        try {
            const response= await fetch (`http://localhost:3000/api/clients?search=${value}`,{
            method:'GET'
        });
                const result =await response.json()
                return result
            
        } catch (error) {
            console.log(error)
        }
    }

    const createPreloader=()=>{
        const preloaderBlock = document.createElement('div')
        const preloaderCircle = document.createElement('span')

        preloaderBlock.classList.add('preloader')
        preloaderCircle.id='loader';

        preloaderCircle.innerHTML=svgPreloadMain;

        preloaderBlock.append(preloaderCircle)

        return preloaderBlock
    }


    const createApp= async()=>{
        const clients =await getClients()

        const header= createClientsHeader()
       
         const clientsSection=createClientsSection()
  
         document.body.append(header,clientsSection.main)

        sortTable()
         searchClients(clients)

  setTimeout(() => {


         let preloader =document.querySelector('.preloader')

            preloader.remove()
        
            for(const client of clients){
           
           
                    document.querySelector('.clients__tbody').append(createClientItem(client))
        }

    }, 3000
    )

    }

        createApp();
      


        const createClientItem =(data)=>{
            const clientTr =document.createElement('tr')
            const clientIdTd= document.createElement('td')
            const clientId =document.createElement('span')
            const clientFulName =document.createElement('td')
            const clientName =document.createElement('span')
            const clientSurname =document.createElement('span')
            const clientLastName =document.createElement('span')
            const clientCreated =document.createElement('td')
            const createdDate =document.createElement('span')
            const createdTime =document.createElement('span')
            const clientChanged =document.createElement('td')
            const changetDate =document.createElement('span')
            const changetTime =document.createElement('span')
            const clientContacts =document.createElement('td')
            // const clientContactsAge=document.createElement('span')
            const clientActions =document.createElement('td')
            const clientEdit =document.createElement('button')
            const clientDelete =document.createElement('button')
            const deleteClient = deletClientModal()
            const editClient = editClientModal(data)
            createdDate.textContent=formatDate(data.createdAt)
            createdTime.textContent=formatTime(data.createdAt)
            changetDate.textContent=formatDate(data.updatedAt)
            changetTime.textContent=formatTime(data.updatedAt)
   
            

            clientTr.classList.add('clients__item')
            clientTr.id=data.id
            clientIdTd.classList.add('client__id')
            clientFulName.classList.add('clients__full-name')
            clientName.classList.add('clients__name')
            clientSurname.classList.add('clients__surname')
            clientLastName.classList.add('clients__lastname')
            clientCreated.classList.add('clients__created')
            createdDate.classList.add('created__date')
            createdTime.classList.add('created__time')
            clientChanged.classList.add('created__changed')
            changetDate.classList.add('changed__date')
            changetTime.classList.add('changed__time')
            clientContacts.classList.add('clients__contacts')
            // clientContactsAge.classList.add('client__cotacts-age')
            clientActions.classList.add('clients__actions')
            clientContacts.classList.add('clients__contacts')
            clientDelete.classList.add('clients__delete','btn-reset')
            clientEdit.classList.add('clients__edit','btn-reset')
       

         
          
            data.contacts.forEach((contact,index) =>{
    
              const  visible=data.contacts.length >5 && index>=4
               createContactItemByType(contact.type,contact.value,clientContacts,visible)
                
            })
                const span=document.createElement('span');
            
            if (data.contacts.length>5) {
                span.textContent=data.contacts.length-4;
                span.classList.add('span-svg')
                clientContacts.append(span)
                }

                span.addEventListener('click',()=>{
                    const hiddenTags=clientContacts.querySelectorAll('.display-none')
     
                for(let i=0;i<hiddenTags.length;i++){
                    console.log(hiddenTags[i])
                    hiddenTags[i].classList.remove('display-none')  
                }
                const spanDeleteSvg = clientContacts.querySelector('.span-svg').style.display='none'
                  
                    })
                    const deleteById=()=>{
                        deleteClient.deleteModalDelete.addEventListener('click',async ()=>{
                       
                       await deleteClientItem(data.id)
                       clientTr.remove()

                       const deleteModal=document.querySelector('.delete-modal')
                     deleteModal.remove()
                      })
                    }

                    clientDelete.addEventListener('click',()=>{
                        deleteById()
                        document.body.append(deleteClient.deleteModal)
                    })

                    clientEdit.addEventListener('click',()=>{
                        document.body.append(editClient.editModal)
                    })

            clientId.textContent=data.id.substr(0,6)
            clientName.textContent=data.name
            clientSurname.textContent=data.surname
            clientLastName.textContent=data.lastName
            clientEdit.textContent='Изменить'
            clientDelete.textContent='Удалить'

            clientIdTd.append(clientId) 
            clientFulName.append(clientName,clientSurname,clientLastName)
            clientCreated.append(createdDate,createdTime);
            clientChanged.append(changetDate,changetTime)
            clientActions.append(clientEdit,clientDelete)
            clientTr.append(
                clientIdTd,
                clientFulName,
                clientCreated,
                clientChanged,
                clientContacts,
                // clientContactsAge,
                clientActions,
           
            )
            return clientTr;
        }
     
        const deletClientModal =()=>{
            const deleteModalContentent= document.createElement('div')
            const modalClose= document.createElement('button')
            const deleteModalTitle= document.createElement('h2')
            const deleteModalText= document.createElement('p')
            const deleteModal= document.createElement('div')
            const deleteModalDelete= document.createElement('button')
            const deleteModalBack=document.createElement('button')

            deleteModal.classList.add('delete-modal','site-modal','modal-active')
            deleteModalContentent.classList.add('delete-modal__content','site-modal__content','modal-active')
            deleteModalText.classList.add('delete-modal__text')
            deleteModalTitle.classList.add('delete-modal__title','modal__title')
            deleteModalDelete.classList.add('delete-modal__delete','btn-reset','site-btn')
            deleteModalBack.classList.add('delete-modal__back','btn-reset')
            modalClose.classList.add('modal__close','btn-reset')

            deleteModalTitle.textContent='Удалить клиента';
            deleteModalText.textContent='Вы действительно хотите удалить данного клиента'
            deleteModalDelete.textContent='Удалить'
            deleteModalBack.textContent='Отмена'

            deleteModalContentent.append(
                modalClose,
                deleteModalTitle,
                deleteModalText,
                deleteModalDelete,
                deleteModalBack
            )
            deleteModal.append(deleteModalContentent)

          modalClose.addEventListener('click',()=> deleteModal.remove())
          deleteModalBack.addEventListener('click',()=> deleteModal.remove())

            window.addEventListener('click',(e)=>{
                if(e.target===deleteModal){
                    deleteModal.remove()
                }
            })

            return {
                deleteModal,
                deleteModalContentent,
                deleteModalDelete
            }
        }

        const editClientModal =(data)=>{
            const editModal=document.createElement('div')
            const editModalContent = document.createElement('div')
            const createForm=createClientsForm()
            const titleId=document.createElement('span')
           
            titleId.classList.add('modal__id')
            editModal.classList.add('modal-edit','site-modal','modal-active')
            editModalContent.classList.add('edit-modal__content','site-modal__content','modal-active')
           
         
            titleId.textContent='ID:' + data.id.substr(0,6);
            createForm.modalTitle.textContent='Изменить данные'
            createForm.cancelBtn.textContent='Удалить клиента'

            createForm.cancelBtn.addEventListener('click',(e)=>{
             
                e.preventDefault()
                const deleteModal=deletClientModal()
                document.body.append(deleteModal.deleteModal)

                deleteModal.deleteModalDelete.addEventListener('click',()=>{
                    deleteClientItem(data.id)
                    document.getElementById(data.id).remove()
                    const deleteModalDiv=document.querySelector('.delete-modal')
                    deleteModalDiv.remove()
                    const deleteModalDivEdit=document.querySelector('.modal-edit')
                    console.log(deleteModalDivEdit)
                    deleteModalDivEdit.remove()
                })
               
            })

            createForm.modalClose.addEventListener('click',()=>{
                editModal.remove()
            })

            createForm.inputName.value=data.name
            createForm.inputSurname.value=data.surname
            createForm.inputLastName.value=data.lastName

            for(const contact of data.contacts){
                const createContact=createContactItem()

                createContact.contactName.textContent=contact.type;
                createContact.contactInput.value=contact.value;

                createForm.contactsBlock.prepend(createContact.contact)
                createForm.contactsBlock.style.backgroundColor= 'var(--color-athens-gray)'
            }

            if (data.contacts.length==10){
                createForm.addContactBtn.classList.remove('modal__btn-contact--active')
            }

            createForm.form.addEventListener('submit',()=>{
                // e.preventDefault()
                const contactTypes =document.querySelectorAll('.contact__name')
                const contactValues= document.querySelectorAll('.contact__input')
                let contacts =[]
                let client={}

                for(let i =0;i<contactTypes.length;i++){
                    contacts.push({
                        type:contactTypes[i].innerHTML,
                        value:contactValues[i].value
                    })
                }

                client.name=createForm.inputName.value
                client.surname=createForm.inputSurname.value
                client.lastName=createForm.inputLastName.value
                client.contacts=contacts

                sendClientData(client,'PATCH',data.id) 
            })

            createForm.modalTitle.append(titleId)
            editModalContent.append(createForm.modalClose,createForm.modalTitle,createForm.form)
            editModal.append(editModalContent)
    

           

            document.addEventListener('click',(e)=>{
                if(e.target==editModal){
                    editModal.remove()
                }

            })

            return{
            
                editModal,
                editModalContent
            }
        }

        const contactTooltip =(type,value)=>{
            const tooltip=document.createElement('div')
            const tooltipType=document.createElement('span')
            const tooltipValue=document.createElement('a')

            tooltip.classList.add('contact-tooltip','site-tooltip')
            tooltipType.classList.add('contact-tooltip__type')
            tooltipValue.classList.add('contact-tooltip__value')

            tooltipType.textContent=type +':'
            tooltipValue.textContent=value

            tooltip.append(tooltipType,tooltipValue);

            return {
                tooltip,
                tooltipType,
                tooltipValue
            }
        }

        
       const validateClientForm=()=>{
        const userName =document.getElementById('floatingName')
        const userSurname =document.getElementById('floatingSurname')
        const userLastName =document.getElementById('floatingLastName')
        const unacceptableLetter =document.getElementById('unacceptableLetter')
        const writeName =document.getElementById('writeName')
        const writeSurname =document.getElementById('writeSurname')
        const writeLastName =document.getElementById('writeLastName')
        const requiredValuve =document.getElementById('requiredValuve')
        const validateArray =[unacceptableLetter,writeName,writeSurname,writeLastName,requiredValuve]
        console.log(validateArray)
        const regexp=/[^а-яА-Я]+$/g;

        const onInputValue =input =>{
            input.addEventListener('input',()=>{
                input.style.borderColor='var(--color-gray-suit)'
                for(const item of validateArray){
                    item.textContent='';
                }
            });
            input.oncut=input.oncopy=input.onpaste=()=>{
            input.style.borderColor='var(--color-gray-suit)'
                for(const item of validateArray){
                    item.textContent='';
                }
            }
            input.onchange=()=>{
                input.style.borderColor='var(--color-gray-suit)'
                if(userSurname.value && userName.value && userLastName.value){
                    for(const item of validateArray){
                        item.textContent=''
                    }
                }
                }
        }

        onInputValue(userName)
        onInputValue(userSurname)
        onInputValue(userLastName)

        const checkRequiredNaame=(input,message,name)=>{
            if(!input.value){
                input.style.borderColor='var(--color-burnt-sienna)'
                message.textContent=`Введите ${name} клиента!`
                return false
            }else {
                message.textContent=''
            }
            return true
        }

        const checkByRegexp =(input,regexp)=>{
            if (regexp.test(input.value)){
                input.style.borderColor='var(--color-burnt-sienna)'
                unacceptableLetter.textContent='Недопустимые сииволы'
                return false
            }

            return true
        }

        if(!checkRequiredNaame(userSurname,writeSurname,'Фамилию')){return false}
        if(!checkRequiredNaame(userName,writeName,'Имя')){return false}
        if(!checkRequiredNaame(userLastName,writeLastName,'Отчество')){return false}
        if(!checkByRegexp(userName,regexp)){return false}
        if(!checkByRegexp(userSurname,regexp)){return false}
        if(!checkByRegexp(userLastName,regexp)){return false}

        return true     
}

const validateClientContact=(contactType,contactInput)=> {
const writeValue =document.getElementById('writeName')
const onlyNumbers =/[^0-9]+$/g
const onlyEmail=/[^a-zA-Z|@|.]+$/g

const onInputValue=input=>{
    input.addEventListener('input',()=>{
        input.style.borderColor='var(--color-gray-suit)'
            writeValue.textContent=''
      
    })
    input.oncut=input.oncopy=input.onpaste=()=>{
        input.style.borderColor='var(--color-gray-suit)'
        writeValue.textContent=''
  
    }
}
const showErroMessage=(message,block,input)=>{
    block.textContent=message;
    input.style.borderColor='var(--color-burnt-sienna)'
}
onInputValue(contactInput)

if(!contactInput.value){
    showErroMessage('Заполните все поля контактов',writeValue,contactInput)
    return false
}

switch (contactType.innerHTML) {
    case 'Телефон':
        if(onlyNumbers.test(contactInput.value)){
showErroMessage('Допустимы только цифры',writeValue,contactInput)
return false
        }else if (contactInput.value.length !==11){
            showErroMessage('Номер должен состоять из 11 цифр',writeValue,contactInput)
            return false
        }
        return true
   case 'Email':
    if(onlyEmail.test(contactInput.value)){
        showErroMessage('Неправильный Email',writeValue,contactInput)
        return false
    }
    return true
    default:
      return true
}
}




const sortTable =()=>{
    const table =document.querySelector('table');
    const headers = table.querySelectorAll('th');
    const tbody=table.querySelector('tbody');

    const directions =Array.from(headers).map(()=>'');

 const transform=(type,content)=>{
 switch (type) {
    case 'id':
    return parseFloat(content);
    case 'create':
    case 'update':
    return content.split('.').reverse().join('-');
    case 'text':
    default:
    return content;

 }
 }
 const sortColumn=(index) => {
 const type= headers[index].getAttribute('data-type');
const rows = tbody.querySelectorAll('tr');
const direction= directions[index]||'sortUp';
const multyply=direction === 'sortUp' ? 1 : -1;
const newRows=Array.from(rows);

newRows.sort((row1,row2)=>{
const cellA = row1.querySelectorAll('td')[index].textContent;
const cellB = row2.querySelectorAll('td')[index].textContent;

const a =transform(type,cellA);
const b =transform(type,cellB);

switch (true) {
  
       case a>b:
        return 1*multyply;
        case a<b:
            return -1 * multyply;
            default:
        break;
        case a===b:
        return 0
}
});

[].forEach.call(rows,(row)=>{
    tbody.removeChild(row);
});
directions[index]=direction==='sortUp' ? 'sortDown': 'sortUp';

newRows.forEach(newRow=>{
    tbody.appendChild(newRow);
})

 }


    [].forEach.call(headers, (header, index)=>{
        header.addEventListener('click',()=>{
            sortColumn(index)

        })
    })
}

const searchClients =(clients)=>{
const findList=document.querySelector('.find-list');
const input=document.querySelector('.header__input');

clients.forEach(client=>{
 const findItem=document.createElement('li');
 const findLinck =document.createElement('a');

 findItem.classList.add('find-list__item');
 findLinck.classList.add('find-list__link');

 findLinck.textContent=`${client.name} ${client.surname} ${client.lastName}`;
 findLinck.href='#'

 findItem.append(findLinck);
 findList.append(findItem)
})

const rewriteTable = async (str)=>{
    const response=await findClient(str);
    const tbody=document.querySelector('.clients__tbody')
    tbody.innerHTML='';

    for(const client of response){
        tbody.append(createClientItem(client))
    }
}
input.addEventListener('input',async()=>{
    const value=input.value.trim()
    const foundItems=document.querySelectorAll('.find-list__link');

    if(value !==''){
        rewriteTable(value)

        foundItems.forEach(link=>{
            if(link.innerText.search(value)==-1){
                link.classList.add('hide');
                link.innerHTML=link.innerText;
            }else{
                link.classList.remove('hide')
                findList.classList.remove('hide')
                const str = link.innerText;
                link.innerHTML=insertMark(str,link.innerText.search(value),value.length)
            }
        })
    } else{
        foundItems.forEach(link=>{
            const tbody=document.querySelector('.clients__tbody');
            tbody.innerHTML='';

            clients.forEach(client=>tbody.append(createClientItem(client)))

            link.classList.remove('hide');
            findList.classList.add('hide');
            link.innerHTML=link.innerText
            

        })
    }
})
const insertMark=(str,pos,len)=>str
.slice(0,pos)+'<mark>'+str
.slice(pos,pos + len)+'</mark>'+ str
.slice(pos + len);

}