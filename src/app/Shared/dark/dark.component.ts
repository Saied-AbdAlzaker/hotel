import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.scss'],
})
export class DarkComponent {
  private static readonly DARK_THEME_CLASS = 'dark-theme';
    private static readonly DARK_THEME_LIGHT = 'light';
    private static readonly DARK_THEME_DARK = 'dark';

    public theme: string;
    selectedTheme: 'light' | 'dark' = 'light';
    darkMode:boolean = false;
    lightMode:boolean =true;

    toggleTheme() {
      this.selectedTheme = (this.selectedTheme === 'light') ? 'dark' : 'light';

      // Call your theme change functions here if needed
      if (this.selectedTheme === 'light') {
        this.darkMode =false;

        this.selectLightTheme();
      } else {
        this.darkMode =true;
        this.selectDarkTheme();

      }
    }

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.theme = this.document.documentElement.classList.contains(DarkComponent.DARK_THEME_CLASS) ? DarkComponent.DARK_THEME_DARK : DarkComponent.DARK_THEME_LIGHT;
    }

    public selectDarkTheme(): void {
        this.document.documentElement.classList.add(DarkComponent.DARK_THEME_CLASS);
        this.theme = DarkComponent.DARK_THEME_DARK;
    }

    public selectLightTheme(): void {
        this.document.documentElement.classList.remove(DarkComponent.DARK_THEME_CLASS);
        this.theme = DarkComponent.DARK_THEME_LIGHT;
    }
  // darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  // onToggle(): void {
  //   this.darkModeService.toggle();
  // }

}
