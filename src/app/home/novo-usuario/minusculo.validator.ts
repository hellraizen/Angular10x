import { AbstractControl } from "@angular/forms";

export function minusculoValidator(control: AbstractControl){
  const valor = control.value as string;
  if (valor !== valor.toLocaleLowerCase()) {
    return { minuculo : true};
  }else{
    return null;
  }
};
