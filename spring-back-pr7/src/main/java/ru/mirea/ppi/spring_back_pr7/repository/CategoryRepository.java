package ru.mirea.ppi.spring_back_pr7.repository;

import ru.mirea.ppi.spring_back_pr7.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
