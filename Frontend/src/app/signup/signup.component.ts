import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  profilePicture: File = null;
  fileValidation = {
    maxSize: 1048576, // 1MB
    extensions : ["jpg"],
    mimeTypes: ["image/jpeg"],
    mimeUint8ArrayList: [
      { 0 : [255, 216, 255, 2240] },
      { 1 : [255, 216, 255, 2240] }
    ]
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm(){
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

  confirmPasswordValidators(){
    return (control: FormControl) => {
      if(!control.parent){
        return null;
      } else {
        if(control.parent.controls['password'].value === control.value){
          return null;
        }else{
          return {
            confirmPasswordValidators: true
          }
        }
      }
    }
  }
  fileValidators(){
    return (control: FormControl) => {
      if(control.value){
        console.log(control)
        if(this.fileValidation){
          if(this.fileValidation.maxSize >= control.value.size){
            this.checkExtensions(control);
            this.checkMimeType(control);
            this.checkMimeUint8ArrayList(control);
          }else{
            return {exceedSize: true};
          }
        }
        if(control.value.extension != 'jpg'){
          return {fileValidators: true};
        }else{
          return null;
        }
      }
    }
  }
  checkMimeUint8ArrayList(control: FormControl){
    if(this.fileValidation.mimeUint8ArrayList.length > 0){
      let isValidMimeUint8Array = false;
      this.fileValidation.mimeUint8ArrayList.forEach((element, index) => {
        console.log(element)
        if(element[index].toString() == control.value.uint8Array.toString()){
          let isValidMimeUint8Array = true;
          return null;
        }else{
          if(this.fileValidation.mimeUint8ArrayList.length-1 == index){
            if(!isValidMimeUint8Array){
              return {invalidMimeUint8Array: true};
            }
          }
        }
      });  
    }else{
      return null;   
    }
  }
  checkMimeType(control: FormControl){
    if(this.fileValidation.mimeTypes.length > 0){
      let isValidMimeType = false;
      this.fileValidation.mimeTypes.forEach((element, index) => {
        if(element == control.value.type){
          isValidMimeType = true;
          return null;
        }else{
          if(this.fileValidation.mimeTypes.length - 1 == index){
            if(!isValidMimeType){
              return {invalidMimeType: true};
            }
          }
        }
      });  
    } else {
      return null;
    }
  }
  checkExtensions(control: FormControl){
    if(this.fileValidation.extensions.length > 0){
      let isValidExt = false;
      this.fileValidation.extensions.forEach((element, index) => {
        if(element == control.value.extension){
          return null;
        }else{
          if(this.fileValidation.extensions.length - 1 == index){
            if(!isValidExt){
              return {invalidExtension: true};      
            }
          }
        }
      });
    } else {
      return null;
    }
  }
  onChangeProfilePicture(event){
    if(event.target.files && event.target.files.length > 0){
      let file = event.target.files[0];
      new Observable( (obs) => {
        let temp = {
          uint8Array: null,
          base64Img: null
        };
        this.getFileBase64(file).subscribe((res)=> {
          temp.base64Img = res.base64Img;
          checkComplete();
        });
        this.getFileMimeType(file).subscribe( (res)=> {
          temp.uint8Array = res.uint8Array;
          checkComplete();
        });
        function checkComplete(){
          if(temp.uint8Array && temp.base64Img){
            obs.next(temp);
            obs.complete();
          }
        }
      }).subscribe((res) => {
        let temp = {};
        temp = this.getFileBasicData(file);
        console.log(Object.assign(temp, res));
        this.signUpForm.controls['profilePicture'].setValue(temp);
      });
    }
  }
  getFileMimeType(file): Observable<any>{
    return new Observable( (obs) => {
      const fileReaderAsArrayMime: FileReader = new FileReader();
      fileReaderAsArrayMime.onloadend = function (e) {
      const uint8Array = (new Uint8Array(fileReaderAsArrayMime.result)).subarray(0, 4);
        obs.next({"uint8Array": uint8Array});
        obs.complete();
      } 
      fileReaderAsArrayMime.readAsArrayBuffer(file);
    });
  }
  getFileBase64(file): Observable<any>{
    return new Observable( (obs) => {
      const fileReaderAsDataBase64: FileReader = new FileReader();
      fileReaderAsDataBase64.onloadend = function (e) {
      const base64Img = fileReaderAsDataBase64.result.split(',')[1];
        obs.next({"base64Img": base64Img});
        obs.complete();
      }
      fileReaderAsDataBase64.readAsDataURL(file);
    });
  }
  getFileBasicData(file){
    let temp = file.name.split('.');
    return {
      "name" : temp[0],
      "size" : file.size,
      "extension" : temp[1],
      "type" : file.type,
    }
  }
}