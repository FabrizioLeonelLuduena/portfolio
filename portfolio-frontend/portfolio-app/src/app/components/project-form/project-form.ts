import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../services/project';
import { ProjectCreateDTO } from '../../interfaces/project';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css'
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  isEditMode = false;
  projectId: number | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      repoUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      demoUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      techStack: this.fb.array([])
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.projectId = +params['id'];
        this.loadProject();
      } else {
        this.addTechStack();
      }
    });
  }

  get techStackArray() {
    return this.projectForm.get('techStack') as FormArray;
  }

  addTechStack() {
    this.techStackArray.push(this.fb.control('', [Validators.required]));
  }

  removeTechStack(index: number) {
    this.techStackArray.removeAt(index);
  }

  loadProject() {
    if (this.projectId) {
      this.loading = true;
      this.projectService.getProjectById(this.projectId).subscribe({
        next: (project) => {
          this.projectForm.patchValue({
            title: project.title,
            description: project.description,
            imageUrl: project.imageUrl,
            repoUrl: project.repoUrl,
            demoUrl: project.demoUrl
          });

          // Clear existing tech stack controls
          while (this.techStackArray.length !== 0) {
            this.techStackArray.removeAt(0);
          }

          // Add tech stack controls
          project.techStack.forEach(tech => {
            this.techStackArray.push(this.fb.control(tech, [Validators.required]));
          });

          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading project:', error);
          this.loading = false;
        }
      });
    }
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.loading = true;
      const projectData: ProjectCreateDTO = this.projectForm.value;

      const operation = this.isEditMode && this.projectId
        ? this.projectService.updateProject(this.projectId, projectData)
        : this.projectService.createProject(projectData);

      operation.subscribe({
        next: () => {
          this.router.navigate(['/projects']);
        },
        error: (error) => {
          console.error('Error saving project:', error);
          this.loading = false;
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/projects']);
  }
}
