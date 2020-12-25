import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {

  @Input() description: string;
  showMore: boolean;
  showMoreButton: boolean;

  @ViewChild('ellipsisRef') ellipsisRef: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  truncated(index: number) {
    this.showMoreButton = index === null;
  }

  showComplete(): void {
    if (this.ellipsisRef) {
      this.showMore = true;
      this.cd.detectChanges();
      this.ellipsisRef.applyEllipsis();
    }
  }
}
