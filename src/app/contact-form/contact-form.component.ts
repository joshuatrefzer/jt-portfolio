import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('mailField') mailField: ElementRef;
  @ViewChild('sendButton') sendButton: ElementRef;

  formFields = [];
  //new Formgroup erwartet ein Objekt 
  public reactiveForm: FormGroup = new FormGroup({

    name: new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(5)])), //initialer Wert, array mit validatoren, array mit asynchronen validatoren

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ], []),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ], [])
  });


  ngOnInit() {

  }

  async sendMail() {
    console.log('mail send', this.reactiveForm);

    let messageField = this.messageField.nativeElement;
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;

    this.formFields = [mailField, nameField, messageField];

    let sendButton = this.sendButton.nativeElement;

    messageField.disabled = true;
    mailField.disabled = true;
    nameField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    // fd.append('email', mailField.value);
    fd.append('message', 'email from:' + mailField.value + '\n\nmessage:\n' + messageField.value);


    await fetch('https://dev.joshuatrefzer.de/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });

    this.resetForm(sendButton);
    this.openPopup();
  }


  resetForm(sendButton) {
    sendButton.classList.remove('valid-button');
    this.formFields.forEach(field => {
      field.value = '';
      field.classList.remove('ng-valid');
      field.disabled = false;
    });
  }


  openPopup() {
    let container = document.getElementById('mail-send');
    container.classList.remove('d-none');
  }

  closePopup() {
    let container = document.getElementById('mail-send');
    container.classList.add('d-none');
  }



}
