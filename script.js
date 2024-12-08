$(document).ready(function(){
    let navActive = 'projects-menu'

    //PROJECTS DETAIL
    var projects = [{
        id: 'storelen',
        cover: 'project/storelen/cover.PNG',
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
        cover: 'project/speakup/cover.PNG',
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
        cover: 'project/caesar/caesar.PNG',
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
        cover: 'project/selfit/homepage.PNG',
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
        cover: 'project/tictac/tictac1.PNG',
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
        cover: 'project/spotifywrapped/spotifywrapped.PNG',
        title: 'Spotify Wrapped Template Creator',
        link: 'https://spotify-wrapped-creator.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        description: 'I created a project inspired by the Spotify Wrapped trend I saw on Facebook. This project allows me to input any music or artist into the template.',
        images: [
            "spotifywrapped.PNG",
            "spotifywrapped1.PNG",
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
            <i class="fa-solid fa-x m-0 p-0 fs-6 exp-icon-${index}"></i>
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
            $('.exp-icon-'+expID).removeClass('fa-x')
        } 
        else { 
            $('.exp-icon-'+expID).removeClass('fa-plus')
            $('.exp-icon-'+expID).addClass('fa-x')
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
                                    <img src="/project/${projTitle}/${content}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                    totalImages++
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${content}" class="proj-gallery">
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
    

    function closeCollapse() { 
        $('#projgallery-collapse').collapse('hide') 
        $('.toggle-prog-gallery').removeClass('fa-chevron-up')
        $('.toggle-prog-gallery').addClass('fa-chevron-down')

        
    }

    //MODAL CLOSE
    $('#projects-modal').on('hidden.bs.modal', function () { 
        closeCollapse();
    })
});