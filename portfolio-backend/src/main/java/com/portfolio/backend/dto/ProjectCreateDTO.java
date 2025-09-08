package com.portfolio.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * DTO para crear un nuevo proyecto.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectCreateDTO {

    @NotBlank(message = "El título es obligatorio")
    private String title;

    @NotBlank(message = "La descripción es obligatoria")
    private String description;

    private String imageUrl;
    private String repoUrl;
    private String demoUrl;
    private List<String> techStack;
}
