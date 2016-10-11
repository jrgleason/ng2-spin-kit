import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import * as spinner from './spinners';

@NgModule({
    declarations: [
      AppComponent,
      spinner.RotatingPlaneComponent,
      spinner.DoubleBounceComponent,
      spinner.WaveComponent,
      spinner.WanderingCubesComponent,
      spinner.PulseComponent,
      spinner.ChasingDotsComponent,
      spinner.CircleComponent,
      spinner.ThreeBounceComponent,
      spinner.CubeGridComponent,
      spinner.WordPressComponent,
      spinner.FadingCircleComponent,
      spinner.FoldingCubeComponent
    ],
    bootstrap: [
      AppComponent,
      spinner.ChasingDotsComponent
    ],
    imports:      [ BrowserModule ]
})
export class AppModule { }
