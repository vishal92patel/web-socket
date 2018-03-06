import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { WebSocketService } from '../services/web-socket/web-socket.service';
import { Commands } from '../services/commands';

@Component({
   selector: 'app-signup',
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
   progress: Boolean = false;
   signUpForm: FormGroup;
   profilePicture: File = null;
   fileValidation = {
      maxSize: 1048576, // 1MB
      extensions: ["jpg", "JPG"],
      mimeTypes: ["image/jpeg"],
      mimeUint8ArrayList: [
         { 0: [255, 216, 255, 224] } // when it compaire it will convert toString()
      ]
   }
   unsubscribeWebSocketService;
   alertBox;
   constructor(
      private fb: FormBuilder,
      private webSocketService: WebSocketService
   ) { }

   ngOnInit() {
      this.createSignUpForm();
      this.unsubscribeWebSocketService = this.webSocketService.subscribe(Commands.CREATE_USER, (res) => {
         if(res.success){
            Object.assign(this.alertBox, {success:true, msg: res.success});
            this.signUpForm.reset();
         }else if(res.error){
            Object.assign(this.alertBox, {error:true, msg: res.error});
         }
         this.progress = false;
         this.signUpForm.enable();
      });
   }

   ngOnDestroy(){
      this.unsubscribeWebSocketService.unsubscribe();
   }

   createSignUpForm() {
      this.signUpForm = this.fb.group({
         fullName: ['vishal', [
            Validators.required
         ]
         ],
         email: ['v@y.com', [
            Validators.required,
            Validators.email
         ]
         ],
         password: ['12345678', [
            Validators.required,
            Validators.pattern(/.{8,}/)
         ]
         ],
         confirmPassword: ['12345678', [
            Validators.required,
            Validators.pattern(/.{8,}/),
            this.confirmPasswordValidators()
         ]
         ],
         gender: [null, [
            Validators.required
         ]
         ],
         profilePicture: [null, [
            Validators.required,
            this.fileValidators()
         ]
         ]
      });
   }

   confirmPasswordValidators() {
      return (control: FormControl) => {
         if (!control.parent) {
            return null;
         } else {
            if (control.parent.controls['password'].value === control.value) {
               return null;
            } else {
               return {
                  confirmPasswordValidators: true
               }
            }
         }
      }
   }
   fileValidators() {
      return (control: FormControl) => {
         if (control.value) {
            if (this.fileValidation) {
               if (this.fileValidation.maxSize >= control.value.size) {
                  return this.checkExtensions(control);
               } else {
                  return { exceedSize: true };
               }
            }
            if (control.value.extension != 'jpg') {
               return { fileValidators: true };
            } else {
               return null;
            }
         }
      }
   }
   checkMimeUint8ArrayList(control: FormControl) {
      if (this.fileValidation.mimeUint8ArrayList.length > 0) {
         let isValidMimeUint8Array = false;
         for (let i = 0; i <= this.fileValidation.mimeTypes.length; i++) {
            if (this.fileValidation.mimeUint8ArrayList[i][i].toString() == control.value.uint8Array.toString()) {
               let isValidMimeUint8Array = true;
               return null;
            } else {
               if ((this.fileValidation.mimeUint8ArrayList.length - 1) == i) {
                  if (!isValidMimeUint8Array) {
                     return { invalidMimeUint8Array: true };
                  }
               }
            }
         }
      } else {
         return null;
      }
   }
   checkMimeType(control: FormControl) {
      if (this.fileValidation.mimeTypes.length > 0) {
         let isValidMimeType = false;
         for (let i = 0; i <= this.fileValidation.mimeTypes.length; i++) {
            if (this.fileValidation.mimeTypes[i] == control.value.type) {
               isValidMimeType = true;
               return this.checkMimeUint8ArrayList(control);
            } else {
               if ((this.fileValidation.mimeTypes.length - 1) == i) {
                  if (!isValidMimeType) {
                     return { invalidMimeType: true };
                  }
               }
            }
         }
      } else {
         return null;
      }
   }
   checkExtensions(control) {
      if (this.fileValidation.extensions.length > 0) {
         let isValidExt = false;
         for (let i = 0; i <= this.fileValidation.extensions.length; i++) {
            if (this.fileValidation.extensions[i] == control.value.extension) {
               let isValidExt = true;
               return this.checkMimeType(control);
            } else {
               if ((this.fileValidation.extensions.length - 1) == i) {
                  if (!isValidExt) {
                     return { invalidExtension: true };
                  }
               }
            }
         }
      } else {
         return null;
      }
   }
   onClickProfilePicture($event) {
      this.signUpForm.controls['profilePicture'].markAsTouched();
      this.signUpForm.controls['profilePicture'].markAsDirty();
   }
   onChangeProfilePicture(event) {
      if (event.target.files && event.target.files.length > 0) {
         let file = event.target.files[0];
         new Observable((obs) => {
            let temp = {
               uint8Array: null,
               base64Img: null
            };
            this.getFileBase64(file).subscribe((res) => {
               temp.base64Img = res.base64Img;
               checkComplete();
            });
            this.getFileMimeType(file).subscribe((res) => {
               temp.uint8Array = res.uint8Array;
               checkComplete();
            });
            function checkComplete() {
               if (temp.uint8Array && temp.base64Img) {
                  obs.next(temp);
                  obs.complete();
               }
            }
         }).subscribe((res) => {
            let temp = {};
            temp = this.getFileBasicData(file);
            Object.assign(temp, res);
            this.signUpForm.controls['profilePicture'].setValue(temp);
            this.signUpForm.controls['profilePicture'].markAsTouched();
            this.signUpForm.controls['profilePicture'].markAsDirty();
         });
      } else {
         this.signUpForm.controls['profilePicture'].markAsTouched();
         this.signUpForm.controls['profilePicture'].markAsDirty();
      }
   }
   getFileMimeType(file): Observable<any> {
      return new Observable((obs) => {
         const fileReaderAsArrayMime: FileReader = new FileReader();
         fileReaderAsArrayMime.onloadend = function (e) {
            const uint8Array = (new Uint8Array(fileReaderAsArrayMime.result)).subarray(0, 4);
            obs.next({ "uint8Array": uint8Array });
            obs.complete();
         }
         fileReaderAsArrayMime.readAsArrayBuffer(file);
      });
   }
   getFileBase64(file): Observable<any> {
      return new Observable((obs) => {
         const fileReaderAsDataBase64: FileReader = new FileReader();
         fileReaderAsDataBase64.onloadend = function (e) {
            const base64Img = fileReaderAsDataBase64.result.split(',')[1];
            obs.next({ "base64Img": base64Img });
            obs.complete();
         }
         fileReaderAsDataBase64.readAsDataURL(file);
      });
   }
   getFileBasicData(file) {
      let temp = file.name.split('.');
      return {
         "name": temp[0],
         "size": file.size,
         "extension": temp[1],
         "type": file.type,
      }
   }
   onSignUp() {
      this.alertBox = {};
      this.progress = true;
      this.signUpForm.disable();
      this.webSocketService.send(Commands.CREATE_USER, this.signUpForm.value);
   }
   onKeyupUpdateSignupForm(){
      this.signUpForm.setValue(this.signUpForm.value);
      this.signUpForm.updateValueAndValidity();
   }
}
