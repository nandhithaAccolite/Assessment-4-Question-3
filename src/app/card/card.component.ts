import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() frontImage!: string;
  @Input() backImage!: string;

  flipped = false;
  isHidden = false;

  @Output() cardClicked = new EventEmitter<string>();

  flipCard() {
    this.flipped = !this.flipped;
    this.cardClicked.emit(this.flipped ? this.backImage : this.frontImage);
  }

  resetCard() {
    this.flipped = false;
  }

  hideCard() {
    // Set isHidden to true to hide the card using CSS
    this.isHidden = true;
  }
}



