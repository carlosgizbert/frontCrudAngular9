import { Component, OnInit } from '@angular/core';

@Component({ // @algumacoisa é um decorator (um componente gera um seletor/tag)
  selector: 'app-nav', // seletor, usado pra referenciar dentro do html
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
