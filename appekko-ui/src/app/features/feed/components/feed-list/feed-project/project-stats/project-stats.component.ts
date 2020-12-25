import { Component, Input, OnInit } from '@angular/core';
import { EProjectCategory, getProjectCategory } from 'src/app/core/enums/projectCategory';
import { getRepositoryPlatform } from 'src/app/core/enums/repositoryPlatforms';
import { ETechnology, getTechnology } from 'src/app/core/enums/technologies';
import { IRepository } from 'src/app/core/models/project.model';

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnInit {

  @Input() category: EProjectCategory;
  @Input() technologies: ETechnology[];
  @Input() repository: IRepository;

  getProjectCategory = getProjectCategory;
  getRepositoryPlatform = getRepositoryPlatform;

  constructor() { }

  ngOnInit(): void {
  }

  getTechnologiesString(technologies: ETechnology[]): string {
    return technologies.map(t => getTechnology(t)).join(', ');
  }
}
