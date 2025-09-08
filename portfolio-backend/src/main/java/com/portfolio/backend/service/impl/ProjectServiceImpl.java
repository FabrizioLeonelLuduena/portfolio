package com.portfolio.backend.service.impl;

import com.portfolio.backend.dto.ProjectCreateDTO;
import com.portfolio.backend.entity.Project;
import com.portfolio.backend.repository.ProjectRepository;
import com.portfolio.backend.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Implementación del servicio para gestionar los proyectos del portfolio.
 * Contiene la lógica de negocio para las operaciones CRUD.
 */
@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;

    /**
     * Obtiene todos los proyectos ordenados por fecha de creación (más recientes primero).
     * 
     * @return lista de todos los proyectos
     */
    @Override
    @Transactional(readOnly = true)
    public List<Project> getAllProjects() {
        log.debug("Obteniendo todos los proyectos ordenados por fecha de creación");
        return projectRepository.findAllByOrderByCreatedAtDesc();
    }

    /**
     * Obtiene un proyecto por su ID.
     * 
     * @param id el ID del proyecto
     * @return el proyecto encontrado
     * @throws RuntimeException si el proyecto no existe
     */
    @Override
    @Transactional(readOnly = true)
    public Project getProjectById(Long id) {
        log.debug("Buscando proyecto con ID: {}", id);
        return projectRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Proyecto no encontrado con ID: {}", id);
                    return new RuntimeException("Proyecto no encontrado con ID: " + id);
                });
    }

    /**
     * Crea un nuevo proyecto.
     * 
     * @param projectDTO los datos del proyecto a crear
     * @return el proyecto creado
     * @throws RuntimeException si ya existe un proyecto con el mismo título
     */
    @Override
    public Project createProject(ProjectCreateDTO projectDTO) {
        log.debug("Creando nuevo proyecto con título: {}", projectDTO.getTitle());
        
        // Verificar si ya existe un proyecto con el mismo título
        if (projectRepository.existsByTitle(projectDTO.getTitle())) {
            log.error("Ya existe un proyecto con el título: {}", projectDTO.getTitle());
            throw new RuntimeException("Ya existe un proyecto con el título: " + projectDTO.getTitle());
        }

        // Convertir DTO a entidad usando Builder pattern de Lombok
        Project project = Project.builder()
                .title(projectDTO.getTitle())
                .description(projectDTO.getDescription())
                .imageUrl(projectDTO.getImageUrl())
                .repoUrl(projectDTO.getRepoUrl())
                .demoUrl(projectDTO.getDemoUrl())
                .techStack(projectDTO.getTechStack())
                .build();

        Project savedProject = projectRepository.save(project);
        log.info("Proyecto creado exitosamente con ID: {}", savedProject.getId());
        return savedProject;
    }

    /**
     * Actualiza un proyecto existente.
     * 
     * @param id el ID del proyecto a actualizar
     * @param projectDTO los nuevos datos del proyecto
     * @return el proyecto actualizado
     * @throws RuntimeException si el proyecto no existe
     */
    @Override
    public Project updateProject(Long id, ProjectCreateDTO projectDTO) {
        log.debug("Actualizando proyecto con ID: {}", id);
        
        Project existingProject = getProjectById(id);

        // Verificar si el nuevo título ya existe en otro proyecto
        if (!existingProject.getTitle().equals(projectDTO.getTitle()) && 
            projectRepository.existsByTitle(projectDTO.getTitle())) {
            log.error("Ya existe otro proyecto con el título: {}", projectDTO.getTitle());
            throw new RuntimeException("Ya existe un proyecto con el título: " + projectDTO.getTitle());
        }

        // Actualizar los campos usando setters generados por Lombok
        existingProject.setTitle(projectDTO.getTitle());
        existingProject.setDescription(projectDTO.getDescription());
        existingProject.setImageUrl(projectDTO.getImageUrl());
        existingProject.setRepoUrl(projectDTO.getRepoUrl());
        existingProject.setDemoUrl(projectDTO.getDemoUrl());
        existingProject.setTechStack(projectDTO.getTechStack());

        Project updatedProject = projectRepository.save(existingProject);
        log.info("Proyecto actualizado exitosamente con ID: {}", updatedProject.getId());
        return updatedProject;
    }

    /**
     * Elimina un proyecto por su ID.
     * 
     * @param id el ID del proyecto a eliminar
     * @throws RuntimeException si el proyecto no existe
     */
    @Override
    public void deleteProject(Long id) {
        log.debug("Eliminando proyecto con ID: {}", id);
        
        if (!projectRepository.existsById(id)) {
            log.error("Proyecto no encontrado para eliminar con ID: {}", id);
            throw new RuntimeException("Proyecto no encontrado con ID: " + id);
        }
        
        projectRepository.deleteById(id);
        log.info("Proyecto eliminado exitosamente con ID: {}", id);
    }

    /**
     * Busca proyectos por título.
     * 
     * @param title el título a buscar
     * @return lista de proyectos que contienen el título
     */
    @Override
    @Transactional(readOnly = true)
    public List<Project> searchProjectsByTitle(String title) {
        log.debug("Buscando proyectos por título: {}", title);
        return projectRepository.findByTitleContainingIgnoreCase(title);
    }

    /**
     * Busca proyectos por tecnología.
     * 
     * @param technology la tecnología a buscar
     * @return lista de proyectos que usan esa tecnología
     */
    @Override
    @Transactional(readOnly = true)
    public List<Project> searchProjectsByTechnology(String technology) {
        log.debug("Buscando proyectos por tecnología: {}", technology);
        return projectRepository.findByTechnologyContaining(technology);
    }
}
