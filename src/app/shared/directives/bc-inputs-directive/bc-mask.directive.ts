import {
  Directive,
  Input,
  OnInit,
  ElementRef,
  HostListener,
  forwardRef,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "input[BcMask]",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BcMaskDirective),
      multi: true,
    },
  ],
})
export class BcMaskDirective
  implements OnInit, ControlValueAccessor, OnChanges
{
  @Input("BcMask") mask: string = "";
  @Input("BcType") type: "number" | "text" | "password" = "text";

  private inputRef: HTMLInputElement = this.el.nativeElement;
  private lastMaskedValue = "";
  private formatToRegExp: any;
  private value: string = "";

  constructor(private el: ElementRef) {
    this.formatToRegExp = {
      "0": /[0-9]/,
      a: /[a-z]/,
      A: /[A-Z]/,
      S: /[a-zA-Z]/,
    };
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.inputRef = this.el.nativeElement;
    this.inputRef.type = this.type === "password" ? "password" : "text";
  }

  @HostListener("input")
  onInput() {
    if (this.type === "number") {
      this.inputRef.value = this.inputRef.value.replace(/[^0-9]/g, "");
    }

    this.inputRef.value = this.maskValue(this.inputRef.value);
    this.onChange(this.unmaskValue(this.inputRef.value));
  }

  public writeValue(inputValue: string) {
    this.value = inputValue;
    if (this.inputRef) {
      this.inputRef.value = this.maskValue(this.value);
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Métodos vazios para registro de eventos
   */
  public onChange: any = (value: any) => {};
  public onTouch: any = () => {};

  private maskValue(value: string): string {
    if (!value || !this.mask || value === this.lastMaskedValue) {
      return value;
    }

    this.inputRef.maxLength = this.mask.length;
    this.lastMaskedValue = this.valueToFormat(value, this.mask);
    return this.lastMaskedValue;
  }

  private valueToFormat(value: string, format: string): string {
    const unmaskedValue = this.unmaskValue(value);
    const maskedValueArray = unmaskedValue.split("");
    for (
      let formatCharPosition = 0;
      formatCharPosition < format.length;
      formatCharPosition++
    ) {
      const valueChar = maskedValueArray[formatCharPosition];

      if (valueChar === undefined) {
        continue;
      }

      let formatChar: string = format[formatCharPosition];
      let formatRegex = this.getFormatRegexp(formatChar);

      const isSeparator = formatChar && !formatRegex;
      if (isSeparator) {
        // Adiciona os separadores da mascara
        maskedValueArray.splice(formatCharPosition, 0, formatChar);
        continue;
      }

      if (valueChar && formatRegex && formatRegex.test(valueChar)) {
        // Move o caractere para depois do separador
        maskedValueArray.splice(formatCharPosition, 1, valueChar);
      }
    }

    return maskedValueArray.join("").substr(0, format.length);
  }

  private unmaskValue(value: string): string {
    if (this.type != "number") {
      return value;
    } else {
      const unmaskedMathes = value
        .replace(" ", "")
        .match(this.getAllFormatRegexp("g"));
      return unmaskedMathes ? unmaskedMathes.join("") : "";
    }
  }
  private getAllFormatRegexp(flags?: string) {
    const allRegex = Object.keys(this.formatToRegExp)
      .map((key) => this.formatToRegExp[key].toString())
      .map((regexStr) => regexStr.substr(1, regexStr.length - 2))
      .join("|");

    return new RegExp(`(${allRegex})`, flags);
  }
  private getFormatRegexp(formatChar: string): RegExp | null {
    return formatChar && this.formatToRegExp[formatChar]
      ? this.formatToRegExp[formatChar]
      : null;
  }
}
