package com.portfolio.backend.controller;

import com.portfolio.backend.dto.ProjectCreateDTO;
import com.portfolio.backend.entity.Project;
import com.portfolio.backend.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador REST para gestionar los proyectos del portfolio.
 * Proporciona endpoints para operaciones CRUD.
 */
@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:4200") // Habilitar CORS para Angular
@RequiredArgsConstructor
@Slf4j
public class ProjectController {

    private final ProjectService projectService;

    /**
     * GET /api/projects - Obtiene todos los proyectos
     * 
     * @return lista de todos los proyectos
     */
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = projectService.getAllProjects();
        return ResponseEntity.ok(projects);
    }

    /**
     * GET /api/projects/{id} - Obtiene un proyecto específico por ID
     * 
     * @param id el ID del proyecto
     * @return el proyecto encontrado
     */
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        try {
            Project project = projectService.getProjectById(id);
            return ResponseEntity.ok(project);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * POST /api/projects - Crea un nuevo proyecto
     * 
     * @param projectDTO los datos del proyecto a crear
     * @return el proyecto creado
     */
    @PostMapping
    public ResponseEntity<Project> createProject(@Valid @RequestBody ProjectCreateDTO projectDTO) {
        try {
            Project createdProject = projectService.createProject(projectDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdProject);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    /**
     * PUT /api/projects/{id} - Actualiza un proyecto existente
     * 
     * @param id el ID del proyecto a actualizar
     * @param projectDTO los nuevos datos del proyecto
     * @return el proyecto actualizado
     */
    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, 
                                                @Valid @RequestBody ProjectCreateDTO projectDTO) {
        try {
            Project updatedProject = projectService.updateProject(id, projectDTO);
            return ResponseEntity.ok(updatedProject);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * DELETE /api/projects/{id} - Elimina un proyecto
     * 
     * @param id el ID del proyecto a eliminar
     * @return respuesta sin contenido
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        try {
            projectService.deleteProject(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * GET /api/projects/search?title={title} - Busca proyectos por título
     * 
     * @param title el título a buscar
     * @return lista de proyectos que contienen el título
     */
    @GetMapping("/search")
    public ResponseEntity<List<Project>> searchProjectsByTitle(@RequestParam String title) {
        List<Project> projects = projectService.searchProjectsByTitle(title);
        return ResponseEntity.ok(projects);
    }

    /**
     * GET /api/projects/technology?tech={tech} - Busca proyectos por tecnología
     * 
     * @param tech la tecnología a buscar
     * @return lista de proyectos que usan esa tecnología
     */
    @GetMapping("/technology")
    public ResponseEntity<List<Project>> searchProjectsByTechnology(@RequestParam String tech) {
        List<Project> projects = projectService.searchProjectsByTechnology(tech);
        return ResponseEntity.ok(projects);
    }
}
