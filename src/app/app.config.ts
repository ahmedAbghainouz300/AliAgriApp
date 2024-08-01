import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ElectronService } from 'ngx-electron';
import { DatabaseService } from './database.service'; // Ensure the path is correct

import { routes } from './app.routes';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import MatDividerModule
import { MatIcon, MatIconModule } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    ElectronService,
    DatabaseService,
    provideAnimationsAsync(),
    // Add DatabaseService here
  ],
};
