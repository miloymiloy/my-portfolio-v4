$(document).ready(function(){
    let navActive = 'projects-menu'

    //PROJECTS DETAIL
    var projects = [{
        id: 'storelen',
        cover: '/assets/project/storelen/cover.PNG',
        title: 'LenAyen Baked Products Order Management System',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP',
        description: 'I worked on a college project for my Software Engineering course where I developed a system. I took on the roles of both front-end and back-end programmer for this project.',
        images: [
            "userprofile.PNG",
            "userinvoice.PNG",
            "admindashboard.PNG",
            "adminaddprodct.PNG",
            "about.PNG",
            "contact.PNG",
            "checkout.PNG",
            "loginfirst.PNG",
            "usercart.PNG",
            "usernotif.PNG",
            "userorder.PNG",
            "adminorders.PNG",
            "adminproduct.PNG",
            "adminrejectorder.PNG",
        ],
    },
    {
        id: 'speakup',
        cover: '/assets/project/speakup/cover.PNG',
        title: 'Speak Up: a simple freedomwall',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP',
        description: 'A user-friendly Freedom Wall application where you can express and share anything you want. Users can easily create new posts and read existing entries. This project encourages open communication and provides a platform for sharing ideas, stories, and experiences.',
        images: [
            "posthome.PNG",
            "posts.PNG",
            "success.PNG",
            "suggestion.PNG",
            "cover.PNG",
        ],
    },
    {
        id: 'caesar',
        cover: '/assets/project/caesar/caesar.PNG',
        title: 'Caesar Cipher',
        link: 'https://caesar-cipher-rle.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        description: 'A project from my college days where we were tasked with creating a website that performs Caesar cipher encryption and decryption.',
        images: [
            "caesar.PNG",
            "caesar1.PNG",
            "caesar2.PNG",
        ],
    },
    {
        id: 'selfit',
        cover: '/assets/project/selfit/homepage.PNG',
        title: 'Self-IT: A Web-based Planner Application',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP, Laravel',
        description: 'This was a College Capstone project. I served as both the front-end and back-end programmer for this project.',
        images: [
            "signin.PNG",
            "signup.PNG",
            "user_dashboard.PNG",
            "user_calendar.PNG",
            "user_board.PNG",
            "user_labels.PNG",
            "user_list.PNG",
            "user_list-stats.PNG",
            "user_progressreport.PNG",
            "user_task.PNG",
            "user_timetable.PNG",
            "user_weather.PNG",
            "user_workspace.PNG",
            "user_suspended.PNG",
            "forgot_password.PNG",
            "admin_dashboard.PNG",
            "admin_feedback.PNG",
            "admin_reports.PNG",
            "admin_users_information.PNG",
            "admin_calendar.PNG",
            "generate_feedbacks.PNG",
            "generate_users.PNG",
        ],
    },
    {
        id: 'tictac',
        cover: '/assets/project/tictac/tictac1.PNG',
        title: 'Tic-Tac-Toe',
        link: 'https://tic-tac-toe-rle.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        description: 'A simple Tic-Tac-Toe Web Application I created as a personal project. The game includes timers for both players, adding a thrilling element of urgency. Players need to act fast before their time runs out; otherwise, they will lose the game. I also added a win counter for both players, displayed beside each timer.',
        images: [
            "tictac.PNG",
            "tictac1.PNG",
        ],
    },  
    {
        id: 'spotifywrapped',
        cover: '/assets/project/spotifywrapped/spotifywrapped.PNG',
        title: 'Spotify Wrapped Template Creator',
        link: 'https://spotify-wrapped-creator.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        description: 'I created a project inspired by the Spotify Wrapped trend I saw on Facebook. This project allows me to input any music or artist into the template.',
        images: [
            "spotifywrapped.PNG",
            "spotifywrapped1.PNG",
        ],
    },
    {
        id: 'guessit',
        cover: '/assets/project/guessit/cover.PNG',
        title: 'Guess It: A word guessing game',
        link: 'https://guess-it-rle.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        description: 'Created a website where people can guess letters to solve hidden words. Used an API to get new words and their meanings, making the game more fun and educational. Random Word API: https://random-word-api.herokuapp.com/ , Get Meaning: https://dictionaryapi.dev/ .',
        images: [
            "game.PNG",
            "level.PNG",
            "win.PNG",
            "lose.PNG",
        ],
    },
    ]

    //MY SOCIALS
    var socials = [{
        link: 'https://www.facebook.com/esquierra.r',
        icon: '<i class="fa-brands fa-facebook fs-2"></i>',
    },
    {
        link: 'https://www.linkedin.com/in/ramilo-esquierra-94078315b',
        icon: '<i class="fa-brands fa-linkedin fs-2"></i>',
    },
    {
        link: 'https://github.com/miloymiloy',
        icon: '<i class="fa-brands fa-github fs-2"></i>',
    },
    {
        link: 'mailto:ramiloesquierra.ph@gmail.com',
        icon: '<i class="fa-solid fa-envelope fs-2"></i>',
    },
    ]

    //LOAD SOCIALS
    socials.forEach(function(social){
        var socialsHTML = `<a href="`+social.link+`" target="_blank">`+social.icon+`</a>`

        $('.social-modal-body').append(socialsHTML)
    })

    $('.socialCount').text(socials.length)

    //HIGHLIGHTS
    var highlights = [{
        id: 'myself',
        cover: 'cover.jpg',
        content: [
            'IMG_6739.jpg',
            'IMG_6744.jpg',
            'IMG_6733.jpg'
        ]
    },
    {
        id: 'work',
        cover: 'cover.jpg',
        content: [
            'received_336991645357796.jpeg',
            'received_301041282540021.jpeg',
            'received_280874778125980.jpeg'
        ]
    },
    {
        id: 'cats',
        cover: 'cover.jpg',
        content: [
            'received_1621633628561762.jpeg',
            'received_1778137719705641.jpeg',
            'received_931661995579994.jpeg',
            'received_902291205349533.jpeg',
            'received_595719562962995.jpeg',
            'received_1280609076279418.jpeg'
        ]
    },
    {
        id: 'arts',
        cover: 'cover.jpg',
        content: [
            '2dda4ef1-730f-4c88-aa5d-a1d7cb4160ed.png',
            '5f4dcc66-f793-4bf6-ab03-1793b9d939ef.png',
            '53ac0f2d-b415-4dd9-b9fb-34cc1672d945.png',
            '910c83b6-d514-48f0-866d-1aee5d55f29a.png',
            'b5e6cad7-032d-4ebe-90cc-9726cd3da4f5.png',
            '1733560331125.jpg',
            'IMG_20210222_150649.jpg'
        ]
    },
    ]

    //GET AGE
    var birthdate = new Date(2002,2,25)
    var datenow = new Date()

    var age = datenow.getFullYear() - birthdate.getFullYear()
    var monthDif = datenow.getMonth() - birthdate.getMonth()
    var dayDif = datenow.getDate() - birthdate.getDate()

    if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) { 
        age--; 
    }
    
    $('.abtme-age').text(age)


    //MODAL SHOW PROJECT INFO
    function displayProjectInfo(showproject){

        $('.projTitle').text(showproject.title)
        $('.proj-techUsed').text(showproject.techUsed)
        $('.proj-description').text(showproject.description)
       
        if(showproject.link != '#'){
            $('.proj-link').attr('href',showproject.link)
            $('.proj-link').text(showproject.link)

        }
        else{
            $('.proj-link').removeAttr('href')
            $('.proj-link').text('Not available')

        }
    }


    var experience = [{
        position: 'IT Intern',
        workType: 'Internship',
        googlemap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.5270794085557!2d124.12376977439453!3d12.918255029743053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0eb6f199a695f%3A0x2a67becfbb0cc65c!2sW49F%2B8FF%2C%20Manook%20St%2C%20Gubat%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1732621031182!5m2!1sen!2sph" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        company: 'RHU - LGU Municipality of Gubat, Sorsogon, Philippines',
        date: 'September 2023 - December 2023',
        role: [
            'Encoding of medical records and personal information of patients',
            'Update patient records',
            'Sorting of medical records',
            'Troubleshooting employee devices'
            ],
    },

    ]

    //LOAD EXPERIENCE
    experience.forEach(function(exp,index) {
        var roleLists = ''
        exp.role.forEach(function(roles) { 
            roleLists += '<li>' + roles + '</li>'
         })

        $('.exp-content-wrapper').append(`<div class="mt-2 border p-1 exp-content-box">
           <div class="d-flex justify-content-between px-2 align-items-center exp-content-expand "  data-id="${index}">
             <h5 class="m-0">${exp.position} </h5>
            <i class="fa-solid fa-xmark m-0 p-0 fs-6 exp-icon-${index}"></i>
           </div>
            <div>
              <div class="collapse collapse-horizontal show" id="exp-collapse-container${index}">
                <div class="col-12 p-2 border-0">
                ${exp.googlemap}
                 <h6>${exp.workType}</h6>
                 <h6>${exp.company}</h6>
                 <p>${exp.date}</p>
                 <h6>Role:</h6>
                 <ul>
                   ${roleLists}
                 </ul>
                 
                </div>
              </div>
            </div>
           </div>`)

    })

    //EXP COLLAPSE SHOW AND CHANGE ICON
    $('.exp-content-expand').on('click',function(){
        var expID = $(this).data('id')
        
        if ($('#exp-collapse-container'+expID).hasClass('show')) { 
            $('.exp-icon-'+expID).addClass('fa-plus')
            $('.exp-icon-'+expID).removeClass('fa-xmark')
        } 
        else { 
            $('.exp-icon-'+expID).removeClass('fa-plus')
            $('.exp-icon-'+expID).addClass('fa-xmark')
        }

        $('#exp-collapse-container'+expID).collapse('toggle')
    })


    // PAGE LOAD
    if(navActive){
        $('#'+navActive).addClass('nav-active')
    }

    //LOAD TOTAL NUMBER OF PROJECTS
    $('.projectCount').text(projects.length)

    //LOAD MY BIO
    var mybio = "Aspiring Web Developer who loves art"
    $('.mobile-profile-bio-container, .profile-bio-container').html(`<p>`+mybio+`</p>`)

    //LOAD ALL PROJECTS
    projects.reverse().forEach(function(project){
        $('.projects-container').append(`<div class="col-4 m-1 card rounded-0 project-box" data-proj="${project.id}">
                        <img class="card-img-top rounded-0" src="${project.cover}" height="300">
                    </div>`)
    })

    // var skills = [{
    //     name: 'https://www.facebook.com/esquierra.r',
    //     icon: '<i class="fa-brands fa-facebook fs-2"></i>',
    // },
    // {
    //     name: 'https://www.linkedin.com/in/ramilo-esquierra-94078315b',
    //     icon: '<i class="fa-brands fa-linkedin fs-2"></i>',
    // },
    // {
    //     name: 'https://github.com/miloymiloy',
    //     icon: '<i class="fa-brands fa-github fs-2"></i>',
    // },
    // {
    //     name: 'mailto:ramiloesquierra.ph@gmail.com',
    //     icon: '<i class="fa-solid fa-envelope fs-2"></i>',
    // },
    // ]

    
    // NAV SELECT

    $('.projects-menu-profile').on('click',function(){
       if(navActive != 'projects-menu'){
        navActive = 'projects-menu'
        $('.nav-items').removeClass('nav-active')
        $('#projects-menu').addClass('nav-active')

        $('.nav-contents').addClass('d-none')
        $('.projects-container').removeClass('d-none')
       }
    })

    $('.nav-items').on('click',function(){
        if(!$(this).hasClass(navActive) && $(this).attr('id') == 'projects-menu'){
            navActive = 'projects-menu'
            $('.nav-items').removeClass('nav-active')
            $(this).addClass('nav-active')

            $('.nav-contents').addClass('d-none')
            $('.projects-container').removeClass('d-none')
        }
        else if(!$(this).hasClass(navActive) && $(this).attr('id') == "tech-menu"){

            navActive = 'tech-menu'
            $('.nav-items').removeClass('nav-active')
            $(this).addClass('nav-active')
            $('.nav-contents').addClass('d-none')
            $('.tech-container').removeClass('d-none')
        }
        else if(!$(this).hasClass(navActive) && $(this).attr('id') == "cert-menu"){
            navActive = 'cert-menu'
            $('.nav-items').removeClass('nav-active')
            $(this).addClass('nav-active')

            $('.nav-contents').addClass('d-none')
            $('.cert-container').removeClass('d-none')
        }
        else if(!$(this).hasClass(navActive) && $(this).attr('id') == "exp-menu"){
            navActive = 'exp-menu'
            $('.nav-items').removeClass('nav-active')
            $(this).addClass('nav-active')

            $('.nav-contents').addClass('d-none')
            $('.exp-container').removeClass('d-none')
        }
    })


    // PROJECT SELECT
    $('.project-box').on('click',function(){
        var projTitle = $(this).data('proj')
        var showproject = projects.find(proj => proj.id == projTitle)
        var totalImages = 0
        var loadedImages = 0
        $('.proj-gallery-box').html('')
        $('.projgallery-collapse-box').html('')
        if(showproject){   
            
            // CALL FUNCTION TO DISPLAY PROJECT INFO
            displayProjectInfo(showproject)

            $('.gallery-loadin-anim').removeClass('d-none')
            $('#projgallery-collapse, .proj-gallery-box').addClass('d-none')

            showproject.images.forEach(function(content,index){
                
                if(index <= 3){
                     var projContent = ` <div class="col-3">
                                    <img src="/assets/project/${projTitle}/${content}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                    totalImages++
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/assets/project/${projTitle}/${content}" class="proj-gallery">
                                  </div>`
                    $('.projgallery-collapse-box').append(projContentcollapse)
                    totalImages++
                }
                      
                
            })
            $('.proj-gallery-box img, .projgallery-collapse-box img').on('load', function() { 
                loadedImages++
                if (loadedImages === totalImages) {
                    $('.gallery-loadin-anim').addClass('d-none')
                    $('#projgallery-collapse, .proj-gallery-box').removeClass('d-none')
                } 
            })
        }
  
        else{
            $('.projTitle').text('')
            $('.proj-techUsed').text('')
            $('.proj-description').text('')
        }

        var projCover = $(this).closest('.project-box').find('img').attr('src');
        $('.project-image-container img').attr('src',projCover)
        $('#projects-modal').modal('show')
        $('#projects-modal').carousel(0)
    })

    //PROJ GALLERY SELECT
    $(document).on('click', '.proj-gallery', function(){
        if ($('.proj-gallery').hasClass('proj-gallery-selected')) {
             $('.proj-gallery').removeClass('proj-gallery-selected')
        }
        $(this).toggleClass('proj-gallery-selected')
        var projImgselect = $(this).attr('src')
        $('.project-image-container img').attr('src',projImgselect)
    })

    //PROJECT GALLERY TOGGLE
    $('.toggle-prog-gallery').on('click',function(){
        if($.trim($('.projgallery-collapse-box').html()) !== ''){
            if ($(this).hasClass('fa-chevron-down')) {
                $(this).addClass('fa-chevron-up')
                $(this).removeClass('fa-chevron-down')
            }
            else{
                $(this).removeClass('fa-chevron-up')
                $(this).addClass('fa-chevron-down')
            }
        }
        
    })
    

    //RESET WHEN PROJECT MODAL CLOSE
    function closeCollapse() { 
        $('#projgallery-collapse').collapse('hide') 
        $('.toggle-prog-gallery').removeClass('fa-chevron-up')
        $('.toggle-prog-gallery').addClass('fa-chevron-down')

        
    }

    //MODAL CLOSE
    $('#projects-modal').on('hidden.bs.modal', function () { 
        closeCollapse();
    })

    // $(document).ready(function() {
    //     let width = 0;
    //     let intervalId = setInterval(() => {
    //       width += 1;
    //       $('.content-indicator').css('width', width + '%');
      
    //       if (width >= 100) {
    //         clearInterval(intervalId);
    //       }
    //     }, 1000);
    //   });

    //HIGHLIGHTS MODAL  
    var highlightContent = []
    highlights.forEach(function(highlight){
        $('.profile-highlight-container').append(` <div class="highlight-box" id="highlight-box${highlight.id}">
                        <img class="rounded-circle border border-2" src="/assets/highlights/${highlight.id}/${highlight.cover}" height="80" data-id="${highlight.id}">
                    </div>`)
    })
    //LOAD ALL CONTENT OF HIGHLIGHT
    function loadHighlight(){
        $('.highlights-modal-content-wrapper').html('')
        $('.highlights-modal-content-wrapper').html(` <i class="fa-solid fa-xmark text-light fs-2 highlight-close-box" data-bs-dismiss="modal" aria-label="Close"></i>  <div class="rounded-circle d-flex justify-content-center align-items-center p-1 highlight-navbar highlight-navbar-left">
                  <i class="fa-solid fa-angle-left fs-6 p-0 m-0"></i>
                </div>
                <div class="rounded-circle d-flex justify-content-center align-items-center p-1 highlight-navbar highlight-navbar-right">
                  <i class="fa-solid fa-angle-right fs-6 p-0 m-0"></i>
                </div>                `)
        highlights.forEach(function(highlight,index){
            
            $('.highlights-modal-content-wrapper').append(` <div class="highlight-content-container border p-1 me-4 rounded-4 " id="highlight-${highlight.id}" data-id="${highlight.id}" data-active="">
                      <div class="highlight-info w-100 d-none">
                        <div class="highlight-content-indicator-wrapper d-flex" id="highlight-content-indicator-wrapper${highlight.id}">
                          
                        </div>
                        <div class="highlight-cover-box mt-2">
                          <img src="/assets/highlights/${highlight.id}/${highlight.cover}" class="rounded-circle" height="30">
                        </div>
                       </div>
                       <img src="/assets/highlights/${highlight.id}/${highlight.cover}" class="rounded-circle highlight-cover-preview" id="highlight-cover-preview${highlight.id}" height="60">
                    </div>`)
            $(`#highlight-${highlight.id}`).css({
                        'background-image': `url(/assets/highlights/${highlight.id}/${highlight.content[0]})`
                      })
            highlight.content.forEach(function(image){
                highlightContent.push({
                    id: highlight.id,
                    image: image
                    
                })
                $('#highlight-content-indicator-wrapper'+highlight.id).append(`<div class="highlight-content-indicator-box m-1">
                    <div class="content-indicator highlight-content-indicator${highlight.id}" id="highlight-content-indicator${highlightContent.length-1}"></div>
                  </div>
                  `)
                // $(`#highlight-${highlight.id}`).data('active',highlightContent.length)
            })
          
            if (index === highlights.length - 1) {
                $('.highlights-modal-content-wrapper').append(` <div class="highlight-content-container empty-highlight border p-1 me-4 rounded-4 bg-danger">
                        
                    </div>
                    <div class="highlight-content-container empty-highlight border p-1 me-4 rounded-4 bg-danger">
                        
                    </div>`)
                $('.highlights-modal-content-wrapper').prepend(` <div class="highlight-content-container empty-highlight border p-1 me-4 rounded-4 bg-danger">
                        
                    </div>
                    <div class="highlight-content-container empty-highlight border p-1 me-4 rounded-4 bg-danger">
                        
                    </div>`)
                 
            }
            
        })
    }

    //LOAD HIGHLIGHT 1ST IMAGE
    function loadHighlightImages(){
        highlights.forEach(function(highlight,index){
    
            $(`#highlight-${highlight.id}`).css({
                        'background-image': `url(/assets/highlights/${highlight.id}/${highlight.content[0]})`
                      })          
            
        })
    }
    
    var highlightImage
    var highlightImageIndex

    // GET ACTIVE ID AND ARRAY ID
    function highlightOpen(active,id){ 
        $('.highlight-content-container').removeClass('active-highlight')

        $('.highlight-content-container').addClass('d-none inactive-highlight')
        var next = active.nextAll('.highlight-content-container').slice(0, 2)
        var prev = active.prevAll('.highlight-content-container').slice(0, 2)
        next.removeClass('d-none')
        prev.removeClass('d-none')

        $('.highlight-cover-preview').removeClass('d-none')
        $('#highlight-cover-preview'+id).addClass('d-none')
        //CHECK IF ITS THE FIRS ELEMENT AND CHECK IF THERES NO PREVIOUS ACTIVE HIGHLIGHT
        if($('#highlight-box'+id).is(':first-child') && active.data('active') == 0){
            $('.highlight-navbar-left').addClass('d-none')
            $('.highlight-navbar-right').removeClass('d-none')
    
        }
        else if($('#highlight-box'+id).is(':last-child') && active.data('active') === highlightContent.length-1){
            $('.highlight-navbar-left').removeClass('d-none')
            $('.highlight-navbar-right').addClass('d-none')
    
        }
        else{
            $('.highlight-navbar-left').removeClass('d-none')
            $('.highlight-navbar-right').removeClass('d-none')
        }       
    }

    function highlightNavBarCheck(container,highlightIDindex){
        if(highlightContent.length-1 > highlightImageIndex && 0 < highlightImageIndex){
            $('.highlight-navbar-right,.highlight-navbar-left').removeClass('d-none')
        }
        else{
            if(highlightContent.length-1 === highlightImageIndex){
                $('.highlight-navbar-right').addClass('d-none')
                
            }
            else if(0 === highlightImageIndex){
                $('.highlight-navbar-left').addClass('d-none')
            }
            else{
                $('.highlight-navbar-right,.highlight-navbar-left').removeClass('d-none')

            }
        }
     
        //GET LAST ACTIVE HIGHLIGHT IMAGE
        container.data('active',highlightIDindex)
    }


    //ADD ACTIVE INDICATOR FOR ACTIVE HIGHLIGH
    function activateHighlightIndicator(index){
         $('#highlight-content-indicator'+index).addClass('highlight-content-indicator-active')
    }

    //REMOVE ACTIVE INDICATOR FOR ACTIVE HIGHLIGH
    function removeActivateHighlightIndicator(index){
        index+=1
        $('#highlight-content-indicator'+index).removeClass('highlight-content-indicator-active')
    }


    //CALL TO LOAD ALL HIGHLIGHT
    loadHighlight()


    //RESET ACTIVE HIGHLIGHT
    function resetHighlight(){
        $('.highlight-content-container').each(function() { 
            $(this).data('active','')
        })
        $('.content-indicator').removeClass('highlight-content-indicator-active')
    }
    
    //HIGHLIGHT IMAGE COVER CLICKED
    $(document).on('click', '.highlight-box img', function(){   
        loadHighlightImages()

        var highlightID = ($(this).data('id'))
        var highlightSelected =  $('#highlight-'+highlightID)
       
        highlightOpen(highlightSelected,highlightID)
  
        highlightSelected.removeClass('d-none inactive-highlight')
        highlightSelected.addClass('active-highlight')
        
        $('#highlights-modal').modal('show')

        highlightImage = highlightContent.find(highlight => highlight.id === highlightID)
        highlightImageIndex = highlightContent.findIndex(highlight => highlight.id === highlightID)
        
        //CALL ACTIVATEHIGHLIGHT
        activateHighlightIndicator(highlightImageIndex)
        
    })

    //RIGHT HIGHLIGHT NAVBAR
    $(document).on('click', '.highlight-navbar-right',function(){
        highlightImageIndex+=1
       
        var highlightImageSelected = highlightContent[highlightImageIndex].image
        var highlightIDSelected = highlightContent[highlightImageIndex].id
        var containerID = $('#highlight-'+highlightIDSelected)
        containerID.removeClass('highlight-transition')
        containerID.css({
            'background-image': `url(/assets/highlights/${highlightIDSelected}/${highlightImageSelected})`
          })
        
        if(!$('#highlight-'+highlightIDSelected).hasClass('active-highlight') ){
            containerID.addClass('highlight-transition')

            highlightOpen(containerID,highlightIDSelected)
            $('.highlight-content-indicator'+highlightIDSelected).removeClass('highlight-content-indicator-active')
            $('.highlight-content-container').removeClass('active-highlight')
            containerID.addClass('active-highlight')
            containerID.removeClass('d-none inactive-highlight')
        }
        
        highlightNavBarCheck(containerID,highlightImageIndex)

        //CALL ACTIVATEHIGHLIGHT
        activateHighlightIndicator(highlightImageIndex)
        
    })

    //LEFT HIGHLIGHT NAVBAR
    $(document).on('click', '.highlight-navbar-left',function(){
        highlightImageIndex-=1
        var highlightImageSelected = highlightContent[highlightImageIndex].image
        
        var highlightIDSelected = highlightContent[highlightImageIndex].id
        var containerID = $('#highlight-'+highlightIDSelected)
        containerID.removeClass('highlight-transition')
        containerID.css({
            'background-image': `url(/assets/highlights/${highlightIDSelected}/${highlightImageSelected})`
          })
          
        if(!$('#highlight-'+highlightIDSelected).hasClass('active-highlight')){
            containerID.addClass('highlight-transition')
            highlightOpen(containerID,highlightIDSelected)
            $('.highlight-content-container').removeClass('active-highlight')
            containerID.addClass('active-highlight')
            containerID.removeClass('d-none inactive-highlight')
            //ACTIVATE ALL HIGHLIGHT INDICATOR INSIDE CONTAINER
            $('.highlight-content-indicator'+highlightIDSelected).addClass('highlight-content-indicator-active')
           
        }
        else{
          
            //REMOVE ACTIVATED HIGHLIGHT INDICATOR
            removeActivateHighlightIndicator(highlightImageIndex)
        }
        
        highlightNavBarCheck(containerID,highlightImageIndex)

    })

    //HIGHLIGHT MODAL CONTAINER CLICK
     $(document).on('click', '.highlight-content-container',function(){
       if(!$(this).hasClass('active-highlight')){
            var activeHighlightImage = $(this).data('active')
           
            var highlightID = $(this).data('id')
            highlightOpen($(this),highlightID)
          
            $(this).addClass('highlight-transition')
          
            $(this).removeClass('d-none inactive-highlight')
            $(this).addClass('active-highlight')

            //CHECK IF THERE IS A PREVIOUS ACTIVE HIGHLIGHT IMAGE
            if(activeHighlightImage !== '' && activeHighlightImage !== ' '){
                var activesrc = highlightContent[activeHighlightImage].image
                $(this).css({
                    'background-image': `url(/assets/highlights/${highlightID}/${activesrc})`
                  })
                highlightImageIndex = activeHighlightImage
            }
            else{
                //IF NO ACTIVE SET INDEX TO 1ST HIGHLIGHT IMAGE 
                
                highlightImageIndex = highlightContent.findIndex(highlight => highlight.id === highlightID)
                $(this).css({
                    'background-image': `url(/assets/highlights/${highlightID}/${highlightContent[highlightImageIndex]})`
                  })

            }
            //CALL ACTIVATEHIGHLIGHT
            activateHighlightIndicator(highlightImageIndex)
       }

    })

    //HIGHLIGHT NAVBAR HOVER
    if (window.innerWidth > 768) {
        $(document).on('mouseenter', '.highlight-navbar', function() { $('.highlight-navbar').css('background-color', 'white'); })
        $(document).on('mouseleave', '.highlight-navbar', function() { $('.highlight-navbar').css('background-color', ''); })
    }

    //REMOVE ALL DATA-ACTIVE IN HIGHLIGHT CONTAINER
    $('#highlights-modal').on('hidden.bs.modal', function () { 
      
        resetHighlight()
    })


    //PRELOAD IMAGES
    highlights.forEach(function(highlight) { 
        highlight.content.forEach(function(image){
            var img = new Image()
            img.src = `/assets/highlights/${highlight.id}/${image}`
        })
    });

});