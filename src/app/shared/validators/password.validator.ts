import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidator {
  /**
   * Método estático responsável pela validação da senha.
   *
   * @param AbstractControl control
   * @return object ou null caso válido
   */
  static validate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && this.validPassword(control.value)) {
        return null;
      }
      return { password: true };
    };
  }
  /**
   * Valida uma senha.
   *
   * @param  password do senha a ser validada.
   * @return boolean informando se a senha é válida ou não.
   */
  static validPassword(password: any): boolean {
    let pattern = new RegExp(
      /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/,
    );
    return pattern.test(password);
  }
}
