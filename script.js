$(document).ready(function(){
    let navActive = 'projects-menu'

    //PROJECTS DETAIL
    var projects = [{
        id: 'storelen',
        title: 'LenAyen Baked Products Order Management System',
        link: '#',
        techUsed:'HTML, CSS, Bootstrap, JavaScript, Jquery, PHP',
        Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex explicabo impedit aperiam nemo possimus quod fugiat id quisquam adipisci, excepturi unde aspernatur cupiditate doloribus ab doloremque veniam asperiores inventore, sapiente, voluptatum laborum. Pariatur, suscipit deserunt. Sapiente dolor dolorum nihil nemo ipsa? Eum cupiditate fugit dolore vero eaque culpa consequuntur. Suscipit.',
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
        Description: 'College Capstone project. Im the programmer in this project.',
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
        "userprofile.png",
        "userinvoice.png",
        "admindashboard.png",
        "adminaddprodct.png",
        "about.png",
        "contact.png",
        "checkout.png",
        "loginfirst.png",
        "usercart.png",
        "usernotif.png",
        "userorder.png",
        "adminorders.png",
        "adminproduct.png",
        "adminrejectorder.png",
    ]

    var speakup = [
        "posthome.png",
        "posts.png",
        "success.png",
        "suggestion.png",
        "cover.png",
    ]
   
    var selfit = [
        "signin.png",
        "signup.png",
        "user_dashboard.png",
        "user_calendar.png",
        "user_board.png",
        "user_labels.png",
        "user_list.png",
        "user_list-stats.png",
        "user_progressreport.png",
        "user_task.png",
        "user_timetable.png",
        "user_weather.png",
        "user_workspace.png",
        "user_suspended.png",
        "forgot_password.png",
        "admin_dashboard.png",
        "admin_feedback.png",
        "admin_reports.png",
        "admin_users_information.png",
        "admin_calendar.png",
        "generate_feedbacks.png",
        "generate_users.png",
    ]

    var tictac = [
        "tictac.png",
        "tictac1.png",
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
        var projImgselect = $(this).attr('src')
        $('.project-image-container img').attr('src',projImgselect)
    })

    function closeCollapse() { 
        $('#projgallery-collapse').collapse('hide') 
    }

    //MODAL CLOSE
    $('#projects-modal').on('hidden.bs.modal', function () { 
        closeCollapse();
    })
});