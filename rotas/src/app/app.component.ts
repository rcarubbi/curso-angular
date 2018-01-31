import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService) {

  }

  mostrarMenu: boolean;

  ngOnInit() {
      this.authService.mostrarMenuEmmiter.subscribe((authenticated) => {
            this.mostrarMenu = authenticated;
      });
  }
}
