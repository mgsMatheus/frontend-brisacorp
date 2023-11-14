import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CpfValidator {
  /**
   * Método estático responsável pela validação dos dados.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.validCpf(control.value)) {
        return null;
      }
      return { cpfInvalid: true };
    };
  }

  /**
   * Valida um CPF.
   *
   * @param cpf valor do cpf a ser validado.
   * @return boolean informando se o cpf é válido ou não.
   */
  static validCpf(cpf: any): boolean {
    cpf = !cpf || cpf.replace(/\D/g, "");
    // const cpfsInvsRegex = /1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}/;
    if (
      !cpf ||
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999"
    ) {
      return false;
    }

    let x = cpf.length - 1;
    let tempNunber = 0;
    let e = 0;
    let h = "";

    for (let i = 0; i <= cpf.length - 3; i++) {
      tempNunber = cpf.substring(i, i + 1);
      e = e + tempNunber * x;
      x -= 1;
      h = h + tempNunber;
    }

    let numbers = 11 - (e % 11);
    if (numbers === 10 || numbers === 11) {
      numbers = 0;
    }

    const cpfSemDigVer = cpf.substring(0, cpf.length - 2) + numbers;
    x = 11;
    e = 0;
    for (let j = 0; j <= cpf.length - 2; j++) {
      e += cpfSemDigVer.substring(j, j + 1) * x;
      x -= 1;
    }

    let verifyNumber = 11 - (e % 11);
    if (verifyNumber === 10 || verifyNumber === 11) {
      verifyNumber = 0;
    }

    return (
      numbers + "" + verifyNumber === cpf.substring(cpf.length, cpf.length - 2)
    );
  }
}
