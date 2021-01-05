import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {User} from '../user'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
title="welcome to contact component"
userModel=new User('','9861152315','srlnnodejs@gmail.com',"raina","all good")

  constructor() { }

  ngOnInit(): void {
  }

}
