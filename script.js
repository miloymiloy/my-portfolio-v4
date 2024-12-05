$(document).ready(function(){
    let navActive = 'projects-menu'

    //PROJECTS DETAIL
    var projects = [{
        id: 'storelen',
        title: 'LenAyen Baked Products Order Management System',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP',
        Description: 'I worked on a college project for my Software Engineering course where I developed a system. I took on the roles of both front-end and back-end programmer for this project.',
    },
    {
        id: 'speakup',
        title: 'Speak Up: a simple freedomwall',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP',
        Description: 'A user-friendly Freedom Wall application where you can express and share anything you want. Users can easily create new posts and read existing entries. This project encourages open communication and provides a platform for sharing ideas, stories, and experiences.',
    },
    {
        id: 'selfit',
        title: 'Self-IT: A Web-based Planner Application',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP, Laravel',
        Description: 'This was a College Capstone project. I served as both the front-end and back-end programmer for this project.',
    },
    {
        id: 'tictac',
        title: 'Tic-Tac-Toe',
        link: 'https://tic-tac-toe-rle.vercel.app/',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery',
        Description: 'A simple Tic-Tac-Toe Web Application I created as a personal project. The game includes timers for both players, adding a thrilling element of urgency. Players need to act fast before their time runs out; otherwise, they will lose the game. I also added a win counter for both players, displayed beside each timer.',
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



    var birthdate = new Date(2002,2,25)
    var datenow = new Date()

    var age = datenow.getFullYear() - birthdate.getFullYear()
    var monthDif = datenow.getMonth() - birthdate.getMonth()
    var dayDif = datenow.getDate() - birthdate.getDate()

    if (monthDif < 0 || (monthDif === 0 && dayDif < 0)) { 
        age--; 
    }
    
    $('.abtme-age').text(age)


    function displayProjectInfo(showproject){

        $('.projTitle').text(showproject.title)
        $('.proj-techUsed').text(showproject.techUsed)
        $('.proj-description').text(showproject.Description)
       
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
            <h5 class="m-0" data-bs-toggle="collapse" data-bs-target="#exp-collapse-container${index}" aria-expanded="false" aria-controls="exp-collapse-container${index}  ">${exp.position}</h5>
           
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





    // PAGE LOAD
    if(navActive){
        $('#'+navActive).addClass('nav-active')
    }
    $('.projectCount').text(projects.length)

    var mybio = "Aspiring Web Developer who loves art"
    
    $('.mobile-profile-bio-container, .profile-bio-container').html(`<p>`+mybio+`</p>`)

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

    //PROJECTS
    var storelen = [
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
    ]

    var speakup = [
        "posthome.PNG",
        "posts.PNG",
        "success.PNG",
        "suggestion.PNG",
        "cover.PNG",
    ]
   
    var selfit = [
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
    ]

    var tictac = [
        "tictac.PNG",
        "tictac1.PNG",
    ]


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
        $('.proj-gallery-box').html('')
        $('.projgallery-collapse-box').html('')
        if(projTitle == 'storelen'){   
            displayProjectInfo(showproject)

            storelen.forEach(function(store,index){
       
                if(index <= 3){
                     var projContent = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${store}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${store}" class="proj-gallery">
                                  </div>`
                    $('.projgallery-collapse-box').append(projContentcollapse)
                }
               
        
                
            })
        }
        else if(projTitle == 'speakup'){
            displayProjectInfo(showproject)

            speakup.forEach(function(speak,index){
       
                if(index <= 3){
                     var projContent = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${speak}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${speak}" class="proj-gallery">
                                  </div>`
                    $('.projgallery-collapse-box').append(projContentcollapse)
                }
               
        
                
            })
            
        }
        else if(projTitle == 'selfit'){
            displayProjectInfo(showproject)

            selfit.forEach(function(itself,index){
       
                if(index <= 3){
                     var projContent = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${itself}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${itself}" class="proj-gallery">
                                  </div>`
                    $('.projgallery-collapse-box').append(projContentcollapse)
                }
               
        
                
            })

        }
        else if(projTitle == 'tictac'){
            displayProjectInfo(showproject)

            tictac.forEach(function(tic,index){
       
                if(index <= 3){
                     var projContent = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${tic}" class="proj-gallery">
                                  </div>`
                    $('.proj-gallery-box').append(projContent)
                }
                else{
                    
                    var projContentcollapse = ` <div class="col-3">
                                    <img src="/project/${projTitle}/${tic}" class="proj-gallery">
                                  </div>`
                    $('.projgallery-collapse-box').append(projContentcollapse)
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
        
        if ($(this).hasClass('fa-chevron-down')) {
            $(this).addClass('fa-chevron-up')
            $(this).removeClass('fa-chevron-down')
        }
        else{
            $(this).removeClass('fa-chevron-up')
            $(this).addClass('fa-chevron-down')
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