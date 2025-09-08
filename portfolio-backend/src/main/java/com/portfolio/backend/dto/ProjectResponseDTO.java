package com.portfolio.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

/**
 * DTO para respuestas de proyectos con información completa.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponseDTO {

    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    private String repoUrl;
    private String demoUrl;
    private List<String> techStack;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
