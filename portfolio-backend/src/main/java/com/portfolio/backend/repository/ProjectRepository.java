package com.portfolio.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.portfolio.backend.entity.Project;

/**
 * Repositorio para la entidad Project.
 * Extiende JpaRepository para operaciones CRUD básicas.
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    /**
     * Busca proyectos por título (case insensitive).
     * 
     * @param title el título a buscar
     * @return lista de proyectos que contienen el título
     */
    List<Project> findByTitleContainingIgnoreCase(String title);

    /**
     * Busca proyectos que contengan una tecnología específica.
     * 
     * @param technology la tecnología a buscar
     * @return lista de proyectos que usan esa tecnología
     */
    @Query("SELECT p FROM Project p JOIN p.techStack ts WHERE LOWER(ts) LIKE LOWER(CONCAT('%', :technology, '%'))")
    List<Project> findByTechnologyContaining(@Param("technology") String technology);

    /**
     * Busca proyectos ordenados por fecha de creación (más recientes primero).
     * 
     * @return lista de proyectos ordenados por fecha de creación descendente
     */
    List<Project> findAllByOrderByCreatedAtDesc();

    /**
     * Verifica si existe un proyecto con el título dado.
     * 
     * @param title el título a verificar
     * @return true si existe, false en caso contrario
     */
    boolean existsByTitle(String title);
}
