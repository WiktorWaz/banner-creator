import { Component } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banner-creator';

  date = new Date();

  bannerHeightVal = 600;
  bannerWidthVal = 600;
  bannerFontSizeVal = 55;
  colorOne = 'red';
  colorTwo = 'purple';
  colorOnePer = 20;
  colorTwoPer = 80; 
  fontColor = 'white';
  font = 'Courier';

  colors = [
    'white',
    'yellow',
    'red',
    'purple',
    'green',
    'gray',
    'brown',
    'black',
  ];

  bannerStyle() {
    return {   
    width: this.bannerWidthVal + 'px',
    height: this.bannerHeightVal + 'px',
    background: 'linear-gradient(' + this.colorOne + ' ' + this.colorOnePer + '%, ' + this.colorTwo + ' ' + this.colorTwoPer + '%)',
    }
  };

  fontStyle() {
    return {
    fontSize: this.bannerFontSizeVal + 'px',
    width: this.bannerWidthVal + 'px',
    height: this.bannerHeightVal + 'px',
    color: this.fontColor,
    fontFamily: this.font,
    }
  };

  downloadImg(bannerView: HTMLDivElement ) {
    domtoimage.toBlob(bannerView).then((blob) => saveAs(blob, 'banner.jpg'));
    };

}
