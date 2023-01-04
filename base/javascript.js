// Show Menu 

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
      
      if (toggle && nav) {
             toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
             });
      }
}

showMenu('nav-toggle','nav-menu')

// Active and remove Active

const navlink = document.querySelectorAll('.nav-link')
navlink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navlink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')
      
      const navMenu = document.getElementById('nav-menu')
      navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',
 linkAction))
