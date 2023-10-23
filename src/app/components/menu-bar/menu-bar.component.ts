import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor() {
    window.addEventListener('scroll', function() {
      let menus = document.getElementsByClassName('menu-bar__container');
      
      for (let i = 0; i < menus.length; i++) {
        let menu = menus[i] as HTMLElement;

        if (window.scrollY > 50) { // Altere este valor conforme necessário
          menu.classList.add('menu-fixo');
        } else {
          menu.classList.remove('menu-fixo');
        }
      }
    });
  }
}
