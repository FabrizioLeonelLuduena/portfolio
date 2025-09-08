package com.portfolio.backend.service;

import com.portfolio.backend.dto.ProjectCreateDTO;
import com.portfolio.backend.entity.Project;

import java.util.List;

/**
 * Interfaz del servicio para gestionar los proyectos del portfolio.
 * Define los métodos de negocio para las operaciones CRUD.
 */
public interface ProjectService {

    /**
     * Obtiene todos los proyectos ordenados por fecha de creación (más recientes primero).
     * 
     * @return lista de todos los proyectos
     */
    List<Project> getAllProjects();

    /**
     * Obtiene un proyecto por su ID.
     * 
     * @param id el ID del proyecto
     * @return el proyecto encontrado
     * @throws RuntimeException si el proyecto no existe
     */
    Project getProjectById(Long id);

    /**
     * Crea un nuevo proyecto.
     * 
     * @param projectDTO los datos del proyecto a crear
     * @return el proyecto creado
     * @throws RuntimeException si ya existe un proyecto con el mismo título
     */
    Project createProject(ProjectCreateDTO projectDTO);

    /**
     * Actualiza un proyecto existente.
     * 
     * @param id el ID del proyecto a actualizar
     * @param projectDTO los nuevos datos del proyecto
     * @return el proyecto actualizado
     * @throws RuntimeException si el proyecto no existe
     */
    Project updateProject(Long id, ProjectCreateDTO projectDTO);

    /**
     * Elimina un proyecto por su ID.
     * 
     * @param id el ID del proyecto a eliminar
     * @throws RuntimeException si el proyecto no existe
     */
    void deleteProject(Long id);

    /**
     * Busca proyectos por título.
     * 
     * @param title el título a buscar
     * @return lista de proyectos que contienen el título
     */
    List<Project> searchProjectsByTitle(String title);

    /**
     * Busca proyectos por tecnología.
     * 
     * @param technology la tecnología a buscar
     * @return lista de proyectos que usan esa tecnología
     */
    List<Project> searchProjectsByTechnology(String technology);
}
